/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	7:13 PM -- October 06th, 2019.
 *	Project: JSDSL - Iterator
 */

/**
 * An interface representing the general form of a type that can iterate over some collection of elements of type E.
 * 
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export interface Iterator<E> {
	
	/**
	 * Returns true if a call to {@link #next} would return a valid and meaningful result after calling this method.
	 *
	 * A 'valid and meaningful result' entails that the result is an actual element of the underlying structure that this
	 * AbstractIterator is iterating over. This is to help distinguish from undefined values that were actually present
	 * in the underlying structure versus the undefined value that is returned from #next when all other valid results
	 * are exhausted.
	 *
	 * @return true if a call to {@link #next} would return a valid and meaningful result.
	 */
	hasNext(): boolean;
	
	/**
	 * Returns the next element this Iterator has to iterate over, over undefined if there are no more valid elements to
	 * return.
	 *
	 * @return The next element this Iterator has to iterate over, over undefined if there are no more valid elements to
	 * return.
	 */
	next(): E | undefined;
	
	/**
	 * Performs the specified action for all of the remaining elements in this Iterator.
	 *
	 * @param callback The action to perform on the remaining elements of this Iterator.
	 */
	forEach(callback: (element: E) => any): void;
	
	/**
	 * Removes and returns the last element returned by the #next() method from the underlying data structure.
	 *
	 * @return The last element returned by the #next() method.
	 */
	remove?(): E | undefined;
	
	/**
	 * Resets this Iterator back to it's initial position, readying it to iterate over the underlying collection from
	 * the 'beginning' again.
	 */
	reset?(): void;
	
	/**
	 * Returns an instance of an IterableIterator that allows 'this' to be iterable using the baked-in 'for...of'
	 * syntax, rather than more verbose iteration (i.e. using a 'while' loop).
	 *
	 * @return An instance of an IterableIterator.
	 */
	[Symbol.iterator](): IterableIterator<E>;
	
	/**
	 * This method is simply an ease-of-understanding alias method for the [Symbol.iterator] method.
	 *
	 * @return An instance of an IterableIterator.
	 * @see Iterator#[Symbol.iterator]
	 */
	getIterableIterator(): IterableIterator<E>;
	
}