const string = require('../lib/string');
const { expect } = require('chai');

describe('string', () => {
  describe('slugify', () => {
    it('slugs', () => {
      const str = ' Hello there, &%\n   1 good sir! ';
      const expected = 'hello-there-1-good-sir';
      expect(string.slugify(str)).to.eq(expected);
    });
  });

  describe('capitalize', () => {
    it('works', () => {
      const str = 'hello, world! ';
      const expected = 'Hello, world! ';
      expect(string.capitalize(str)).to.eq(expected);
    });
  });

  describe('titlecase', () => {
    it('works', () => {
      const str = 'hello, world! ';
      const expected = 'Hello, World! ';
      expect(string.titlecase(str)).to.eq(expected);
    });
  });

  describe('replaceAll', () => {
    it('replaces all occurances', () => {
      const str = 'The quick brown fox jumps over the lazy dog';
      const expected = 'The quick brwn fx jumps ver the lazy dg';
      expect(string.replaceAll(str, 'o', '')).to.eq(expected);
    });

    it('works with RegExp', () => {
      const str = 'The quick brown fox jumps over the lazy dog';
      const expected = 'Th qck brwn fx jmps vr th lzy dg';
      expect(string.replaceAll(str, /a|e|i|o|u/, '')).to.eq(expected);
    });

    it('handles newlines', () => {
      const str = 'Hello\nthere\n\ngood\nsir';
      const expected = 'Hello there  good sir';
      expect(string.replaceAll(str, '\n', ' ')).to.eq(expected);
    });
  });
});
