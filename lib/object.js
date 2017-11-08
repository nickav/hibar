const object = {
  /**
   * Filters object based on fn. Similar to Array filter
   *
   * @param {object} obj
   * @param {function (key, val, obj)} fn
   * @return {object}
   */
  filter: (obj, fn) =>
    Object.keys(obj)
      .filter(key => fn(key, obj[key], obj))
      .reduce((memo, key) => {
        memo[key] = obj[key]
        return memo
      }, {}),

  /**
   * Strips falsy values (0, false, '', undefined, null).
   *
   * @param {object} obj
   * @return {object} Without falsy values.
   */
  compact: obj => object.filter(obj, (k, v) => v),

  /**
   * Returns a copy of obj with only keys.
   *
   * @param {object} obj
   * @param {array} keys - keys to include
   */
  pick: (obj, keys) =>
    keys.map(key => [key, obj[key]]).reduce((memo, e) => {
      memo[e[0]] = e[1]
      return memo
    }, {}),

  /**
   * Returns a copy of obj excluding keys. Opposite of pick.
   *
   * @param {object} obj
   * @param {array} excludeKeys - keys to exclude
   */
  pluck: (obj, excludeKeys) =>
    object.filter(obj, k => !excludeKeys.includes(k)),

  /**
   * Shallow object diff, favors o2 on mismatch.
   *
   * @param {object} o1
   * @param {object} o2
   * @return {object}
   */
  diff: (o1, o2) =>
    Object.keys(o2).reduce((diff, key) => {
      if (!key in o2) diff[key] = o2[key]
      if (o1[key] !== o2[key]) diff[key] = o2[key]
      return diff
    }, {}),

  /**
   * Like array map, but for objects.
   *
   * @param {object} obj
   * @param {function (key, value, obj)} fn
   * @return {object}
   */
  map: (obj, fn) =>
    Object.keys(obj).reduce((memo, key) => {
      memo[key] = fn(key, obj[key], obj)
      return memo
    }, {}),

  /**
   * Shallow object equal.
   *
   * @param {object} o1
   * @param {object} o2
   * @return {boolean}
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

module.exports = object
