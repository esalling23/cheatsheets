# First Unique/Non-Repeating Character

- [Link to Leetcode Problem](https://leetcode.com/problems/first-unique-character-in-a-string/)

## The Problem

Find the first unique/non-repeating character in a string.
If there is no unique character, return `-1`.

### Examples

```
functionExample('aaabcccdeeef')
// 'b'
```

## The Algorithms

### Brute Force

```
1. Loop over string
2. For each character, loop over the rest of the characters
3. If you find a character that doesn't have any duplicates return it
```

Big O: log(n^2)

### Hash Table

- [Solution Example](link/to/example/code)
- [Video Walkthrough ( if available, if not make one ;) )](link/to/video)

```
1. Loop over string
2. For each character, count in a hash table
3. After loop finishes, loop again over the string
4. Return first key in hash table that contains 1 as a value
```

### First/Last Index of

Use a combination of first index/last index built-in methods.


