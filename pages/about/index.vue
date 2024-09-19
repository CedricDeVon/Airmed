<script setup type="ts">
</script>

<template>
    <div class="flex justify-center w-full h-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-md md:max-w-lg px-4 py-10 md:py-20 text-center">
            <div class="pb-8 md:pb-10 text-4xl md:text-5xl font-extrabold">
                <h1><span class="text-wildcard-a">About</span> the</h1>
                <h1>Project</h1>
            </div>
            <div class="pb-4 md:pb-6">
                <p class="font-extrabold">Developer</p>
                <a class="text-dark-a hover:text-wildcard-a" href="https://github.com/CedricDeVon">Vaughn Cedric L. Araneta</a>
            </div>
            <div class="pb-4 md:pb-6">
                <p class="font-extrabold">University, Course and Year</p>
                <div class="text-dark-a">
                    <p>Visayas State Unversity</p>
                    <p>BSCS-3</p>
                </div>
            </div>
            <div class="pb-4 md:pb-6">
                <p class="font-extrabold">Subject Requirement</p>
                <p class="text-dark-a">CSci 141</p>
            </div>
            <div class="pb-8 md:pb-10">
                <p class="font-extrabold">Instructor</p>
                <p class="text-dark-a">Prof. Jonah Flor O. Maaghop</p>
            </div>
            <NuxtLink to="/" class="px-10 py-2 bg-wildcard-a text-light-a rounded-lg hover:bg-dark-b">
                Return Home
            </NuxtLink>
        </div>
    </div>
</template>