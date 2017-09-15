/** Clamps val between [min, max]. */
const clamp = (val, min, max) =>
  Math.max(Math.min(val, max), min)

/** Truncates n and keeps up to prec decimal digits. */
const trunc = (n, prec = 2) =>
  Math.round(n * Math.pow(10, prec)) / Math.pow(10, prec)

module.exports = {
  clamp,
  trunc
}
