abstract class FunctionCall {
    abstract test(actual: FunctionCall): void;
    abstract toString(): string;
}

export default FunctionCall;