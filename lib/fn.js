/**
 * Curries a funciton to add caching.
 * @param {function} fn
 * @param {function} keyFn given the arguments for fn, returns the cache key
 */
const memoize = (fn, keyFn = args => JSON.stringify(args)) => {
  const memo = {}
  return function() {
    const key = keyFn(arguments)
    return key in memo ? memo[key] : (memo[key] = func.apply(this, arguments))
  }
}

module.exports = {
  memoize
}
