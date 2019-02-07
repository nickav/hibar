/**
 * Curries a funciton to add argument-level caching.
 *
 * @param {function} func
 * @param {function} keyFn - given the arguments, returns the cache key
 */
export function memoize(func, keyFn = args => JSON.stringify(args)) {
  const memo = {};
  return function() {
    const key = keyFn(arguments);
    return key in memo ? memo[key] : (memo[key] = func.apply(this, arguments));
  };
}

/**
 * Ensures every argument to fn is truthy, otherwise fn will not be invoked.
 */
export function maybe(fn) {
  return function(...args) {
    if (args.length === 0) {
      return;
    }
    for (let arg of args) {
      if (arg == null) return;
    }
    return fn.apply(this, args);
  };
}

/**
 * Only allows fn to be invoked once.
 */
export function once(fn) {
  let done = false;

  return function() {
    return done ? void 0 : ((done = true), fn.apply(this, arguments));
  };
}

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
export function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

/**
 * Opposite of compose. Calls each function in order.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from left to right. For example, pipe(f, g, h) is identical to doing
 * (...args) => h(g(f(...args))).
 */
export function pipe(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return value => funcs.reduce((acc, fn) => fn(acc), value);
}

/**
 * Converts a node-styled callback function into a promise.
 *
 * @param {Function} fn - The function to convert
 * @return {Function} A function that when given args will call the original
 * function and append a callback will either reject with an error or resolve
 * with the rest of the arguments.
 */
export const promisify = fn => (...args) =>
  new Promise((resolve, reject) =>
    fn(...args.concat((err, ...rest) => (err ? reject(err) : resolve(...rest))))
  );

/** Source: https://davidwalsh.name/javascript-debounce-function */
export const debounce = (func, wait, immediate) => {
  let timeout;
  return function() {
    let context = this;
    let args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
