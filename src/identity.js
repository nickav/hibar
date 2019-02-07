/**
 * @param {any} the value to check
 * @return {boolean} false if the value is null or undefined
 */
export const isDefined = value =>
  typeof value !== 'undefined' && value !== null;

/**
 * @param {any} value - the value to check
 * @return {boolean} true if value is an array
 */
export const isArray = value => Array.isArray(value);

/**
 * @param {any} value - the value to check
 * @return {boolean} true if value is a function
 */
export const isFunction = value => typeof value === 'function';

/**
 * @param {any} value - the value to check
 * @return {boolean} true if value is a number
 */
export const isNumber = value => typeof value === 'number';

/**
 * @param {any} value - the value to check
 * @return {boolean} true if value is an object
 */
export const isObject = value => Object(value) === value;

/**
 * @param {any} value - the value to check
 * @param {Object} kind - the class to check
 * @return {boolean} true if value is child of kind
 */
export const isKindOf = (value, kind) =>
  value === kind ||
  value instanceof kind ||
  (value && value.prototype instanceof kind);

/**
 * @param {any} value
 * @return {string} the type of value: [undefined, object, boolean, number, string, symbol, function, array]
 */
export const typeOf = value => {
  if (isArray(value)) return 'array';
  if (isFunction(value)) return 'function';
  if (isObject(value)) return 'object';
  if (value === null) return 'undefined';
  return typeof value;
};
