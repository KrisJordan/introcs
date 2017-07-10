import Console from "./Console";
import DOMConsole from "./DOMConsole";

class ConsoleProvider {

    private static _instance: DOMConsole;

    static instance(): Console {
        if (!ConsoleProvider._instance) {
            ConsoleProvider._instance = new DOMConsole();
        }
        return ConsoleProvider._instance;
    }

}

export default ConsoleProvider;