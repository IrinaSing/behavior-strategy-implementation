"use strict";

/**
 * builds an array counting up from 0 to `max`
 * @param {number} [max=0] - the number to count up to
 *  max must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from 0 to `max`
 */
const stub = (max = 0) => {
  return [];
};

/*
Strategy
1. Write if-else conditionals and return errors if the parameter does not match the description. 
2. Write a while loop or for-loop.
3.Create a variable that becomes greater by one with each iteration until it is equal to 'max'.
4. Create a new variable with array (that supposed to be returned). All numbers that counted up push to this array.
*/

//while-loop (works)
const timer1 = (max = 0) => {
  if (max < 0) {
    throw new RangeError("max is less than 0");
  } else if (typeof max !== "number") {
    throw new TypeError("max is not a number");
  } else if (!Number.isInteger(max)) {
    throw new Error("max is not an integer");
  }

  const result = [];
  let count = 0;
  while (count <= max) {
    result.push(count);
    count = count + 1;
    
  }
  return result;
};

//for-loop (works)
const timer2 = (max = 0) => {
  if (max < 0) {
    throw new RangeError("max is less than 0");
  } else if (typeof max !== "number") {
    throw new TypeError("max is not a number");
  } else if (!Number.isInteger(max)) {
    throw new Error("max is not an integer");
  }

  const result = [];
   for (let i = 0; i <= max; i++) {
    let count = i;
    result.push(count);
  }
  return result;
};



for (const solution of [
  secretSolution,
  //stub,
  //timer1, //works
  timer2,
]) {
  // the main test suite for the function
  describe(solution.name + ": counts up from 0", () => {
    it("default parameter", () => {
      const actual = solution();
      expect(actual).toEqual([0]);
    });
    it("if max = 0", () => {
      expect(solution(0)).toEqual([0]);
    });
    it("if max = 1", () => {
      expect(solution(1)).toEqual([0, 1]);
    });
    it("if max = 4", () => {
      expect(solution(4)).toEqual([0, 1, 2, 3, 4]);
    });
    it("should not accept Infinity", () => {
      expect(() => solution(Infinity)).toThrowError("max is not an integer");
    });
    it("should not accept the parameter which is not a number", () => {
      expect(() => solution(null)).toThrow("max is not a number");
    });
    it("should not accept the parameter which is not a number", () => {
      expect(() => solution("strings")).toThrow("max is not a number");
    });
    it("should not accept the negative number", () => {
      expect(() => solution(-4)).toThrowError(new RangeError("max is less than 0"));
    });
    it("should not work with decimals", () => {
      expect(() => solution(2.5)).toThrowError(new Error("max is not an integer"));
    });
    // write at least 5 more tests ...
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("max is not a number"); if (!Number.isInteger(a)) throw new Error("max is not an integer"); if (0 > a) throw new RangeError("max is less than 0"); const b = []; for (let c = 0; c <= a; c++)b.push(c); return b }
