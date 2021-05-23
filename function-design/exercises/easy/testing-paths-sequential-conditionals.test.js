'use strict';

/**
 * converts two boolean values into a binary string
 *  true become "1", false becomes "0"
 * @param {boolean} [a=false] - the left value
 * @param {boolean} [b=false] - the right value
 * @returns {string}
 * @example
 *  // true, false --> '10'
 *  // false, false --> '00'
 *  // false, true --> '01'
 */
const stub = (a = false, b = false) => {
  return '';
};

/*

*/

const toBinary = (a = false, b = false) => {
  if (typeof a != "boolean") {
    throw new TypeError ('a is not boolean')
  };
  if (typeof b != "boolean") {
    throw new TypeError ('b is not boolean')
  };
  let binA = a === true ? "1" : "0";
  let binB = b === true ? "1" : "0";
  return binA + binB;
};


for (const solution of [
  // secretSolution,
  // stub,
  toBinary
]) {
  // this function only 4 possible combinations of arguments
  //  it's possible test them all and have 100% confidence in the function
  describe(solution.name + ': converts two booleans to binary', () => {
    it('true, true --> "11"', () => {
      const actual = solution(true, true);
      expect(actual).toEqual("11");
    });
    it('true, false --> "10"', () => {
      const actual = solution(true, false);
      expect(actual).toEqual('10');
    });
    it('false, true --> "01"', () => {
      const actual = solution(false, true);
      expect(actual).toEqual('01');
    });
    it('false, false --> "00"', () => {
      const actual = solution(false, false);
      expect(actual).toEqual('00');
    });
    describe(solution.name + ' throws error if argument is undefined', () => {
      it('if typeof of the 1st argument is undefined', () => {
      const actual = solution(undefined, true);
      expect(() => solution(actual)).toThrowError(new TypeError('a is not boolean'));
    });
      it('if typeof of the 2nd argument is undefined', () => {
        const actual = solution(false, undefined);
        expect(() => solution(actual)).toThrowError(new TypeError('b is not boolean'));
      });
  });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(c = false, a = false) { if ("boolean" != typeof c) { throw new TypeError("a is not boolean"); } if ("boolean" != typeof a) { throw new TypeError("b is not boolean"); } let b = ""; return b += c ? "1" : "0", b += a ? "1" : "0", b }
