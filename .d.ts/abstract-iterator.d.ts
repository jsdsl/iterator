import { Iterator as JSDSLIterator } from "./iterator";
export declare abstract class AbstractIterator<E> implements JSDSLIterator<E> {
    abstract hasNext(): boolean;
    abstract next(): E | undefined;
    forEach(callback: (element: E) => void): void;
    remove(): E | undefined;
    reset(): void;
    [Symbol.iterator](): IterableIterator<E>;
    getIterableIterator(): IterableIterator<E>;
}
