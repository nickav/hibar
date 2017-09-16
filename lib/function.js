/** Curries a funciton to add caching. */
const memoize = (func, keyFn = args => JSON.stringify(args)) => {
    const memo = {};
    return function() {
        const key = keyFn(arguments);
        return key in memo
            ? memo[key]
            : (memo[key] = func.apply(this, arguments));
    };
}

module.exports = {
  memoize
}
