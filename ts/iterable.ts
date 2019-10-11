/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	7:41 PM -- October 06th, 2019.
 *	Project: @jsdsl/iterator
 */

import { Iterator as JSDSLIterator } from "./iterator";

/**
 * An interface representing some type that can be iterated over via a {@link Iterator}.
 * 
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export interface Iterable<E> {
	
	/**
	 * Returns an iterator over the element contents of this Iterable.
	 * 
	 * @return An iterator over the element contents of this Iterable.
	 */
	iterator(): JSDSLIterator<E>;
	
	/**
	 * Returns an instance of an IterableIterator that allows 'this' to be iterable using the baked-in 'for...of'
	 * syntax, rather than more verbose iteration (i.e. using a 'while' loop).
	 *
	 * @return An instance of an IterableIterator.
	 */
	[Symbol.iterator](): IterableIterator<E>;
	
}