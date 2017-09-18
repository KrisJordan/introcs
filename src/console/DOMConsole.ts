import Console from "./Console";
import {div, img} from "./DOM";
import Printable from "./Printable";
import TextInput from "./TextInput";
import CSVInput from "./CSVInput";
import primitive from "./Printable";
import Classname from "./Classname";

class DOMConsole implements Console {

    private _el: HTMLElement;

    public constructor() {
        let el: HTMLElement|null = document.getElementById("console");
        if (el != null) {
            this._el = el;
        } else {
            this._el = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(this._el);
        }
    }

    error(e: Error): void {
        this.append(
            div("error", [
                div("message", e.message),
                div("help", "Open the Console in Developer Tools to find the filename and line number this error originated from.")
            ])
        );
    }

    print(value: Printable): void {
        this.append(
            div("print", [
                div("value", "" + value),
                div("type", this.getType(value))
            ])
        );
    }

    image(url: string): void {
        let imgElement: HTMLImageElement = <HTMLImageElement>img(url);
        this.append(
            div("image", [
                imgElement
            ])
        );
    }

    promptNumber(prompt: string, cb: (value: number) => void): void {
        let parser = (value: string) => parseFloat(value);
        let validate = (value: string) => !isNaN(parseFloat(value));
        this.ask(prompt, "number", validate, parser, cb);
    }

    promptString(prompt: string, cb: (value: string) => void): void {
        let parser = (value: string) => { return value; };
        let validator = (value: string) => {
            return value !== "";
        };
        this.ask(prompt, "string", validator, parser, cb);
    }

    promptBoolean(prompt: string, cb: (value: boolean) => void): void {
        let regex = /^true|false$/i;
        let parser = (value: string) => { 
            if (value.toLowerCase() === "true") {
                return true;
            } else {
                return false;
            }
        };
        let validator = (value: string) => regex.test(value);
        this.ask(prompt, "boolean", validator, parser, cb);
    }

    promptCSV<T>(prompt: string, classname: Classname<T>, cb: (value: T[]) => void): void {
        let control = new CSVInput(prompt, classname, cb);
        this.append(control.dom);
    }

    private ask(prompt: string, type: string, validator: (value: primitive) => boolean, parser: (value: string) => primitive, cb: (value: primitive) => void): void {
        let control = new TextInput(prompt, type, validator, parser, cb);
        this.append(control.dom);
        control.focus();
    }

    clear(): void {
        while( this._el.firstChild) {
            this._el.removeChild(this._el.firstChild);
        }
    }

    random(floor: number, ceiling: number): number {
        let delta: number = Math.random() * (ceiling - floor + 1);
        return Math.floor(floor + delta);
    }

    private getType(value: Printable): string {
        let type: string = "";
        if (typeof value === "string") {
            type = "string";
        } else if(typeof value === "number") {
            type = "number";
        } else if(typeof value === "boolean") {
            type = "boolean";
        } else if(value === null) {
            type = "null";
        } else if(value === undefined) {
            type = "undefined"
        } else if(Array.isArray(value)) {
            if (value.length > 0) {
                type += this.getType(value[0]) + "[]";
            } else {
                type = "[]";
            }
        } else if(typeof value == "object") {
            type = "object";
            if (value.constructor.name) {
                if (value.constructor.name !== "Object") {
                    type = value.constructor.name;
                }
            }
        }
        return type;
    }

    private append(el: Node): void {
        this._el.appendChild(el);
    }

    // private scrollBottom() {
    //     setTimeout(() => {
    //         let el: HTMLElement = <HTMLElement>this._el.children[this._el.childElementCount - 1]
    //         if (el && el.offsetTop) {
    //             window.scrollTo(0, el.offsetTop);
    //         }
    //     }, 1);
    // }

}

export default DOMConsole;