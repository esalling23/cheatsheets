# Array Manipulation I

- [Link to Original Problem](https://www.hackerrank.com/challenges/crush/problem)

## The Problem

> _"Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in the array."_

Translation: 
You have an array containing `0` for each value (ref `startingArr`). 
Input value `n` tells you the length of the array. 
Another array (ref `queries`) contains sub-arrays with a starting index, ending index, and a number value. 
Add the number value in each item in `queries` to each value in the `startingArr` between the 2 provided indices. 
Then return the max.

Breakdown: 

- Function Parameters
  - `n` (int): length of the array of `0`s
  - `queries`: matrix of [startIndex, endIndex, numberToAdd]
    - ex: [[1, 3, 5], [2, 3, 9], [4, 7, 20]]
      - [1, 3, 5] -> starting index is 1, ending index is 3, value to add is 5

1. Create `arrayToModify` of `0`s based on length of `n`
2. Iterate over each query
  2a. Modify `arrayToModify` value at startIndex & endIndex by adding the `numberToAdd` from each query
    - Note: We don't actually have to modify each value, due to "slope" concept
3. Calculate largest value in the `arrayToModify` & return that value
