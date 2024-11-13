/*
  Write a function that returns the nth fibonacci term
  
  Examples:
    nthFibonacciTerm(1) => 0
    nthFibonacciTerm(4) => 2
    nthFibonacciTerm(6) => 5

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function nthFibonacciTerm(nvalue) {
  let nthTerm = 0;
  let nextTerm = 1;
  for (let currentterm = 1; currentterm < nvalue; currentterm++) {
    const sumOfTwoNumbers = nthTerm + nextTerm;
    nthTerm = nextTerm;
    nextTerm = sumOfTwoNumbers;
  }
  return nthTerm;
}

function getMark(isItTrue) {
  return isItTrue ? '👍' : '👎';
}
function message(number, expected, actual, isExpected) {
  const inputSegment = 'given input is ' + number;
  const expectationSegment = ' and expected ' + expected;
  const actualSegment = ' output is ' + actual;
  const contextMessage = inputSegment + expectationSegment + actualSegment;
  console.log(getMark(isExpected) + contextMessage);
}

function nthFibonacciTermTest(number, expected) {
  const actual = nthFibonacciTerm(number);
  const isExpected = actual === expected;
  message(number, expected, actual, isExpected);

}

function tests() {
  nthFibonacciTermTest(1, 0);
  nthFibonacciTermTest(1, 0);
  nthFibonacciTermTest(3, 1);
  nthFibonacciTermTest(4, 2);
  nthFibonacciTermTest(5, 3);
}

tests();
