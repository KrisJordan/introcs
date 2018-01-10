export interface Stringable {
    toString(): string;
}

export type primitive = string | number | boolean;

export type PrintOne = undefined | null | primitive | Stringable;

export type Printable = PrintOne | PrintOne[];

export default Printable;