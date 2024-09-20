import Fact from './fact.js';

const MINIMUM_FEVER_LIMIT = 37,
    MAXIMUM_FEVER_LIMIT = 38,
    NO_FEVER = 'No Fever',
    LOW_FEVER = 'Low Fever',
    HIGH_FEVER = 'High Fever';

export default class TemperatureInCelsiusFact extends Fact {
    static get NO_FEVER() {
        return NO_FEVER;
    }
    
    static get LOW_FEVER() {
        return LOW_FEVER;
    }
    
    static get HIGH_FEVER() {
        return HIGH_FEVER;
    }

    constructor(input) {
        super(input);

        if (this.hasNoFever()) {
            this._result = NO_FEVER;
        } else if (this.hasLowFever()) {
            this._result = LOW_FEVER;
        } else if (this.hasHighFever()) {
            this._result = HIGH_FEVER;
        } else {
            throw new Error('TemperatureInCelsiusFact() Error: Invalid argument(s)');
        }
    }

    hasNoFever() {
        return this._input <= MINIMUM_FEVER_LIMIT;
    }

    hasLowFever() {
        return this._input > MINIMUM_FEVER_LIMIT && this._input < MAXIMUM_FEVER_LIMIT;
    }

    hasHighFever() {
        return this._input >= MAXIMUM_FEVER_LIMIT;
    }
}
