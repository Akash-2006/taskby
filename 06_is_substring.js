/*
  Implement the below function that tells if a string is substring of another 
  string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isPresentAt(string, beginningIndex, subString) {

  for (let index = 0; index < subString.length; index++) {
    if (string[beginningIndex] !== subString[index]) {
      return false;
    }

    beginningIndex++;
  }

  return true;
}

function isSubstring(string, subString) {
  if (subString.length === 0) {
    return false;
  }

  for (let currentIndex = 0; currentIndex < string.length; currentIndex++) {
    const beginningIndex = currentIndex;

    if (isPresentAt(string, beginningIndex, subString)) {
      return true;
    }
  }

  return false;
}

function makeContextSegment(string, subString) {
  return "string is " + string + " substring is this " + subString;
}

function getMark(isItTrue) {
  return isItTrue ? '👍' : '👎';
}
function message(string, subString, expected, actual) {
  const expectedsegment = " expected output is : " + expected;
  const actualSegment = " result is " + actual;
  const isExpected = expected === actual
  const contextMessage = makeContextSegment(string, subString);
  const firstPartOfMessage = getMark(isExpected) + contextMessage;
  return firstPartOfMessage + expectedsegment + actualSegment;
}

function testSubString(string, subString, expected) {
  const actual = isSubstring(string, subString);
  console.log(message(string, subString, expected, actual));
}

function testAll() {
  testSubString('hello world', 'worl', true);
  testSubString('repeating iiiiiiii', 'iii', true);
  testSubString('not found', 'for', false);
  testSubString('Akash kumar', 'akash', false);
  testSubString('a', '', false);
  testSubString('for the', 'fot', false);
  testSubString('pradee', 'deep', false);
}
testAll();
