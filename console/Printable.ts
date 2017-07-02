interface Stringable {
    toString(): string;
}

type primitive = string | number | boolean;

type PrintOne = null | primitive | Stringable;

type Printable = PrintOne | PrintOne[];

export default Printable;