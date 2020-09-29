import { choose } from './math';
import { isDefined } from './identity';

/**
 * Strips falsy values.
 *
 * @param {Array} arr
 * @return {Array} with no falsy values [0, false, '', undefined, null]
 */
export const compact = arr => arr.filter(e => e);

/**
 * Converts val to an array of non-falsy values.
 */
export const toArray = val =>
  Array.isArray(val) ? val : isDefined(val) ? [val] : [];

/**
 * Array flatten.
 */
export const flatten = arrs => Array.prototype.concat.apply([], arrs);

/**
 * Shallow array equals.
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {boolean} true if arrays are equal
 */
export const equals = (arr1, arr2) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
};

/**
 * Returns array with any duplicates removed.
 *
 * @param {Array} arr
 * @return {Array} with no duplicates
 */
export const unique = arr =>
  Object.keys(arr.reduce((acc, val) => (acc[val] = true && acc), {}));

/**
 * Returns the first element in the array.
 * @param {Array} arr
 * @return {any} last value in array
 */
export const first = arr => arr[0];

/**
 * Returns the last element in the array.
 *
 * @param {Array} arr
 * @return {any} last value in array
 */
export const last = arr => arr[arr.length - 1];

/**
 * Subtracts this array from the other array (e.g. a - b).
 *
 * @param {Array} arr
 * @param {Array} other
 * @return {Array} new array of arr excluding elements in other
 */
export const diff = (arr, other) => arr.filter(el => other.indexOf(el) < 0);

/**
 * Returns an object of groupings after calling the fn.
 *
 * @param {Array} arr
 * @param {function(element, index, array)} fn
 * @return {Object} of groups
 */
export const groupBy = (arr, fn) =>
  arr.reduce((rv, x, i, a) => {
    (rv[fn(x, i, a)] = rv[fn(x, i, a)] || []).push(x);
    return rv;
  }, {});

export const collect = (arr, equals = (a, b) => false) =>
  arr.slice(1).reduce((result, curr, i, arr) => {
    const group = result[result.length - 1];
    const prev = group[group.length - 1];

    if (equals(prev, curr, group, i, arr)) {
      group.push(curr);
    } else {
      result.push([curr]);
    }

    return result;
  }, arr.length ? [[arr[0]]] : []);

/**
 * Alias for math#choose
 */
export const sample = arr => choose(arr);

export const chunk = (array, size) => {
  const result = [];
  let index = 0;
  while (index < array.length) {
    result.push(array.slice(index, size + index));
    index += size;
  }
  return result;
};
