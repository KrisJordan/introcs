import FunctionCall from "./functions/FunctionCall";
import OutOfCallsError from "./OutOfCallsError";

export interface Predicate<T> {
    (f: T): boolean;
}

class Session {

    private _calls: FunctionCall[];
    private _t: number;
    private _ignore: Predicate<FunctionCall>;

    public constructor() {
        this._t = 0;
        this._calls = [];
        this._ignore = () => false;
    }

    /**
     * Returns true if the call was not ignored. False otherwise.
     * This distinction is useful when comparing actual versus expected
     * in TestConsole. You do not want to test actual versus an ignored line.
     */
    log(call: FunctionCall): boolean {
        if (!this._ignore(call)) {
            this._calls.push(call);
            return true;
        }
        return false;
    }

    get calls(): FunctionCall[] {
        return this._calls;
    }

    set ignore(filter: Predicate<FunctionCall>) {
        this._ignore = filter;
    }

    hasNext(): boolean {
        return this._t < this._calls.length;
    }

    next(): FunctionCall {
        return this._calls[this._t++];
    }

    test(actual: FunctionCall): FunctionCall {
        if (this.hasNext()) {
            let expected: FunctionCall = this.next();
            expected.test(actual);
            return expected;
        } else {
            throw new OutOfCallsError(actual);
        }
    }

    contains(test: Predicate<FunctionCall>): boolean {
        return this._calls.some(test);
    }

    toString(): string {
        return this._calls.map(f => f.toString()).join("\n");
    }

}

export default Session;