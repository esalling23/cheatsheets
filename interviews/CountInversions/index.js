
/*
 * Complete the 'countInversions' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// First attempt - did not pass due to timeouts
function countInversions(arr) {
  let count = 0
  let didSwap = false
  // Write your code here
  do {
      didSwap = false
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] > arr[i + 1]) {
              // swap(arr[i], arr[i + 1])
              const temp = arr[i]
              arr[i] = arr[i + 1]
              arr[i + 1] = temp
              
              count++
              didSwap = true
          }
      }
  } while (didSwap)
  return count
}


