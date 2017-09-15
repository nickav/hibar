const range = (n, e) => Array.from(
  { length: (e && e - n || n) },
  (v, k) => k + (e && n || 0)
)

const times = (n, fn) => range(n).forEach(fn)

module.exports = {
  range,
  times
}
