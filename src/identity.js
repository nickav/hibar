/**
 * @param {any} the value to check
 * @return {boolean} false if the value is null or undefined
 */
export function isDefined(value) {
  return typeof value !== 'undefined' && value !== null
}

/**
 * @param {any} value - the value to check
 * @return {boolean} true if value is an array
 * @api is_array
 */
export function isArray(value) {
  return Array.isArray(value)
}

/**
 * @param {any} value - the value to check
 * @return {boolean} true if value is a function
 * @api is_function
 */
export function isFunction(value) {
  return typeof value === 'function'
}

/**
 * @param {any} value - the value to check
 * @return {boolean} true if value is a number
 * @api is_number
 */
export function isNumber(value) {
  return typeof value === 'number'
}

/**
 * @param {any} value - the value to check
 * @return {boolean} true if value is an object
 * @api is_object
 */
export function isObject(value) {
  return Object(value) === value
}

/**
 * @param {any} value - the value to check
 * @param {Object} kind - the class to check
 * @return {boolean} true if value is child of kind
 * @api is_kindof
 */
export function isKindOf(value, kind) {
  return (
    value === kind ||
    value instanceof kind ||
    (value && value.prototype instanceof kind)
  )
}

/**
 * @param {any} value
 * @return {string} the type of value: [undefined, object, boolean, number, string, symbol, function, array]
 * @api is_kindof
 */
export function typeOf(value) {
  if (isArray(value)) return 'array'
  if (isFunction(value)) return 'function'
  if (isObject(value)) return 'object'
  if (value === null) return 'undefined'
  return typeof value
}
