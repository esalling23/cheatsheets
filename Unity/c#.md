# C# Unity Cheatsheet <!-- omit in toc -->

**Contents**

- [Basic C](#basic-c)
  - [Modifiers](#modifiers)
  - [Variables](#variables)
  - [Classes](#classes)
    - [Fields](#fields)
  - [Sequence Types](#sequence-types)
    - [Linq](#linq)
  - [Namespaces](#namespaces)
  - [Errors](#errors)
    - [The non-static property or method 'Something' cannot be accessed](#the-non-static-property-or-method-something-cannot-be-accessed)
- [Unity-Specific C](#unity-specific-c)
  - [Resources](#resources)
  - [Instantiating GameObjects](#instantiating-gameobjects)
  - [Coroutines](#coroutines)
  - [UI](#ui)
    - [Positioning Via Script](#positioning-via-script)
    - [UI Blocking Game Objects](#ui-blocking-game-objects)
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

| Feature | Array | List | String |
|---------|-------|------|--------|
| Use case | Fixed-length list | Dynamic list | Ordered sequence of characters |
| Get size | `myArr.Length` | `myList.Count` | `myStr.Length` |
| Get element | `myArr[i]` | `myList[i]` | `myStr[i]` |
| Add element | Not supported - arrays are fixed-length | `myList.Add(item)` | `myString + " new characters"` |

### Linq

`System.Linq` provides sequence iteration methods.

| Feature | Linq Method | Example | JS Method |
|---------|-------------|---------|-----------|
| Filters | `Where` | myArr.Where(item => conditional) | `.filter` |
| Return new instance of each item (like a single key) | `Select` | myArr.Select(item => item.key) | `.map` |

----

## Namespaces

Add `using Module;` to top of files to use different namespaces that will contain available classes etc. Examples include `using System;` or `using UnityEngine;`

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

# Unity-Specific C#

## Resources

You can load prefabs etc. (instead of assigning them in the inspector) through [Unity Resources](https://docs.unity3d.com/ScriptReference/Resources.html). You'll need a `Resources` directory with all your loadable resources in it.

Then in the code:

```c#
using UnityEngine;
using System.Collections;

public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        GameObject go = GameObject.CreatePrimitive(PrimitiveType.Plane);
        Renderer rend = go.GetComponent<Renderer>();
        rend.material.mainTexture = Resources.Load("glass") as Texture;
    }
}
```

> Note: The Resources folder in Assets needs to be created before it is used. It is not created when a new Project is created.

## Instantiating GameObjects

To [instantiate](https://docs.unity3d.com/ScriptReference/Object.Instantiate.html) game objects is to create them & add them to the scene.

You can instantiate any game object, such as one you're storing in a `SerializeField` or one you found with a scene-search. You can also use `Resources.Load` and then instantiate that loaded resource.

```c#
// Use the current object's transform as the location to have the
// instantiated object be a child of this object
Vector3 location = gameObject.transform.position;
// The rotation https://docs.unity3d.com/ScriptReference/Quaternion.html
Quaternion rotation = Quaternion.identity;
// The resource to instantiate
GameObject cats = Resources.Load("Prefabs/Cats") as GameObject;
// Instantiate the object, at the location, using the rotation provided
Instantiate(cats, location, rotation);
```

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

## UI

### Positioning Via Script

`RectTransform`s are used on UI elements, so `transform.position` will not match what's expected. Instead, use `GetComponent<RectTransform>().anchoredPosition`.

### UI Blocking Game Objects

We don't want to handle mouse overs on game objects that are underneath UI elements, because the user is probably just interacting with the UI.

Potentially better solutions but this is what I have in-use now:

```c#
if (Input.GetMouseButtonDown(0)) {
  if (UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject())
      return;
  Bingo();
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


