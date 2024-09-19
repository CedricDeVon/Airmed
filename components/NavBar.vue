<script setup type="ts">
import { useRoute } from 'vue-router';

const isActiveLink = (routePath) => {
  return useRoute().path === routePath;
};
</script>

<template>
    <nav class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <div
          class="flex flex-1 justify-center items-center md:items-stretch md:justify-start"
        >
          <NuxtLink class="flex items-center flex-shrink-0 mr-4" to="/">
            <span class="hidden md:block text-black text-2xl font-bold ml-2 text-wildcard-a">
              Air
            </span>
            <span class="hidden md:block text-black text-2xl font-bold">
              med
            </span>
          </NuxtLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2 font-size-5">
              <NuxtLink
                to="/"
                :class="[
                  isActiveLink('/')
                    ? 'text-wildcard-a font-extrabold'
                    : 'text-dark-b',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Home</NuxtLink
              >
              <NuxtLink
                to="/about"
                :class="[
                  isActiveLink('/about')
                    ? 'text-wildcard-a font-extrabold'
                    : 'text-dark-b',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >About</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>
