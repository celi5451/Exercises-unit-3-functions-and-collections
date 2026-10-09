# Exercises: unit 3, functions and collections

Complex IT Systems – Theory E2026 (40417)
Section 2 - backend development

Lessons 3.1 Higher-order functions and closures, 3.2 Arrays and strings.

Open this folder in VS Code, and in a terminal:

```
npm install
npm run build
npm start
```

The data is the same seven departments and twelve instructors as in the
unit 2 exercises, copied from the university database.

Fill in each `TODO`, uncomment the matching block in `src/index.ts`, build,
and compare with the expected result written beside each line.

---

## Task 1 – Array methods

`src/arrays.ts` · **no `for` loops in this file**

- `namesIn(deptName)` – filter, map, sort.
- `salaryBill(deptName)` – filter, then reduce. Remember reduce's second
  argument, the starting value.
- `bestPaid()` – reduce again, but keeping an instructor rather than a number.
- `firstBelow(salary)` – find. The return type says the answer may be
  missing, so the caller has to check. Look at how `index.ts` does it.
- `salaryReport(deptName)` – filter, map, a template literal, and join.
- `averageSalary(deptName)` – guard against an empty department before
  dividing.

The last line of the Task 1 block prints `instructors[0].name`. It must still
be `Srinivasan`: none of your functions may reorder the original array. If it
is not, find out which one did, and why `sort` is different from the others.

---

## Task 2 – Functions taken and returned

`src/higher-order.ts`

- `sumOf(items, pick)` takes a function that says *which number* to add up.
  Write the loop once, and let the caller decide the rest. In the lecture the
  function passed in returned true or false; this one returns a number.
- `inBuilding(building)` **returns a function**. The returned test still knows
  its building after `inBuilding` has finished. Use it with `filter`, as the
  runner does.
- `by(pick)` returns a comparison function for `sort`. Subtracting the two
  numbers gives all three answers sort needs at once.

Debug this one: put a breakpoint inside the function that `inBuilding`
returns, press F5, and look at the **Variables** panel. Above the local
variables there is a **Closure** section, holding `building`. That is the
scope the function kept.

---

## Task 3 – Closures with state

`src/closures.ts`

- `runningTotal()` returns a function that remembers the total so far.
- `idGenerator(prefix)` returns a function giving out `DEP-1`, `DEP-2`, …

Both keep something private: no other code can reach the total or the
counter, because the only way in is the returned function. Make two of each
and check that they count separately.

---

## If you finish early

- Write `firstOr(items, fallback)`: the first instructor, or the fallback
  when the array is empty. What does it return when the array is empty and
  the fallback is a different shape?
- `salaryReport` builds a string. Write a version returning `string[]` and
  see where `join` moves to.
- Rewrite `salaryBill` with a `for ... of` loop and compare the two. Which
  one reads better, and which one would you rather change later?
- `bestPaid` assumes the array is not empty. What is a better signature, and
  what does it cost the caller?

---

## Reference

- **[JS]** JavaScript Guide, MDN Web Docs: Functions (closures), Indexed collections
- **[JS]** JavaScript Reference: Array map, filter, find, reduce, sort, join
- **[TS]** The TypeScript Handbook: More on Functions (Function Type Expressions)
