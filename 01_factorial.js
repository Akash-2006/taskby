/*
  Implement the below function to calculate the factorial of `number`.
  Examples:
    factorial(3) => 6
    factorial(5) => 120
    factorial(0) => 1

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function factorial(number) {
  let fact = 1;

  for (let currentNumber = number; currentNumber > 1; currentNumber--) {
    fact = fact * currentNumber;
  }

  return fact;
}

function getMark(isItTrue) {
  return isItTrue ? '👍' : '👎';
}
function message(number, expected, actual) {
  const given = "number " + number;
  const expectedsegment = " expected output is : " + expected;
  const actualSegment = " result is " + actual;
  return getMark(actual === expected) + given + expectedsegment + actualSegment;
}

function testFactroial(number, expected) {
  const actual = factorial(number);
  return message(number, expected, actual);
}

function testAll() {
  console.log(testFactroial(1, 1));
  console.log(testFactroial(2, 2));
  console.log(testFactroial(3, 6));
  console.log(testFactroial(4, 24));
}

testAll();
