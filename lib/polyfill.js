const array = require('./array')
const fn = require('./fn')
const math = require('./math')
const number = require('./number')
const object = require('./object')
const string = require('./string')

/* */
// Helpers

/** Auto-binds this as the first argument to fn. */
const _this = fn =>
  function() {
    return fn.apply(this, [this].concat(Array.from(arguments)))
  }

/** Sets every key of vals to obj. */
const _assign = (obj, vals) =>
  Object.keys(obj).forEach(key => (obj[key] = vals[key]))

/**
 * Registers every method in vals to obj.
 * If object is a prototype, binds all methods to _this.
 */
const register = (obj, vals) =>
  typeof obj.hasOwnProperty('prototype')
    ? _assign(obj, vals)
    : _assign(obj, object.map(vals, (k, v) => _this(v)))

/* */
// Polyfill
module.exports = () => {
  /* */
  // Array
  register(Array, array)
  register(
    Array.prototype,
    object.pick(array, ['compact', 'equals', 'groupBy'])
  )
  Object.defineProperty(Array.prototype, 'first', { get: _this(array.first) })
  Object.defineProperty(Array.prototype, 'last', { get: _this(array.last) })

  /* */
  // Fn
  register(Function.prototype, fn)

  /* */
  // Math
  register(Math, math)

  /* */
  // Number
  register(Number, number)
  Number.prototype.to = _this(number.range)
  Number.prototype.times = _this(number.times)

  /* */
  // Object
  register(Object, object)

  /* */
  // String
  register(String.prototype, string)
}
