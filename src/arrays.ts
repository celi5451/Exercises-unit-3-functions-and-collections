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
  return instructors
    // keep only the instructors in the given department
    .filter((instructor) => instructor.deptName === deptName)
    // turn each one into a line in the form "Name: 65000 kr"
    .map((instructor) => `${instructor.name}: ${instructor.salary} kr`)
    // join the lines with a newline between them
    .join('\n');
}

/**
 * The average salary of a department, or 0 when it has no instructors.
 * Guard against dividing by zero before you divide.
 */
export function averageSalary(deptName: string): number {
  const inDept = instructors.filter(    // keep only the instructors in the given department
    (instructor) => instructor.deptName === deptName    // filter returns a new array with only the instructors in the given department
  );

  if (inDept.length === 0) {    // guard: avoid dividing by zero
    return 0;   // if there are no instructors in the department, return 0
  }

  const total = inDept.reduce((sum, instructor) => sum + instructor.salary, 0);   // add up the salaries of the instructors in the department
  return total / inDept.length;   // return the average salary by dividing the total by the number of instructors in the department
}
