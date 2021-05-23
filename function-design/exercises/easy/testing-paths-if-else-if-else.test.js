"use strict";

/**
 * returns a description of how similar two values are
 *  if they are strictly equal -> 'strictly equal'
 *  if they have the same type -> 'same type'
 *  else -> 'totally different'
 * @param {any} val1
 * @param {any} val2
 * @returns {string} the values' solution
 */
const stub = (val1, val2) => {
  return "";
};

/*
Strategy

To use control flow (if - else if - else) to create 3 paths of code that will return message depending on how similar two values are.
*/

const tester = (val1, val2) => {
  if (val1 === val2) {
    return "strictly equal";
  } else if (typeof val1 === typeof val2) {
    return "same type";
  } else {
    return "totally different";
  }
};

for (const solution of [
  //secretSolution,
  // stub,
  tester, // it works
]) {
  describe(solution.name + ": determines how similar two values are", () => {
    describe("when values are strictly equal", () => {
      it("strings", () => {
        expect(solution("hello", "hello")).toEqual("strictly equal");
      });
      it("numbers", () => {
        expect(solution(1, 1.0)).toEqual("strictly equal");
        // 1, 1.0
      });
      it("booleans", () => {
        expect(solution(true, true)).toEqual("strictly equal");
      });
    });
    describe("when values have the same type", () => {
      it("strings", () => {
        expect(solution("hello", "goodbye")).toEqual("same type");
      });
      it("numbers", () => {
        expect(solution(1, 5)).toEqual("same type");
      });
      it("booleans", () => {
        expect(solution(true, false)).toEqual("same type");
      });
    });
    describe("when values are nothing alike", () => {
      it("obvious comparisons", () => {
        expect(solution(null, 4)).toEqual("totally different");
      });
      it("deceptive comparisons", () => {
        expect(solution("4", 4)).toEqual("totally different");
        // "4" and 4
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a, b) { let c = ""; return c = a === b ? "strictly equal" : typeof a == typeof b ? "same type" : "totally different", c }
