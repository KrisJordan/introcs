import { DOMEnvironment } from "./dom/DOMEnvironment";

export class TurtleProvider {
    
    private static _instance: DOMEnvironment;
    
    public static instance(): DOMEnvironment {
        if (!TurtleProvider._instance) {
            TurtleProvider._instance = new DOMEnvironment();
        }
        return TurtleProvider._instance;
    }


}