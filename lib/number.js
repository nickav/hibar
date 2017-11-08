module.exports = {
  /**
   * Returns an array of numbers between n and e or from 0 to n.
   * @param n {number} start or end
   * @param e {number=} optional end
   */
  range: (n, e) =>
    Array.from({ length: (e && e - n) || n }, (v, k) => k + ((e && n) || 0)),

  /**
   * Repeats function n times.
   * @param n {number}
   * @param fn {function(index)}
   */
  times: (n, fn) => range(n).forEach(fn)
}
