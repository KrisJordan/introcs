import FunctionCall from "./FunctionCall";
import FunctionCallMatchError from "./FunctionCallMatchError";

class PromptString extends FunctionCall {
    
    protected _prompt: string;
    protected _response: string;

    constructor(prompt: string, response?: string) {
        super();
        this._prompt = prompt;
        if (response) {
            this._response = response;
        }
    }

    toString(): string {
        if (this._response !== undefined) {
            return "promptString(\"" + this._prompt + "\") ... Testing with: " + this._response;
        } else {
            return "promptString(\"" + this._prompt + "\")";
        }
    }

    test(actual: FunctionCall): void {
        if (actual instanceof PromptString) {
            return;
        }

        throw new FunctionCallMatchError(this, actual);
    }

    get prompt(): string {
        return this._prompt;
    }

    get response(): string {
        return this._response;
    }

}

export default PromptString;