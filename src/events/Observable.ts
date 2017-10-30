import Observer from "./Observer";

export default interface Observable<T> {
    addObserver(observer: Observer<T>): void;
    notify(): void;
}