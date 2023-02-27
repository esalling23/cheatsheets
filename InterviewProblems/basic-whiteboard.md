# Whiteboard questions/answers

Series of starter interview questions. Designed for junior developers. 

----

## Reverse string

--- Directions

  Given a string, return a new string with the reversed
  order of characters

--- Examples
  ```js
  reverse('apple') === 'leppa'
  reverse('hello') === 'olleh'
  reverse('Greetings!') === '!sgniteerG'
  ```

<details>
<summary>Answer(s)</summary>

```js
function reverse(str) {

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;

}
```
----
```js
function reverse(str) {
  return str.split('').reverse().join('');
}
```
----
```js
function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;

}
```
----

### FANCY::::::ES2015
```js
function reverse(str) {
  return str.split('').reduce((reversed, char) => {
    return character + reversed;
  }, '');
}
```

----

### Recursive:
```js
function reverse(str) {
  // If length of 1, return the string
  if (str.length <= 1) {
    return str;
  }

  // Otherwise, call reverse on the string minus it's 1st characters
  // And add it to the first character
  return reverse(str.substr(1)) + str[0];
}
// EX: reverse('bar');
// will call reverse on 'ar' and add 'b'
// will call reverse on 'r' and add 'a'
// will return 'r' since its a single character
// will move back through, adding 'r' to 'a'
// will continue, adding 'ra' to 'b'
// will finally return 'rab'
```

</details>

----

## Palindrome

--- Directions

  Given a string, return true if the string is a palindrome
  or false if it is not.  Palindromes are strings that
  form the same word if it is reversed. *Do* include spaces
  and punctuation in determining if the string is a palindrome.

--- Examples

  ```js
  palindrome("abba") === true
  palindrome("abcdefg") === false
  ```


<details>
<summary>Answer(s)</summary>

```js
function palindrome(str) {

  let reversed = str.split('').reverse().join('');
  return str === reversed;

}
```
----
This solution does more work than is necessary
because it iterates over every element, which is about twice what is needed
```js
function palindrome(str) {

  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });

}
```
</details>

----

## MaxChar

--- Directions

  Given a string, return the character that is most
  commonly used in the string.

--- Examples

  ```js
  maxChar("abcccccccd") === "c"
  maxChar("apple 1231111") === "1"
  ```

<details>
<summary>Answer(s)</summary>

```js
function maxChar(str) {

  const obj = {};
  let max = '';

  for (let char of str) {
    if (!obj[char])
      obj[char] = 1;
    else
      obj[char]++;
  }

  for (let char in obj) {
    if (!max)
      max = char;
    else {
      max = obj[max] > obj[char] ? max : char;
    }
  }

  return max;

}
```

----
Alternate (better) solutions:

```js
function maxChar(str) {

  const chars = {};
  let count = 0;
  let max = '';

  for (let char of str) {
    // If chars[char] is null/falsey then make it be 1
    // otherwise add 1 to the count
    chars [char] = chars[char] + 1 || 1;
  }

  for (let char in chars) {
    if (chars[char] > count) {
      count = chars[char];
      max = char;
    }
  }
  return max
}
```

</details>

----

## FizzBuzz

--- Directions

  Write a program that console logs the numbers
  from 1 to n. But for multiples of three print
  “fizz” instead of the number and for the multiples
  of five print “buzz”. For numbers which are multiples
  of both three and five print “fizzbuzz”.

--- Example

  ```js
  fizzBuzz(5);
  1
  2
  fizz
  4
  buzz
  ```

<details>
<summary>Answer</summary>

```js
function fizzBuzz(n) {

  for (let i = 1; i <= n; i++) {

    if (i % 5 === 0 && i % 3 === 0)
      console.log("fizzbuzz");
    else if (i % 3 === 0)
      console.log("fizz");
    else if (i % 5 === 0)
      console.log("buzz");
    else
      console.log(i);

  }
}
```

</details>

----

## Chunk

--- Directions

  Given an array and chunk size, divide the array into many subarrays
  where each subarray is of length size

--- Examples

  ```js
  chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
  chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
  chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
  chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
  chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
  ```

<details>
<summary>Answer(s)</summary>

```js
function chunk(array, size) {

  const chunkArr = [];

  do {
    chunkArr.push(array.slice(0, size));
    array = array.slice(size, array.length + 1);
  }
  while (array.length > size);

  chunkArr.push(array);

  return chunkArr;

}
```
----
```js
function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length == size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}
```
----
```js
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}
```


</details>

----

## Greedy Cashier

--- Directions

  Given an amount of change, determine the *minimum* number of coins required to make that change

--- Examples

  ```js
  greedy(65) --> 4 `(2 quarters, 1 dime, 1 nickle)`
  greedy(5) --> 1 `(1 nickle)`
  ```

<details>
<summary>Answer(s)</summary>

```js
function greedy(change) {

  let count = 0
  do {
    if (change >= 25) {
        change = change - 25
        count++
    } else if (change >= 10) {
        change = change - 10
        count++
    } else if (change >= 5) {
        change = change - 5
        count++
    } else {
        change = change - 1
        count++
    }
  } while (change > 0)

  return count

}
```

</details>

----


## Mario

--- Directions

  Given a size, create mario-style pyramid of that size using octothorps (#)

--- Example

  ```js
  mario(2) -->
   # #
  ## ##
  ```

<details>
<summary>Answer(s)</summary>

```js
function mario(height) {

  let pir = ''
  for (let h = 1; h <= height; h++) {
    // For each row of height
    // Find # of spaces and hashes
    let hashes = h;
    let spaces = height - h;

    // First pyramid
    // Spaces on the left
    for (let space = 0; space < spaces; space++) {
         pir += " "
    }
    // Left half of pyramid
    for (let hash = 0; hash < hashes; hash++) {
         pir += "#"
    }
    // Our middle column space
    pir += " "
    // Right half of pyramid
    for (let hash = 0; hash < hashes; hash++) {
         pir += "#";
    }

    // New line
    pir += "\n"

  }

  console.log(pir)

}
```

</details>

----

## ReverseInt

--- Directions

  Given an integer (either positive or negative), reverse the number
  and keep it's sign.

--- Example

  ```js
  reverseInt(-51) --> -15
  reverseInt(100) --> 001 --> 1
  reverseInt(601) --> 106
  ```

<details>
<summary>Answer(s)</summary>

```js
function reverseInt(n) {

  let reversed = '';

  for (let char of n.toString()) {
    if (char != "-")
      reversed = char + reversed;
  }

  return parseInt(reversed) * Math.sign(n);
}
```

----

```js
function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}
```

</details>

## Vowels

--- Directions

  Write a function that returns the number of vowels
  used in a string.  Vowels are the characters 'a', 'e'

--- Example

  ```js
  vowels('Hi There!') --> 3
  vowels('Why do you ask?') --> 4
  vowels('Why?') --> 0
  ```

<details>
<summary>Answer(s)</summary>

```js
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
```

----

```js
function vowels(str) {
  let count = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}
```

</details>