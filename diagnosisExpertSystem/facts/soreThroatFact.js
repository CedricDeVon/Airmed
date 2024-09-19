import Validator from '../../utilities/validator.js';

import Fact from './fact.js';

export default class SoreThroatFact extends Fact {
    constructor(input) {
        super(input);

        if (Validator.isTypeInvalid(input, 'boolean')) {
            throw new Error('SoreThroatFact() Error: Invalid argument(s)');
        }

        this._result = this.hasSoreThroat() ? 'Sore Throat' : 'No Sore Throat';
    }

    hasSoreThroat() {
        return this._input;
    }

    hasNoSoreThroat() {
        return !this.hasSoreThroat();
    }
}
