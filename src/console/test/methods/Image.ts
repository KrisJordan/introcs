import MethodCall from "./MethodCall";

class Image extends MethodCall {

    private _url: string;

    constructor(value: string) {
        super();
        this._url = value;
    }

    get value(): string {
        return this._url;
    }

    print(): void {

    }

    test(actual: MethodCall): void {

    }

}

export default Image;