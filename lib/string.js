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
   * @param {string} str
   * @return {string}
   */
  capitalize: str => (str || '').charAt(0).toUpperCase() + (str || '').slice(1)
}

module.exports = string
