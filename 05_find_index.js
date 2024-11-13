/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function findIndex(text, target) {
  for (let index = 0; index < text.length; index++) {
    if(text[index] === target){
      return index;
    }
  }
  return -1;
}

function makeContextSegment(text, target) {
  return "text is " + text + " target is " + target;
}

function message(text, target, expected, actual) {
  const getMark = actual === expected ? "👍" : "👎";
  const expectedsegment = " expected output is : " + expected;
  const actualSegment = " result is " + actual;
  const firstHalfOfMessage = getMark + makeContextSegment(text, target);
  return firstHalfOfMessage + expectedsegment + actualSegment;
}

function testFindingIndex(text, target, expected) {
  const actual = findIndex(text, target);
  console.log(message(text, target, expected, actual));
}

function testAll() {
  testFindingIndex('hello world', 'o', 4);
  testFindingIndex('repeating iiiiiiii', 'i', 6);
  testFindingIndex('not found', 'z', -1);
  testFindingIndex('a', 'a', 0);
  testFindingIndex('1', '0', -1);
  testFindingIndex('10', '0', 1);
}

testAll();