export interface Stringable {
    toString(): string;
}

export type primitive = string | number | boolean;

export type PrintOne = null | primitive | Stringable;

export type Printable = PrintOne | PrintOne[];

export default Printable;