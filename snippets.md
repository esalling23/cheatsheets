
# Useful Code Snippets

Each example can be applies across various languages. Multiple examples encouraged. 

## Transform a range of numbers to match the scale of another range 

Modified from https://stackoverflow.com/a/19057494
Scales a range of numbers to match another range of numbers
```js
export const transformRange = (value, r1, r2) => {
  const scale = (r2.max - r2.min) / (r1.max - r1.min);
  return (value - r1.min) * scale;
};
```
