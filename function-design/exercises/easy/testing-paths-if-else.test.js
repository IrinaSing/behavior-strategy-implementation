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
Strategy

1. Create control flow if-else to set up 2 paths.
2. Cast value to boolean to check if it will return true or false.
3. Return boolean depending on the results of argument casting.
*/

const tester = (value) => {
  const toBoolean = Boolean(value);
  return toBoolean;
};

/*
Strategy 2

Use ternary operator
*/

const trueOrFalse = (value) => {
  return value ? true : false;
};

for (const solution of [
  // secretSolution,
  // stub,
  //tester, // it works
  trueOrFalse // it works
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

