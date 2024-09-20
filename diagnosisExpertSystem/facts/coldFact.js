import Fact from './fact.js';
import TemperatureInCelsiusFact from './temperatureInCelsiusFact.js';
import HeadacheFact from './headacheFact.js';
import NasalBreathingFact from './nasalBreathingFact.js';
import CoughingFact from './coughingFact.js';

const COLD = 'Cold', NO_COLD = 'No Cold';

export default class ColdFact extends Fact {
    static get COLD() {
        return COLD;
    }

    static get NO_COLD() {
        return NO_COLD;
    }

    constructor(temperatureInCelsiusFact, headacheFact, nasalBreathingFact, coughingFact) {
        super({ temperatureInCelsiusFact, headacheFact, nasalBreathingFact, coughingFact });

        if (
            !(temperatureInCelsiusFact instanceof TemperatureInCelsiusFact) ||
            !(headacheFact instanceof HeadacheFact) ||
            !(nasalBreathingFact instanceof NasalBreathingFact) ||
            !(coughingFact instanceof CoughingFact)
        ) {
            throw new Error('ColdFact() Error: Invalid argument(s)');
        }

        this._result = this.hasCold() ? COLD : NO_COLD;
    }

    hasCold() {
        return (
            this._input.temperatureInCelsiusFact.hasLowFever() &&
            this._input.headacheFact.hasHeadache() &&
            this._input.nasalBreathingFact.hasLightBreathing() &&
            this._input.coughingFact.isCoughing()
        );
    }

    hasNoCold() {
        return !this.hasCold();
    }
}
