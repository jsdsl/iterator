# JSDSL - Iterator
A collection of classes that allow iteration over some predefined collection of elements.

### [Find @jsdsl/iterator on NPM.](https://www.npmjs.com/package/@jsdsl/iterator)


## Table of Contents

 - [Installation](#installation)
 - [Basic Usage](#basic-usage)
 - [Documentation](#documentation)
 - [License](#license)

## Installation
Install from NPM with
```
$ npm install --save @jsdsl/iterator
```

## Basic Usage

The `Iterator` class has a handful of useful methods:

```typescript
hasNext(): boolean;

next(): E | undefined;

forEach(callback: (element: E) => any): void;

remove?(): E | undefined;

reset?(): void;
```

Each of which help enable iteration over the elements underlying the `Iterator`.

Perhaps of more use is the `AbstractIterator`, for which only the first two of the methods mentioned above need to be implemented:

```typescript
public abstract hasNext(): boolean;

public abstract next(): E | undefined;
```

Correctly implementing the above two methods will result in a class whose instances can be iterated over by a regular `for...of` loop:

```typescript
class MyIterator extends AbstractIterator<any> { ... }

for (let element of new MyIterator()) { ... }
```

This package also includes the `Iterable` and `AbstractIterable` classes. The `Iterable` class represents some structure that can be iterated over, and exposes the following methods:

```typescript
iterator(): Iterator<E>;

[Symbol.iterator](): IterableIterator<E>;
``` 

Meanwhile the `AbstractIterable` class does the small task of implementing the `[Symbol.iterator]` method, simply requiring the implementation of the `iterator` method:

```typescript
public abstract iterator(): Iterator<E>;
```

Similar to the `Iterator` and `AbstractIterator` classes, correctly implementing the required methods will result in a class whose instances can also be iterated over by a regular `for...of` loop:

```typescript
class MyIterable extends AbstractIterable<any> { ... }

for (let element of new MyIterable()) { ... }
```

## Documentation

See the [wiki](https://github.com/jsdsl/iterator/wiki) for full documentation.

## License
@jsdsl/iterator is made available under the GNU General Public License v3.

Copyright (C) 2019 Trevor Sears
