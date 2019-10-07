import { Iterator as JSDSLIterator } from "./iterator";
export interface Iterable<E> {
    iterator(): JSDSLIterator<E>;
    [Symbol.iterator](): IterableIterator<E>;
}
