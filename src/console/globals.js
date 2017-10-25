let {print, image, clear, random, promptNumber, promptBoolean, promptString, promptCSV, error, setConsole, setInterval} = require("./functions");

if (typeof window != "undefined") {
    window.print = print;
    window.image = image;
    window.promptNumber = promptNumber;
    window.promptBoolean = promptBoolean;
    window.promptString = promptString;
    window.promptCSV = promptCSV;
    window.clear = clear;
    window.random = random;
    window.setConsole = setConsole;
    window.addEventListener("error", error);
} else if (typeof global != "undefined") {
    global.print = print;
    global.image = image;
    global.promptNumber = promptNumber;
    global.promptBoolean = promptBoolean;
    global.promptString = promptString;
    global.promptCSV = promptCSV;
    global.clear = clear;
    global.random = random;
    global.setConsole = setConsole;
    global.setInterval = setInterval;
}

