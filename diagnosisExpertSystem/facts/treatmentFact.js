import Fact from './fact.js';

import ColdFact from './coldFact.js';
import SoreThroatFact from './soreThroatFact.js';

export default class TreatmentFact extends Fact {
    constructor(coldFact, soreThroatFact) {
        super({ coldFact, soreThroatFact });

        if (!(coldFact instanceof ColdFact) || !(soreThroatFact instanceof SoreThroatFact)) {
            throw new Error('TreatmentFact() Error: Invalid argument(s)');
        }

        this._result = this.isTreatable() ? 'Allowed Treatment' : 'No Treatment';
    }

    isTreatable() {
        return this._input.coldFact.hasCold() && this._input.soreThroatFact.hasSoreThroat();
    }

    isNotTreatable() {
        return !this.isTreatable();
    }
}
