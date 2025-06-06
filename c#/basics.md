
- [Basic C#](#basic-c)
  - [Printing](#printing)
    - [String Interpolation](#string-interpolation)
      - [Time formatting](#time-formatting)
  - [Modifiers](#modifiers)
  - [Variables](#variables)
  - [Classes](#classes)
    - [Fields](#fields)
  - [Sequence Types](#sequence-types)
    - [Looping](#looping)
    - [Linq](#linq)
  - [Dictionaries](#dictionaries)
  - [Logical and Conditional Operators](#logical-and-conditional-operators)
  - [Nullables](#nullables)
  - [Enums](#enums)
    - [Get String Version](#get-string-version)
    - [Get Enum From String](#get-enum-from-string)
    - [Get Random Value](#get-random-value)
    - [Loop Over Enum](#loop-over-enum)
  - [Namespaces](#namespaces)
    - [When?](#when)
  - [Threads](#threads)
  - [Errors](#errors)
    - [The non-static property or method 'Something' cannot be accessed](#the-non-static-property-or-method-something-cannot-be-accessed)

# Basic C#

## Printing

Main method is `Console.WriteLine`. 
Takes a single item to print, so interpolation is key.

### String Interpolation

```c#
string name = "Mark";
var date = DateTime.Now;

// Composite formatting:
Console.WriteLine("Hello, {0}! Today is {1}, it's {2:HH:mm} now.", name, date.DayOfWeek, date);
// String interpolation:
Console.WriteLine($"Hello, {name}! Today is {date.DayOfWeek}, it's {date:HH:mm} now.");
// Both calls produce the same output that is similar to:
// Hello, Mark! Today is Wednesday, it's 19:40 now.
```

#### Time formatting

```c#
int hours = 5;
int minutes = 30;
int secs = 25;

Debug.Log(hours.ToString("00") + ":" + minutes.ToString("00") + ":" + secs.ToString("00"));
Debug.Log(string.Format("{0:00}:{1:00}:{2:00}", hours, minutes, secs));

hours = 0;
minutes = 5;
secs = 3;
Debug.Log(hours.ToString("00") + ":" + minutes.ToString("00") + ":" + secs.ToString("00"));
Debug.Log(string.Format("{0:00}:{1:00}:{2:00}", hours, minutes, secs));

```

## Modifiers

Modifiers give information about how the particular field, class, etc. should be used.

Examples include `private`, `public`, and `static`.

| Keyword | Description |
| --- | --- |
| `public` | The type or member can be accessed by any other code in the same assembly or another assembly that references it. The accessibility level of public members of a type is controlled by the accessibility level of the type itself. |
| `private` | The type or member can be accessed only by code in the same class or struct. |
| `protected` | The type or member can be accessed only by code in the same class, or in a class that is derived from that class. |
| `internal` | The type or member can be accessed by any code in the same assembly, but not from another assembly. In other words, internal types or members can be accessed from code that is part of the same compilation. |
| `protected internal` | The type or member can be accessed by any code in the assembly in which it's declared, or from within a derived class in another assembly. |
| `private protected` | The type or member can be accessed by types derived from the class that are declared within its containing assembly. |

`static` is to declare fields, methods, etc. on classes that should only be available on the **class itself** rather than the **instance**. `static` classes can only contain `static` members.

## Variables

Variables are private by default and are strictly-typed.
`camelCase` with pre-pending `_` for private variables is preferred.

```c#
// Public integer variable named `myInt`
public int myInt;
// Private Sprite object variable named `_mySprite`
Sprite _mySprite;
```

## Classes

Classes are for creating objects.
Private by default.
Conventionally `PascalCase` and singular.

```c#
public class MyClass : ParentClass
{
    ...
}
```

### Fields

Fields are just class variables, and follow the same rules.
By default they are instance-only accessible. Use the `static` modifier to define fields available on the class itself `MyClass.field`.

```c#
public class MyClass : ParentClass
{
    int _myInt;
    public Sprite mySprite;
    [SerializeField] int _myIntInTheEditor;
}
```

> In Unity, use the `[SerializeField]` attribute before a field definition to make it editable from the inspector. Public fields are also editable in the inspector.

## Sequence Types

| Feature | Array | List | String |
|---------|-------|------|--------|
| Use case | Fixed-length list | Dynamic list | Ordered sequence of characters |
| Get size | `myArr.Length` | `myList.Count` | `myStr.Length` |
| Get element | `myArr[i]` | `myList[i]` | `myStr[i]` |
| Add element | Not supported - arrays are fixed-length | `myList.Add(item)` | `myString + " new characters"` |

| Method | Signature | Description | Example |
| ------ | --------- | ----------- | ------- |
| Array.Length Property      | `int Array.Length { get; }`            | Returns the number of elements in the array.                              | `int[] numbers = { 1, 2, 3, 4, 5 }; int length = numbers.Length;` |
| List.Count Property        | `int List<T>.Count { get; }`           | Returns the number of elements in the list.                               | `List<string> names = new List<string> { "Alice", "Bob", "Charlie" }; int count = names.Count;` |
| List.Add Method            | `void List<T>.Add(T item)`             | Adds an item to the end of the list.                                       | `List<int> numbers = a new List<int> { 1, 2, 3 }; numbers.Add(4);` |
| List.Remove Method         | `bool List<T>.Remove(T item)`          | Removes the first occurrence of a specific item from the list and returns `true` if successful, or `false` if the item is not found. | `List<string> fruits = new List<string> { "apple", "banana", "cherry" }; bool removed = fruits.Remove("banana");` |


### Looping

[Iterators Documentation](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/iterators)

```c#
// Loop over sequence contents with `foreach`
// can also use `for`, `while`
foreach (char c in myString) 
{
  Console.WriteLine(c);
}
```

### Linq

`System.Linq` provides sequence iteration methods.

| Feature | Linq Method | Example | JS Method |
|---------|-------------|---------|-----------|
| Filters | `Where` | myArr.Where(item => conditional) | `.filter` |
| Return new instance of each item (like a single key) | `Select` | `myArr.Select(item => item.key)` | `.map` |
| Return the first match | `First` or `FirstOrDefault` | `myArr.First(item => item.key === "match")` | `.find` |

## Dictionaries

Mappings of keys and values. 

```c#
var cities = new Dictionary<string, string>(){
  // { string key, string value }
	{"UK", "London, Manchester, Birmingham"},
	{"USA", "Chicago, New York, Washington"},
	{"India", "Mumbai, New Delhi, Pune"}
};
```

| Feature | Example |
|---------|---------|
| Check if dict contains key | `my_dict.ContainsKey("key")` |

## Logical and Conditional Operators

Logical: `&`, `|`
Do NOT short-circuit.
```c#
int a = false | 1;
```

Conditional: `&&`, `||`
Will utilize short-circuiting.
```c#
if (something && somethingElse)
{
  ...
}
```

## Nullables

```c#
SomeType? nullable = null;

SomeType notNullable = someTypeValue;

if (nullable.HasValue)
{
  // Incomplete but you get the idea...
  bool isMatch = (SomeType)nullable.Value == notNullable;
}
```

## Enums

Sets of unique, constant values. Serialized as an options list.

```c#
public enum Name
{
  Eron,
  Spencer,
  Jane,
  Yinka,
}
```

### Get String Version

```c#
Name name = Name.Eron;
string displayName = Enum.GetName(typeof(Name), name);
// "Eron"
```

Alternatively:

```c#
name.ToString();
```

### Get Enum From String

```c#
Enum.TryParse<MyEnum>("SOME_STRING", out myEnum);
```

### Get Random Value

```c#
Array values = Enum.GetValues(typeof(Bar));
Random random = new Random();
Bar randomBar = (Bar)values.GetValue(random.Next(values.Length));
```

### Loop Over Enum

```c#
foreach (int i in Enum.GetValues(typeof(Fruits)))
{
  // The key
  Console.WriteLine($" {i}" );
  // The name
  Console.Write($"{Enum.GetName(typeof(Fruits), i)}");
}

// 0, 1, 2...
// "APPLE", "BANANA", "ORANGE" 
```

Just the names:

```c#
foreach (string name in Enum.GetNames(typeof(Fruits)))
{
  Console.WriteLine(name);
}
// "APPLE", "BANANA", "ORANGE"
```

```c#
foreach (Fruit name in Enum.GetNames(typeof(Fruits)))
{
  Console.WriteLine(name);
}
// "APPLE", "BANANA", "ORANGE"
```

----

## Namespaces

Add `using Module;` to top of files to use different namespaces that will contain available classes etc. Examples include `using System;` or `using UnityEngine;`

### When?

Namespaces are useful for organization/grouping as well as preventing conflicts across groups of classes. 
When you define a class without a namespace in Unity, it will be added to the root namespace, as [defined in your project settings](https://gamedev.stackexchange.com/questions/187802/how-can-i-change-the-root-namespace-for-scripts-in-unity). 

[Stackoverflow Discussion](https://answers.unity.com/questions/802417/when-to-use-a-namespace.html)

## Threads



## Errors

### The non-static property or method 'Something' cannot be accessed

This means you're using a class to access a property or method but it is not static so it can only be accessed on instances.

```c#
class MyClass {
  private float foo = 1f;
  static float bar = 2f;

  // ...
}

MyClass instance = new MyClass()
MyClass.foo // error
instance.foo // allowed
MyClass.bar // allowed
```
