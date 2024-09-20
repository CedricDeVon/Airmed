import Fact from './fact.js';

const ALLERGIC_TO_ANTIBIOTICS = 'Allergic To Antibiotics',
    NOT_ALLERGIC_TO_ANTIBIOTICS = 'Not Allergic To Antibiotics';

export default class AntibioticAllergiesFact extends Fact {
    static get ALLERGIC_TO_ANTIBIOTICS() {
        return ALLERGIC_TO_ANTIBIOTICS;
    }

    static get NOT_ALLERGIC_TO_ANTIBIOTICS() {
        return NOT_ALLERGIC_TO_ANTIBIOTICS;
    }

    constructor(input) {
        super(input);

        if (typeof(input) !== 'boolean') {
            throw new Error('AntibioticAllergiesFact() Error: Invalid argument(s)');
        }

        this._result = this.hasAntibioticAllergies()
            ? ALLERGIC_TO_ANTIBIOTICS
            : NOT_ALLERGIC_TO_ANTIBIOTICS;
    }

    hasAntibioticAllergies() {
        return this._input;
    }

    hasNoAntibioticAllergies() {
        return !this.hasAntibioticAllergies();
    }
}
