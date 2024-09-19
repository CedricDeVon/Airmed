<script setup type="ts">

import DiagnosisEvaluator from '~/diagnosisExpertSystem/diagnosisEvaluator';
import DiagnosisExpertSystem from '~/diagnosisExpertSystem/diagnosisExpertSystem';

const state = reactive({
    temperatureInCelsius: 37,
    nasalBreathing: 'light',
    hasHeadache: false,
    isCoughing: false,
    hasSoreThroat: false,
    hasAntibioticAllergy: false,
});

const handleSubmit = async () => {
    DiagnosisExpertSystem.diagnosisEvaluation = new DiagnosisEvaluator(
        state.temperatureInCelsius,
        state.nasalBreathing,
        state.hasHeadache === 'true',
        state.isCoughing === 'true',
        state.hasSoreThroat === 'true',
        state.hasAntibioticAllergy === 'true'
    );

    useRouter().push('/results');
}

</script>

<template>
    <div class="flex justify-center align-top max-w-full h-screen mx-auto mb-sm px-4 sm:px-6 lg:px-8">
        <div class="container max-w-md md:max-w-lg px-4 pt-10 md:pt-20 text-center md:text-left">
            <div class="pb-8 md:pb-10 text-4xl md:text-5xl">
                <h1 class="pb-4 md:pb-6 font-extrabold">
                    Diagnosis
                </h1>
                <p class="text-xs md:text-sm">
                    To ensure maximum accuracy, please answer each question as honestly as you possibly can.
                </p>
            </div>
            <form @submit.prevent="handleSubmit">
                <div class="pb-4 md:pb-6 text-xs md:text-sm">
                    <label for="temperature-in-celsius" class="pb-2 font-bold block"
                    >What is the patient's recently recorded body temperature? (In Celsius)</label
                    >
                    <input
                    id="temperature-in-celsius"
                    class="w-60 border rounded py-2 px-3"
                    v-model="state.temperatureInCelsius"
                    name="temperature-in-celsius"
                    type="number"
                    min="-273.15"
                    max="200"
                    step="0.01"
                    placeholder="00.00"
                    required
                    />
                </div>
                <div class="pb-4 md:pb-6 text-xs md:text-sm">
                    <label for="nasal-breathing" class="pb-2 font-bold block"
                    >Is nasal breathing observed from the patient?</label
                    >
                    <select
                    id="nasal-breathing"
                    class="w-60 border rounded py-2 px-3"
                    v-model="state.nasalBreathing"
                    name="nasal-breathing"
                    value="light"
                    required
                    >
                    <option value="light">Light</option>
                    <option value="heavy">Heavy</option>
                    </select>
                </div>
                <div class="pb-4 md:pb-6 text-xs md:text-sm">
                    <label for="headache" class="pb-2 font-bold block"
                    >Are headaches claimed by the patient?</label
                    >
                    <select
                    id="headache"
                    class="w-60 border rounded py-2 px-3"
                    v-model="state.hasHeadache"
                    name="headache"
                    required
                    >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                    </select>
                </div>
                <div class="pb-4 md:pb-6 text-xs md:text-sm">
                    <label for="cough" class="pb-2 font-bold block"
                    >Are coughs observed from the patient?</label
                    >
                    <select
                    id="cough"
                    class="w-60 border rounded py-2 px-3"
                    v-model="state.isCoughing"
                    name="cough"
                    required
                    >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                    </select>
                </div>
                <div class="pb-4 md:pb-6 text-xs md:text-sm">
                    <label for="sore-throat" class="pb-2 font-bold block"
                    >Are sore throats observed from the patient?</label
                    >
                    <select
                    id="sore-throat"
                    class="w-60 border rounded py-2 px-3"
                    v-model="state.hasSoreThroat"
                    name="sore-throat"
                    required
                    >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                    </select>
                </div>
                <div class="pb-10 md:pb-lg text-xs md:text-sm">
                    <label for="antibiotic-allergy" class="pb-2 font-bold block"
                    >If applicable for medication, did the patient claim to be allergic to antibiotics?</label
                    >
                    <select
                    id="antibiotic-allergy"
                    class="w-60 border rounded py-2 px-3"
                    v-model="state.hasAntibioticAllergy"
                    name="antibiotic-allergy"
                    required
                    >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                    </select>
                </div>
                <button class="px-10 py-2 bg-wildcard-a text-light-a rounded-lg hover:bg-dark-b" type="submit">
                    Evaluate
                </button>
            </form>
        </div>
    </div>
</template>