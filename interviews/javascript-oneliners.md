## Question
What Javascript statement in place of "?" will make the result always be between 6 and 7? 

```js
const x = 2; 
let y = 4; 
function update(arg) { 
  return Math.random() + y * arg; 
} 
y = 2; 
// ? what line here
y = 3;
const result = update(x);
```