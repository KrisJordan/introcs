import FunctionCall from "./functions/FunctionCall";

class OutOfCallsError {

    message: string;
    error: Error;

    constructor(public functionCall: FunctionCall) {
        this.message = ("Function call unexpected: " + functionCall.toString());
        this.error = new Error(this.message);
    }

}

export default OutOfCallsError;