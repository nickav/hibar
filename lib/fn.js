module.exports = {
  /**
   * Curries a funciton to add argument-level caching.
   * @param {function} fn
   * @param {function} keyFn given the arguments for fn, returns the cache key
   */
  memoize: (fn, keyFn = args => JSON.stringify(args)) => {
    const memo = {}
    return function() {
      const key = keyFn(arguments)
      return key in memo ? memo[key] : (memo[key] = func.apply(this, arguments))
    }
  }
}
