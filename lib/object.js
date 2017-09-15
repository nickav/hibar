/** Filters object based on fn. Similar to Array filter */
const filter = (obj, fn) =>
  Object.keys(obj)
    .filter(key => fn(key, obj[key], obj))
    .reduce((memo, key) => {
      memo[key] = obj[key]
      return memo
    }, {})

/** Strips falsy values. */
const compact = obj => filter(obj, (k, v) => v)

/** Returns a copy of obj with only keys. */
const pick = (obj, keys) =>
  keys.map(key => ([key, obj[key]]))
  .reduce((memo, e) => {
    memo[e[0]] = e[1]
    return memo
  }, {})

/** Shallow object diff, favors o2 on mismatch. */
const diff = (o1 = {}, o2 = {}) =>
  Object.keys(o2).reduce((diff, key) => {
    if (!key in o2) diff[key] = o2[key]
    if (o1[key] !== o2[key]) diff[key] = o2[key]
    return diff
  }, {})

const map = (obj, fn) => Object.keys(obj).map(key => fn(key, obj[key], obj))

module.exports = {
  filter,
  compact,
  pick,
  diff,
  map
}
