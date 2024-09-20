import Fact from './fact.js';

const LIGHT_NASAL_BREATHING = 'light',
    HEAVY_NASAL_BREATHING = 'heavy',
    NASAL_DISCHARGE = 'Nasal Discharge',
    SINUS_MEMBRANE_SWELLING = 'Sinus Membrane Swelling';
export default class NasalBreathingFact extends Fact {
    static get LIGHT_NASAL_BREATHING() {
        return LIGHT_NASAL_BREATHING;
    }

    static get HEAVY_NASAL_BREATHING() {
        return HEAVY_NASAL_BREATHING;
    }

    static get NASAL_DISCHARGE() {
        return NASAL_DISCHARGE;
    }

    static get SINUS_MEMBRANE_SWELLING() {
        return SINUS_MEMBRANE_SWELLING;
    }

    constructor(input) {
        super(input);

        if (this.hasLightBreathing()) {
            this._result = NASAL_DISCHARGE;
        } else if (this.hasHeavyBreathing()) {
            this._result = SINUS_MEMBRANE_SWELLING;
        } else {
            throw new Error('NasalBreathingFact() Error: Invalid argument(s)');
        }
    }

    hasLightBreathing() {
        return this._input === LIGHT_NASAL_BREATHING;
    }

    hasHeavyBreathing() {
        return this._input === HEAVY_NASAL_BREATHING;
    }
}
