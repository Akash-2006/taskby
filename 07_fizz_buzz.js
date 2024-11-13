/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisible(dividend, divisor){
  return dividend % divisor === 0;
}
function fizzBuzz(number) {
  const isDivisbleBy5 = isDivisible(number, 5);
  const isDivisbleBy3 = isDivisible(number, 3);
  const isDivisbleBy15 = isDivisible(number, 15);

  if (isDivisbleBy15) {
    return "fizzbuzz";
  }

  if (isDivisbleBy3) {
    return "fizz";
  }

  if (isDivisbleBy5) {
    return "buzz";
  }

  return "" + number;
}

function makeContextSegment(number) {
  return "number is " + number;
}

function message(number, expected, actual) {
  const getMark = actual === expected ? "👍" : "👎";
  const expectedsegment = " expected output is : " + expected;
  const actualSegment = " result is " + actual;
  const firstHalfOfMessage = getMark + makeContextSegment(number);
  return firstHalfOfMessage + expectedsegment + actualSegment;
}

function testFizzBuzz(number, expected) {
  const actual = fizzBuzz(number);
  console.log(message(number, expected, actual));
}

function testAll() {
  testFizzBuzz(1, '1');
  testFizzBuzz(0, 'fizzbuzz');
  testFizzBuzz(3, 'fizz');
  testFizzBuzz(5, 'buzz');
  testFizzBuzz(10, 'buzz');
  testFizzBuzz(15, 'fizzbuzz');
}

testAll();
