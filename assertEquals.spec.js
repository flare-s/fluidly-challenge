const assertEquals = require('./assertEquals')

describe('assertEquals', () => {
  describe('when expected and actual are the same string', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals('abc', 'abc')).not.toThrow()
    })
  })

  describe('when expected and actual are different strings', () => {
    it('throws an error', () => {
      expect(() => assertEquals("abc", "acb")).toThrow(`Expected "abc" but found "acb"`)
    })
  })
  describe('when expected and actual are the same value but different types', () => {
    it('throws an error', () => {
      expect(() => assertEquals("abc", "acb")).toThrow(`Expected "abc" but found "acb"`)
    })
  })
  describe('when expected and actual =have different lengths', () => {
    it('throws an error', () => {
      expect(() => assertEquals("abc", "acb")).toThrow(`Expected "abc" but found "acb"`)
    })
  })
  describe('when expected and actual have the same length but different elements', () => {
    it('throws an error', () => {
      expect(() => assertEquals("abc", "acb")).toThrow(`Expected "abc" but found "acb"`)
    })
  })
})