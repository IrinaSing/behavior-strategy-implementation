'use strict';

/**
 * returns true if the value is truthy
 * returns false if the value is falsy
 * @param {any} [val] value
 * @returns {boolean}
 */
const stub = (value) => {
  return boolean;
};

/*

*/

for (const solution of [
  secretSolution,
  // stub,
]) {
  /* Execution Paths
      when testing conditionals, you need to be test all paths
  */
  describe(solution.name + ': determines if a value is truthy', () => {
    // the if path
    describe('solution can identify truthy values', () => {
      it('strings', () => {
        const actual = solution("word");
        expect(actual).toEqual(true);
      });
      it('numbers', () => {
        const actual = solution(4);
        expect(actual).toEqual(true);
      });
      it('booleans', () => {
        expect(solution(true)).toEqual(true);
      });
    });
    // the else path
    describe('solution can identify falsy values', () => {
      it('strings', () => {
        const actual = solution("");
        expect(actual).toEqual(false);
      });
      it('numbers', () => {
        const actual = solution(0);
        expect(actual).toEqual(false);
      });
      it('booleans', () => {
        expect(solution(false)).toEqual(false);
      });
      it('undefined', () => {
        expect(solution(undefined)).toEqual(false);
      });
      it('null', () => {
        expect(solution(null)).toEqual(false);
    });
  });
});
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(value) { return value ? true : false; }

