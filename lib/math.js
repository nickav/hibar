const DEGREES_TO_RADIANS = Math.PI / 180
const RADIANS_TO_DEGREES = 180 / Math.PI

function toDegrees(radians) {
  return radians * RADIANS_TO_DEGREES
}

function toRadians(degrees) {
  return degrees * DEGREES_TO_RADIANS
}

/**
 * Picks a random value from the arguments or array.
 * Can be called with a list of arguments or a single array.
 * 
 * choose(1, 2, 3)
 * choose([1, 2, 3])
 */
function choose() {
  const data = (arguments.length === 1 && typeof arguments[0] === 'object') ? arguments[0] : arguments
  return data[Math.floor(Math.random() * data.length)]
}

    /**
    * Variation of Math.min that can be passed either an array of numbers or the numbers as parameters.
    *
    * Prefer the standard `Math.min` function when appropriate.
    *
    * @method Phaser.Math#min
    * @return {number} The lowest value from those given.
    * @see {@link http://jsperf.com/math-s-min-max-vs-homemade}
    */
function min() {
  const data = (arguments.length === 1 && typeof arguments[0] === 'object') ? arguments[0] : arguments

  for (var i = 1, min = 0, len = data.length; i < len; i++) {
      if (data[i] < data[min]) {
          min = i;
      }
  }

  return data[min];
}

    /**
    * Variation of Math.max that can be passed either an array of numbers or the numbers as parameters.
    *
    * Prefer the standard `Math.max` function when appropriate.
    *
    * @return {number} The largest value from those given.
    * @see {@link http://jsperf.com/math-s-min-max-vs-homemade}
    */
function max() {
  const data = (arguments.length === 1 && typeof arguments[0] === 'object') ? arguments[0] : arguments
  for (var i = 1, max = 0, len = data.length; i < len; i++) {
      if (data[i] > data[max]) {
          max = i;
      }
  }

  return data[max];
}

/**
 * Returns a value between min and max (inclusive).
 * @param {number} val
 * @param {number} min
 * @param {number} max
 */
function clamp(val, min, max) {
  return ( val < min ) ? min : ( ( val > max ) ? max : val )
}

/**
 * Ensures that the value always stays between min and max, by wrapping the value around.
 *
 * If `max` is not larger than `min` the result is 0.
 *
 * @param {number} value - The value to wrap.
 * @param {number} min - The minimum the value is allowed to be.
 * @param {number} max - The maximum the value is allowed to be, should be larger than `min`.
 * @return {number} The wrapped value.
 */
function wrap (value, min, max) {
  var range = max - min;

  if (range <= 0) return 0;

  var result = (value - min) % range;

  if (result < 0) result += range;

  return result + min;
}


/**
 * Returns the sign of x. 1 if x is positive, -1 if x is negative and 0 if x is
 * 0.
 * @param {number} x
 * @return {number} 0, -1 or 1
 */
function sign(x) {
  return ( x < 0 ) ? -1 : ( ( x > 0 ) ? 1 : 0 )
}

function randomInt(n) {
  return ~~(Math.random() * n)
}

function randomRange(min, max) {
  return min + Math.random() * (max - min)
}

function randomIntRange(min, max) {
  return min + Math.random() * (max - min)
}

function lengthdirX(len, dir) {
  return Math.cos(dir) * len;
}

function lengthdirY(len, dir) {
  return Math.sin(dir) * len;
}

function lerp(a, b, t) {
  return (b - a) * t + a;
}

/**
 * Returns the euclidian distance between the two given set of coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number} The distance between the two sets of coordinates.
 */
function distance(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;

  return Math.sqrt(dx * dx + dy * dy);
}

function distanceSq(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;

  return dx * dx + dy * dy;
}

// TODO: mean, mode, median

/** Modulos with negative numbers. */
function mod(a, b) {
  return (a % b + b) % b;
}

function approach(n, to, by = 1) {
  return n < to ? Math.min(n + by, to) : Math.max(n - by, to)
}

/**
 * Find the angle of a segment from (x1, y1) -> (x2, y2).
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number} The angle, in radians.
 */
function angleBetween(x1, y1, x2, y2) {
  return Math.acos(y2 - y1, x2 - x1)
}

/**
 * Truncates n and keeps up to prec decimal digits.
 * @param {number} n
 * @param {number} digits - number of decimal digits
 */
const truncate = (n, digits = 2) =>
  Math.round(n * Math.pow(10, digits)) / Math.pow(10, digits)

module.exports = {
  clamp,
  truncate
}
