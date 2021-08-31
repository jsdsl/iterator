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

import { Iterable } from "./iterable";

/**
 * An interface representing the general form of a type that can iterate over a collection of elements of type E.
 *
 * @param {any} E The type of element that this Iterator intends to iterate over.
 * @param {any} U The type of the value that will be returned in the case that this Iterator's content has been
 * exhausted. Can be set to 'void' in the case that this Iterator has infinite content. Defaults to `undefined`.
 * 
 * @author Trevor Sears <trevor@trevorsears.com>
 * @version v1.0.0
 * @since v0.1.0
 */
export interface Iterator<E, U = undefined> extends Iterable<E, U> {
	
	/**
	 * Returns true if a directly subsequent call to {@link #next} would return a valid and meaningful result after
	 * calling this method.
	 *
	 * A 'valid and meaningful result' entails that the result is an actual element of the underlying structure that
	 * this Iterator is iterating over. This is to help distinguish from undefined values that were actually present in
	 * the underlying structure versus potential undefined values returned from {@link #next} as a result of calling
	 * said method after the elements of the underlying structure have already been exhausted due to prior calls to
	 * {@link #next} (or even if the underlying structure was empty to begin with!).
	 *
	 * @return {boolean} true if a call to {@link #next} would return a valid and meaningful result.
	 */
	hasNext(): boolean;
	
	/**
	 * Returns the next element this Iterator has to iterate over.
	 *
	 * @return {E | U} The next element this Iterator has to iterate over.
	 */
	next(): E | U;
	
	/**
	 * Performs the specified action for all of the remaining elements in this Iterator.
	 *
	 * @param {(element: E) => any} callback The action to perform on the remaining elements of this Iterator.
	 */
	forEachRemaining(callback: (element: E) => any): void;
	
	/**
	 * Removes and returns the last element returned by the {@link #next} method from the underlying data structure.
	 *
	 * @return {E | U} The last element returned by the {@link #next} method.
	 */
	remove?(): E | U;
	
	/**
	 * Resets this Iterator back to it's initial position, readying it to iterate over the underlying collection from
	 * the 'beginning' again.
	 *
	 * Note: This does not/should not modify the underlying data structure, meaning that any modifications to the
	 * underlying structure will not be/should not be 'undone' by calling this method.
	 */
	reset?(): void;
	
}
