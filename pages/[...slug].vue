<script setup>
</script>

<template>
    <div class="mx-auto max-w-7xl h-screen px-4 sm:px-6 lg:px-8">
        <div class="w-full flex justify-center">
            <div class="max-w-md md:max-w-lg px-4 pt-10 md:pt-20 text-center">
                <div class="pb-6 md:pb-8 text-5xl md:text-6xl">
                    <h1 class="font-extrabold mb-1 text-wildcard-a">
                        404
                    </h1>
                    <h2>
                        Not Found
                    </h2>
                </div>
                <div class="pb-6 md:pb-8 text-sm md:text-xl max-w-50">
                    <p>The requested resource does not exist.</p>
                </div>
                <div class="flex flex-column justify-center">
                    <RouterLink to="/" class="px-10 py-2 bg-wildcard-a text-light-a rounded-lg hover:bg-dark-b">
                        Return Home
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>