abstract class FunctionCall {
    abstract print(): void;
    abstract test(actual: FunctionCall): void;
    abstract toString(): string;
}

export default FunctionCall;