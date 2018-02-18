const identity = {
  /**
   * @param {any} the value to check
   * @return {boolean} false if the value is null or undefined
   */
  isDefined(value) {
    return typeof value !== 'undefined'
  },

  /**
   * @param {any} the value to check
   * @return {boolean} true if value is an array
   */
  isArray(value) {
    return Array.isArray(value)
  },

  /**
   * @param {any} the value to check
   * @return {boolean} true if value is a function
   */
  isFunction(value) {
    return typeof value === 'function'
  },

  /**
   * @param {any} the value to check
   * @return {boolean} true if value is a number
   */
  isNumber(value) {
    return typeof value === 'number'
  },

  /**
   * @param {any} the value to check
   * @return {boolean} true if value is an object
   */
  isObject(value) {
    return Object(value) === value
  },

  /**
   * @param {any} the value to check
   * @return {boolean} true if value is a string
   */
  isString(value) {
    return typeof value === 'string'
  },

  /**
   * @param {any} the value to check
   * @param {Object} the class to check
   * @return {boolean} true if object is child of kind
   */
  isKindOf(object, kind) {
    return (
      object === kind ||
      object instanceof kind ||
      object.prototype instanceof kind
    )
  }
}

module.exports = Object.assign({}, identity, {
  typeof(value) {
    if (identity.isArray(value)) return 'array'
    if (identity.isFunction(value)) return 'function'
    if (identity.isObject(value)) return 'object'
    return typeof value
  }
})
