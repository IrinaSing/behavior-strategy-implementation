"use strict";

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */
const stub = (text = "", lowerCase = true) => {
  return "";
};

/*
  Strategy 1
  1. Set a new variable for reversed text [reversed = ""].
  2. Reverse a string with for-loop and assign result to 'reversed'.
  3. Set a new variable for casified text [casified = ""].
  2. Set the control flow and use .toLowerCase or .toUppercase depending on lowerCase argument value to assign the result to 'casified' variable.
  return 
*/

// for-loop + toLowerCase method
const reverseAndCasify1 = (text = "", lowerCase = true) => {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i]; // or newString = newString + str[i];
  }

  let casified = "";
  if (lowerCase === true) {
    casified = reversed.toLowerCase();
  } else {
    casified = reversed.toUpperCase();
  }

  return casified;
};

/*
Strategy 2
1. Set up the control flow with parameter 2 as a condition.
2. If 'lowercase' is true, use methods .split, .join, .reverse and .toLowerCase
to return reversed lowercased string.
3. If 'lowercase' is false, use methods .split, .join, .reverse and .toUpperCase
to return reversed uppercased string.
*/
// method combo
const reverseAndCasify2 = (text = "", lowerCase = true) => {
  if (lowerCase === true) {
    return text.split("").reverse().join("").toLowerCase();
  } else {
    return text.split("").reverse().join("").toUpperCase();
  }
};

for (const solution of [
  //secretSolution,
  //stub,
  // reverseAndCasify1, // it works
  reverseAndCasify2, // it works
]) {
  describe(
    solution.name + ": reverses a string then sets to lower or upper case",
    () => {
      describe("the function's default parameters", () => {
        it("second parameter defaults to true", () => {
          expect(solution("asdf")).toEqual("fdsa");
        });
        it("first parameter defaults to an empty string", () => {
          expect(solution()).toEqual("");
        });
      });
      // write the tests indicated by the comments
      describe("when set to lower case", () => {
        // when the text is an empty string
        it("when the text is an empty string", () => {
          expect(solution("", true)).toEqual("");
        });
        // when the text is all upper case
        it("when the text is all upper case", () => {
          expect(solution("ABCDE", true)).toEqual("edcba");
        });
        // when the text is all lower case
        it("when the text is all lower case", () => {
          expect(solution("abcde", true)).toEqual("edcba");
        });
        // when the text is mixed upper and lower case
        it("when the text is mixed upper and lower case", () => {
          expect(solution("aBCde", true)).toEqual("edcba");
        });
        // when the text contains punctuation
        it("when the text contains punctuation", () => {
          expect(solution("aB, cde!", true)).toEqual("!edc ,ba");
        });
        // when the text contains numbers
        it("when the text contains numbers", () => {
          expect(solution("c1At451", true)).toEqual("154ta1c");
        });
      });
      describe("when set to upper case", () => {
        // when the text is an empty string
        it("when the text is an empty string", () => {
          expect(solution("", false)).toEqual("");
        });
        // when the text is all upper case
        it("when the text is all upper case", () => {
          expect(solution("ABCDE", false)).toEqual("EDCBA");
        });
        // when the text is all lower case
        it("when the text is all lower case", () => {
          expect(solution("abcde", false)).toEqual("EDCBA");
        });
        // when the text is mixed upper and lower case
        it("when the text is mixed upper and lower case", () => {
          expect(solution("aBCde", false)).toEqual("EDCBA");
        });
        // when the text contains punctuation
        it("when the text contains punctuation", () => {
          expect(solution("aB, cde!", false)).toEqual("!EDC ,BA");
        });
        // when the text contains numbers
        it("when the text contains numbers", () => {
          expect(solution("c1At451", false)).toEqual("154TA1C");
        });
      });
    }
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
