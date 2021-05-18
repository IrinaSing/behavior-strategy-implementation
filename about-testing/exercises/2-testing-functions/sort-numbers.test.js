'use strict';

/**
 * Sorts an array of numbers from smallest to largest.
 * Returns a new array without modifying the original array.
 * Does not need to support: NaN, Infinity, -Infinity.
 *
 * @param {number[]} [arrOfNumbers=[]] - The array of numbers to sort.
 * @returns {number[]} A new array with the same numbers, but sorted.
 * @example
 *
 * sortNumbers([1.5, 1, -1.5, 0, -1]);
 * // -> [-1.5, -1, 0, 1, 1.5]
 *
 * @example
 * sortNumbers([-1, 0, 1]);
 * // -> [-1, 0, 1]
 */
const sortNumbers = (arrOfNumbers = []) => {
  // create a copy of the argument to avoid side-effects
  const copiedAndSorted = [...arrOfNumbers];

  // sort the elements in the copied array
  copiedAndSorted.sort((a, b) => a - b);

  // return the copied & sorted array of numbers
  return copiedAndSorted;
};

describe('sortNumbers sorts an array of numbers', () => {
  // test positive numbers
  describe('should work with positive numbers', () => {
    it('it works with positive numbers', () => {
      const actual = sortNumbers([2, 0, 56, 4]);
      const expected = [0, 2, 4, 56];
      expect(actual).toEqual(expected);
    })
  });
  // test negative numbers
  describe('should work with negative numbers', () => {
    it('it works with negative numbers', () => {
      const actual = sortNumbers([0, 3, -34, -4]);
      const expected = [-34, -4, 0, 3];
      expect(actual).toEqual(expected);
    })
  });
  // test decimal numbers
  describe('should work with decimal numbers', () => {
    it('it works with decimal numbers', () => {
      const actual = sortNumbers([0.3, 0.2, 0.22, -0.22]);
      const expected = [-0.22, 0.2, 0.22, 0.3];
      expect(actual).toEqual(expected);
    })
  });
  // test everything all together
  describe('all together', () => {
    it('all together', () => {
      const actual = sortNumbers([3, 0, 0.22, -0.22]);
      const expected = [-0.22, 0, 0.22, 3];
      expect(actual).toEqual(expected);
    })
  });
  // test for side-effects
  describe('testing for side-effects', () => {
    it('does not modify the original array', () => {
      const toModify = ([0.3, NaN, 0.22, -0.22]);
        sortNumbers(toModify);
        expect(toModify).toEqual([0.3, NaN, 0.22, -0.22]);
    })
  });
});

