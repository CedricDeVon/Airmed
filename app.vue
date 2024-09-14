<script setup>
import './assets/css/style.scss';

import path from 'path';
import config from 'config';
import { fileURLToPath } from 'url';

import argon2 from 'argon2';
import jsonwebtoken from 'jsonwebtoken';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'silly',
  format: format.combine(
    format.json(),
  ),
  defaultMeta: { timestamp: new Date() },
  transports: [
    new transports.File({ filename: './logs/combined.log' }),
  ],
});
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.printf(({level, message, timestamp}) => {
        return `[${level}] ${message} [${timestamp}]`;
      }),
    ) 
  }));
}

const hash = await argon2.hash("password", {
  type: argon2.argon2id
});
const result = await argon2.verify(hash, "password");
logger.info(`${hash} - ${result}`);

const firebaseApplication = initializeApp({
  apiKey: "AIzaSyBIOcmNdDRYko_WUq4uBhum7nKDR40RwU0",
  authDomain: "project-a-7c291.firebaseapp.com",
  projectId: "project-a-7c291",
  storageBucket: "project-a-7c291.appspot.com",
  messagingSenderId: "145429123968",
  appId: "1:145429123968:web:047e06c24c5cc43fe4a765",
  measurementId: "G-REVXPEG30Z",
  databaseURL: 'https://Project-A.firebaseio.com'
});
const firebaseDatabase = getFirestore(firebaseApplication);
logger.info('Fireship database connected');
const dataSnapshot = await getDocs(collection(firebaseDatabase, 'demo'));
const data = ref({});
dataSnapshot.forEach((doc) => {
  data.value[doc.data().a] = (doc.data());
});
logger.info(data);

</script>

<template>
  <div>
    <h1 class="text-red-500">{{ data }}</h1>    
  </div>
</template>
