import Fact from './fact.js';
import TreatmentFact from './treatmentFact.js';

export default class MedicationFact extends Fact {
    constructor(treatmentFact) {
        super({ treatmentFact });

        if (!(treatmentFact instanceof TreatmentFact)) {
            throw new Error('MedicationFact() Error: Invalid argument(s)');
        }

        this._result = this.isApplicableForMedicine() ? 'Allowed Medication' : 'No Medication';
    }

    isApplicableForMedicine() {
        return this._input.treatmentFact.isTreatable();
    }

    isNotApplicableForMedicine() {
        return !this.isApplicableForMedicine();
    }
}
