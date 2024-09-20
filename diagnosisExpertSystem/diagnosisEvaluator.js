import TemperatureInCelsiusFact from './facts/temperatureInCelsiusFact.js';
import NasalBreathingFact from './facts/nasalBreathingFact.js';
import HeadacheFact from './facts/headacheFact.js';
import CoughingFact from './facts/coughingFact.js';
import SoreThroatFact from './facts/soreThroatFact.js';
import AntibioticAllergiesFact from './facts/antibioticAllergiesFact.js';
import ColdFact from './facts/coldFact.js';
import TreatmentFact from './facts/treatmentFact.js';
import MedicationFact from './facts/medicationFact.js';
import AntibioticsMedicationFact from './facts/antibioticsMedicationFact.js';

export default class DiagnosisEvaluation {
    #conclusion
    #facts

    get conclusion() {
        return this.#conclusion.toString();
    }

    get facts() {
        return this.#facts.map((fact) => {
            return fact.result;
        })
    }
    
    constructor(
        temperatureInCelsius,
        nasalBreathing,
        hasHeadache,
        isCoughing,
        hasSoreThroat,
        hasAntibioticAllergies
    ) {
        if (
            typeof(temperatureInCelsius) !== 'number' ||
            typeof(nasalBreathing) !== 'string' ||
            typeof(hasHeadache) !== 'boolean' ||
            typeof(isCoughing) !== 'boolean' ||
            typeof(hasSoreThroat) !== 'boolean' ||
            typeof(hasAntibioticAllergies) !== 'boolean'
        ) {
            throw new Error('DiagnosisEvaluation() Error: Invalid argument(s)')
        }

        this.#conclusion = '';
        this.#facts = [];
        const temperatureInCelsiusFact = new TemperatureInCelsiusFact(temperatureInCelsius);
        this.#facts.push(temperatureInCelsiusFact);
        if (temperatureInCelsiusFact.hasNoFever()) {
            this.#conclusion = 'No Medication Required';
            return;
        } else if (temperatureInCelsiusFact.hasHighFever()) {
            this.#conclusion = 'Seek Futher Medical Assistance';
            return;
        }

        const nasalBreathingFact = new NasalBreathingFact(nasalBreathing);
        this.#facts.push(nasalBreathingFact);
        if (nasalBreathingFact.hasHeavyBreathing()) {
            this.#conclusion = 'Seek Futher Medical Assistance';
            return;
        }

        const headacheFact = new HeadacheFact(hasHeadache),
            coughingFact = new CoughingFact(isCoughing),
            coldFact = new ColdFact(
                temperatureInCelsiusFact,
                headacheFact,
                nasalBreathingFact,
                coughingFact
        );
        this.#facts.push(headacheFact, coughingFact, coldFact);
        if (coldFact.hasNoCold()) {
            this.#conclusion = 'No Medication Required';
            return;
        }

        const soreThroatFact = new SoreThroatFact(hasSoreThroat),
            treatmentFact = new TreatmentFact(coldFact, soreThroatFact),
            medicationFact = new MedicationFact(treatmentFact);
        this.#facts.push(soreThroatFact, treatmentFact, medicationFact);
        if (treatmentFact.isNotTreatable() && medicationFact.isNotApplicableForMedicine()) {
            this.#conclusion = 'No Medication Required';
            return;
        }

        const antibioticAllergiesFact = new AntibioticAllergiesFact(hasAntibioticAllergies),
            antibioticsMedicationFact = new AntibioticsMedicationFact(medicationFact, antibioticAllergiesFact);
        this.#facts.push(antibioticAllergiesFact);
        this.#conclusion = antibioticsMedicationFact.result;
    }
}
