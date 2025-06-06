// Given an array of numbers and a target value, find two numbers in the array that add up to the target value.
// Return the indices of the two numbers.
// If no such numbers exist, return null.
// Example:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: nums[0] + nums[1] = 2 + 7 = 9
// Approach: Use a hash map to store the numbers and their indices.
// Time complexity: O(n)
// Space complexity: O(n)

/**
 * Finds two numbers in the array that add up to the target value and returns their indices.
 * @param {number[]} nums - The array of numbers to search.
 * @param {number} target - The target sum to find.
 * @returns {[number, number] | null} - The indices of the two numbers, or null if no such pair exists.
 */
function twoSum(nums: number[], target: number): [number, number] | null {
  const map = new Map<number, number>(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  return null; // if no pair found
}
