<script setup>

</script>

<template>
    <div class="mx-auto max-w-7xl h-screen px-4 sm:px-6 lg:px-8">
        <div class="w-full flex justify-center">
            <div class="max-w-md md:max-w-lg px-4 pt-10 md:pt-20 text-center">
                <div class="text-5xl md:text-6xl">
                    <h1 class="font-extrabold">
                        <span class="text-wildcard-a">Air</span>
                        <span>med</span>
                    </h1>
                    <h1>AI Healthcare</h1>
                </div>
                <div class="pt-6 md:pt-8 text-sm md:text-xl">
                    <p>An expert system designed for cold diagnosis</p>
                    <p class="pt-4 md:pt-6 text-dark-a text-sm italic">DISCLAIMER: This application is NOT certified by any health organization. If you are sick, please do seek professional assistance.</p>
                </div>
                <div class="pt-6 md:pt-8">
                    <RouterLink to="/diagnosis" class="px-10 py-2 bg-wildcard-a text-light-a rounded-lg hover:bg-dark-b">
                        Start Diagnosis
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
    <!-- <i class="pi pi-check text-wildcard-a"></i>
    <i class="pi pi-times text-wildcard-b"></i> -->
</template>