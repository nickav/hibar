const fn = {
  /**
   * Curries a funciton to add argument-level caching.
   *
   * @param {function} func
   * @param {function} keyFn - given the arguments, returns the cache key
   */
  memoize: (func, keyFn = args => JSON.stringify(args)) => {
    const memo = {}
    return function() {
      const key = keyFn(arguments)
      return key in memo ? memo[key] : (memo[key] = func.apply(this, arguments))
    }
  }
}

module.exports = fn
