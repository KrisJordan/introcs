import Console from "../Console";
import Printable from "../Printable";
import Session from "./Session";
import Print from "./functions/Print";
import PromptString from "./functions/PromptString";
import PromptNumber from "./functions/PromptNumber";
import PromptBoolean from "./functions/PromptBoolean";
import Image from "./functions/Image";
import Clear from "./functions/Clear";

class TestConsole implements Console {

    private _expected: Session;
    private _actual: Session;
    private _testing: boolean;

    constructor() {
        this._expected = new Session();
        this._actual = new Session();
        this._testing = false;
    }

    get actual(): Session {
        return this._actual;
    }

    set expected(expected: Session) {
        this._expected = expected;
    }

    get testing(): boolean {
        return this._testing;
    }

    set testing(value: boolean) {
        this._testing = value;
    }

    print(s: Printable): void {
        let functionCall: Print<Printable> = new Print<Printable>(s);
        if (this._actual.log(functionCall) && this._testing) {
            this._expected.test(functionCall);
        }
    }

    image(url: string): void {
        let functionCall: Image = new Image(url);
        if (this._actual.log(functionCall) && this._testing) {
            this._expected.test(functionCall);
        }
    }

    promptNumber(prompt: string, cb: (value: number) => void): void {
        let functionCall: PromptNumber = new PromptNumber(prompt, cb);
        if (this._actual.log(functionCall) && this._testing) {
            this._expected.test(functionCall);
        }
    }

    promptString(prompt: string, cb: (value: string) => void): void {
        let functionCall: PromptString = new PromptString(prompt, cb);
        if (this._actual.log(functionCall) && this._testing) {
            this._expected.test(functionCall);
        }
    }

    promptBoolean(prompt: string, cb: (value: boolean) => void): void {
        let functionCall: PromptBoolean = new PromptBoolean(prompt, cb);
        if (this._actual.log(functionCall) && this._testing) {
            this._expected.test(functionCall);
        }
    }

    clear(): void {
        let functionCall: Clear = new Clear();
        if (this._actual.log(functionCall) && this._testing) {
            this._expected.test(functionCall);
        }
    }

    random(floor: number, ceiling: number): number {
        return floor;
    }

    error(e: Error): void {

    }

}

export default TestConsole;