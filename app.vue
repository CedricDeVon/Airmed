<script setup type="ts">
import './assets/css/main.scss';

useSeoMeta({
  title: 'Airmed',
  ogTitle: 'Airmed',
  description: 'The Airmed site',
  ogDescription: 'The Airmed site',
})
</script>

<template>
  <main>
    <NavBar/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <Footer/>
  </main>
</template>
