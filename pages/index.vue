<script setup type="ts">
</script>

<template>
    <div class="flex justify-center w-full h-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-md md:max-w-lg px-4 pt-10 md:pt-20 text-center">
            <div class="pb-8 md:pb-10 text-4xl md:text-5xl">
                <h1 class="font-extrabold">
                    <span class="text-wildcard-a">Air</span>
                    <span>med</span>
                </h1>
                <h2>AI Healthcare</h2>
            </div>
            <div class="pb-8 md:pb-10">
                <p class="pb-2 md:pb-4 text-sm md:text-xl">An expert system designed for cold diagnosis</p>
                <p class="text-xs md:text-sm text-dark-a italic">DISCLAIMER: This application is NOT certified by any health organization. If you are sick, please do seek professional assistance.</p>
            </div>
            <NuxtLink to="/diagnosis" class="rounded-lg px-10 py-2 bg-wildcard-a hover:bg-dark-b text-light-a">
                Start Diagnosis
            </NuxtLink>
        </div>
    </div>
</template>