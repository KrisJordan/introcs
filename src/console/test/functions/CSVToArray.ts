import FunctionCall from "./FunctionCall";
import FunctionCallMatchError from "./FunctionCallMatchError";

class CSVToArray<T> extends FunctionCall {
    
    protected _prompt: string;
    protected _response: T[];

    constructor(prompt: string, response?: T[]) {
        super();
        this._prompt = prompt;
        if (response) {
            this._response = response;
        }
    }

    toString(): string {
        if (this._response !== undefined) {
            return "csvToArray(\"" + this._prompt + "\") ... testing with input.";
        } else {
            return "csvToArray(\"" + this._prompt + "\")";
        }
    }

    test(actual: FunctionCall): void {
        if (actual instanceof CSVToArray) {
            return;
        }

        throw new FunctionCallMatchError(this, actual);
    }

    get prompt(): string {
        return this._prompt;
    }

    get response(): T[] {
        return this._response;
    }

}

export default CSVToArray;