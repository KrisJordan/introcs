import MethodCall from "./methods/MethodCall";

class Session {

    private _calls: MethodCall[];
    private _t: number;

    public constructor() {
        this._t = 0;
        this._calls = [];
    }

    log(call: MethodCall): void {
        this._calls.push(call);
    }

    get calls(): MethodCall[] {
        return this._calls;
    }

}

export default Session;