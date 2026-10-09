// Task 3 - closures (lesson 3.1)
//
// A closure is a function plus the scope it was created in. Here that scope
// holds something that changes.

/**
 * Returns a function that adds up everything it is given, and answers with
 * the total so far:
 *
 *     const add = runningTotal();
 *     add(65000);    // 65000
 *     add(75000);    // 140000
 *
 * The total lives in runningTotal, and only the returned function can reach
 * it. Nothing else in the program can change it.
 */
export function runningTotal(): (amount: number) => number {
  // TODO
  throw new Error('not implemented');
}

/**
 * Returns a function that gives out ids with a prefix, counting from 1:
 *
 *     const nextId = idGenerator('DEP');
 *     nextId();   // 'DEP-1'
 *     nextId();   // 'DEP-2'
 *
 * Two generators made from the same function must not share their counter.
 */
export function idGenerator(prefix: string): () => string {
  // TODO
  throw new Error('not implemented');
}
