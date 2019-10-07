export interface Iterator<E> {
    hasNext(): boolean;
    next(): E | undefined;
    forEach(callback: (element: E) => any): void;
    remove?(): E | undefined;
    reset?(): void;
    [Symbol.iterator](): IterableIterator<E>;
    getIterableIterator(): IterableIterator<E>;
}
