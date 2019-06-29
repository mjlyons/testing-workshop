// using helpful utilities
import React from 'react'
// import ReactDOM from 'react-dom'
// you'll need these:
import {generate} from 'til-client-test-utils'
import {render, Simulate} from 'react-testing-library'
// note that til-client-test-utils is found in `client/test/til-client-test-utils`
import Login from '../login'

test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  const loginFormData = generate.loginForm()
  const handleSubmit = jest.fn()
  const {getByLabelText, container, getByText} = render(
    <Login onSubmit={handleSubmit} />,
  )

  const usernameNode = getByLabelText('Username')
  const passwordNode = getByLabelText('Password')
  const formNode = container.querySelector('form')
  const submitButtonNode = getByText('Login')

  usernameNode.value = loginFormData.username
  passwordNode.value = loginFormData.password

  // Act
  Simulate.submit(formNode)

  // Assert
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(loginFormData)
  expect(submitButtonNode.type).toBe('submit')
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-2%20(react-testing-library)&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
