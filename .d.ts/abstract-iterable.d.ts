import { Iterator as JSDSLIterator } from "./iterator";
import { Iterable as JSDSLIterable } from "./iterable";
export declare abstract class AbstractIterable<E> implements JSDSLIterable<E> {
    abstract iterator(): JSDSLIterator<E>;
    [Symbol.iterator](): IterableIterator<E>;
}
