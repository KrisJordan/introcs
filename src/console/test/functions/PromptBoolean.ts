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
        return "promptBoolean(\"" + this._prompt + "\", <callback function>)";
    }

    print(): void {

    }

    test(actual: FunctionCall): void {

    }

}

export default PromptBoolean;