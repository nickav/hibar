const { expect } = require('chai')
require('../polyfill')

describe('polyfill', () => {
  describe('bindings', () => {
    it('binds explicitly bounds methods correctly', () => {
      const n = 3
      const arr = []
      n.times(i => arr.push(i))
      expect(arr).to.deep.eq([0, 1, 2])
    })

    it('binds all prototype methods correctly', () => {
      expect('hello world'.slugify()).to.eq('hello-world')
    })

    it('binds getters', () => {
      expect([1, 2, 3].last).to.eq(3)
    })

    it('binds methods to base classes', () => {
      expect(Object.pick({ a: 1, b: 2 }, ['a'])).to.deep.eq({ a: 1 })
      expect(Math.approach(1, 2, 0.5)).to.eq(1.5)
    })
  })
})
