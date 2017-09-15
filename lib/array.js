/**
 * Array helpers
 */

/** Strips falsy values. */
const compact = arr => arr.filter(e => e)

/** Shallow array equal. */
const equals = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false
  var intersection = arr1.filter(n => arr2.indexOf(n) !== -1)
  return intersection.length === arr1.length
}

/** Last element. */
const last = arr => arr[arr.length - 1]

const groupBy = (arr, fn) =>
  arr.reduce((rv, x) => {
    (rv[fn(x)] = rv[fn(x)] || []).push(x)
    return rv
  }, {})

module.exports = {
  compact,
  equals,
  groupBy,
  last
}
