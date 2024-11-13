/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

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

function occurrences(string, substring) {
  let noOfOccurance = 0;
  // const lengthOfSubString = substring.length === 0 ? 1 : substring.length;

  if (substring.length === 0) {
    return 0;
  }

  for (let index = 0; index < string.length - substring.length + 1; index++) {
    noOfOccurance += isPresentAt(string, index, substring) ? 1 : 0;
  }

  return noOfOccurance;
}

function makeContextSegment(string, subString) {
  // contextSegment has to be written
  return "string is " + string + " substring is this " + subString;
}

function message(string, subString, expected, actual) {
  const getMark = actual === expected ? "👍" : "👎";
  const expectedsegment = " expected output is : " + expected;
  const actualSegment = " result is " + actual;
  const firstHalfOfMessage = getMark + makeContextSegment(string, subString);
  return firstHalfOfMessage + expectedsegment + actualSegment;
}

function testSubStringCount(string, subString, expected) {
  const actual = occurrences(string, subString);
  console.log(message(string, subString, expected, actual));
}

function testAll() {
  testSubStringCount('hello world', 'worl', 1);
  testSubStringCount('repeating iiiiiiii', 'iii', 6);
  testSubStringCount('not found', 'for', 0);
  testSubStringCount('Akash kumar', 'akash', 0);
  testSubStringCount('a', '', 0);
  testSubStringCount('for the', 'fot', 0);
}

testAll();
