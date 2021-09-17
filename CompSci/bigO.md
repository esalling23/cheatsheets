# Big O

Ordered from most efficient to least:

| Notation | Name | Explanation | Example |
|----------|------|-------------|---------|
| O(1) | Constant Time | Does not change depending on inputs | A function that prints "hello world" |
| O(log(n)) | Logarithmic Time | Splits problem in half each time. Does increase time slightly for each input | Binary search |
| O(n) | Linear Time | For each input, increases time linearly (1 extra step for each extra input) | A loop over every input |
| O(n log(n)) | Quasilinear Time | Performs divide-and-conquer strategy like binary search over every element. Cuts the problem in half each time. Combines O(n) and O(log(n)) | Merge sort & quick sort |
| O(n^2) | Quadratic Time | Time increases by n^2 | A nested loop over every input |
| O(n^3) | Cubic Time | Time increases by n^3 | Three nested loops over every input |
| O(n!) | Factorial Time | Increases by factorial time (n * (n - 1) * (n - 2) ... * 1) | Finding all permutations of a list |

### Resources

- [Factorial Time Article](https://jarednielsen.com/big-o-factorial-time-complexity/)
