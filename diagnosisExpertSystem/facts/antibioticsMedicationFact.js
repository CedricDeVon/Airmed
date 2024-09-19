import Fact from './fact.js';
import MedicationFact from './medicationFact.js';
import AntibioticAllergiesFact from './antibioticAllergiesFact.js';

export default class AntibioticsMedicationFact extends Fact {
    constructor(medicationFact, antibioticAllergiesFact) {
        super({ medicationFact, antibioticAllergiesFact })

        if (
            !(medicationFact instanceof MedicationFact) ||
            !(antibioticAllergiesFact instanceof AntibioticAllergiesFact)
        ) {
            throw new Error('AntibioticsMedicationFact() Error: Invalid argument(s)')
        }

        this._result = this.isAllergicToAntibiotics() ? 'Give Tylenol' : 'Give Antibiotics';
    }

    isAllergicToAntibiotics() {
        return (
            this._input.medicationFact.isApplicableForMedicine() &&
            this._input.antibioticAllergiesFact.hasAntibioticAllergies()
        );
    }

    isNotAllergicToAntibiotics() {
        return !this.isAllergicToAntibiotics();
    }
}
