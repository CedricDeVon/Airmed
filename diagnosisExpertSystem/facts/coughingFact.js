import Fact from './fact.js';

const COUGHED = 'Coughed', NOT_COUGHED = 'Not Coughed';

export default class CoughingFact extends Fact {
    static get COUGHED() {
        return COUGHED;
    }

    static get NOT_COUGHED() {
        return NOT_COUGHED;
    }

    constructor(input) {
        super(input);

        if (typeof(input) !== 'boolean') {
            throw new Error('CoughingFact() Error: Invalid argument(s)');
        }

        this._result = this.isCoughing() ? COUGHED : NOT_COUGHED;
    }

    isCoughing() {
        return this._input;
    }

    isNotCoughing() {
        return !this.isCoughing();
    }
}
