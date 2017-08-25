import Console from "../Console";
import Printable from "../Printable";
import Session from "./Session";
import Print from "./methods/Print";

class TestConsole implements Console {

    private _expected: Session;
    private _actual: Session;

    constructor() {
        this._expected = new Session();
        this._actual = new Session();
    }

    get actual(): Session {
        return this._actual;
    }

    get expected(): Session {
        return this._expected;
    }

    print(s: Printable): void {
        let methodCall: Print<Printable> = new Print<Printable>(s);
        this._actual.log(methodCall);
        this._expected.log(methodCall);
    }

    image(url: string): void {

    }

    promptNumber(prompt: string, cb: (value: number) => void): void {

    }

    promptString(prompt: string, cb: (value: string) => void): void {

    }

    promptBoolean(prompt: string, cb: (value: boolean) => void): void {

    }

    clear(): void {

    }

    error(e: Error): void {

    }

}

export default TestConsole;