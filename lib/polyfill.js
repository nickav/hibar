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

/** Wraps every val in obj with _this. */
const thisAll = obj => object.map((k, v) => _this(v))

/** Sets every key of vals to obj. */
const register = (obj, vals) =>
  Object.keys(obj).forEach(key => (obj[key] = vals[key]))

/** Registers all vals to wrapped _this instance methods. */
const registerThis = (obj, fns) => register(obj, thisAll(fns))

/* */
// Polyfill
module.exports = () => {
  /* */
  // Array
  register(Array, array)
  registerThis(
    Array.prototype,
    object.pick(array, ['compact', 'equals', 'groupBy'])
  )
  Object.defineProperty(Array.prototype, 'first', { get: _this(array.first) })
  Object.defineProperty(Array.prototype, 'last', { get: _this(array.last) })

  /* */
  // Fn
  registerThis(Function.prototype, fn)

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
  registerThis(String.prototype, string)
}
