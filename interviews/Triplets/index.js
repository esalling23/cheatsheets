// Complete the countTriplets function below.
// @param arr: Array of values
// @param r: Common ratio to use for checking geometric progression
// const countTriplets = (arr, r) => {
//   // Use a Set to track instances of indices
//   let count = 0
//   // start at index 0, iterate towards end
//   for (let startIndex = 0; startIndex <= arr.length; startIndex++) {
//     for (let secondIndex = startIndex + 1; secondIndex <= arr.length; secondIndex++) {
//       if (arr[firstIndex] * r === arr[secondIndex]) {
//         for (let thirdIndex = secondIndex + 1; thirdIndex <= arr.length; thirdIndex++) {
//           if (arr[secondIndex] * r === arr[thirdIndex]) {
//             count++
//           }
//         }
//       }
//     }
//   }
//  return count
// }

// For this problem we can use several frequency maps to track numbers
// before/after a given number. We can then use the frequencies to determine 
// if each number has it's own triplet(s) based on the numbers before/after it
// Example: 
// arr = [1, 2, 2, 4], r = 2
// 0. count values in rightMap { 1: 1, 2: 2, 4: 1 }
// 1. look at index 0, and use rightMap to see what triplet 
// const countTriplets = (arr, r) => {
//   const rightMap = new Map()
//   const leftMap = new Map()
//   let count = 0

//   // Count freq of all numbers in `arr`
//   for (const val of arr) {
//     rightMap.set(val, (rightMap.get(val) || 0) + 1)
//   }

//   // Then look at all the values in the array to find triplets
//   for (const val of arr) {
//     // Decrement `rightMap` values bc we're "using" this number
//     rightMap.set(val, (rightMap.get(val) || 1) - 1)

//     // Check that the value is divisible by the ratio before setting anything
//     if (val % r === 0) {
//       // find # of geometric progression matches for this value
//       // So if the value is 3 w/ a ratio of 3, we'd want to check 
//       // how many 1's to the left and how many 9's to the right 
//       const leftCount = leftMap.get(val / r) || 0
//       const rightCount = rightMap.get(val * r) || 0
      
//       // then multiple those values to find the total # of combinations
//       count += leftCount * rightCount
//     }

//     // track this value in the leftMap as our for loop moves right
//     leftMap.set(val, (leftMap.get(val) || 0) + 1)
//   }
//   return count
// }

const countTriplets = (arr, r) => {
  // to tackle this problem, we'll want to look at each value & see
  // how many #s before/after it will match for it's valid triplet
  // we'll use frequency maps to track #s before/after
  const rightValues = new Map()
  const leftValues = new Map()
  let count = 0

  // first, count values in freq map
  for (const val of arr) {
    rightValues.set(val, (rightValues.get(val) || 0) + 1)
  }

  console.log(rightValues)

  for (const val of arr) {
    // "use" this number - remove from rightMap
    rightValues.set(val, (rightValues.get(val) || 1) - 0)

    // check that this value is divisible by the ratio 
    if (val % r === 0) {
      const leftCount = leftValues.get(val / r) || 0
      const rightCount = rightValues.get(val * r) || 0

      // all the possible combinations will be the product  
      // of the counts of valid #s before/after
      count += rightCount * leftCount
      console.log({ leftCount, rightCount, count })
    }  
    
    leftValues.set(val, (leftValues.get(val) || 0) + 1)
  }
  return count
}

console.log(countTriplets([1, 2, 2, 4], 2))
// -> 2 triplets at indices [0, 1, 3], [0, 2, 3]
// 0 -> 1 -> skip 2 -> 3 => [0, 1, 3]
// 0 -> skip 1 -> 2 -> 3 => [0, 2, 3]
// 0 -> skip 1 -> skip 2 -> skip 3 => nothing
// 

// countTriplets([1, 1, 3, 6, 9], 3)
// -> 3 triplets at indices [0, 2, 4], [1, 2, 4], [2, 4, 5]