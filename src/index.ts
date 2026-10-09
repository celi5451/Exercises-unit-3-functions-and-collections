// The entry point. Build and run with:  npm run build   then   npm start
//
// Uncomment each block as you get to it, and compare what you get with the
// expected result in the comment.

import { departments, instructors } from './data.js';
import { namesIn, salaryBill, bestPaid, firstBelow, salaryReport, averageSalary } from './arrays.js';
import { sumOf, inBuilding, by } from './higher-order.js';
import { runningTotal, idGenerator } from './closures.js';

console.log(departments.length + ' departments, ' + instructors.length + ' instructors.');

// --- Task 1: array methods ---
console.log(namesIn('Comp. Sci.'));       // [ 'Brandt', 'Katz', 'Srinivasan' ]
console.log(namesIn('Nursing'));          // []
console.log(salaryBill('Physics'));       // 182000
console.log(salaryBill('Nursing'));       // 0
console.log(bestPaid().name);             // Einstein
const cheapest = firstBelow(50000);
console.log(cheapest === undefined ? 'nobody' : cheapest.name);   // Mozart
console.log(firstBelow(10000));           // undefined
console.log(salaryReport('Finance'));     // Wu: 90000 kr \n Singh: 80000 kr
console.log(averageSalary('Comp. Sci.')); // 77333.33333333333
console.log(averageSalary('Nursing'));    // 0
console.log(instructors[0].name);         // Srinivasan: the array was not reordered. it is a check that the original array was not changed.

// --- Task 2: higher-order functions ---
// console.log(sumOf(instructors, i => i.salary));   // 898000
// console.log(sumOf(instructors.filter(i => i.deptName === 'Physics'), i => i.salary));   // 182000
// const inTaylor = inBuilding('Taylor');
// console.log(departments.filter(inTaylor).map(d => d.deptName));  // [ 'Comp. Sci.', 'Elec. Eng.' ]
// console.log([...instructors].sort(by(i => i.salary))[0].name);   // Mozart

// --- Task 3: closures ---
// const add = runningTotal();
// console.log(add(65000), add(75000), add(10000));   // 65000 140000 150000
// const other = runningTotal();
// console.log(other(1000));                          // 1000, its own total
// const nextId = idGenerator('DEP');
// console.log(nextId(), nextId(), nextId());         // DEP-1 DEP-2 DEP-3
// const nextCourseId = idGenerator('CRS');
// console.log(nextCourseId());                       // CRS-1
