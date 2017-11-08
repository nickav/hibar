const polyfill = require('../polyfill')
polyfill()
const { expect } = require('chai')

describe('polyfill', () => {
  describe('number', () => {
    describe('times', () => {
      it('should execute a block of code n times', () => {
        const n = 3
        const arr = []
        n.times(i => arr.push(i))
        expect(arr).to.deep.eq([0, 1, 2])
      })
    })
  })
})
