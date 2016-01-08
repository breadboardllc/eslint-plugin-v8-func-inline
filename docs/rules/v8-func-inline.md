# ESLint rule to warn if a function is near 600 characters (v8-func-inline)

Node.js's V8 optimizer (crankshaft) inlines the functions whose body length, including the comments, is less than 600 characters.

## Rule Details

This rule finds functions that could possibly be shortened to increase performance while running in V8 (Node.js).

The following patterns are considered warnings:

```js
// Function body greater than 600 characters and less than 615 characters
function larger (x, y){
  // Addition is one of the four elementary,
  // mathematical operation of arithmetic, with the other being subtractions,
  // multiplications and divisions. The addition of two whole numbers is the total
  // amount of those quantitiy combined. For example in the picture on the right,
  // there is a combination of three apples and two apples together making a total
  // of 5 apples. This observation is equivalent to the mathematical expression
  // "3 + 2 = 5"
  // Besides counting fruit, addition can also represent combining other physical object.
  // Extra!
  return(x + y);
}

```

The following patterns are not warnings:

```js
// Function body smaller than 600 characters
function smaller (x, y){
  // Addition is one of the four elementary,
  // mathematical operation of arithmetic with the other being subtraction,
  // multiplication and division. The addition of two whole numbers is the total
  // amount of those quantitiy combined. For example in the picture on the right,
  // there is a combination of three apples and two apples together making a total
  // of 5 apples. This observation is equivalent to the mathematical expression
  // "3 + 2 = 5"
  // Besides counting fruit, addition can also represent combining other physical object.
  return(x + y);
}

```

### Options

Set the max threshold for characters in your `.eslintrc` file
```javascript
rules : {
  "v8-func-inline/v8-func-inline" : [1, 615]
},
plugins: [
  "v8-func-inline"
]

```
## Further Reading
https://top.fse.guru/nodejs-a-quick-optimization-advice-7353b820c92e#.5zn6zjv94
