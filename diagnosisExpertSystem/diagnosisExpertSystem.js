import DiagnosisEvaluation from "./diagnosisEvaluator.js";

export default class DiagnosisExpertSystem {
    static #diagnosisEvaluation = null;

    static get diagnosisEvaluation() {
        return DiagnosisExpertSystem.#diagnosisEvaluation;
    }

    static set diagnosisEvaluation(value) {
        if (!(value instanceof DiagnosisEvaluation)) {
            throw new Error("DiagnosisExpertSystem.diagnosisEvaluation Error: Invalid argument(s)");
        }

        DiagnosisExpertSystem.#diagnosisEvaluation = value;
    }

    static isEvaluationReady() {
        return DiagnosisExpertSystem.#diagnosisEvaluation !== null;
    }

    static isEvaluationNotReady() {
        return !DiagnosisExpertSystem.isEvaluationReady();
    }

    static reset() {
        DiagnosisExpertSystem.#diagnosisEvaluation = null;
    }
}