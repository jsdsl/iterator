/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	7:43 PM -- October 06th, 2019.
 *	Project: @jsdsl/iterator
 */

import { Iterator as JSDSLIterator } from "./iterator";
import { AbstractIterable } from "./abstract-iterable";

/**
 * An abstract implementation of the JSDSL {@link Iterator} interface.
 * 
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.2.0
 * @since v0.1.0
 */
export abstract class AbstractIterator<E> extends AbstractIterable<E> implements JSDSLIterator<E> {
	
	/**
	 * Returns true if a call to {@link #next} would return a valid and meaningful result after calling this method.
	 * 
	 * A 'valid and meaningful result' entails that the result is an actual element of the underlying structure that
	 * this AbstractIterator is iterating over. This is to help distinguish from undefined values that were actually
	 * present in the underlying structure versus the undefined value that is returned from {@link #next} when all other
	 * valid results are exhausted.
	 *
	 * @return true if a call to {@link #next} would return a valid and meaningful result.
	 */
	public abstract hasNext(): boolean;
	
	/**
	 * Returns the next element this AbstractIterator has to iterate over, over undefined if there are no more valid
	 * elements to return.
	 *
	 * @return The next element this AbstractIterator has to iterate over, over undefined if there are no more valid
	 * elements to return.
	 */
	public abstract next(): E | undefined;
	
	/**
	 * Performs the specified action for all of the remaining elements in this AbstractIterator.
	 *
	 * @param callback The action to perform on the remaining elements of this AbstractIterator.
	 */
	public forEach(callback: (element: E) => void): void {
		
		for (let element of this) callback(element);
		
	}
	
	/**
	 * Removes and returns the last element returned by the {@link #next} method from the underlying data structure.
	 * 
	 * Note if this method is not overridden in implementing child classes, the `#remove` method will throw an error,
	 * with a warning that the method is not supported for the current implementation.
	 *
	 * @return The last element returned by the {@link #next} method.
	 */
	public remove(): E | undefined {
		
		throw new Error("ERR | #remove operation is not supported for this implementation of AbstractIterator.");
		
	}
	
	/**
	 * Resets this AbstractIterator back to it's initial position, readying it to iterate over the underlying collection
	 * from the 'beginning' again.
	 * 
	 * Note if this method is not overridden in implementing child classes, the `#reset` method will throw an error,
	 * with a warning that the method is not supported for the current implementation.
	 */
	public reset(): void {
		
		throw new Error("ERR | #reset operation is not supported for this implementation of AbstractIterator.");
		
	}
	
	/**
	 * Returns an Iterator over the contents of this AbstractIterator.
	 * 
	 * Because of the fact that this class is in-and-of-itself an Iterator, this method simply returns 'this'. This is
	 * simply a formality so that this class will conform to the {@link Iterable} interface.
	 * 
	 * @return An Iterator over the contents of this AbstractIterator.
	 */
	public iterator(): JSDSLIterator<E> {
		
		return this;
		
	}
	
	/**
	 * This method is simply an ease-of-understanding alias method for the [Symbol.iterator] method.
	 *
	 * @return An instance of an IterableIterator.
	 * @see AbstractIterator#[Symbol.iterator]
	 */
	public getIterableIterator(): IterableIterator<E> {
		
		return new class implements IterableIterator<E> {
			
			private iterator: AbstractIterator<E>;
			
			public constructor(iterator: AbstractIterator<E>) {
				
				this.iterator = iterator;
				
			}
			
			public [Symbol.iterator](): IterableIterator<E> {
				
				return this;
				
			}
			
			public next(): IteratorResult<E> {
				
				return {
					
					done: !this.iterator.hasNext(),
					value: this.iterator.next() as E
					
				};
				
			}
			
		}(this);
		
	}
	
}