import Fact from './fact.js';
import MedicationFact from './medicationFact.js';
import AntibioticAllergiesFact from './antibioticAllergiesFact.js';

const GIVE_TYLENOL = 'Give Tylenol', GIVE_ANTIBIOTICS = 'Give Antibiotics';

export default class AntibioticsMedicationFact extends Fact {
    static get GIVE_TYLENOL() {
        return GIVE_TYLENOL;
    }

    static get GIVE_ANTIBIOTICS() {
        return GIVE_ANTIBIOTICS;
    }

    constructor(medicationFact, antibioticAllergiesFact) {
        super({ medicationFact, antibioticAllergiesFact })

        if (
            !(medicationFact instanceof MedicationFact) ||
            !(antibioticAllergiesFact instanceof AntibioticAllergiesFact)
        ) {
            throw new Error('AntibioticsMedicationFact() Error: Invalid argument(s)')
        }

        this._result = this.isAllergicToAntibiotics() ? GIVE_TYLENOL : GIVE_ANTIBIOTICS;
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
