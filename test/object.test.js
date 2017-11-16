const object = require('../lib/object')
const { expect } = require('chai')

describe('object', () => {
  describe('map', () => {
    it('return a copy of the object', () => {
      const test = { a: 1, b: 2 }
      const copy = Object.map(test)
      expect(copy).not.to.eq(test)
      expect(copy.a).to.eq(test.a)
      expect(copy.b).to.eq(test.b)
    })
  })
})
