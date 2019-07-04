import {isPasswordAllowed, userToJSON} from '../auth'

test('isPasswordAllowed only allows some passwords', () => {
  // here's where I'll demo things for you :)
  expect(isPasswordAllowed('abcd12')).toBe(false)
  expect(isPasswordAllowed('abcdefg')).toBe(false)
  expect(isPasswordAllowed('1234567')).toBe(false)
  expect(isPasswordAllowed('abcd123')).toBe(true)
  expect(isPasswordAllowed('abc.123')).toBe(true)
})

test('userToJSON excludes secure properties', () => {
  // Here you'll need to create a test user object
  // pass that to the userToJSON function
  // and then assert that the test user object
  // doesn't have any of the properties it's not
  // supposed to.
  // Here's an example of a user object:
  const safeUser = {
    id: 'some-id',
    username: 'sarah',
    // ↑ above are properties which should
    // be present in the returned object
  }
  const user = {
    ...safeUser,
    // ↓ below are properties which shouldn't
    // be present in the returned object
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }

  expect(userToJSON(user)).toMatchObject(safeUser)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=auth%20util&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
