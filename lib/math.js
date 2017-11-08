/* */
// Constants
const DEGREES_TO_RADIANS = Math.PI / 180
const RADIANS_TO_DEGREES = 180 / Math.PI

/* */
// Library References
const Math_min = Math.min
const Math_max = Math.max
const random = Math.random

module.exports = {
  /**
   * Converts radians to degrees.
   *
   * @param {number} radians - The radians to convert
   * @return {number} The resulting degrees.
   */
  toDegrees: radians => radians * RADIANS_TO_DEGREES,

  /**
   * Converts degrees to radians.
   *
   * @param {number} degrees - The degrees to convert
   * @return {number} The resulting radians.
   */
  toRadians: degrees => degrees * DEGREES_TO_RADIANS,

  /**
   * Picks a random value from the arguments or array.
   * Can be called with a list of arguments or a single array.
   *
   * choose(1, 2, 3)
   * choose([1, 2, 3])
   *
   * @return {any} a random value from the arguments or array.
   */
  choose: function() {
    const data =
      arguments.length === 1 && typeof arguments[0] === 'object'
        ? arguments[0]
        : arguments
    return data[~~(random() * data.length)]
  },

  /**
   * Wrapper for Math.min that can be passed either an array of numbers or the
   * numbers as parameters.
   *
   * @return {number} The lowest value from those given.
   */
  min: function() {
    const data =
      arguments.length === 1 && typeof arguments[0] === 'object'
        ? arguments[0]
        : arguments
    return Math_min.apply(null, data)
  },

  /**
   * Wrapper for Math.max that can be passed either an array of numbers or The
   * numbers as parameters.
   *
   * @return {number} The largest value from those given.
   */
  max: function() {
    const data =
      arguments.length === 1 && typeof arguments[0] === 'object'
        ? arguments[0]
        : arguments
    return Math_max.apply(null, data)
  },

  /**
   * Returns a value between min and max (inclusive).
   *
   * @param {number} val - The value to clamp.
   * @param {number} min - The minimum the value is allowed to be.
   * @param {number} max - The maximum the value is allowed to be.
   * @return {number} The clamped value.
   */
  clamp: (val, min, max) => (val < min ? min : val > max ? max : val),

  /**
   * Ensures that the value always stays between min and max, by wrapping the
   * value around.
   *
   * If `max` is not larger than `min` the result is 0.
   *
   * @param {number} value - The value to wrap.
   * @param {number} min - The minimum the value is allowed to be.
   * @param {number} max - The maximum, should be larger than `min`.
   * @return {number} The wrapped value.
   */
  wrap: function(value, min, max) {
    const range = max - min

    if (range <= 0) return 0

    var result = (value - min) % range

    if (result < 0) result += range

    return result + min
  },

  /**
   * Get a random integer (whole number) between 0 and n (not including n).
   *
   * @param {number} n
   * @return {number} a random number between [0, n)
   */
  randomInt: n => ~~(random() * n),

  /**
   * Get a random number between min and max (not including max).
   *
   * @param {number} min - The minimum value to return.
   * @param {number} max - The maximum value to return (not inclusive).
   * @return {number} a random number between [min, max)
   */
  randomRange: (min, max) => min + random() * (max - min),

  /**
   * Get a random integer (whole number) between min and max (not including max).
   *
   * @param {number} min - The minimum value to return.
   * @param {number} max - The maximum value to return (not inclusive).
   * @return {number} a random integer between [min, max)
   */
  randomIntRange: (min, max) => ~~(min + random() * (max - min)),

  /**
   * Returns the horizontal x-component of the vector determined by the indicated
   * length and direction (in radians).
   *
   * @param {number} len - The length
   * @param {number} radians - The direction in radians
   * @return {number} The distance in the x direction.
   */
  lengthdirX: (len, radians) => Math.cos(radians) * len,

  /**
   * Returns the vertical y-component of the vector determined by the indicated
   * length and direction (in radians).
   *
   * @param {number} len - The length
   * @param {number} radians - The direction in radians
   * @return {number} The distance in the y direction.
   */
  lengthdirY: (len, radians) => Math.sin(radians) * len,

  /**
   * Calculates a linear (interpolation) value over t.
   *
   * @param {number} a - The start value.
   * @param {number} b - The end value.
   * @param {number} t - The percent to interpolate (typically between 0 and 1).
   * @return {number}
   */
  lerp: (a, b, t) => (b - a) * t + a,

  /**
   * Returns the euclidian distance between the two given set of coordinates.
   *
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @return {number} The distance between the two sets of coordinates.
   */
  distance: function(x1, y1, x2, y2) {
    var dx = x1 - x2
    var dy = y1 - y2

    return Math.sqrt(dx * dx + dy * dy)
  },

  /**
   * Returns the euclidean distance squared between the two given set of
   * coordinates (cuts out a square root operation before returning).
   *
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @return {number} The distance squared between the two sets of coordinates.
   */
  distanceSq: function(x1, y1, x2, y2) {
    var dx = x1 - x2
    var dy = y1 - y2

    return dx * dx + dy * dy
  },

  /**
   * Ensures that a never is larger than b. If a is negative, it wraps around.
   *
   * mod(1, 10) -> "1"
   * mod(-1, 10) -> "9"
   *
   * @param {number} a - The value to limit
   * @param {number} b - The max value
   * @return {number}
   */
  mod: (a, b) => (a % b + b) % b,

  /**
   * Returns the sign of a number, indicating whether the number is positive,
   * negative or zero.
   *
   * @param {number} x
   * @return {number} 1, -1, 0, -0 or NaN
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
   */
  sign: x => (x > 0) - (x < 0) || +x,

  /**
   * Returns the result of either adding or subtracting by from n, until it
   * is equal to to.
   *
   * @param {number} n - The start value
   * @param {number} to - The end value
   * @param {number} by - The step value (amount to change start by).
   * @return {number}
   */
  approach: (n, to, by = 1) =>
    n < to ? Math_min(n + by, to) : Math_max(n - by, to),

  /**
   * Find the angle of a segment from (x1, y1) -> (x2, y2).
   *
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @return {number} The angle, in radians.
   */
  angleBetween: (x1, y1, x2, y2) => Math.acos(y2 - y1, x2 - x1),

  /**
   * Truncates n and keeps up to decimal digits.
   *
   * @param {number} n
   * @param {number} digits - number of decimal digits
   */
  decimals: (n, digits) => {
    const factor = Math.pow(10, digits)
    return Math.round(n * factor) / factor
  }
}
