"use strict";

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */
const stub = (toReverse = "") => {
  return "";
};

/*
Strategy 1
  The function can not reverse directly, so we will use 3 methods:
  1. split - to split string on many strings one symbol in each.
  2. reverse - to reverse order of strings.
  3. join - to join strings into new one.
  Include control flow with conditios to throw error when the argument does not suit description.
*/

const reverser = (toReverse = "") => {
  if (typeof toReverse !== "string") {
    throw new TypeError("toReverse is not a string");
  }
  return toReverse.split("").reverse().join("");
};

/*
Strategy 2
1.Include control flow with conditios to throw error when the argument does not suit description.
2. Create new variable to assign the result of reversion.
3. The starting point of the loop will be (str.length - 1) which corresponds to the 
  last character of the string, "o"
  As long as i is greater than or equals 0, the loop will go on
  We decrement i after each iteration.
4. Assign symbols from old string to new one in a reversed way.
*/
//decrement
const reverser2 = (toReverse = "") => {
  if (typeof toReverse !== "string") {
    throw new TypeError("toReverse is not a string");
  }
  var newString = "";
  for (let i = toReverse.length - 1; i >= 0; i--) {
    newString += toReverse[i];
  }
  return newString;
};

/*
Strategy 3 recursion.
1. 1.Include control flow with conditios to throw error when the argument does not suit description.
2.For this solution, we will use two methods: the String.prototype.substr() method and the String.prototype.charAt() method.

The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
"hello".substr(1); // "ello"

The charAt() method returns the specified character from a string.
"hello".charAt(0); // "h"
*/

const reverser3 = (toReverse = "") => {
  if (typeof toReverse !== "string") {
    throw new TypeError("toReverse is not a string");
  }
  if (toReverse === "")
    return "";
  else
    return reverser3(toReverse.substr(1)) + toReverse.charAt(0);
};


for (const solution of [
  //secretSolution, //works
  // stub,
  //reverser, //works
  //reverser2, //works
  reverser3, //works
]) {
  // the main test suite for the function
  describe(solution.name + ": reverses a string", () => {
    it("default parameter is an empty string", () => {
      expect(solution()).toEqual("");
    });
    it("an empty string", () => {
      expect(solution("")).toEqual("");
    });
    it("all capital letters", () => {
      expect(solution("ASDF")).toEqual("FDSA");
    });
    it("small letters", () => {
      expect(solution("asdf")).toEqual("fdsa");
    });
    it("capital and small letters", () => {
      expect(solution("AsDF")).toEqual("FDsA");
    });
    it("works with space and other symbols", () => {
      expect(solution("ab cd!")).toEqual("!dc ba");
    });
    it("does not work with types other than string (number)", () => {
      expect(() => solution(1234)).toThrowError("toReverse is not a string");
    });
    it("does not work with types other than string (null)", () => {
      expect(() => solution(null)).toThrowError("toReverse is not a string");
    });
    // write at least 5 more tests ...
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
