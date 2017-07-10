let {print, image, clear, promptNumber, promptBoolean, promptString, error} = require("./functions");

window.print = print;
window.image = image;
window.promptNumber = promptNumber;
window.promptBoolean = promptBoolean;
window.promptString = promptString;
window.clear = clear;
window.addEventListener("error", error);