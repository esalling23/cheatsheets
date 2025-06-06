# TypeScript

Typescript is a *static type checker*. 

First, you define your static types. Then, you use Typescript to confirm the code will run based on the defined types & how those variables etc. are being used. 

## Basics

Typescript files use the `.ts` extension, or `.tsx` to support JSX in React. 

Code will be run through the Typescript transpiler, which will check the code adheres to standards & display any errors. 

If all goes well, Typescript code will be converted into JS, and we'll get a `.js` file. 

TypeScript is a *superset* of JS - it includes all of JS plus some extras.

### Everyday Types

You may not need to define a type - if a variable is given a value at declaration, TypeScript is sometimes able to *infer* the type. 

For example 
```ts
let words = "string value"; // typescript infers this will be a string type & go from there
let words; // cannot infer bc no default value 
let words:string; // set type
```

`string`, `number`, `boolean`

`Array<number>` or `number[]`

`any` (usually we stay away from this type bc it removes further type checks down the line)

Parameter declaration example: 
```ts
function greet(name:string, age:number)
{
  console.log(`Hello, ${name}! You are ${age} years old today :)`);
}
```

Return type declaration example: 
```ts
function getAge(): number
{
  let age:number = 10;
  return age;
}
```

Function that returns a promise (async):
```ts
async function getNum(): Promise<number> {
  return 25
}
```

#### Contextual Typing

Let's say you're iterating over an array of strings. Typescript knows each item in the array is a string, and so for methods such as `forEach` that accept a callback function, Typescript is able to "contextually type" the parameter of the callback to be a string, the same as the type of each item in the array. 

This is called contextual typing because the context of the array is what changes the inferred type of the callback parameter. 

```ts
const arr = [1, 2, 3, 4, 5]

arr.forEach(l => {
  // this works because Typescript infers the type of `l` to be a number
  console.log(l.toString())
})
```


#### Object types

Object types follow the structure: 
```ts
{ objKey1: string; objKey2: number; }
```
which can also be written with each key/type pair on its own line:
```ts
{
  objKey1: string;
  objKey2: number;
}
```

This will define an object type that expects `objKey1` to exist and have a type of `string`, as well as `objKey2` to exist and have a type of `number`.

To mark a key as optional, we can use `?`
```ts
{
  objKey1: string;
  objKey2?: number;
}
```
Here ^ `objKey2` is marked as optional, so an object that only contains a valid `objKey1` will pass the type check. 
> Note: optional properties will require checking if the property is `undefined` before using it.
>
> ```ts
> if (obj.objKey2 !== undefined) { 
  >   console.log(obj.objKey2.toString()) 
  > }
> // or 
> console.log(obj.objKey2?.toString())
> ```

Example of an object type defined as a variable: 
```ts
const myObj: { objKey1: string; objKey2: number; } = {
  objKey1: 'helloworld',
  objKey2: 2
}
```

or as a parameter in a function: 
```ts
function (obj: { objKey1: string; objKey2: number; }) {
  return obj.objKey1.toUpperCase() + objKey2.toString();
}
```

#### Union Types

Union types allow us to accept multiple type groups. 

```ts
let myId: number | string = "abdfsd"
myId = 101
myId = "405"

function printId(id: number | string) {
  console.log(`ID: ${id}`)
}

printId("abdfsd")
printId(101)
printId("405")
```

If type-specific methods (ex: `toUpperCase`) or properties are referenced on union types, you may need to handle different actions depending on the actual type of the value. 

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}
```

#### Type Alias

A type alias uses the `type` keyword, and represents a named type. It can be used in place of (an alias to) the literal type definition (`number`, `{ myKey: string; }`, `string[]`, etc.)

```ts
type MyObjType = { myKey: string; }
const myObj: myObjType = { myKey: 'hello', }
// is the same as 
const myObj: { myKey: string; } = { myKey: 'hello', }
```

A common use-case for type aliases might be to name complex types, such as union types for re-use:
```ts
type NumOrString = number | string;

const myNumOrString: NumOrString = 5;
const myOtherNumOrString: NumOrString = "wee"
```

We can combine type aliases using intersections, similar to `extend`ing `interface`s, but with a [performance loss during compile](https://github.com/microsoft/TypeScript/wiki/Performance#preferring-interfaces-over-intersections).

```ts
type Obj1Type {
  hello: string;
}
type Obj2Type {
  world: string;
}
type ComboType = Obj1Type & Obj2Type
const combo: ComboType = {
  hello: 'world',
  world: 'hello'
}
```

> **Generally, for objects, we'll prefer to use `interface`s intead of `type` aliases.**

#### Interfaces

Interfaces are another way to declare object types, but offer the ability to be extended similar to classes. 

```ts
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const myBear: Bear = getBear();
console.log(myBear.name)
console.log(myBear.honey)
```

You can also "re-open" interfaces to add future types as necessary: 

```ts
interface Animal {
  genus: string;
}

