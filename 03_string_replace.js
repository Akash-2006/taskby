/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno wornd'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function getCharacter(character, match, replacement){
  if(character === match){
    return replacement;
  } 

  return character;
}

function replace(text, match, replacement) {
  let replacedString = "";

  for (let index = 0; index < text.length; index++) {
    replacedString += getCharacter(text[index], match, replacement);
  }

  return replacedString;
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

function stringReplaceTester(text, match, replacement, expected) {
  const actual = replace(text, match, replacement);
  const isExpected = actual === expected;
  message(text, expected, actual, isExpected);

}

function testsAll() {
  stringReplaceTester('abcd', 'a', 'b', 'bbcd');
  stringReplaceTester('abbcd', 'b', 'a', 'aaacd');
  stringReplaceTester('', 'b', 'a', '');
  stringReplaceTester('abcd', 'b', '', 'acd');
  stringReplaceTester('abcd', '', 'a', 'abcd');
}

testsAll();
