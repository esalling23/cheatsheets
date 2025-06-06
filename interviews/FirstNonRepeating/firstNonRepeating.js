
// Hash table aka object
// This example returns index instead of character
const firstNonRepeating = (str) => {
    const charCount = {}
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (charCount[char]) {
            charCount[char]++
        } else {
            charCount[char] = 1
        }
    }

    for (const key in charCount) {
          if (charCount[key] === 1) {
              return s.indexOf(key)
          }
    }

    return -1
}
