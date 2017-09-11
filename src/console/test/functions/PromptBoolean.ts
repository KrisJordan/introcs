import FunctionCall from "./FunctionCall";

class PromptBoolean extends FunctionCall {

    protected _prompt: string;
    protected _cb: (value: any) => void;
    protected _response: boolean;

    constructor(prompt: string, cb: (value: boolean) => void, response?: boolean) {
        super();
        this._prompt = prompt;
        this._cb = cb;
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