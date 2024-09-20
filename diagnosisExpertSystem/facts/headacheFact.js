import Fact from './fact.js';

const HEADACHE = 'Headache', NO_HEADACHE = 'No Headache';

export default class HeadacheFact extends Fact {
    static get HEADACHE() {
        return HEADACHE;
    }

    static get NO_HEADACHE() {
        return NO_HEADACHE;
    }

    constructor(input) {
        super(input);

        if (typeof(input) !== 'boolean') {
            throw new Error('HeadacheFact() Error: Invalid argument(s)');
        }

        this._result = this.hasHeadache() ? HEADACHE : NO_HEADACHE;
    }

    hasHeadache() {
        return this._input;
    }

    hasNoHeadache() {
        return !this.hasHeadache();
    }
}