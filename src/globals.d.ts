import { Printable } from "./console/Printable";

declare function print(value: Printable): void;
declare function setInterval(cb: () => void, duration: number): number;