
export default class DiagnosisExpertSystem {
    static diagnosisEvaluation = null;

    static get diagnosisEvaluation() {
        return DiagnosisExpertSystem.diagnosisEvaluation;
    }

    static set diagnosisEvaluation(value) {
        if (!(value instanceof DiagnosisExpertSystem)) {
            throw new Error("DiagnosisExpertSystem.diagnosisEvaluation Error: Invalid argument(s)");
        }

        DiagnosisExpertSystem.diagnosisEvaluation = value;
    }

    static isEvaluationReady() {
        return DiagnosisExpertSystem.diagnosisEvaluation !== null;
    }

    static isEvaluationNotReady() {
        return !DiagnosisExpertSystem.isEvaluationReady();
    }

    static reset() {
        DiagnosisExpertSystem.diagnosisEvaluation = null;
    }
}