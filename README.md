# Welcome to CTL Language Interface!

Hi there! 🌟 Welcome to the CTL Language Interface! This is a fun and easy guide to help you use the CTL language. Let's get started!

## How to Begin

1. Open the `index.html` file in your web browser. 📄
2. You'll see a big box where you can type your CTL code. 📝
3. Every time you press Enter, new boxes will appear for more code. Cool, right? 😎

## Commands You Can Use

### Alerts

Want to show an alert message? Use this:

```
alert Your message here
```

You can even use variables in the alert message by adding a `/` before them.

Example:
```
var greeting = 'Hello, World!'
alert /greeting
```

### Text Outputs

To show text on the screen, type this:

```
text Your text here
```

You can also use variables in the text by adding a `/` before them.

Example:
```
var message = 'This is a text output.'
text /message
```

### Links

Make clickable links with this command:

```
link URL LinkText
```

You can use variables for both the URL and the link text by adding a `/` before them.

Example:
```
var url = 'https://example.com'
var linkText = 'Click here'
link /url /linkText
```

### Functions

#### Making Functions

To create a function, use this:

```
function functionName() Function body
```

- `functionName` is the name of your function.
- `Function body` is what the function does. You can use the `print` function inside to show text.

Example:
```
function myFunc() print('Hello from myFunc')
```

#### Running Functions

To run a function you made, type this:

```
run functionName()
```

Example:
```
run myFunc()
```

### Variables

#### Making Variables

To make a variable, use this:

```
var variableName = value
```

- `variableName` is what you call your variable.
- `value` is what you give to the variable.

Example:
```
var greeting = 'Hello, World!'
```

#### Using Variables

You can use variables inside functions and other parts of your code.

Example:
```
function showGreeting() print(getVar('greeting'))
run showGreeting()
```

### Full Example

Here's an example that makes a variable, a function, and runs it:

```
var greeting = 'Hello, welcome to CTL!'
function greet() print(getVar('greeting'))
run greet()
```

## If Something Goes Wrong

If your code has a mistake (like trying to run a function that doesn't exist), a message will show up at the bottom of the page.

## Extra Info

- Make sure to type a valid line of code before pressing Enter.
- New boxes will appear as you add more lines of code.
- You can make lots of functions and run them in any order you like.

## The End

We hope you have fun with the CTL Language Interface. If you have any questions or need help, just ask!

Happy coding! 😊
