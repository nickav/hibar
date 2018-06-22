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
  },

  /**
   * Ensures every argument to fn is truthy, otherwise fn will not be invoked.
   */
  maybe: function maybe(fn) {
    return function(...args) {
      if (args.length === 0) {
        return
      }
      for (let arg of args) {
        if (arg == null) return
      }
      return fn.apply(this, args)
    }
  },

  /**
   * Only allows fn to be invoked once.
   */
  once: function once(fn) {
    let done = false

    return function() {
      return done ? void 0 : ((done = true), fn.apply(this, arguments))
    }
  },

  /**
   * Composes single-argument functions from right to left. The rightmost
   * function can take multiple arguments as it provides the signature for
   * the resulting composite function.
   *
   * @param {...Function} funcs The functions to compose.
   * @returns {Function} A function obtained by composing the argument functions
   * from right to left. For example, compose(f, g, h) is identical to doing
   * (...args) => f(g(h(...args))).
   */
  compose: function compose(...funcs) {
    if (funcs.length === 0) {
      return arg => arg
    }

    if (funcs.length === 1) {
      return funcs[0]
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args)))
  },

  /**
   * Opposite of compose. Calls each function in order.
   *
   * @param {...Function} funcs The functions to compose.
   * @returns {Function} A function obtained by composing the argument functions
   * from left to right. For example, pipe(f, g, h) is identical to doing
   * (...args) => h(g(f(...args))).
   */
  pipe: function pipe(...funcs) {
    if (funcs.length === 0) {
      return arg => arg
    }

    if (funcs.length === 1) {
      return funcs[0]
    }

    return value => funcs.reduce((acc, fn) => fn(acc), value)
  },

  promisify: fn => (...args) =>
    new Promise((resolve, reject) => {
      fn(
        ...args.concat((err, ...rest) => {
          if (err) reject(err)
          resolve(...rest)
        })
      )
    })
}

module.exports = fn
