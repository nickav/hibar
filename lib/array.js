/**
 * Strips falsy values.
 * @param {Array} arr
 * @returns {Array} with no falsy values i.e. [0, false, '', undefined, null]
 */
const compact = arr => arr.filter(e => e)

/**
 * Shallow array equals.
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {boolean} true if arrays are equal
 */
const equals = (arr1, arr2) => {
  if (a === b) return true
  if (a == null || b == null) return false
  if (a.length != b.length) return false

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false
  }
  return true
}

/**
 * First element.
 * @param {Array} arr
 * @returns {any} last value in array
 */
const first = arr => arr[0]

/**
 * Last element.
 * @param {Array} arr
 * @returns {any} last value in array
 */
const last = arr => arr[arr.length - 1]

/**
 * Returns an object of groupings after calling the fn.
 * @param {Array} arr
 * @param {function(element, index, array)} fn
 */
const groupBy = (arr, fn) =>
  arr.reduce((rv, x, i, a) => {
    ;(rv[fn(x, i, a)] = rv[fn(x, i, a)] || []).push(x)
    return rv
  }, {})

module.exports = {
  compact,
  equals,
  first,
  last,
  groupBy
}
