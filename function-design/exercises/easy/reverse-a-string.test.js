'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */
const stub = (toReverse='') => {
  return '';
};

/*
  your strategy goes here
*/

for (const solution of [
  secretSolution,
  // stub
]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string', () => {
      expect(solution('')).toEqual('');
    });
    it('all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    it('small letters', () => {
      expect(solution('asdf')).toEqual('fdsa');
    });
    it('capital and small letters', () => {
      expect(solution('AsDF')).toEqual('FDsA');
    });
    it('does not work with types other than string', () => {
      expect(solution(1234)).toThrowError('toReverse is not a string');
    });
    it('does not work with types other than string', () => {
      expect(solution(null)).toThrowError('toReverse is not a string');
    });
    // write at least 5 more tests ...
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
