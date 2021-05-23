"use strict";

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */
const stub = (text = "", lowerCase = true) => {
  return "";
};

/*
Strategy

Set up if-else control flow where the second parameter is a condition.
If condition is true - transform the string to lower case and return.
If false - transform the string to upper case case and return..
*/
const casify = (text = "", lowerCase = true) => {
  if (lowerCase === true) {
    return text.toLowerCase();
  } else {
    return text.toUpperCase();
  }
};

for (const solution of [
  //secretSolution,
  //stub,
  casify,
]) {
  describe(solution.name + ": sets a text to lower or upper case", () => {
    describe("the function's default parameters", () => {
      it("second parameter defaults to true", () => {
        expect(solution("asdf")).toEqual("asdf");
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
        expect(solution("ABCDE", true)).toEqual("abcde");
      });
      // when the text is all lower case
      it("when the text is all lower case", () => {
        expect(solution("abcde", true)).toEqual("abcde");
      });
      // when the text is mixed upper and lower case
      it("when the text is mixed upper and lower case", () => {
        expect(solution("aBCde", true)).toEqual("abcde");
      });
      // when the text contains punctuation
      it("when the text contains punctuation", () => {
        expect(solution("aBC-de.", true)).toEqual("abc-de.");
      });
      // when the text contains numbers
      it("when the text contains numbers", () => {
        expect(solution("aB12C5", true)).toEqual("ab12c5");
      });
    });
    describe("when set to upper case", () => {
      // when the text is an empty string
      it("when the text is an empty string", () => {
        expect(solution("", false)).toEqual("");
      });
      // when the text is all upper case
      it("when the text is all upper case", () => {
        expect(solution("ABCDE", false)).toEqual("ABCDE");
      });
      // when the text is all lower case
      it("when the text is all lower case", () => {
        expect(solution("abcde", false)).toEqual("ABCDE");
      });
      // when the text is mixed upper and lower case
      it("when the text is mixed upper and lower case", () => {
        expect(solution("AbcDE", false)).toEqual("ABCDE");
      });
      // when the text contains punctuation
      it("when the text contains punctuation", () => {
        expect(solution("aBC-de.", false)).toEqual("ABC-DE.");
      });
      // when the text contains numbers
      it("when the text contains numbers", () => {
        expect(solution("aB12C5", false)).toEqual("AB12C5");
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
