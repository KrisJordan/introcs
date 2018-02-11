import FunctionCall from "./FunctionCall";

class PromptBoolean extends FunctionCall {

    protected _prompt: string;
    protected _response: boolean;

    constructor(prompt: string, response?: boolean) {
        super();
        this._prompt = prompt;
        if (response) {
            this._response = response;
        }
    }

    toString(): string {
        if (this._response !== undefined) {
            return "promptBoolean(\"" + this._prompt + "\") ... Testing with: " + this._response;
        } else {
            return "promptBoolean(\"" + this._prompt + "\")";
        }
    }

    test(actual: FunctionCall): void {

    }


    get prompt(): string {
        return this._prompt;
    }

    get response(): boolean {
        return this._response;
    }

}

export default PromptBoolean;