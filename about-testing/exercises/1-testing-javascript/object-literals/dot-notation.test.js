'use strict';

describe('dot notation', () => {
  describe('types of tasty treats', () => {
    const orite = 'bread';
    const obj = {
      fav: orite,
      wet: 'soup',
    };
    it('bread', () => {
      expect(obj.fav).toEqual('bread');
    });
    it('soup', () => {
      expect(obj.wet).toEqual('soup');
    });
  });
  describe('a menagerie', () => {
    const swimming = 'mackerel';
    const obj = {
      flying: 'crane',
      swimming: swimming,
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
