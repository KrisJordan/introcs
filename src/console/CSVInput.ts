import {div, input} from "./DOM";
import DOMClasses from "./DOMClasses";
import Classname from "./Classname";

class CSVInput<T> {

    submitted: boolean;
    prompt: string;
    classname: Classname<T>;
    callback: (data: T[]) => void;

    dom: HTMLDivElement;
    fileInput: HTMLInputElement;
    okButton: HTMLInputElement; 

    constructor(prompt: string, classname: Classname<T>, callback: (value: T[]) => void)  {
        this.submitted = false;
        this.callback = callback;
        this.classname = classname;
        this.initDOM(prompt);
    }

    private initDOM(prompt: string) {
        this.okButton = <HTMLInputElement>input("button", "btn submit", "Ok");   
        this.fileInput = <HTMLInputElement>input("text", "value");
        this.fileInput.type = "file";
        this.fileInput.accept = "text/csv";
        this.dom = <HTMLDivElement>div("ask", [
            div("prompt", prompt),
            this.fileInput,
            this.okButton
        ]);
        this.invalidState();
        this.initEventHandlers();
    }

    private initEventHandlers() {
        this.okButton.onclick = this.submit.bind(this);
        this.fileInput.onchange = this.submit.bind(this);
    }

    private submit(e: KeyboardEvent) {
        this.submittedState();
        this.selected(this.fileInput.files);
    }

    private invalidState() {
        DOMClasses.remove(this.dom, "valid");
        this.okButton.setAttribute("disabled", "disabled");
    }

    private submittedState() {
        DOMClasses.add(this.dom, "submitted");
        DOMClasses.remove(this.dom, "valid");
        this.fileInput.setAttribute("disabled", "disabled");
        this.okButton.setAttribute("disabled", "disabled");
    }

    private selected(files: FileList | null): void {
        if (files === null) {
            return;
        }
        let reader: FileReader = new FileReader();
        let sample: T = new this.classname();
        reader.readAsText(files[0]);
        reader.onload = (event: Event) => {
            let reader2: FileReader = <FileReader> event.target;
            let lines: string[] = reader2.result.split(/\r\n|\n/);
            let types: object = {};
            let keys: string[] | null = this.parseRow(lines[0]);
            if (keys === null) {
                return;
            }
            let objects: T[] = [];
            for (let key of keys) {
                if (sample[key] !== undefined) {
                    types[key] = typeof sample[key];
                } else {
                    types[key] = "undefined";
                }
            }

            let typeMatch: boolean = false;
            for (let key in types) {
                let type: string = types[key];
                if (type !== "undefined") {
                    typeMatch = true;
                    break;
                }
            }
            if (!typeMatch) {
                this.invalidState();
                throw new Error("No matching column names found in: " + keys.join(", "));
            }

            for (let i: number = 1; i < lines.length; i++) {
                let row: string[]|null = this.parseRow(lines[i]);
                if (row !== null) {
                    let object: T = new this.classname();
                    for (let h: number = 0; h < row.length; h++) {
                        let column: string = keys[h];
                        let type: string = types[column];
                        switch (type) {
                            case "number":
                                object[column] = parseFloat(row[h]);
                                break;
                            case "string": 
                                object[column] = row[h];
                                break;
                            case "boolean":
                                object[column] = row[h].toLowerCase() === "t" || row[h].toLowerCase() === "true";
                                break;
                            case "undefined":
                                break;
                            default:
                                object[column] = row[h];
                                break;
                        }
                    }
                    objects.push(object);
                }
            }
            this.callback(objects);
            this.submittedState();
        };
    }
    
    private parseRow(row: string): string[]|null {
        let columns: string[] = [];
        let start: number = 0;
        let quotes: boolean = false;
        let piece: string = "";
        for (let i: number = 0; i < row.length; i++) {
            let char: string = row[i];
            
            if (quotes) {
                if (char === "\"") {
                    let nextChar = row[i + 1];
                    if (nextChar) {
                        if (nextChar === "\"") {
                            piece += "\"";
                            i++;
                        } else if (nextChar === ",") {
                            quotes = false;
                        }
                    }
                } else {
                    piece += char;
                }
            } else {
                if (char === ",") {
                    columns.push(piece);
                    start = i + 1;
                    piece = "";
                } else if (char === "\"") {
                    quotes = true;
                    start = i + 1;
                } else {
                    piece += char;
                }
            }
        }
        columns.push(row.substr(start));
        if (columns.join("") === "") {
            return null;
        } else {
            return columns;
        }
    }






}

export default CSVInput;