/**
 * Converts a string into a url-friendly slug.
 * @param {string} str
 */
const slugify = str =>
  (str || '')
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')

const capitalize = str =>
  (str || '').charAt(0).toUpperCase() + (str || '').slice(1)

module.exports = {
  slugify
}