const myAnimal: Animal = {
  genus: 'panthera'
}

interface Animal {
  species: string;
}

const anotherAnimal: Animal = {
  genus: 'panthera',
  species: 'tigris'
}
```
> Note: Type aliases cannot be "re-opened" later to add new properties, which is one of the reasons to prefer `interface` for object types. 

#### Literal Types

We can assign literal values (`5`, `"hello"`, `true`) of `number`, `string`, and `boolean` types .... as types. 

A common usecase is for defining a set of known values that can be accepted to a function: 
```ts
function alignObj(aligment = "left" | "right" | "center") {
  //...
}

alignObj("left")
alignObj("right")
// error: "centre" is not a valid type
alignObj("centre")
```

Or, to ensure only certain return types: 
```ts
function compare(a: number; b: number): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
```

We can use them just like & with non-literal types
```ts
interface Options { 
  //...
}

function configure(x: Options | "auto") {
  //...
}
```

#### Null & Undefined

`strictNullChecks` should be on :)

We can use `null` for allowing `null` types if we know a value might be absent at some point. 

```ts
function doSmtg(x: string | null) {
  if (x === null) {
    // handle
  } else {
    console.log(x.toUpperCase())
  }

  // or, shorter, but avoid unless you're POSITIVE that the value CANNOT be null or undefined:
  console.log(x!.toUpperCase())
  // see here: https://stackoverflow.com/a/76098731/15835070
}
```

#### Enums

Enums can use auto-incrementing values:
```ts
enum MyEnum {
  Val = 1, // optional value assignment - default first value is 0
  Val2, // will be 2
  Val3 // will be 3
}
```

Or string values:
```ts
enum MyEnum {
  Val = "Value1",
  Val2 = "Another Value"
  Val3 = "Value3"
}
```
which give the added benefit of useful serialization. 

#### Others

Other less common primitive types include: 

* `bigint` which represents numbers higher/lower than regular number limits (pos/neg 2^53 - 1)

`bigint` values can be created by appending `n` to the value

```ts
const bignum: bigint = Number.MAX_SAFE_INTEGER + 5n;
```

* `symbol` which creates an explicitely unique, immutable value

```ts
const symbol = Symbol("optional-key")
```

### Narrowing

What is "narrowing"?

Narrowing is the process TypeScript uses to follow possible paths of code execution & refine types to more specific types using constructs like type guards. 

Example: 
```ts
// Parameter `padding` can be a number or string
function padLeft(padding: number | string, input: string): string {
  // *type guard* to handle if `padding` is a number
  if (typeof padding === "number") {
    // `padding` is now understood by TypeScript to be a number, and can be used as such
    // aka - its type was refined/narrowed from `number | string` to number
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
```

#### `typeof` Type Guards

Check if a parameter/variable is a given type using `typeof` keyword. 

Potential string values for types: 
- "string"
- "number"
- "bigint"
- "boolean"
- "symbol"
- "undefined"
- "object"
- "function"

Keep in mind that `object` is the type for `null`, so when using the `typeof` guard with `object` types you will also need to handle `null`. 

#### Truthiness 

We can use truthiness to our advantage to avoid `null` value errors (`'myVar' is possibly null`). 

```ts
if (myVar && typeof myVar === 'object') {
  //...
}
```

#### Equality 

We can use `switch` statements and equality checks `!==`, `===`, etc. to narrow types. 

For example, say we have two variables with types `number | string` and `number | boolean`. If we compare them using `===`, we will narrow their types because TypeScript will assume they must be the same type (`number`) in order for them to be strictly equal. So within that conditional block, the variable types will be `number`. 

Another example:
```ts
function foo(bar: string | number, baz: string | boolean) {
  if (bar === baz) {
    // narrowed types to `string` :) 
    console.log(bar.toUpperCase())
    console.log(baz.toLowerCase())
  } else {
    // no narrowing, could be either
    console.log(bar, baz)
  }
}
```

#### The `in` operator

We can narrow by checking for properties that exist on types too. TypeScript will then determine which types do or do not potentially include that property. 

```ts
type Fish = { swim: () => void; }
type Bird = { fly: () => void; }

function move (animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim()
  }
  return animal.fly()
}
```

#### `instanceof` operator

```ts
function doSmtg(x: Date | string) {
  if (x instanceof Date) {
    // do date things
  }
  // do string things
}
```

#### Assignment

```ts
let x = Math.random() < 0.5 ? 10 : "hello world"
// x type is `number | string`
x = 5
x = "word"

// this wont work
x = true
```

#### Control Flow Analysis

Control flow (if statements, etc.) 