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
import { Iterable } from "./iterable";

/**
 * A basic abstract implementation of a class that is iterable (i.e. navigable via JavaScript's `for...of` construct).
 * 
 * This class serves as an abstract implementation of the JSDSL {@link Iterable} interface.
 *
 * @param {any} E The type of element that this AbstractIterable intends to iterate over.
 * @param {any} U The type of the value that will be returned in the case that this AbstractIterable's content has been
 * exhausted. Can be set to 'void' in the case that this AbstractIterable has infinite content. Defaults to `undefined`.
 * 
 * @author Trevor Sears <trevor@trevorsears.com>
 * @version v1.1.0
 * @since v0.1.0
 */
export abstract class AbstractIterable<E, U = undefined> implements Iterable<E, U> {
	
	/**
	 * Returns an iterator over the element contents of this AbstractIterable.
	 *
	 * @return {Iterator<E, U>} An iterator over the element contents of this AbstractIterable.
	 */
	public abstract iterator(): Iterator<E, U>;
	
	/**
	 * Returns an instance of an IterableIterator that allows 'this' to be iterable using the baked-in `for...of`
	 * syntax, rather than more verbose iteration (i.e. using a 'while' loop).
	 *
	 * @return {IterableIterator<E>} An instance of an IterableIterator.
	 */
	public [Symbol.iterator](): IterableIterator<E> {
		
		return new class implements IterableIterator<E> {
			
			private iterator: Iterator<E, U>;
			
			public constructor(iterable: Iterable<E, U>) {
				
				this.iterator = iterable.iterator();
				
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
