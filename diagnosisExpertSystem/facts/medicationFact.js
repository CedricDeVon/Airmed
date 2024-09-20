import Fact from './fact.js';
import TreatmentFact from './treatmentFact.js';

const ALLOWED_MEDICATION = 'Allowed Medication', NO_MEDICATION = 'No Medication';

export default class MedicationFact extends Fact {
    static get ALLOWED_MEDICATION() {
        return ALLOWED_MEDICATION;
    }

    static get NO_MEDICATION() {
        return NO_MEDICATION;
    }

    constructor(treatmentFact) {
        super({ treatmentFact });

        if (!(treatmentFact instanceof TreatmentFact)) {
            throw new Error('MedicationFact() Error: Invalid argument(s)');
        }

        this._result = this.isApplicableForMedicine() ? ALLOWED_MEDICATION : NO_MEDICATION;
    }

    isApplicableForMedicine() {
        return this._input.treatmentFact.isTreatable();
    }

    isNotApplicableForMedicine() {
        return !this.isApplicableForMedicine();
    }
}
