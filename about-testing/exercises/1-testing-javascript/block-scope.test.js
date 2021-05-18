'use strict';

describe('curly braces create a new scope', () => {
  describe('const is block scoped', () => {
    const a = 3;
    it('before block', () => expect(a).toEqual(3));
    {
      const a = 5;
      it('inside block', () => expect(a).toEqual(5));
    }
    it('after block', () => expect(a).toEqual(3));
  });
  describe('let is block scoped', () => {
    let a = 'hi';
    it('before block', () => expect(a).toEqual('hi'));
    {
      let a = 5;
      it('inside block', () => expect(a).toEqual(5));
    }
    it('after block', () => expect(a).toEqual('hi'));
  });
  describe('let is still block scoped', () => {
    let a = 'hi';
    it('before block', () => expect(a).toEqual('hi'));
    {
      a = 5;
      it('inside block', () => expect(a).toEqual(5));
    }
    it('after block', () => expect(a).toEqual(5));
  });
  describe('both are block scoped', () => {
    let x = 3;
    let y = 12;
    it('x before block', () => expect(x).toEqual(3));
    it('y before block', () => expect(y).toEqual(12));
    {
      x = 10;
      const y = 5 + x;
      it('x inside block', () => expect(x).toEqual(10));
      it('y inside block', () => expect(y).toEqual(15));
    }
    it('x after block', () => expect(x).toEqual(10));
    it('y after block', () => expect(y).toEqual(12));
  });
});
