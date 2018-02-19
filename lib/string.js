const string = {
  /**
   * Converts a string into a url-friendly slug.
   *
   * @param {string} str
   * @return {string}
   */
  slugify: str =>
    (str || '')
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, ''),

  /**
   * Capitalizes the first letter in the string.
   *
   * e.g. 'hello, world!' -> 'Hello, world!'
   *
   * @param {string} str
   * @return {string}
   */
  capitalize: str => (str || '').charAt(0).toUpperCase() + (str || '').slice(1),

  /**
   * Capitalizes the first letter of each word in the string.
   *
   * e.g. 'hello, world!' -> 'Hello, World!'
   *
   * @param {string} str
   * @return {string}
   */
  titlecase: str =>
    (str || '').replace(
      /\w\S*/g,
      s => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase()
    ),

  /**
   * Replaces every occurance of search with replace found in str.
   *
   * @param {string} str
   * @param {string|RegExp} search
   * @param {string} replace
   * @return {string}
   */
  replaceAll: (str, search, replace) => (str || '').split(search).join(replace),

  /**
   * Returns an array of all matches found in str using regex.
   *
   * @param {string} str
   * @param {string|RegExp} regex
   * @return {Array[Array]} array of matches
   */
  matchAll: (str, regex) => {
    if (!regex.global) return [str.match(regex)]

    let match,
      output = []
    while ((match = regex.exec(str))) {
      output.push(match)
    }
    return output
  }
}

module.exports = string
