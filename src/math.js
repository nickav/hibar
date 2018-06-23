/* */
// Constants
const DEGREES_TO_RADIANS = Math.PI / 180
const RADIANS_TO_DEGREES = 180 / Math.PI
const Math_min = Math.min
const Math_max = Math.max

/* */
// Helpers

function arrayArgs(args) {
  return arguments.length === 1 && Array.isArray(arguments[0])
    ? arguments[0]
    : arguments
}

function maybeArrayArgs(fn) {
  return function wrappedFn() {
    const args =
      arguments.length === 1 && Array.isArray(arguments[0])
        ? arguments[0]
        : arguments
    return fn.apply(null, args)
  }
}

/**
 * Returns the absolute value of a number.
 *
 * @param {number} x - the number
 * @return {number} - a positive number, or 0
 */
export function abs(x) {
  return x < 0 ? -x : x > 0 ? x : 0
}

/**
 * Get a random number between min and max (not including max).
 *
 * @param {number?} min - The minimum value to return.
 * @param {number?} max - The maximum value to return (not inclusive).
 * @return {number} a random number between [min, max)
 *
 * @example
 * random() // random number between 0 and 1
 * random(10) // random number between 0 and 10
 * random(5, 10) // random number between 5 and 10
 */
export function random(min = 0, max = 1) {
  if (arguments.length === 1) {
    max = min
    min = 0
  }

  return Math.random() * (max - min) + min
}

/**
 * Get a random integer (whole number) between min and max (not including max).
 *
 * @param {number} min - The minimum value to return.
 * @param {number} max - The maximum value to return (not inclusive).
 * @return {number} a random integer between [min, max)
 *
 * @example
 * random() // random integer between 0 and 1
 * random(10) // random integer between 0 and 10
 * random(5, 10) // random integer between 5 and 10
 */
export function randomInt() {
  return ~~random.apply(null, arguments)
}

/**
 * Picks a random value from the arguments or array.
 * Can be called with a list of arguments or a single array.
 *
 * @param {...any} values - any values
 * @return {any} a random value from the arguments or array.
 *
 * @example
 * choose(1, 2, 3) // returns one of the arguments randomly
 * choose([1, 2, 3]) // returns one of the values in the array randomly
 */
export function choose() {
  const data = arrayArgs(arguments)
  return data[~~(Math.random() * data.length)]
}

/**
 * Wrapper for Math.min that can be passed either an array of numbers or the
 * numbers as parameters.
 *
 * @param {...number} numbers - List of numbers
 * @return {number} The lowest value from numbers
 *
 * @example
 * min(1, 2, 3) // returns 1
 * min([0, 1, 2, 3]) // returns 0
 */
export const min = maybeArrayArgs(Math_min)

/**
 * Wrapper for Math.max that can be passed either an array of numbers or The
 * numbers as parameters.
 *
 * @param {...number} numbers - list of numbers
 * @return {number} The largest value from numbers
 * @api max
 *
 * @example
 * max(1, 2, 3) // returns 3
 * max([0, 1, 2, 4]) // returns 4
 */
export const max = maybeArrayArgs(Math_max)

/**
 * Returns a value between min and max (inclusive).
 *
 * @param {number} val - The value to clamp.
 * @param {number} min - The minimum the value is allowed to be.
 * @param {number} max - The maximum the value is allowed to be.
 * @return {number} The clamped value.
 */
export const clamp = (val, min, max) =>
  val < min ? min : val > max ? max : val

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
export function wrap(value, min, max) {
  const range = max - min

  if (range <= 0) return 0

  var result = (value - min) % range

  if (result < 0) result += range

  return result + min
}

/**
 * Calculates a linear (interpolation) value over t.
 *
 * @param {number} a - The start value.
 * @param {number} b - The end value.
 * @param {number} t - The percent to interpolate (typically between 0 and 1).
 * @return {number}
 */
export const lerp = (a, b, t) => (b - a) * t + a

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
export const mod = (a, b) => (a % b + b) % b

/**
 * Returns the sign of a number, indicating whether the number is positive,
 * negative or zero.
 *
 * @param {number} x
 * @return {number} 1, -1 or 0
 */
export const sign = x => (x > 0 ? 1 : x < 0 ? -1 : 0)

/**
 * Returns the result of either adding or subtracting by from n, until it
 * is equal to to.
 *
 * @param {number} n - The start value
 * @param {number} to - The end value
 * @param {number} by - The step value (amount to change start by).
 * @return {number}
 *
 * @example
 * // move the instance to the center of the room:
 * x = move(x, room.width / 2, speed)
 * y = move(y, room.height / 2, speed)
 */
export const move = (n, to, by = 1) =>
  n < to ? Math.min(n + by, to) : Math.max(n - by, to)

/**
 * Converts a number from radians to degrees.
 *
 * @param {number} rad
 * @return {number} the number in degrees
 * @example degrees(PI) // returns 180
 */
export const radtodeg = rad => rad * RADIANS_TO_DEGREES

/**
 * Converts a number from degrees to radians.
 *
 * @param {number} deg
 * @return {number} the number in radians
 * @example radians(180) // returns 3.14...
 */
export const degtorad = deg => deg * DEGREES_TO_RADIANS

/**
 * Find the angle of a segment from (x1, y1) -> (x2, y2).
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number} The angle, in radians.
 */
export const angleBetween = (x1, y1, x2, y2) => Math.atan2(y1 - y2, x2 - x1)

/**
 * Returns the euclidian distance between the two given set of coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number} The distance between the two sets of coordinates.
 */
export function distance(x1, y1, x2, y2) {
  const dx = x1 - x2
  const dy = y1 - y2
  return Math.sqrt(dx * dx + dy * dy)
}

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
export function distanceSquared(x1, y1, x2, y2) {
  const dx = x1 - x2
  const dy = y1 - y2
  return dx * dx + dy * dy
}

/**
 * Truncates n and keeps up to decimal digits.
 *
 * @param {number} n
 * @param {number} digits - number of decimal digits
 */
export function decimals(n, digits) {
  const factor = Math.pow(10, digits)
  return Math.round(n * factor) / factor
}
