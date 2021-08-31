/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:43 PM -- August 31st, 2021.
 * Project: @jsdsl/iterator
 * 
 * @jsdsl/iterator - A collection of classes that allow iteration over a predefined collection of elements.
 * Copyright (C) 2021 Trevor Sears
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { Iterator } from "./iterator";
import { AbstractIterable } from "./abstract-iterable";

/**
 * A basic abstract implementation of the JSDSL {@link Iterator} protocol, a class that furnishes the functionality
 * required to use an object with the JavaScript `for...of` syntax.
 * 
 * Note: Usually, classes that desire to be 'iterable' should not extend this class, but should instead implement the
 * {@link Iterable} interface (or extend the {@link AbstractIterable} abstract class). Extending this class
 * syntactically implies that the class in question 'is-a' iterator, whereas most use cases intend to assert that the
 * class in question 'has-a' iterator. In either case, iteration via `for...of` works as expected (with either an
 * {@link Iterator} or an {@link Iterable}).
 * 
 * @param {any} E The type of element that this AbstractIterator intends to iterate over.
 * @param {any} U The type of the value that will be returned in the case that this AbstractIterator's content has been
 * exhausted. Can be set to 'void' in the case that this AbstractIterator has infinite content. Defaults to `undefined`.
 * 
 * @author Trevor Sears <trevor@trevorsears.com>
 * @version v1.0.0
 * @since v0.1.0
 */
export abstract class AbstractIterator<E, U = undefined> extends AbstractIterable<E, U> implements Iterator<E, U> {
	
	/**
	 * Returns true if a call to {@link #next} would return a valid and meaningful result after calling this method.
	 * 
	 * A 'valid and meaningful result' entails that the result is an actual element of the underlying structure that
	 * this AbstractIterator is iterating over. This is to help distinguish from undefined values that were actually
	 * present in the underlying structure versus the undefined value that is returned from {@link #next} when all other
	 * valid results are exhausted.
	 *
	 * @return {boolean} true if a call to {@link #next} would return a valid and meaningful result.
	 */
	public abstract hasNext(): boolean;
	
	/**
	 * Returns the next element this AbstractIterator has to iterate over.
	 *
	 * @return {E | U} The next element this AbstractIterator has to iterate over.
	 */
	public abstract next(): E | U;
	
	/**
	 * Performs the specified action for all of the remaining elements in this AbstractIterator.
	 *
	 * @param {(element: E) => any} callback The action to perform on the remaining elements of this AbstractIterator.
	 */
	public forEachRemaining(callback: (element: E) => any): void {
		
		for (let element of this) callback(element);
		
	}
	
	/**
	 * Removes and returns the last element returned by the {@link #next} method from the underlying data structure.
	 * 
	 * Note if this method is not overridden in implementing child classes, the `#remove` method will throw an error,
	 * with a warning that the method is not supported for the current implementation.
	 *
	 * @return {E | U} The last element returned by the {@link #next} method.
	 */
	public remove(): E | U {
		
		throw new Error("ERR | #remove operation is not supported for this implementation of AbstractIterator.");
		
	}
	
	/**
	 * Resets this AbstractIterator back to it's initial position, readying it to iterate over the underlying collection
	 * from the 'beginning' again.
	 * 
	 * Note: If this method is not overridden in implementing child classes, the `#reset` method will throw an error,
	 * with a warning that the method is not supported for the current implementation.
	 *
	 * Note: This does not/should not modify the underlying data structure, meaning that any modifications to the
	 * underlying structure will not be/should not be 'undone' by calling this method.
	 */
	public reset(): void {
		
		throw new Error("ERR | #reset operation is not supported for this implementation of AbstractIterator.");
		
	}
	
	/**
	 * Returns an {@link Iterator} over the contents of this AbstractIterator.
	 * 
	 * Because of the fact that this class is in-and-of-itself an {@link Iterator}, this method simply returns 'this'.
	 * This is simply a formality so that this class will conform to the {@link Iterable} interface.
	 * 
	 * @return {Iterator<E, U>} An {@link Iterator} over the contents of this AbstractIterator.
	 */
	public iterator(): Iterator<E, U> {
		
		return this;
		
	}
	
}
