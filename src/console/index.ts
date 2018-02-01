import "./style.css";

import { 
    print,
    setInterval,
    image,
    
    promptNumber,
    promptString,
    promptBoolean,
    promptCSV,

    clear,

    random,

    error

} from "./functions";

if (typeof window != undefined) {
    window.addEventListener("error", (e) => {
        error(e.error);
    });
    
    if (window.onerror !== undefined) {
        window.onerror = (message, source, lineno, colno, e) => {
            error(e!);
        };
    }
    
    window.addEventListener("unhandledrejection", (e: PromiseRejectionEvent) => {
        error(e.reason);
    });
}

export {
    print,
    setInterval,
    image,
    
    promptNumber,
    promptString,
    promptBoolean,
    promptCSV,

    clear,

    random
}