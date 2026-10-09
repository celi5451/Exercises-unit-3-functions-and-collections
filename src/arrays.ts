// Task 1 - array methods (lesson 3.2)
//
// Every method here takes a function. None of them changes the array it is
// called on, except sort, which is the one to watch.
//
// No for loops in this file.

import { Instructor, instructors } from './data.js';

/**
 * The names of all instructors in a department, sorted alphabetically.
 * filter, then map, then sort.
 */
export function namesIn(deptName: string): string[] {
  const names = instructors
    .filter((instructor) => instructor.deptName === deptName)
    .map((instructor) => instructor.name)
    .sort();
  return names;
}


/**
 * The salaries of one department added together.
 * filter, then reduce. An empty department gives 0.
 */
export function salaryBill(deptName: string): number {
  const totalSalary = instructors
    .filter((instructor) => instructor.deptName === deptName)
    .reduce((sum, instructor) => sum + instructor.salary, 0);
  return totalSalary;
}

/**
 * The instructor with the highest salary. reduce, again.
 * You may assume the array is not empty.
 */
export function bestPaid(): Instructor {
  return instructors.reduce((best, instructor) => {
      return instructor.salary > best.salary ? instructor : best;
    });
}

/**
 * The first instructor earning less than the given amount, or undefined.
 * find. Note the return type, and what the caller has to do about it.
 */
export function firstBelow(salary: number): Instructor | undefined {  // The return type is important here, because the caller has to check for undefined.
  return instructors.find((instructor) => {   // find returns the first element that matches, or undefined if none do.
      return instructor.salary < salary;    // The predicate function returns true for the first instructor with a salary less than the given amount.
    });
}


/**
 * A report, one line per instructor of a department, in this exact form:
 *
 *     Srinivasan: 65000 kr
 *     Katz: 75000 kr
 *
 * In the order they appear in the instructors array. Lines are joined with
 * a newline. filter, map, a template literal, and join.
 */
export function salaryReport(deptName: string): string {
  // TODO
  throw new Error('not implemented');
}

/**
 * The average salary of a department, or 0 when it has no instructors.
 * Guard against dividing by zero before you divide.
 */
export function averageSalary(deptName: string): number {
  // TODO
  throw new Error('not implemented');
}
