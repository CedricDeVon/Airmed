<script setup>
import DiagnosisExpertSystem from '~/diagnosisExpertSystem/diagnosisExpertSystem';

onMounted(() => {
    if (DiagnosisExpertSystem.isEvaluationNotReady()) {
        useRouter().push('/');
    }
});
</script>

<template>
    <div class="flex justify-center w-full h-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-md md:max-w-lg px-4 pt-10 md:pt-20 text-center">
            <h1 class="pb-8 md:pb-10 text-4xl md:text-5xl font-extrabold">Results</h1>
            <p class="pb-2 md:pb-4 text-sm md:text-xl font-bold">Facts</p>
            <div class="pb-4 md:pb-6 text-xs md:text-sm">
                <p class="pb-2 md:pb-4" v-for="fact in DiagnosisExpertSystem.diagnosisEvaluation.facts" :key="fact" :fact="fact">{{ fact }}</p>
            </div>
            <div class="pb-8 md:pb-10 text-sm md:text-xl">
                <p class="pb-2 md:pb-4 font-bold">Conclusion</p>
                <p class="text-xs md:text-sm">{{ DiagnosisExpertSystem.diagnosisEvaluation.conclusion }}</p>
            </div>
            <NuxtLink to="/" class="px-10 py-2 bg-wildcard-a text-light-a rounded-lg hover:bg-dark-b">
                Return Home
            </NuxtLink>
        </div>
    </div>
</template>