const number = {
  /**
   * Returns an array of numbers between n and e or from 0 to n.
   *
   * @param {number} n - start or end
   * @param {number=} e - optional end
   * @return {array} - The numbers from [n, e) or [0, n).
   */
  range: (n, e) =>
    Array.from({ length: e ? e - n : n }, (v, k) => k + ((e && n) || 0)),

  /**
   * Repeats a function n times.
   *
   * @param {number} n
   * @param {function(index)} fn
   */
  times: (n, fn) => number.range(n).forEach(fn)
}

module.exports = number
