import Fact from './fact.js';

export default class NasalBreathingFact extends Fact {
    constructor(input) {
        super(input);

        if (this.hasLightBreathing()) {
            this._result = 'Nasal Discharge';
        } else if (this.hasHeavyBreathing()) {
            this._result = 'Sinus Membranes Swelling';
        } else {
            throw new Error('NasalBreathingFact() Error: Invalid argument(s)');
        }
    }

    hasLightBreathing() {
        return this._input === 'light';
    }

    hasHeavyBreathing() {
        return this._input === 'heavy';
    }
}
