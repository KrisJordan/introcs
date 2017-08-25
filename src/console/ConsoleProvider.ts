import Console from "./Console";
import DOMConsole from "./DOMConsole";
import TestConsole from "./test/TestConsole";

class ConsoleProvider {

    private static _instance: Console;

    static instance(): Console {
        if (!ConsoleProvider._instance) {
            if (typeof window != "undefined") {
                ConsoleProvider._instance = new DOMConsole();
            } else {
                ConsoleProvider._instance = new TestConsole();
            }
        }
        return ConsoleProvider._instance;
    }

    static setConsole(console: Console) {
        ConsoleProvider._instance = console;
    }

}

export default ConsoleProvider;