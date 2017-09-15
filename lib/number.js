/** Returns an array of numbers between n and e. */
const range = (n, e) =>
  Array.from({ length: (e && e - n) || n }, (v, k) => k + ((e && n) || 0))

/** Repeats function n times. */
const times = (n, fn) => range(n).forEach(fn)

module.exports = {
  range,
  times
}
