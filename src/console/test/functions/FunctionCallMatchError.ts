import FunctionCall from "./FunctionCall";

class FunctionCallMatchError {

    message: string;
    error: Error;

    constructor(expected: FunctionCall, actual: FunctionCall) {
        this.message = "Expected: " + expected.toString() + " \nActual: " + actual.toString();
        this.error = new Error();
    }
}

export default FunctionCallMatchError;