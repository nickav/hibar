const number = require('../lib/number')
const { expect } = require('chai')

describe('number', () => {
  describe('range', () => {
    it('should produce a range from [0, n)', () => {
      expect(number.range(3)).to.deep.eq([0, 1, 2])
      expect(number.range(2)).to.deep.eq([0, 1])
    })

    it('should produce a range from [n, e)', () => {
      expect(number.range(3, 4)).to.deep.eq([3])
      expect(number.range(20, 23)).to.deep.eq([20, 21, 22])
    })
  })

  describe('times', () => {
    it('should execute a block of code n times', () => {
      const n = 3
      const arr = []
      number.times(n, i => arr.push(i))
      expect(arr).to.deep.eq([0, 1, 2])
    })
  })
})
