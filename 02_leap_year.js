/*
  Implement the below function that tells if a given year is leap or not.
  Examples:
    isLeapYear(1900) => false
    isLeapYear(2020) => true
    isLeapYear(2001) => false

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisibleBy(dividend, divisor){
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  const isDivisibleBy400 = isDivisibleBy(year, 400);
  const isDivisibleBy4 = isDivisibleBy(year, 4);
  const isDivisibleBy100 = isDivisibleBy(year, 100);  
  if(isDivisibleBy400){
    return true;
  }

  return !isDivisibleBy100 && isDivisibleBy4;
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

function isLeapTester(number, expected) {
  const actual = isLeapYear(number);
  const isExpected = actual === expected;

  message(number, expected, actual, isExpected);
}

function tests() {
  isLeapTester(1, false);
  isLeapTester(4, true);
  isLeapTester(100, false);
  isLeapTester(400, true);
  isLeapTester(2000, true);
}

tests();
