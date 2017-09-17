/**
 * Clamps val between [min, max].
 * @param val {Number}
 * @param min {Number}
 * @param max {Number}
 */
const clamp = (val, min, max) => Math.max(Math.min(val, max), min)

/**
 * Truncates n and keeps up to prec decimal digits.
 * @param n {Number}
 * @param prec {Number} precision
 */
const trunc = (n, prec = 2) =>
  Math.round(n * Math.pow(10, prec)) / Math.pow(10, prec)

module.exports = {
  clamp,
  trunc
}
