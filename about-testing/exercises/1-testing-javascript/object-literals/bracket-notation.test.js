'use strict';

describe('bracket notation', () => {
  describe('types of tasty treats', () => {
    const key1 = 'dry';
    const key2 = 'wet';
    const obj = {};
    obj[key2] = 'soup';
    obj[key1] = 'bread';
    it('obj.wet', () => {
      expect(obj.wet).toEqual('soup');
    });
    it('obj.dry', () => {
      expect(obj[key1]).toEqual('bread');
    });
  });
  describe('a menagerie', () => {
    const motion = 'running';
    const fastAnimal = 'cheetah';
    const water = 'swimming';
    const obj = {
      swimming: 'mackerel',
    };
    obj[motion] = fastAnimal;
    obj['flying'] = 'crane';
    it('obj.flying', () => {
      expect(obj.flying).toEqual('crane');
    });
    it('obj.running', () => {
      expect(obj.running).toEqual(fastAnimal);
    });
    it('obj.swimming', () => {
      expect(obj[water]).toEqual('mackerel');
    });
  });
});
