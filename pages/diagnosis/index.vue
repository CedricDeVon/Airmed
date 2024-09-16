<script setup>

const handleSubmit = () => {
    console.log("K");
}

</script>

<template>
    <div class="mx-auto max-w-full h-screen px-4 sm:px-6 lg:px-8 mb-sm flex justify-center align-top">
            <div class="container max-w-md md:max-w-lg px-4 pt-10 md:pt-20 text-center md:text-left">
                <div class="mb-10 text-5xl md:text-6xl">
                    <h1 class="mb-6 font-extrabold">
                        Diagnosis
                    </h1>
                    <p class="text-sm">
                        To ensure maximum accuracy, please answer each question as honestly as you possibly can.
                    </p>
                </div>
                <form @submit.prevent="handleSubmit">
                    <div class="mb-6 md:mb-8">
                        <label for="temperature-in-celsius" class="block font-bold mb-2"
                        >What is the patient's recently recorded body temperature? (In Celsius)</label
                        >
                        <input
                        type="number"
                        min="-273.15"
                        max="200"
                        step="0.01"
                        id="temperature-in-celsius"
                        name="temperature-in-celsius"
                        class="border rounded w-60 py-2 px-3"
                        placeholder="00.00"
                        />
                    </div>
                    <div class="mb-6 md:mb-8">
                        <label for="nasal-breathing" class="block font-bold mb-2"
                        >Is nasal breathing observed from the patient?</label
                        >
                        <select
                        id="nasal-breathing"
                        name="nasal-breathing"
                        class="border rounded py-2 w-60"
                        required
                        >
                        <option value="low">Low</option>
                        <option value="high">High</option>
                        </select>
                    </div>
                    <div class="mb-6 md:mb-8">
                        <label for="headache" class="block font-bold mb-2"
                        >Are headaches claimed by the patient?</label
                        >
                        <select
                        id="headache"
                        name="headache"
                        class="border rounded w-60 py-2"
                        required
                        >
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                        </select>
                    </div>
                    <div class="mb-6 md:mb-8">
                        <label for="cough" class="block font-bold mb-2"
                        >Are coughs observed from the patient?</label
                        >
                        <select
                        id="cough"
                        name="cough"
                        class="border rounded w-60 py-2"
                        required
                        >
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                        </select>
                    </div>
                    <div class="mb-6 md:mb-8">
                        <label for="sore-throat" class="block font-bold mb-2"
                        >Are sore throats observed from the patient?</label
                        >
                        <select
                        id="sore-throat"
                        name="sore-throat"
                        class="border rounded py-2 w-60"
                        required
                        >
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                        </select>
                    </div>
                    <div class="mb-10 md:mb-lg">
                        <label for="antibiotic-allergy" class="block font-bold mb-2"
                        >If applicable for medication, did the patient claim to be allergic to antibiotics?</label
                        >
                        <select
                        id="antibiotic-allergy"
                        name="antibiotic-allergy"
                        class="border rounded py-2 w-60"
                        required
                        >
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                        </select>
                    </div>
                    <div class="pb-6 md:mb-8">
                        <RouterLink to="/results" class="px-10 py-2 bg-wildcard-a text-light-a rounded-lg hover:bg-dark-b">
                            Evaluate
                        </RouterLink>
                    </div>
                    </form>
                </div>
    </div>
</template>