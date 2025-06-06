class TrieNode {
  constructor(val = '') {
    this.value = val
    this.children = {}
    this.isEndOfWord = false
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let node = this.root
    for (const char of word) {
      if (!node.children[char]) {
        // create a new node if the char doesn't exist
        node.children[char] = new TrieNode(char)
      }
      // move to the (maybe new) child node
      node = node.children[char]
    }
  }

  isWordInTrie(word) {
    let node = this.root
    for (const char of word) {
      // no letter match in trie so no word match
      if (!node.children[char]) {
        return false
      }
      // move along in the trie nodes
      node = node.children[char]
    }
    // if we finished the loop & this node is the end 
    // of a word, then we have a match :)
    return node.isEndOfWord
  }

  print() {
    let node = this.root
    let message = ''
    for (const val in Object.keys(this.root.children)) {
      message += val
    }
  }
}

const badWords = ['bad', 'evil', 'naughty'];
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

// First, add the bad words to the trie
const generateLeetVariations = (word) => {
  const variations = ['']
  for (const char of word) {
    const newVariations = []
    for (const variation of variations) {
      newVariations.push(variation + char)
      if (leetMap[char]) {
        newVariations.push(variation + leetMap[char])
      }
    }
    variations.length = 0
    variations.push(...newVariations)
  }
  return variations
}

const trie = new Trie()
badWords.forEach(word => {
  const variations = generateLeetVariations(word)
  variations.forEach(variation => trie.insert(variation))
})

console.log({trie: trie.print()})

const filterBadWords = text => {
  return text.split(' ').map(word => {
    const normalizeWord = word.toLowerCase()
    console.log({ normalizeWord })
    if (trie.isWordInTrie(normalizeWord)) {
      return '***'
    }
    return word
  }).join(' ')
}

module.exports = {
  filterBadWords
}