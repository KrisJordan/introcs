import Printable from "./Printable";

import "./globals";

declare global {
    function print(value: Printable): void;
    function image(url: string): void;
    
    function promptNumber(prompt: string, cb: (value: number) => void): void;
    function promptString(prompt: string, cb: (value: string) => void): void;
    function promptBoolean(prompt: string, cb: (value: boolean) => void): void;
    
    function clear(): void;

    interface Function {
        name: string;
    }

    function mapStackTrace(
        stack: string | undefined, 
        handler: (s:string[]) => void
    ): void;
    
}