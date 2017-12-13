const object = require('../lib/object')
const { expect } = require('chai')

describe('object', () => {
  describe('map', () => {
    it('returns a copy of the object', () => {
      const test = { a: 1, b: 2 }
      const copy = object.map(test)
      expect(copy).not.to.eq(test)
      expect(copy.a).to.eq(test.a)
      expect(copy.b).to.eq(test.b)
    })
  })

  describe('mapKeys', () => {
    it('works', () => {
      const test = { a: 1, b: 2 }
      const result = object.mapKeys(test, k => k + k)
      expect(result).to.deep.eq({ aa: 1, bb: 2 })
    })
  })

  describe('mapValues', () => {
    it('works', () => {
      const test = { a: 1, b: 2 }
      const result = object.mapValues(test, v => v + v)
      expect(result).to.deep.eq({ a: 2, b: 4 })
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
