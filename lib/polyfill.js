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

/** Similar to Object assign, but won't overwrite existing properties. */
const safeAssign = (obj, vals) =>
  Object.keys(vals).forEach(key => {
    if (!(key in obj)) obj[key] = vals[key]
    else console.log(`Warning: could not overwrite ${obj} ${key}`)
  })

/**
 * Registers every method in vals to obj.
 * If object is a prototype, binds all methods to _this.
 */
const register = (obj, vals) =>
  typeof obj.hasOwnProperty('prototype')
    ? safeAssign(obj, vals)
    : safeAssign(obj, object.map(vals, (k, v) => _this(v)))

/* */
// Polyfill
module.exports = () => {
  /* */
  // Array
  register(Array, array)
  register(
    Array.prototype,
    object.pick(array, ['compact', 'choose', 'equals', 'groupBy'])
  )
  Object.defineProperty(Array.prototype, 'first', { get: _this(array.first) })
  Object.defineProperty(Array.prototype, 'last', { get: _this(array.last) })

  /* */
  // Fn
  register(Function.prototype, fn)

  /* */
  // Math
  register(Math, object.pluck(math, ['min', 'max']))
  // forcibly overwrite built-in math functions
  Math.min = math.min
  Math.max = math.max

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
