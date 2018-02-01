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

    promptNumber(prompt: string): Promise<number> {
        let parser = (value: string) => parseFloat(value);
        let validate = (value: string) => !isNaN(parseFloat(value));
        let promise = new Promise<number>((resolve, reject) => {
            this.ask(prompt, "number", validate, parser, (value) => {
                resolve(value as number);
            });
        });

        promise = promise.catch(err => {
            console.log("CATCH");
            this.error(err);
        }) as Promise<number>;

        return promise;
    }

    promptString(prompt: string): Promise<string> {
        let parser = (value: string) => { return value; };
        let validator = (value: string) => {
            return value !== "";
        };

        let promise = new Promise<string>((resolve, reject) => {
            this.ask(prompt, "string", validator, parser, (value) => {
                resolve(value as string);
            });
        });

        promise.catch(err => {
            this.error(err);
        });

        return promise;
    }

    promptBoolean(prompt: string): Promise<boolean> {
        let regex = /^true|false$/i;
        let parser = (value: string) => { 
            if (value.toLowerCase() === "true") {
                return true;
            } else {
                return false;
            }
        };
        let validator = (value: string) => regex.test(value);
        return new Promise<boolean>((resolve, reject) => {
            this.ask(prompt, "boolean", validator, parser, (value) => {
                resolve(value as boolean);
            });
        });
    }

    promptCSV<T>(prompt: string, classname: Classname<T>): Promise<T[]> {
        return new Promise((resolve, reject) => {
            let control = new CSVInput(prompt, classname, (value) => {
                resolve(value);
            });
            this.append(control.dom);
        });
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

    setInterval(cb: () => void, duration: number): number {
        return window.setInterval(cb, duration);
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