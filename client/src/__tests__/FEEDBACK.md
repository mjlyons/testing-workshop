- I'm a bit confused why Simulate.click() needs {button: 0}
- finishLoading() seems kinda risky -- is "Loading" not showing up because it's done loading... or it hasn't loaded yet?
- There's a "Login" button (in addition to the Submit button for some reason). It occurred to me that it's _really_ hard to use text to access this (Ideally I want to say, find the element with "Login" inside the form, but there's also a "Login" link in the header). Capybara has a an idea of "scope" -- you can limit a search inside a css selector, it would be cool if react-testing-library had the same idea. For example. RenderResult could have a "scope(css: string): RenderResult" function, so you would make a call like this:

const {scope} = render(<App />);
scope('form').getByText('Login').click()

That seems pretty readable and won't conflict with the Login link in the header.
