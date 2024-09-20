import Fact from './fact.js';
import ColdFact from './coldFact.js';
import SoreThroatFact from './soreThroatFact.js';

const ALLOWED_TREATMENT = 'Allowed Treatment', NO_TREATMENT = 'No Treatment';

export default class TreatmentFact extends Fact {
    static get ALLOWED_TREATMENT() {
        return ALLOWED_TREATMENT;
    }

    static get NO_TREATMENT() {
        return NO_TREATMENT;
    }

    constructor(coldFact, soreThroatFact) {
        super({ coldFact, soreThroatFact });

        if (!(coldFact instanceof ColdFact) || !(soreThroatFact instanceof SoreThroatFact)) {
            throw new Error('TreatmentFact() Error: Invalid argument(s)');
        }

        this._result = this.isTreatable() ? ALLOWED_TREATMENT : NO_TREATMENT;
    }

    isTreatable() {
        return this._input.coldFact.hasCold() && this._input.soreThroatFact.hasSoreThroat();
    }

    isNotTreatable() {
        return !this.isTreatable();
    }
}
