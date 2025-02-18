# CTL Language Interface

Welcome to the CTL Language Interface! This guide will help you understand how to use the CTL language and the interactive coding interface.

## Getting Started

1. Open the `index.html` file in your web browser.
2. You will see a text area where you can enter your CTL code.
3. As you write and execute CTL code, additional text areas will be created for subsequent lines of code.

## Syntax and Commands

### Alerts

To display an alert message:

```
alert Your message here
```

Example:
```
alert Hello, World!
```

### Text Outputs

To display text on the page:

```
text Your text here
```

Example:
```
text This is a text output.
```

### Functions

#### Defining Functions

To define a function, use the following syntax:

```
function functionName() Function body
```

- `functionName` is the name of the function.
- `Function body` is the code that will be executed when the function is called. You can use the `print` function within the function body to output text.

Example:
```
function myFunc() print('Hello from myFunc')
```

#### Running Functions

To run a defined function, use the following syntax:

```
run functionName()
```

Example:
```
run myFunc()
```

### Variables

#### Declaring Variables

To declare a variable, use the following syntax:

```
var variableName = value
```

- `variableName` is the name of the variable.
- `value` is the value assigned to the variable.

Example:
```
var greeting = 'Hello, World!'
```

#### Using Variables

You can use variables within function bodies and other parts of your code.

Example:
```
function showGreeting() print(greeting)
run showGreeting()
```

### Full Example

Here is a complete example that defines a variable, a function, and runs it:

```
var greeting = 'Hello, welcome to CTL!'
function greet() print(greeting)
run greet()
```

## Error Handling

If there is an error in your code (e.g., trying to run an undefined function), a message will be displayed at the bottom of the page.

## Additional Information

- Make sure to enter a valid line of code before pressing Enter.
- The interface will automatically create new text areas as you add more lines of code.
- You can define multiple functions and run them in any order.

## Conclusion

We hope this guide helps you get started with the CTL Language Interface. If you have any questions or need further assistance, feel free to reach out.

Happy coding!
