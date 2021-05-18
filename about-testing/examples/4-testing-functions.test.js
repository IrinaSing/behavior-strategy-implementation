'use strict';

/* testing functions

  most often you will be using `describe`, `it` and `expect` to test functions
  if you write pure functions and avoid side effects
  then functions can be fully described by their arguments and return values

  pure functions make easy testing:
  - actual value: the return value when some parameters are passed
  - expected value: the correct return value

  testing pure functions just means comparing these two values!

*/

/**
 * returns a reversed copy of the original array
 *  the original array is not modified
 *  the items in the array are not copied
 * @param {Array} arr - the array to reverse
 * @returns {Array} an new array with the same elements, in reverse order
 */
const reverseArray = (arr = []) => {
  const reversed = [];
  for (const item of arr) {
    reversed.unshift(item);
  }
  return reversed;

  // // another possible solution:
  // return [...arr].reverse();
};

describe('reverseArray should reverse an array', () => {
  it('has an empty array as default parameter', () => {
    const actual = reverseArray();
    const expected = [];
    expect(actual).toEqual(expected);
  });
  it('reverses an empty array', () => {
    const actual = reverseArray([]);
    const expected = [];
    expect(actual).toEqual(expected);
  });
  it('reverses an array of primitives', () => {
    const actual = reverseArray([1, '2', true, null, undefined]);
    const expected = [undefined, null, true, '2', 1];
    expect(actual).toEqual(expected);
  });
  it('reverses an array of objects', () => {
    const actual = reverseArray([{ a: 1 }, { b: 2 }, { c: 3 }]);
    const expected = [{ c: 3 }, { b: 2 }, { a: 1 }];
    expect(actual).toEqual(expected);
  });
  it('returns a new array', () => {
    // test for reference equality
    const toReverse = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const returned = reverseArray(toReverse);
    const areSameArray = toReverse === returned;
    expect(areSameArray).toEqual(false);
  });
  it('does not modify the original array', () => {
    // test for side-effects
    const toReverse = [{ a: 1 }, { b: 2 }, { c: 3 }];
    reverseArray(toReverse);
    expect(toReverse).toEqual([{ a: 1 }, { b: 2 }, { c: 3 }]);
  });
});
