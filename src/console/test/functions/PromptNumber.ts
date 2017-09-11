import FunctionCall from "./FunctionCall";

class PromptNumber extends FunctionCall {
    
    protected _prompt: string;
    protected _cb: (value: number) => void;
    protected _response: number;

    constructor(prompt: string, cb: (value: number) => void, response?: number) {
        super();
        this._prompt = prompt;
        this._cb = cb;
        if (response) {
            this._response = response;
        }
    }

    toString(): string {
        return "promptNumber(\"" + this._prompt + "\", <callback function>)";
    }

    print(): void {

    }

    test(actual: FunctionCall): void {

    }

}

export default PromptNumber;