import { Iterator as JSDSLIterator } from "./iterator";
import { AbstractIterable } from "./abstract-iterable";
export declare abstract class AbstractIterator<E> extends AbstractIterable<E> implements JSDSLIterator<E> {
    abstract hasNext(): boolean;
    abstract next(): E | undefined;
    forEach(callback: (element: E) => void): void;
    remove(): E | undefined;
    reset(): void;
    iterator(): JSDSLIterator<E>;
    getIterableIterator(): IterableIterator<E>;
}
