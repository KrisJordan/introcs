export type List<T> = Node<T> | null;

export class Node<T> {
    readonly value: T;
    readonly next: List<T>;

    constructor(value: T, next: List<T>) {
        this.value = value;
        this.next = next;
    }

    toString(): string {
        let result = "" + this.value + " → ";
        if (this.next === null) {
            result += "null";
        } else {
            result += this.next;
        }
        return result;
    }
}

export let first = <T> (list: List<T>): T => {
    if (list === null) {
        throw new Error("Cannot call function `first` on null.");
    } else {
        return list.value;
    }
};

export let rest = <T> (list: List<T>): List<T> => {
    if (list === null) {
        throw new Error("Cannot call function `rest` on null.");
    } else {
        return list.next;
    }
};

export let cons = <T> (value: T, list: List<T> = null): List<T> => {
    return new Node(value, list);
};

export let listify = <T> (...values: T[]): List<T> => {
    if (values.length === 0) {
        return null;
    } else {
        return cons(values[0], listify.apply(null, values.slice(1)));
    }
};