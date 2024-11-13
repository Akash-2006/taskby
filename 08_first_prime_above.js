/*
  Write a function that returns the first prime number above given number
  
  Examples:
    firstPrimeAbove(3) => 5
    firstPrimeAbove(0) => 2
    firstPrimeAbove(15) => 17

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isprime(number) {
  if(number < 2){
    return false;
  }
  for (let factorCandidate = 2; factorCandidate < number; factorCandidate++) {
    if(number % factorCandidate === 0){
      return false;
    }
  }
  return true;
}

function firstPrimeAbove(number) {
  let isNotFound = true;
  let primeCandidate = number;
  while (isNotFound) {
    primeCandidate++;
    isNotFound = !isprime(primeCandidate);
  }
  return primeCandidate;
}

function getMark(isItTrue) {
  return isItTrue ? '✅' : '❌';
}
function message(number, expected, actual, isExpected) {
  const inputSegment = 'given input is ' + number;
  const expectationSegment = ' and expected ' + expected;
  const actualSegment = ' output is ' + actual;
  const contextMessage = inputSegment + expectationSegment + actualSegment;
  console.log(getMark(isExpected) + contextMessage);
}

function isFirstPrimeAbove(number, expected) {
  const actual = firstPrimeAbove(number);
  const isExpected = actual === expected;
  message(number, expected, actual, isExpected);

}

function tests() {
  isFirstPrimeAbove(0, 2);
  isFirstPrimeAbove(1, 2);
  isFirstPrimeAbove(5, 7);
  isFirstPrimeAbove(3, 5);
  isFirstPrimeAbove(17, 19);
}

tests();
