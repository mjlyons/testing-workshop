// the most fundamental test

/*

write a test that reveals the bug.
Write code that throws an error with a helpful message about the bug,
but only if there's a bug.
So... if (calling sum with some numbers doesn't return the right thing) {
  then throw an error with a helpful message
}

Then run this code with `node 1.todo`

> Make sure you're in the right directory!

Bonus, write another test that would throw an
error if the subtract function were to have a bug

*/

// sum is intentionally broken so you can see errors in the tests
const sum = (a, b) => a + b
const subtract = (a, b) => a - b

const assertEq = (actual, expected, msg) => {
  if  (actual === expected) {
    console.log(`PASS: ${msg}`);
  } else {
    throw new Error(`${msg} (expected='${expected}', actual='${actual}')`);
  }
}

assertEq(sum(1, 2), 3, 'Adding two integers')
assertEq(subtract(3, 2), 1, 'Subtracting integer from another integer');
