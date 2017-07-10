import Console from "./Console";
import {div, style, img} from "./DOM";
import Printable from "./Printable";
import TextInput from "./TextInput";
import primitive from "./Printable";

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
        (<HTMLElement>this._el.parentElement).appendChild(this.styles());
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
        imgElement.onload = (e) => this.scrollBottom();
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
    };

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
    };

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

    private scrollBottom() {
       setTimeout(() => window.scrollTo(0, (<HTMLElement>this._el.children[this._el.childElementCount - 1]).offsetTop), 0);
    }

    private styles() {
        return style(`
        
            .print, .ask, .image, .error {
                margin: 0 5%;
                padding: 16px 0;
                border-bottom: 1px solid whitesmoke;
            }

            /** ERROR */
            .error .message {
                font-size: 20px;
                color: #ff0033;
                font-weight: bold;
            }

            .error .help {
                font-size: 14px;
                margin-top: 8px;
            }

            /** IMAGE */
            .image img {
                max-width: 100%;
                max-height: 360px;
            }

            /** PRINT */

            .print .value {
                font-weight: normal;
                font-size: 20px;
            }

            .print .type {
                font-size: 10px;
            }

            /** ASK */
            .ask .prompt {
                font-weight: normal;
                font-size: 20px;
            }

            .ask .type {
                font-size: 10px;
            }

            .ask .value {
                font-size: 24px;
                font-weight: bold;
                border: none;
                border-bottom: 1px solid black;
                width: calc(100% - 60px);
                margin-top: 8px;
            }

            .ask.submitted {
                color: #999;
            }

            .ask.submitted .value {
                background: white;
                border-bottom: 1px solid #999;
            }

            .ask.submitted .submit {
                background: #999;
            }

            .ask.valid .value {
                border-bottom: 1px solid #99badd;
            }

            .ask .value:focus {
                outline-width: 0;
            }

            .ask .submit {
                border-radius: 8px;
                background: #999;
                border: 1px solid #999;
                font-size: 24px;
                color: white;
                padding: 8px;
                float: right;
                disabled: true;
            }

            .ask.valid .submit {
                background: #99badd;
            }
        `);
    }


}

export default DOMConsole;