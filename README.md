# TypeScript Type Error Not Thrown on String and Number Addition

This code demonstrates a scenario where TypeScript does not throw a type error when a number is added to a string.  This is a common pitfall as one might expect TypeScript to enforce type safety more strictly in this case.  The result is string concatenation, not numerical addition, which can lead to unexpected behavior and bugs in your applications.

## Bug:

The `add` function is defined to take two numbers and return a number.  However, when the function is called with a string as the second argument, TypeScript does not throw a type error. Instead, the string and number are concatenated resulting in the string "12".

## Solution:

To prevent this, you can use type guards or input validation to ensure both inputs are numbers before performing the addition.