# C# Unity Cheatsheet <!-- omit in toc -->

**Contents**

- [Basic C](#basic-c)
  - [Modifiers](#modifiers)
  - [Variables](#variables)
  - [Classes](#classes)
    - [Fields](#fields)
  - [Sequence Types](#sequence-types)
  - [Namespaces](#namespaces)
  - [Errors](#errors)
- [Unity-Specific C](#unity-specific-c)
  - [Coroutines](#coroutines)
  - [Everything Sprites](#everything-sprites)
      - [Zooming Camera to Sprite Size](#zooming-camera-to-sprite-size)
  - [Errors](#errors-1)

This cheatsheet contains some "vanilla" C# as well as sections on Unity-specific code in C#.

----

# Basic C#

## Modifiers

Modifiers give information about how the particular field, class, etc. should be used.

Examples include `private`, `public`, and `static`.

`private` designates it should not be available outside of the current scope. `public` designates the opposite.

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

| Feature | Array | List |
|---------|-------|------|
| Use case | Fixed-length list | Dynamic list |
| Get size | myArr.Length | myList.Count |
| Get element | myArr[i] | myList[i] |
| Add element | Not supported - arrays are fixed-length | myList.Add(item) |

## Namespaces

Add `using Module;` to top of files to use different namespaces that will contain available classes etc. Examples include `using System;` or `using UnityEngine;`

## Errors



# Unity-Specific C#

## Coroutines

A coroutine will run code to completion before anything else runs.
Allows you to run `IEnumerator` functions that use `WaitForSeconds` and [other functions](https://stackoverflow.com/questions/30056471/how-to-make-the-script-wait-sleep-in-a-simple-way-in-unity) that will force code to pause before running certain logic.

Example:
```c#
// Define IEnumerator function
IEnumerator GameStart()
{
    // yield return statement
    yield return new WaitForSeconds(2f);

    StartGame();
}

StartCoroutine(GameStart());
```

You can store the coroutine instance to allow for stopping it later if necessary.

```c#
Coroutine _runningCoroutine;

IEnumerator GameStart() { ... }

public RunGameStartCoroutine()
{
  // If the running coroutine isn't null
  if (_runningCoroutine != null)
  {
    // Stop it, passing the reference to StopCoroutine
    StopCoroutine(_runningCoroutine);
  }

  // Store the new running coroutine
  _runningCoroutine = StartCoroutine(GameStart());
}
```

## Everything Sprites

#### Zooming Camera to Sprite Size

[The Link](https://answers.unity.com/questions/760671/resizing-orthographic-camera-to-fit-2d-sprite-on-s.html)

```c#
// Orthographic size is 1/2 the vertical size seen by the camera
// Sets the camera to be sized around the sprite bounds
float cameraSize = spriteBounds.size.y * Screen.height / Screen.width;
camera.orthographicSize = cameraSize;
```

> Note: Camera must be orthographic for this code to work.

## Errors


