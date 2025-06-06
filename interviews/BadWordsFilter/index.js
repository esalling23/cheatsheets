const BAD_WORDS = new Set([
  'bad',
  'evil',
  'naughty'
])

const leetMap = {
  '1': 'i',
  '3': 'e',
  '4': 'a',
  '@': 'a',
  '0': 'o',
  '$': 's',
  '7': 't',
  // Add more mappings as needed
};

const normalizeLeet = (word) => {
  return word
    .split('')
    .map(letter => {
      return leetMap[letter] || letter
    })
    .join('')

}

const filterBadWords = (input) => {
  console.log({ query })
  return input
    .split(' ')
    .map(word => {
      const normalize = normalizeLeet(word.toLowerCase())
      // console.log(normalize)
      return BAD_WORDS.has(normalize.replace(/[^\w\s]/g, '')) ? '***' : word
    })
    .join(' ')
}



module.exports = {
  filterBadWords
}