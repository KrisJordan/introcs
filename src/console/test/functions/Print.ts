import FunctionCall from "./FunctionCall";
import FunctionCallMatchError from "./FunctionCallMatchError";

class Print<T> extends FunctionCall {

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

    toString(): string {
        let value: string = "" + this._value;
        if (typeof this._value == "string") {
            value = "\"" + value + "\"";
        }
        return "print(" + value + ")";
    }

    test(actual: FunctionCall): void {
        let castActual: Print<T> = <Print<T>> actual;
        if (this._value === castActual._value) {
            return; // Short-circuit
        } else if (typeof this._value === "string" && typeof castActual._value === "string") {
            if (this._value.toLowerCase() === castActual._value.toLowerCase()) {
                return; // Short-circuit
            }
        }
        throw new FunctionCallMatchError(this, actual);
    }

}

export default Print;