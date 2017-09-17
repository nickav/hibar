/**
 * Converts a string into a url-friendly slug.
 * @param {string} str
 */
const slugify = str =>
  str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')

module.exports = {
  slugify
}
