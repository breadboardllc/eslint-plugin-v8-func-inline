var RuleTester = require('eslint').RuleTester;
var rule = require('../../../lib/rules/v8-func-inline');

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

var ruleTester = new RuleTester();

var msg = 'This function is between 600 and 615 characters.' +
  'Functions 600 characters or less will be inlined by V8 and run faster';
ruleTester.run('v8-function-inline', rule, {
  valid: [{
    code: smaller.toString()
  }],
  invalid: [{
    code: larger.toString(),
    errors: [
      { message: msg }
    ]
  }]
});
