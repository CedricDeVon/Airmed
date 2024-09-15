<script setup>
import './assets/css/main.scss';

useSeoMeta({
  title: 'Airmed',
  ogTitle: 'Airmed',
  description: 'The Airmed site',
  ogDescription: 'The Airmed site',
  ogImage: './assets/icons/logo.svg'
})

</script>

<template>
  <main>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </main>
</template>
