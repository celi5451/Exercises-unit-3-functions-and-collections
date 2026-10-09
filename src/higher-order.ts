// Task 2 - functions taken and returned (lesson 3.1)
//
// A higher-order function either takes a function as an argument, or gives
// one back. Both kinds are here.

import { Department, Instructor } from './data.js';

/**
 * Adds up one number per instructor, where the caller decides which number.
 *
 *     sumOf(instructors, i => i.salary)   // the whole salary bill
 *
 * The test functions in the lecture returned true or false. This one returns
 * a number, and the loop is written once for every possible "which number".
 */
export function sumOf(
  items: Instructor[],
  pick: (instructor: Instructor) => number): number {
  // TODO
  throw new Error('not implemented');
}

/**
 * Returns a function that tests whether a department is in a building.
 *
 *     const inTaylor = inBuilding('Taylor');
 *     inTaylor(someDepartment);   // true or false
 *
 * The returned function still knows which building it was made for, even
 * though inBuilding has long since finished. That is a closure.
 */
export function inBuilding(building: string): (department: Department) => boolean {
  // TODO
  throw new Error('not implemented');
}

/**
 * Returns a comparison function for sort, ordering instructors by whatever
 * number the caller picks:
 *
 *     [...instructors].sort(by(i => i.salary));
 *
 * A comparison function returns a negative number when a comes first, a
 * positive number when b comes first, and 0 when the order does not matter.
 * Subtracting the two numbers does all three at once.
 */
export function by(pick: (instructor: Instructor) => number):
  (a: Instructor, b: Instructor) => number {
  // TODO
  throw new Error('not implemented');
}
