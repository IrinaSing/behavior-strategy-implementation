'use strict';

describe('primitives have a type and a value', () => {
  describe('null', () => {
    const primitive = null;
    it('type', () => {
      expect(typeof primitive).toEqual('object');
    });
    it('value', () => {
      expect(primitive).toEqual(null);
    });
  });
  describe('undefined', () => {
    const primitive = undefined;
    it('type', () => {
      expect(typeof primitive).toEqual('undefined');
    });
    it('value', () => {
      expect(primitive).toEqual(undefined);
    });
  });
  describe('Infinity', () => {
    const primitive = Infinity;
    it('type', () => {
      expect(typeof primitive).toEqual('number');
    });
    it('value', () => {
      expect(primitive).toEqual(Infinity);
    });
  });
  describe('4', () => {
    const primitive = 4;
    it('type', () => {
      expect(typeof primitive).toEqual('number');
    });
    it('value', () => {
      expect(primitive).toEqual(4);
    });
  });
  describe('"4"', () => {
    const primitive = '4';
    it('type', () => {
      expect(typeof primitive).toEqual('string');
    });
    it('value', () => {
      expect(primitive).toEqual('4');
    });
  });
  describe('false', () => {
    const primitive = false;
    it('type', () => {
      expect(typeof primitive).toEqual('boolean');
    });
    it('value', () => {
      expect(primitive).toEqual(false);
    });
  });
  describe('NaN', () => {
    const primitive = NaN;
    it('type', () => {
      expect(typeof primitive).toEqual('number');
    });
    it('value', () => {
      expect(primitive).toEqual(NaN);
    });
  });
});
