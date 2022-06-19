const assertEquals = require('./assertEquals')

describe('assertEquals', () => {
  // Strings test
  describe('when expected and actual are the same string', () => {
    it('returns without throwing an error', () => {
      expect(() => typeof assertEquals('abc', 'abc') === "boolean").toBeTruthy();
    })
  })

  describe('when expected and actual are different strings', () => {
    it('throws an error', () => {
      expect(() => assertEquals("abc", "acb")).toThrow(`Expected "abc" but found "acb"`);
    })
  })

  describe('when expected and actual both are strings with the same value but different case type', () => {
    it('throws an error', () => {
      expect(() => assertEquals("ABC", "abc")).toThrow(`Expected "ABC" but found "abc". Please check the string type case.`);
    })
  })

  describe('when expected and actual both are different types', () => {
    it('throws an error', () => {
      expect(() => assertEquals("ABC", undefined)).toThrow(`Expected type string but found undefined`);
    })
  })

  // Numbers test
  describe('when expected and actual are the same number', () => {
    it('returns without throwing an error', () => {
      expect(() => typeof assertEquals(1, 1) === "boolean").toBeTruthy()
    })
  })

  describe('when expected and actual are different numbers', () => {
    it('throws an error', () => {
      expect(() => assertEquals(1, 2)).toThrow(`Expected 1 but found 2`);
    })
  })

  describe('when expected and actual both are different types', () => {
    it('throws an error', () => {
      expect(() => assertEquals(1, true)).toThrow(`Expected type number but found boolean`);
    })
  })

  // Arrays test
  describe('when expected array and actual array have the same elements', () => {
    it('Returns true without throwing an error', () => {
      expect(() => typeof assertEquals(["abc", 1, true], ["abc", 1, true]) === "boolean").toBeTruthy();
    })
  })

  describe('when expected array and actual have different lengths', () => {
    it('throws an error', () => {
      expect(() => assertEquals(["abc", 1], ["abc"])).toThrow(`Expected the array length to be 2 but found 1`)
    })
  })

  describe('when expected and actual arrays have the same length but different elements', () => {
    it('throws an error', () => {
      expect(() => assertEquals([1, "abc", 3], [1, "acb", 3])).toThrow(`Expected "abc" but found "acb"`)
    })
  })

  describe('when expected and actual both are different types', () => {
    it('throws an error', () => {
      expect(() => assertEquals([1, "abc", 3], false)).toThrow(`Expected an array but found boolean`)
    })
  })

  describe('when expected and actual have a string with the same value but different case type', () => {
    it('throws an error', () => {
      expect(() => assertEquals([1, "abc", 3], [1, "AbC", 3])).toThrow(`Expected "abc" but found "AbC". Please check the string type case.`)
    })
  })

  // Other Different types
  describe('when expected and actual are of dfferent types', () => {
    it('throws an error', () => {
      expect(() => assertEquals({1: "1"}, null)).toThrow(`Expected type object but found null`)
    })
  })

  describe('when expected and actual are the same value but different types', () => {
    it('throws an error', () => {
      expect(() => assertEquals(null, undefined)).toThrow(`Expected type null but found undefined`)
    })
  })

  describe('when expected and actual are the same value but different types', () => {
    it('throws an error', () => {
      expect(() => assertEquals({}, [])).toThrow(`Expected type object but found array`)
    })
  })

})