import {div, input} from "./DOM";
import primitive from "./Printable";
import DOMClasses from "./DOMClasses";

const ENTER_KEY = 13;

class TextInput {

    parser: (value: string) => primitive;
    validate: (value: primitive) => boolean;
    callback: (value: primitive) => void;

    submitted: boolean;
    
    dom: HTMLDivElement;
    textInput: HTMLInputElement;
    okButton: HTMLInputElement; 

    constructor(prompt: string, type: string, validate: (value: primitive) => boolean, parser: (value: string) => primitive,  callback: (value: primitive) => void)  {
        this.submitted = false;
        this.validate = validate;
        this.parser = parser;
        this.callback = callback;
        this.initDOM(prompt, type);
    }

    public getValue() {
        return this.parser(this.textInput.value);
    }

    public focus() {
        this.textInput.focus();
    }

    private initDOM(prompt: string, type: string) {
        this.okButton = <HTMLInputElement>input("button", "btn submit", "Ok");   
        this.textInput = <HTMLInputElement>input("text", "value");
        this.dom = <HTMLDivElement>div("ask", [
            div("prompt", prompt),
            this.textInput,
            this.okButton,
            div("type", type)
        ]);
        this.invalidState();
        this.initEventHandlers();
    }

    private initEventHandlers() {
        this.okButton.onclick = this.submit.bind(this);
        this.textInput.onkeyup = this.change.bind(this);
    }

    private submit(e: KeyboardEvent) {
        this.submittedState();
        this.callback(this.getValue());
    }

    private change(e: KeyboardEvent) {
        if (this.validate(this.textInput.value)) {
            if (e.keyCode == ENTER_KEY) {
                this.submit(e);
            } else {
                this.validState();
            }
        } else {
            this.invalidState();
        }
    }

    private validState() {
        DOMClasses.add(this.dom, "valid");
        this.okButton.removeAttribute("disabled");
    }

    private invalidState() {
        DOMClasses.remove(this.dom, "valid");
        this.okButton.setAttribute("disabled", "disabled");
    }

    private submittedState() {
        DOMClasses.add(this.dom, "submitted");
        DOMClasses.remove(this.dom, "valid");
        this.textInput.setAttribute("disabled", "disabled");
        this.okButton.setAttribute("disabled", "disabled");
    }

}

export default TextInput;