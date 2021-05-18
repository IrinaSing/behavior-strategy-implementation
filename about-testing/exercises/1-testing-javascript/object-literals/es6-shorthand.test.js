'use strict';

describe('ES6 object literal shorthand', () => {
  describe('types of tasty treats', () => {
    const wet = 'soup';
    const dry = 'bread';
    const obj = { dry, wet };
    it('obj.dry', () => {
      expect(obj.dry).toEqual('bread');
    });
    it('obj.wet', () => {
      expect(obj.wet).toEqual('soup');
    });
  });
  describe('ES5, ES6', () => {
    const tall = 'tree';
    const obj = {
      tall,
      short: 'bush',
    };
    it('obj.short', () => {
      expect(obj.short).toEqual('bush');
    });
    it('obj.tall', () => {
      expect(obj.tall).toEqual('tree');
    });
  });
  describe('a menagerie', () => {
    const swimming = 'mackerel';
    const obj = {
      flying: 'crane',
      swimming,
      running: 'cheetah',
    };
    it('obj.flying', () => {
      expect(obj.flying).toEqual('crane');
    });
    it('obj.running', () => {
      expect(obj.running).toEqual('cheetah');
    });
    it('obj.swimming', () => {
      expect(obj.swimming).toEqual('mackerel');
    });
  });
});
