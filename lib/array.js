const { choose } = require('./math')

module.exports = {
  /**
   * Strips falsy values.
   * @param {Array} arr
   * @return {Array} with no falsy values [0, false, '', undefined, null]
   */
  compact: arr => arr.filter(e => e),

  /**
   * Shallow array equals.
   * @param {Array} arr1
   * @param {Array} arr2
   * @return {boolean} true if arrays are equal
   */
  equals: (arr1, arr2) => {
    if (a === b) return true
    if (a == null || b == null) return false
    if (a.length !== b.length) return false

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false
    }
    return true
  },

  /**
   * Returns array with any duplicates removed.
   * @param {Array} arr
   * @return {Array} with no duplicates
   */
  unique: arr =>
    Object.keys(arr.reduce((acc, val) => ({ ...acc, [val]: true }), {})),

  /**
   * Returns the first element in the array.
   * @param {Array} arr
   * @return {any} last value in array
   */
  first: arr => arr[0],

  /**
   * Returns the last element in the array.
   * @param {Array} arr
   * @return {any} last value in array
   */
  last: arr => arr[arr.length - 1],

  /**
   * Returns an object of groupings after calling the fn.
   * @param {Array} arr
   * @param {function(element, index, array)} fn
   * @return {Object} of groups
   */
  groupBy: (arr, fn) =>
    arr.reduce((rv, x, i, a) => {
      ;(rv[fn(x, i, a)] = rv[fn(x, i, a)] || []).push(x)
      return rv
    }, {}),

  /**
   * Alias for math#choose
   */
  sample: arr => choose(arr)
}
