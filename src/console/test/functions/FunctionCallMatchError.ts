import FunctionCall from "./FunctionCall";

class FunctionCallMatchError extends Error {
    constructor(expected: FunctionCall, actual: FunctionCall) {
        super("Expected: " + expected.toString() + " \nActual: " + actual.toString());
    }
}

export default FunctionCallMatchError;