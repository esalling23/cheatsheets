1. Create a variable called `car` and assign the value of `'Beetle'` to it. 
   Then reassign it's value to `'Jeep'` in another line of code
```js
let car = 'Beetle'
car = 'Jeep'
```

2. Add a single operator to the below conditional so that, when run, it will log 'Sing with me!' to the console. 
```js
const singer = false

if (!singer) {
   console.log('Sing with me!')
}
```

3. Write some code to print the number of vowels in the string `word`
```js
const word = 'My string with vowels'

let count = 0;
const checker = ['a', 'e', 'i', 'o', 'u'];

for (let char of word.toLowerCase()) {
  if (checker.includes(char)) {
      count++;
  }
}

console.log(count)
```

4. Write some code to print the reverse of the string `word`
```js
const word = 'my regular string'

let reversed = ''
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i]
}

console.log(reversed)
```

5. Write some code to print the capitalized version of the string `word`
```js
const word = 'some lowercase string'
let result = str[0].toUpperCase();

for (let i = 1; i < str.length; i++) {
  if (str[i - 1] === ' ') {
    result += str[i].toUpperCase();
  } else {
    result += str[i];
  }
}
console.log(result)
```

**HINT** [String Character Access](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Character_access)