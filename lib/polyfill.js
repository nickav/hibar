const array = require('./array')
const math = require('./math')
const number = require('./number')
const object = require('./object')
const string = require('./string')

/** Auto-binds this as the first argument to the fn. */
function _this(fn) {
  return function () {
    return fn.apply(this, [this].concat(Array.from(arguments)))
  }
}

/**
 * Array shim
 */
Array.prototype.compact = _this(array.compact)
Array.prototype.equals = _this(array.equals)
Object.defineProperty(Array.prototype, 'last', {
  get: function() { return array.last(this) }
})
Array.prototype.groupBy = _this(array.groupBy)

const a = [1]
const b = [1]

console.log([null, false, undefined, '', 0].compact())
console.log(a.equals(b))
console.log(a.last)
