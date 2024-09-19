import Fact from './fact.js';

export default class TemperatureInCelsiusFact extends Fact {
    constructor(input) {
        super(input);

        if (this.hasNoFever()) {
            this._result = 'No Fever';
        } else if (this.hasLowFever()) {
            this._result = 'Low Fever';
        } else if (this.hasHighFever()) {
            this._result = 'High Fever';
        } else {
            throw new Error('TemperatureInCelsiusFact() Error: Invalid argument(s)');
        }
    }

    hasNoFever() {
        return this._input <= 37;
    }

    hasLowFever() {
        return this._input > 37 && this._input < 38;
    }

    hasHighFever() {
        return this._input >= 38;
    }
}
