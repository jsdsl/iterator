"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_iterable_1 = require("./abstract-iterable");
class AbstractIterator extends abstract_iterable_1.AbstractIterable {
    forEach(callback) {
        for (let element of this)
            callback(element);
    }
    remove() {
        throw new Error("ERR | #remove operation is not supported for this implementation of AbstractIterator.");
    }
    reset() {
        throw new Error("ERR | #reset operation is not supported for this implementation of AbstractIterator.");
    }
    iterator() {
        return this;
    }
    getIterableIterator() {
        return new class {
            constructor(iterator) {
                this.iterator = iterator;
            }
            [Symbol.iterator]() {
                return this;
            }
            next() {
                return {
                    done: !this.iterator.hasNext(),
                    value: this.iterator.next()
                };
            }
        }(this);
    }
}
exports.AbstractIterator = AbstractIterator;
//# sourceMappingURL=abstract-iterator.js.map