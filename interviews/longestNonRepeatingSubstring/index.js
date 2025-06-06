// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function(s) {
//   // Sliding window pattern
//   // keep track of a leftPointer
//   let leftPointer = 0
//   let max = 0
//   const freq = new Set()

//   // iterate over string to get rightPointer
//   for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
//       while (freq.has(s[rightPointer])) {
//           // delete the left until the right is not a duplicate
//           freq.delete(s[leftPointer])
//           leftPointer++
//       }
//       freq.add(s[rightPointer])
//       max = Math.max(max, rightPointer - leftPointer + 1)
//   }
//   return max
// };

// const lengthOfLongestSubstring = str => {
//   const lastSeenMap = new Map()
//   let left = 0
//   let max = 0

//   for (let i = 0; i < str.length; i++) {
//     if (lastSeenMap.get(str[i])) {
//       left = lastSeenMap.get(str[i]) + 1
//       max = Math.max(max, i - left + 1)
//     }

//     // track at which index this char was last seen
//     lastSeenMap.set(str[i], i)
//   }
//   return max
// }

const lengthOfLongestSubstring = str => {
  // Create a map to store the substrings
  const lastSeenMap = new Map();
  // track a left position & the max length
  let leftPos = 0;
  let max = 0;

  // loop over string
  for (let right = 0; right < str.length; right++) {
    // if this letter is already in our map, we found a repeat
    if (lastSeenMap.has(str[i]) && lastSeenMap.get(str[i]) >= leftPos) {
      // increment the left position to be the +1 the current position of the character
      leftPos = lastSeenMap.get(str[i]) + 1
    }

    max = Math.max(max, right - leftPos + 1)
    lastSeenMap.set(str[i], right)
  }

  return max
}