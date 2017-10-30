export default interface Observer<T> {
    (object: T): void;
}