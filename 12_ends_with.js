/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

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

function endsWith(string, substring) {
  let beginningIndex = string.length - substring.length;

  return isPresentAt(string, beginningIndex, substring);
}

function getMark(isItTrue) {
  return isItTrue ? '👍' : '👎';
}

function makeContextSegment(string, subString) {
  return "string is " + string + " ending is this " + subString;
}

function message(string, subString, expected, actual) {
  const expectedsegment = " expected output is : " + expected;
  const actualSegment = " result is " + actual;
  const isExpected = expected === actual
  const contextMessage = makeContextSegment(string, subString);
  const firstPartOfMessage = getMark(isExpected) + contextMessage;
  return firstPartOfMessage + expectedsegment + actualSegment;
}

function testEndsWith(string, subString, expected) {
  const actual = endsWith(string, subString);
  console.log(message(string, subString, expected, actual));
}

function testAll() {
  testEndsWith('hello world', 'worl', false);
  testEndsWith('repeating iiiiiiii', 'iii', true);
  testEndsWith('not found', 'for', false);
  testEndsWith('Akash kumar', 'akash', false);
  testEndsWith('a', '', true);
  testEndsWith('for the', 'fot', false);
  testEndsWith('for the', 'th', false);
  testEndsWith('for the', 'for the', true);

}

testAll();
