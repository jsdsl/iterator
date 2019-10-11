import { Iterable as JSDSLIterable } from "./iterable";
export interface Iterator<E> extends JSDSLIterable<E> {
    hasNext(): boolean;
    next(): E | undefined;
    forEach(callback: (element: E) => any): void;
    remove?(): E | undefined;
    reset?(): void;
    getIterableIterator(): IterableIterator<E>;
}
