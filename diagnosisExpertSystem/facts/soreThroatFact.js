import Fact from './fact.js';

const SORE_THROAT = 'Sore Throat', NO_SORE_THROAT = 'No Sore Throat';

export default class SoreThroatFact extends Fact {
    static get SORE_THROAT() {
        return SORE_THROAT;
    }

    static get NO_SORE_THROAT() {
        return NO_SORE_THROAT;
    }

    constructor(input) {
        super(input);

        if (typeof(input) !== 'boolean') {
            throw new Error('SoreThroatFact() Error: Invalid argument(s)');
        }

        this._result = this.hasSoreThroat() ? SORE_THROAT : NO_SORE_THROAT;
    }

    hasSoreThroat() {
        return this._input;
    }

    hasNoSoreThroat() {
        return !this.hasSoreThroat();
    }
}
