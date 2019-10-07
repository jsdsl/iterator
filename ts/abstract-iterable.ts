/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	7:45 PM -- October 06th, 2019.
 *	Project: JSDSL - Iterator
 */

import { Iterator as JSDSLIterator } from "./iterator";
import { Iterable as JSDSLIterable } from "./iterable";

/**
 * An abstract implementation of the JSDSL {@link Iterable} interface.
 * 
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class AbstractIterable<E> implements JSDSLIterable<E> {
	
	/**
	 * Returns an iterator over the element contents of this AbstractIterable.
	 *
	 * @return An iterator over the element contents of this AbstractIterable.
	 */
	public abstract iterator(): JSDSLIterator<E>;
	
	/**
	 * Returns an instance of an IterableIterator that allows 'this' to be iterable using the baked-in 'for...of'
	 * syntax, rather than more verbose iteration (i.e. using a 'while' loop).
	 *
	 * @return An instance of an IterableIterator.
	 */
	public [Symbol.iterator](): IterableIterator<E> {
		
		return this.iterator().getIterableIterator();
		
	}
	
}