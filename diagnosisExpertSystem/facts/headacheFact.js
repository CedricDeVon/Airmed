import Validator from '../../utilities/validator.js';

import Fact from './fact.js';

export default class HeadacheFact extends Fact {
    constructor(input) {
        super(input);

        if (Validator.isTypeInvalid(input, 'boolean')) {
            throw new Error('HeadacheFact() Error: Invalid argument(s)');
        }

        this._result = this.hasHeadache() ? 'Headache' : 'No Headache';
    }

    hasHeadache() {
        return this._input;
    }

    hasNoHeadache() {
        return !this.hasHeadache();
    }
}