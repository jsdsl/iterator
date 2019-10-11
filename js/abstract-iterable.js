"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractIterable {
    [Symbol.iterator]() {
        return this.iterator().getIterableIterator();
    }
}
exports.AbstractIterable = AbstractIterable;
//# sourceMappingURL=abstract-iterable.js.map