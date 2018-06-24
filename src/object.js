import merge from 'lodash.merge';

/**
 * Filters object based on fn. Similar to Array filter
 *
 * @param {object} obj
 * @param {function (key, val, obj)} fn
 * @return {object}
 */
export const filter = (obj, fn) =>
  Object.keys(obj)
    .filter(key => fn(key, obj[key], obj))
    .reduce((memo, key) => {
      memo[key] = obj[key];
      return memo;
    }, {});

/**
 * Strips falsy values (0, false, '', undefined, null).
 *
 * @param {object} obj
 * @return {object} Without falsy values.
 */
export const compact = obj => filter(obj, (k, v) => v);

/**
 * Returns a copy of obj with only keys.
 *
 * @param {object} obj
 * @param {array} keys - keys to include
 */
export const pick = (obj, keys) =>
  keys.map(key => [key, obj[key]]).reduce((memo, e) => {
    memo[e[0]] = e[1];
    return memo;
  }, {});

/**
 * Returns a copy of obj excluding keys. Opposite of pick.
 *
 * @param {object} obj
 * @param {array} excludeKeys - keys to exclude
 */
export const pluck = (obj, excludeKeys) =>
  filter(obj, k => !excludeKeys.includes(k));

/**
 * Shallow object diff, favors o2 on mismatch.
 *
 * @param {object} o1
 * @param {object} o2
 * @return {object}
 */
export const diff = (o1, o2) =>
  Object.keys(o2).reduce((diff, key) => {
    if (!key in o2) diff[key] = o2[key];
    if (o1[key] !== o2[key]) diff[key] = o2[key];
    return diff;
  }, {});

/**
 * Like array map, but for objects.
 *
 * @param {object} obj
 * @param {function (key, value, obj)} keyFn
 * @param {function (key, value, obj)} valFn
 * @return {object}
 */
export const map = (obj, keyFn = k => k, valFn = v => v) =>
  Object.keys(obj).reduce((memo, key) => {
    const val = obj[key];
    memo[keyFn(key, val, obj)] = valFn(val, key, obj);
    return memo;
  }, {});

export const mapKeys = (obj, keyFn = k => k) =>
  Object.keys(obj).reduce(
    (memo, key) => ((memo[keyFn(key, obj[key], obj)] = obj[key]), memo),
    {}
  );

export const mapValues = (obj, valFn = v => v) =>
  Object.keys(obj).reduce(
    (memo, key) => ((memo[key] = valFn(obj[key], key, obj)), memo),
    {}
  );

/**
 * Like Object.assign, but deeply merges properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @params {object} object The destination object.
 * @params {...object} [sources] The source Objects.
 * @return {object}
 */
export { merge };

/**
 * Shallow object equal.
 *
 * @param {object} o1
 * @param {object} o2
 * @return {boolean}
 */
export function equals(o1, o2) {
  const keys1 = Object.keys(o1);
  return (
    o1 === o2 ||
    (keys1.length === Object.keys(o2).length &&
      keys1.every(key => o1[key] === o2[key]))
  );
}
