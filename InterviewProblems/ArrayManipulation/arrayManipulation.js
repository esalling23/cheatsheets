
/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 * https://www.hackerrank.com/challenges/crush/problem
 */

function arrayManipulation(n, queries) {
  // Write your code here
  const arr = new Array(n).fill(0)

  for (const query of queries) {
      const a = query[0]
      const b = query[1]
      const k = query[2]
      // query will be [a, b, k]
      // Where k should be added (math) to all
      // values within a and b indeces (inclusive)
      // apparently we don't actually have to modify all the values
      // because the point is the max change (described as "slope" in many places)
      arr[a] += k
      arr[b] -= k
  }

  let maxVal = 0
  let runningCount = 0
  for (const n of arr) {
      runningCount += n
      if (maxVal < runningCount) {
          maxVal = runningCount
      }
  }
  return maxVal
}
