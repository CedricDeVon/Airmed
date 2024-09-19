import Validator from '../../utilities/validator.js';

import Fact from './fact.js';

export default class CoughingFact extends Fact {
    constructor(input) {
        super(input);

        if (Validator.isTypeInvalid(input, 'boolean')) {
            throw new Error('CoughingFact() Error: Invalid argument(s)');
        }

        this._result = this.isCoughing() ? 'Been Couging' : 'Not Coughed';
    }

    isCoughing() {
        return this._input;
    }

    isNotCoughing() {
        return !this.isCoughing();
    }
}
