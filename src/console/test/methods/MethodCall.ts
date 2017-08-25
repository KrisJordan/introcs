abstract class MethodCall {
    abstract print(): void;
    abstract test(actual: MethodCall): void;
}

export default MethodCall;