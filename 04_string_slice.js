/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function minimum(value1, value2){
  if(value1 < value2){
    return value1;
  }

  return value2;
}

function maximum(value1, value2){
  if(value1 < value2){
    return value2;
  }

  return value1;
}
function slice(text, start, end) {
  const startIndex = maximum(0, start);
  const endIndex = minimum(end, text.length - 1);
  let subString = "";

  for (let index = startIndex; index <= endIndex; index++) {
    subString += text[index];
  }
  
  return subString;
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

function sliceTester(text, start, end, expected) {
  const actual = slice(text, start, end);
  const isExpected = actual === expected;
  message(text, expected, actual, isExpected);

}

function tests() {
  sliceTester('abcd', 0, 3, 'abcd');
  sliceTester('abcd', 0, 0, 'a');
  sliceTester('abcd', -1, 0, 'a');
  sliceTester('abcd', -1, 10, 'abcd');
  sliceTester('abcd', 3, 10, 'd');
  sliceTester('', 3, 10, '');
}

tests();
