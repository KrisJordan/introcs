let {print, image, clear, promptNumber, promptBoolean, promptString, error, setConsole} = require("./functions");

if (typeof window != "undefined") {
    window.print = print;
    window.image = image;
    window.promptNumber = promptNumber;
    window.promptBoolean = promptBoolean;
    window.promptString = promptString;
    window.clear = clear;
    window.setConsole = setConsole;
    window.addEventListener("error", error);
} else if (typeof global != "undefined") {
    global.print = print;
    global.image = image;
    global.promptNumber = promptNumber;
    global.promptBoolean = promptBoolean;
    global.promptString = promptString;
    global.clear = clear;
    global.setConsole = setConsole;
}

