const fn = require('../lib/fn');
const { expect } = require('chai');

describe('fn', () => {
  describe('memoize', () => {
    it('should return a memoized function', () => {
      // tracks each call to f
      const calls = [];
      const f = x => {
        calls.push(x);
        return x;
      };
      const memo_f = fn.memoize(f);
      // should call the original function
      expect(memo_f(10)).to.eq(10);
      expect(memo_f(11)).to.eq(11);
      // additional calls, should be memoized
      memo_f(10);
      memo_f(11);
      expect(calls).to.deep.eq([10, 11]);
    });
  });
});
