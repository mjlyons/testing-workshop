// writing an assertion library
/*

Now let's implement our own assertion library.
Create a function called `expect` that accepts an "actual"
and returns an object of assertions.

Tip: I want to be able to use it like so:

> expect(actual).toBe(expected)

Then run this code with `node 2.todo`

> Make sure you're in the right directory!

 */

function expect(actualVal) {
  return {
    toBe(expectedVal) {
      if (actualVal !== expectedVal) {
        throw new Error(`${actualVal} is not equal to ${expectedVal}`)
      }
    },
  }
}

const {sum, subtract} = require('./math')

let result, expected

expect(sum(3, 7)).toBe(10)
expect(subtract(7, 3)).toBe(4)
