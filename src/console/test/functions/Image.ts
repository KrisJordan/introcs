import FunctionCall from "./FunctionCall";

class Image extends FunctionCall {

    private _url: string;

    constructor(value: string) {
        super();
        this._url = value;
    }

    get value(): string {
        return this._url;
    }

    toString(): string {
        return "image(\"" + this._url + "\")";
    }

    print(): void {

    }

    test(actual: FunctionCall): void {

    }

}

export default Image;