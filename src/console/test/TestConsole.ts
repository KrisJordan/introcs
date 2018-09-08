import Console from "../Console";
import Printable from "../Printable";
import Session from "./Session";
import Print from "./functions/Print";
import PromptString from "./functions/PromptString";
import PromptNumber from "./functions/PromptNumber";
import PromptBoolean from "./functions/PromptBoolean";
import CSVToArray from "./functions/CSVToArray";
import Image from "./functions/Image";
import Clear from "./functions/Clear";
import Classname from "../Classname";
import * as list from "../../list";
import OutOfCallsError from "./OutOfCallsError";

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

    promptNumber(prompt: string, response?: number): Promise<number> {
        let functionCall: PromptNumber = new PromptNumber(prompt, response);
        if (this._actual.log(functionCall) && this._testing) {
            let expected = this._expected.test(functionCall) as PromptNumber;
            return Promise.resolve(expected.response);
        }
        if (response) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new OutOfCallsError(functionCall));
        }
    }

    promptString(prompt: string, response?: string): Promise<string> {
        let functionCall: PromptString = new PromptString(prompt, response);
        if (this._actual.log(functionCall) && this._testing) {
            let expected = this._expected.test(functionCall) as PromptString;
            return Promise.resolve(expected.response);
        }
        if (response) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new OutOfCallsError(functionCall));
        }
    }

    promptBoolean(prompt: string, response?: boolean): Promise<boolean> {
        let functionCall: PromptBoolean = new PromptBoolean(prompt, response);
        if (this._actual.log(functionCall) && this._testing) {
            let expected = this._expected.test(functionCall) as PromptBoolean;
            return Promise.resolve(expected.response);
        }
        if (response) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new OutOfCallsError(functionCall));
        }
    }

    csvToArray<T>(prompt: string, classname: Classname<T>, response?: T[]): Promise<T[]> {
        let functionCall: CSVToArray<T> = new CSVToArray<T>(prompt, response);
        if (this._actual.log(functionCall) && this._testing) {
            let expected = this._expected.test(functionCall) as CSVToArray<T>;
            return Promise.resolve(expected.response);
        }
        if (response) {
            return Promise.resolve(response);
        } else {
            throw new OutOfCallsError(functionCall);
        }
    }

    csvToList<T>(prompt: string, classname: Classname<T>): Promise<list.List<T>> {
        return Promise.resolve(null);
    }

    setInterval(cb: () => void, duration: number): number {
        return 0;
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