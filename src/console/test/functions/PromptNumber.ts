import FunctionCall from "./FunctionCall";
import FunctionCallMatchError from "./FunctionCallMatchError";

class PromptNumber extends FunctionCall {
    
    protected _prompt: string;
    protected _response: number;

    constructor(prompt: string, response?: number) {
        super();
        this._prompt = prompt;
        if (response) {
            this._response = response;
        }
    }

    toString(): string {
        if (this._response !== undefined) {
            return "promptNumber(\"" + this._prompt + "\") ... Testing with: " + this._response;
        } else {
            return "promptNumber(\"" + this._prompt + "\")";
        }
    }

    test(actual: FunctionCall): void {
        if (actual instanceof PromptNumber) {
            return;
        }

        throw new FunctionCallMatchError(this, actual);
    }

    get prompt(): string {
        return this._prompt;
    }

    get response(): number {
        return this._response;
    }

}

export default PromptNumber;