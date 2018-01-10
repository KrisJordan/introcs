import FunctionCall from "./FunctionCall";

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
        return "promptNumber(\"" + this._prompt + "\", <callback function>)";
    }

    print(): void {

    }

    test(actual: FunctionCall): void {

    }

}

export default PromptNumber;