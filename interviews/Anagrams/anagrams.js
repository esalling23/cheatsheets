const anagrams = (str) => {
  let count = 0
  const substrings = new Map()

  // first value for anagram
  for (let startIndex = 0; startIndex < str.length; startIndex++) {
    // frequency array to track character appearances
    // 26 for each letter in alphabet
    const freq = new Array(26).fill(0)

    // last value of the slice
    for (let endIndex = startIndex; endIndex < str.length; endIndex++) {
      const charBaseCode = str.charCodeAt(endIndex) - 'a'.charCodeAt(0)
      freq[charBaseCode]++

      const key = freq.join(',')

      count += substrings.get(key) || 0
      substrings.set(key, (substrings.get(key) || 0) + 1) 
      console.log({ count, key }, substrings)
    }
  }
  return count
}

console.log(anagrams('abba'))
// console.log(anagrams('abcd'))