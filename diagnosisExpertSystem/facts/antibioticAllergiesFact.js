import Validator from '../../utilities/validator.js';

import Fact from './fact.js';

export default class AntibioticAllergiesFact extends Fact {
    constructor(input) {
        super(input);

        if (Validator.isTypeInvalid(input, 'boolean')) {
            throw new Error('AntibioticAllergiesFact() Error: Invalid argument(s)');
        }

        this._result = this.hasAntibioticAllergies()
            ? 'Allergic To Antibiotics'
            : 'Not Allergic To Antibiotics';
    }

    hasAntibioticAllergies() {
        return this._input;
    }

    hasNoAntibioticAllergies() {
        return !this.hasAntibioticAllergies();
    }
}
