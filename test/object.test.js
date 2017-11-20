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

  describe('merge', () => {
    it('deeply merges objects', () => {
      const o1 = { a: { b: 10 } }
      const o2 = { a: { c: 4 } }
      const expected = { a: { b: 10, c: 4 } }
      expect(object.merge({}, o1, o2)).to.deep.eq(expected)
    })
  })
})
