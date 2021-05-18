"use strict";

/**
 * reverses a string
 * @param {string} str - the string to reverse
 * @returns {string} the string, reversed
 */
/*
* using for-loop
const reverseString = (str) => {
  let reversed = "";
for (const letter of str) {
  reversed = letter + reversed;
}
  return reversed;
};

*example of using methods
function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
*/


//https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
const reverseString = (str) => {
  const splitString = str.split('');
  const reversed = splitString.reverse();
  const join = reversed.join('')
  return join;
};

describe("reverseString: reverses a string", () => {
  describe("can be used on its own", () => {
    it("returns an empty string for the empty string", () => {
      expect(reverseString("")).toEqual("");
    });
    it('"reverses" single characters', () => {
      expect(reverseString("f")).toEqual("f");
    });
    it("reverses non-empty strings", () => {
      expect(reverseString("table")).toEqual("elbat");
    });
    it("reverses palindromes", () => {
      expect(reverseString("racecar")).toEqual("racecar");
    });
  });
  describe("can be used as a callback for Array.map", () => {
    it("returns an empty array for the empty array", () => {
      const actual = [].map(reverseString);
      expect(actual).toEqual([]);
    });
    it("reverses all strings in an array", () => {
      const actual = ["1234", "uiop", "", "-|-"].map(reverseString);
      expect(actual).toEqual(["4321", "poiu", "", "-|-"]);
    });
    it("reverses an array of palindromes", () => {
      const actual = ["racecar", "-|-", "do geese see god"].map(reverseString);
      expect(actual).toEqual(["racecar", "-|-", "dog ees eseeg od"]);
    });
  });
});
