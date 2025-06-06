const { filterBadWords } = require('./trie.js'); // Adjust the path

describe('filterBadWords', () => {
  test('Basic Filtering', () => {
    expect(filterBadWords("This is a bad text")).toBe("This is a *** text");
  });

  test('Case Insensitivity', () => {
    expect(filterBadWords("This is a BAD text")).toBe("This is a *** text");
  });

  test('Leetspeak Substitutions', () => {
    expect(filterBadWords("This is a b@d 3v1l text")).toBe("This is a *** *** text");
  });

  test('Partial Matches', () => {
    expect(filterBadWords("This is a badly written text")).toBe("This is a badly written text");
  });

  test('Multiple Bad Words', () => {
    expect(filterBadWords("This is a bad and evil text")).toBe("This is a *** and *** text");
  });

  test('No Bad Words', () => {
    expect(filterBadWords("This is a good text")).toBe("This is a good text");
  });

  test('Empty Input', () => {
    expect(filterBadWords("")).toBe("");
  });

  // test('Input with Punctuation', () => {
  //   expect(filterBadWords("This is a b@d, 3v1l text!")).toBe("This is a ***, *** text!");
  // });

  test('Mixed Case and Leetspeak', () => {
    expect(filterBadWords("This is a B@D and 3V1L text")).toBe("This is a *** and *** text");
  });

  test('Long Input with Multiple Occurrences', () => {
    expect(filterBadWords("This is a bad text with bad words and b@d substitutions")).toBe(
      "This is a *** text with *** words and *** substitutions"
    );
  });
});