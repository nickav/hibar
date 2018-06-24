const math = require('../lib/math');
const { expect } = require('chai');

describe('math', () => {
  describe('choose', () => {
    it('works with an array or arugments', () => {
      expect(math.choose([1])).to.eq(1);
      expect(math.choose(1)).to.eq(1);
    });
  });
});
