/*
  Write a function that converts temperature from one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
  - C
  - F
  - K
  
  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'K', 98.6) => 310.15
    convert('F', 'C', -40) => -40
    convert('K', 'C', 100) => -173.15
    convert('K', 'F', 100) => -279.67

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isVaildFormat(format1, format2) {
    if (!(format1 === 'C' || format1 === 'F' || format1 === 'K')) {
        return false;
    }
    if (!(format2 == 'C' || format2 == 'F' || format2 == 'K')) {
        return false;
    }
}

function message(number, from, to, expected, actual) {
    const getMark = actual === expected ? "👍" : "👎";
    const expectedsegment = " expected output is : " + expected;
    const actualSegment = " result is " + actual;
    const firstHalfOfMessage = getMark + makeContextSegment(number, from, to);
    return firstHalfOfMessage + expectedsegment + actualSegment;
}

function testTemperatureConversions(from, to, value, expected) {
    const actual = convert(from, to, value);
    console.log(message(value, from, to, expected, actual));
}

function convert(from, to, value) {
    isVaildFormat(from, to);
}

function testAll() {
    // testTemperatureConversions('s', 's', 0, NaN);
    testTemperatureConversions('C', 's', "37", NaN);
    testTemperatureConversions('s', 'K', 98.6, NaN);
    // testTemperatureConversions('F', 'C', -40, -40);
    testTemperatureConversions('KC', '', 100, NaN);
    // testTemperatureConversions('K', 'F', 100, -279.67);
}

testAll();