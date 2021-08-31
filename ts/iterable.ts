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

/**
 * An interface representing some type that can be iterated over via an {@link Iterator}.
 *
 * @param {any} E The type of element that this Iterable intends to iterate over.
 * @param {any} U The type of the value that will be returned in the case that this Iterable's content has been
 * exhausted. Can be set to 'void' in the case that this Iterable has infinite content. Defaults to `undefined`.
 * 
 * @author Trevor Sears <trevor@trevorsears.com>
 * @version v1.0.0
 * @since v0.1.0
 */
export interface Iterable<E, U = undefined> {
	
	/**
	 * Returns an iterator over the contents of this Iterable.
	 * 
	 * @return {Iterator<E, U>} An iterator over the contents of this Iterable.
	 */
	iterator(): Iterator<E, U>;
	
	/**
	 * Returns an instance of an IterableIterator.
	 * 
	 * The presence of this method allows 'this' to be iterable using the baked-in 'for...of' syntax, rather than more
	 * verbose iteration (i.e. using a 'while' loop).
	 *
	 * @return {IterableIterator<E>} An instance of an IterableIterator.
	 */
	[Symbol.iterator](): IterableIterator<E>;
	
}
