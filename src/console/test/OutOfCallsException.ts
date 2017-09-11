import FunctionCall from "./functions/FunctionCall";

class OutOfCallsError extends Error {

    constructor(public functionCall: FunctionCall) {
        super("Function call unexpected: " + functionCall.toString());
    }

}

export default OutOfCallsError;