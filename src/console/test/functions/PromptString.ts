import FunctionCall from "./FunctionCall";

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
        return "promptString(\"" + this._prompt + "\", <callback function>)";
    }

    print(): void {

    }

    test(actual: FunctionCall): void {

    }

}

export default PromptString;