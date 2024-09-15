<script setup>
import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="bg-white">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <span class="hidden md:block text-black text-2xl font-bold ml-2 text-wildcard-a">
              Air
            </span>
            <span class="hidden md:block text-black text-2xl font-bold">
              med
            </span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2 font-size-5">
              <RouterLink
                to="/"
                :class="[
                  isActiveLink('/')
                    ? 'text-wildcard-a font-extrabold'
                    : 'text-dark-c',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="/about"
                :class="[
                  isActiveLink('/about')
                    ? 'text-wildcard-a font-extrabold'
                    : 'text-dark-c',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >About</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
