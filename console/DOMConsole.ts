import Console from "./Console";
import {div, style, input} from "./DOM";
import Printable from "./Printable";

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

    print(value: Printable): void {
        this.append(
            div("print", [
                div("value", "" + value),
                div("type", this.getType(value))
            ])
        );
    }

    askForNumber(prompt: string, cb: (value: number) => void): void {
        this.ask(prompt, "number", (value: string) => {
            
        });
    }

    askForString(prompt: string, cb: (value: string) => void): void {
        this.ask(prompt, "string", cb);
    };

    askForBoolean(prompt: string, cb: (value: boolean) => void): void {
    };

    private ask(prompt: string, type: string, cb: (value: string) => void): void {
 
        let textInput = <HTMLInputElement>input("text", "value");
        textInput.onkeyup = (e) => {
            if (e.keyCode === 13) {
                okButton.click();
            }
        };

        let okButton = <HTMLInputElement>input("button", "btn submit", "Ok");        
        okButton.onclick = () => {
            okButton.setAttribute("disabled", "disabled");
            cb(textInput.value);
        };
 
        this.append(
            div("ask", [
                div("prompt", prompt),
                textInput,
                okButton,
                div("type", type)
            ])
        );

        textInput.focus();
        // setTimeout(() => textInput.focus(), 0);
    }

    clear(): void {
        while( this._el.firstChild) {
            this._el.removeChild(this._el.firstChild);
        }
    }

    private getType(value: Printable): string {
        let type: string = "";
        if (typeof value == "string") {
            type = "string";
        } else if(typeof value == "number") {
            type = "number";
        } else if(typeof value == "boolean") {
            type = "boolean";
        } else if(value == null) {
            type = "null";
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
        setTimeout(() => window.scrollTo(0, (<HTMLElement>el).offsetTop), 0);
    }

    private styles() {
        return style(`
        
            .print, .ask {
                margin: 0 5%;
                padding: 16px 0;
                border-bottom: 1px solid whitesmoke;
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

            .ask .value:focus {
                outline-width: 0;
            }

            .ask .submit {
                border-radius: 8px;
                background: #99badd;
                border: 1px solid #999;
                font-size: 24px;
                color: white;
                padding: 8px;
                float: right;
            }
        `);
    }


}

export default DOMConsole;