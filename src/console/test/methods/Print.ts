import MethodCall from "./MethodCall";

class Print<T> extends MethodCall {

    private _value: T;

    constructor(value: T) {
        super();
        this._value = value;
    }

    get value(): T {
        return this._value;
    }

    print(): void {

    }

    test(actual: MethodCall): void {

    }

}

export default Print;