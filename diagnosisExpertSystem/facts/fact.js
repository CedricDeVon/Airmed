export default class Fact {
    _input;
    _result;

    constructor(input) {
        this._input = input;
    }

    get input() {
        return this._input;
    }

    get result() {
        return this._result;
    }
}
