module.exports = {
  /**
   * Filters object based on fn. Similar to Array filter
   * @param obj {object}
   * @param fn {function (key, val, obj)}
   */
  filter: (obj, fn) =>
    Object.keys(obj)
      .filter(key => fn(key, obj[key], obj))
      .reduce((memo, key) => {
        memo[key] = obj[key]
        return memo
      }, {}),
  /**
   * Strips falsy values.
   * @param obj {object}
   */
  compact: function(obj) {
    return this.filter(obj, (k, v) => v)
  },

  /**
   * Returns a copy of obj with only keys.
   * @param obj {object}
   * @param keys {array} string keys
   */
  pick: (obj, keys) =>
    keys.map(key => [key, obj[key]]).reduce((memo, e) => {
      memo[e[0]] = e[1]
      return memo
    }, {}),

  /**
   * Returns a copy of obj excluding keys. Opposite of pick.
   * @param obj {object}
   * @param excludeKeys {array} string keys
   */
  pluck: function(obj, excludeKeys) {
    return this.filter(obj, k => !excludeKeys.includes(k))
  },

  /**
   * Shallow object diff, favors o2 on mismatch.
   * @param o1 {object}
   * @param o2 {object}
   */
  diff: (o1, o2) =>
    Object.keys(o2).reduce((diff, key) => {
      if (!key in o2) diff[key] = o2[key]
      if (o1[key] !== o2[key]) diff[key] = o2[key]
      return diff
    }, {}),

  /**
   * Like array map, but for objects.
   * @param obj {object}
   * @param fn function (key, val, obj)
   */
  map: (obj, fn) => Object.keys(obj).map(key => fn(key, obj[key], obj)),

  /**
   * Like array forEach, but for objects.
   * @param obj {object}
   * @param fn function (key, val, obj)
   */
  forEach: (obj, fn) => Object.keys(obj).forEach(key => fn(key, obj[key], obj)),

  /**
   * Shallow object equal.
   * @param o1 object
   * @param o2 object
   */
  equals: (o1, o2) => {
    const keys1 = Object.keys(o1)
    return (
      o1 === o2 ||
      (keys1.length === Object.keys(o2).length &&
        keys1.every(key => o1[key] === o2[key]))
    )
  }
}
