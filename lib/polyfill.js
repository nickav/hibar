const array = require('./array')
const math = require('./math')
const number = require('./number')
const object = require('./object')
const string = require('./string')

/** Auto-binds this as the first argument to fn. */
function _this(fn) {
  return function () {
    return fn.apply(this, [this].concat(Array.from(arguments)))
  }
}

/** Sets every vals to obj. */
function register(obj, vals) {
  Object.keys(obj).forEach(key => obj[key] = vals[key])
}

/**
 * Array
 */
Array.prototype.compact = _this(array.compact)
Array.prototype.equals = _this(array.equals)
Object.defineProperty(Array.prototype, 'last', {
  get: function() { return array.last(this) }
})
Array.prototype.groupBy = _this(array.groupBy)

/**
 * Math
 */
register(Math, math)

/**
 * Number
 */
register(Number, number)
Number.prototype.to = _this(number.range)
Number.prototype.times = _this(number.times)

/**
 * Object
 */
register(Object, object)
