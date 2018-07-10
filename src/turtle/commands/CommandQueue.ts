import { Command } from "./Command";

/**
 * This is a poor design that could be improved by decoupling the nature
 * of a Command with the concept of a node in a linked list. Some low-hanging
 * fruit would be to just use the Node implementation in the list library.
 */

export class CommandQueue {

    private head: Command | null = null;
    private tail: Command | null = null;

    current(): Command {
        if (this.head) {
            return this.head;
        } else {
            throw new Error("The command queue is empty!");
        }
    }

    enqueue(command: Command): void {
        // Empty Queue?
        if (this.head === null) {
            this.head = command;
        }

        // Append to non-empty queue
        if (this.tail !== null) {
            this.tail.next = command;
        }
        
        this.tail = command;
    }

    hasNext(): boolean {
        return this.head !== null;
    }

    isEmpty(): boolean {
        return this.head === null;
    }

    next(): Command {
        if (this.head !== null) {
            let command = this.head;
            this.head = this.head.next;
            return command;
        } else {
            throw new Error("The command queue is empty");
        }
    }

}