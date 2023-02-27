// https://jarednielsen.com/big-o-recursive-time-complexity/

// O(n) approach with simple iteration
const fiberative = n => {
    // Initial array has first 2 starting values
    const arr = [0, 1]
    // Starting at 2, loop until n + 1
    for (let i = 2; i < n + 1; i++)
    {
			// Push into the array the next value
			// arr[0] + arr[1] => 0 + 1 => 1
			// arr[1] + arr[2] => 1 + 1 => 2
			// arr[2] + arr[3] => 1 + 2 => 3
            // .. and so on
			arr.push(arr[i - 2] + arr[i - 1])
		}
    return arr[n]
}

// Another simple solution:
function fib(n) {
    const nums = [0, 1]

    for (let i = 0; i < n; i++)
    {
        nums.push(nums[i] + nums[i + 1])
    }

    return nums[n]
}

// O(2^n) approach with recursion (not good)
const fibonaive = n => {
    if (n <= 0)
    {
        return 0
    }
    else if (n === 1)
    {
        return 1
    }

    return fibonaive(n - 1) + fibonaive(n - 2)
}

// "Top-down" recursive approach using memoization
// O(n) time complexity
const fibomemo = (n, memo=[]) => {
    if (n <= 0) return 0
    else if (n === 1) return 0

    if (!memo[n]) {
        memo[n] = fibomemo(n - 1) + fibomemo(n - 2)
    }

    return memo[n]
}

// Staircase problem
// You have N number of steps
// and a given set of steps that can be traveled at a time
// Return the number of options available to travel
// up the steps
// Basically fibonacci sequence
// TO DO 

