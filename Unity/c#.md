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
  - [2D Physics](#2d-physics)
  - [UI](#ui)
    - [Positioning Via Script](#positioning-via-script)
    - [Positioning In World Space](#positioning-in-world-space)
      - [Move UI Element to Game Object Position](#move-ui-element-to-game-object-position)
    - [UI Blocking Game Objects](#ui-blocking-game-objects)
  - [Everything Sprites](#everything-sprites)
      - [Zooming Camera to Sprite Size](#zooming-camera-to-sprite-size)
  - [Input](#input)
    - [Mouse Input](#mouse-input)
      - [Getting Mouse Position](#getting-mouse-position)
  - [Errors](#errors-1)

This cheatsheet contains some "vanilla" C# as well as sections on Unity-specific code in C#.

----

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

| Feature | Example |
|---------|---------|
| Check if dict contains key | `my_dict.ContainsKey("key")` |

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

### Get Random Value

```c#
Array values = Enum.GetValues(typeof(Bar));
Random random = new Random();
Bar randomBar = (Bar)values.GetValue(random.Next(values.Length));
```

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

## Singleton

```c#
public class SomeClass : MonoBehaviour {
    private static SomeClass _instance;

    public static SomeClass Instance { get { return _instance; } }

    private void Awake()
    {
        if (_instance != null && _instance != this)
        {
            Destroy(this.gameObject);
        } else {
            _instance = this;
        }
    }
}
```
[From here](https://gamedev.stackexchange.com/questions/116009/in-unity-how-do-i-correctly-implement-the-singleton-pattern}

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

## Random Numbers

[Docs](https://docs.unity3d.com/ScriptReference/Random.Range.html)

```c#
Random.Range(-10.0f, 10.0f);
```

### Random Enum

https://stackoverflow.com/questions/3132126/how-do-i-select-a-random-value-from-an-enumeration

```c#
Array values = Enum.GetValues(typeof(Bar));
Random random = new Random();
Bar randomBar = (Bar)values.GetValue(random.Next(values.Length));
```

## Instantiating GameObjects

To [instantiate](https://docs.unity3d.com/ScriptReference/Object.Instantiate.html) game objects is to create them & add them to the scene.

You can instantiate any game object, such as one you're storing in a `SerializeField` or one you found with a scene-search. You can also use `Resources.Load` and then instantiate that loaded resource.

```c#
// Pass the current object's transform to have the
// instantiated object be a child of this object
Transform parent = gameObject.transform;
Vector3 location = gameObject.transform.position;
// The rotation https://docs.unity3d.com/ScriptReference/Quaternion.html
Quaternion rotation = Quaternion.identity;
// The resource to instantiate
GameObject cats = Resources.Load("Prefabs/Cats") as GameObject;
// Instantiate the object, at the location, using the rotation provided
Instantiate(cats, location, rotation, parent);
```

## 2D Physics

### Rigidbodies

[**Pausing/Unpausing**](https://answers.unity.com/questions/284068/pauseing-and-resuming-a-rigidbody.html)


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

public void RunGameStartCoroutine()
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

## Colliders

```c#
void OnTriggerEnter (Collision col) 
{
  if (col.gameObject.CompareTag("SomeTag"))
  {
    Debug.Log("triggered");
  }
}
```

## Handling Keyboard Input

```c#
void Update () {  
  // Define an input axis then listen for it's changes
  float horizontalValue = Input.GetAxis("Horizontal");  
  float verticalValue = Input.GetAxis("Vertical");  

  if (horizontalValue < 0) {  
    Debug.Log("Left");  
  }

  if (horizontalValue > 0) {  
    Debug.Log("Right");  
  }

  if (verticalValue < 0) {  
    Debug.Log("Down");  
  }

  if (verticalValue > 0) {  
    Debug.Log("Up");  
  }

  // Or individual keys
  if (Input.GetKey(KeyCode.A)) {
    Debug.Log("You pressed the A key");
  }
}
```

### GetAxisRaw

No filtering/decimal values - all the way right/left check.

```c#
// .abs func with convert to dist from 0, so always possitive
// use this to easily find out 1 || -1
if (Mathf.Abs(Input.GetAxisRaw("Horizontal")) == 1) {

}
```

## UI

### Positioning Via Script

`RectTransform`s are used on UI elements, so `transform.position` will not match what's expected. Instead, use `GetComponent<RectTransform>().anchoredPosition`.

### Positioning In World Space

World Space - that is, the space your game objects are in.

#### Move UI Element to Game Object Position

A snippet, from [here](https://forum.unity.com/threads/create-ui-health-markers-like-in-world-of-tanks.432935/?_ga=2.240009995.944453754.1635180507-1928936071.1626577930):

```c#
// Offset position above object box (in world space)
float offsetPosY = target.transform.position.y + 1.5f;

// Final position of marker above GO in world space
Vector3 offsetPos = new Vector3(target.transform.position.x, offsetPosY, target.transform.position.z);

// Calculate *screen* position (note, not a canvas/recttransform position)
Vector2 canvasPos;
Vector2 screenPoint = Camera.main.WorldToScreenPoint(offsetPos);

// Convert screen position to Canvas / RectTransform space <- leave camera null if Screen Space Overlay
RectTransformUtility.ScreenPointToLocalPointInRectangle(canvasRect, screenPoint, null, out canvasPos);

// Set
markerRtra.localPosition = canvasPos;
```

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

### Sizing/Positioning Box Collider

```c#
BoxCollider2D _box = GetComponent<BoxCollider2D>();
SpriteRenderer _sprite = GetComponent<SpriteRenderer>();

// Example: box collider is half the height, full width of sprite
// Positions bottom-center so collider is over bottom-half of sprite
_box.size = new Vector2(_sprite.bounds.size.x, _sprite.bounds.size.y / 2);
_box.offset = new Vector2(0, -_sprite.bounds.size.y / 4);
```

### Zooming Camera to Sprite Size

[The Link](https://answers.unity.com/questions/760671/resizing-orthographic-camera-to-fit-2d-sprite-on-s.html)

```c#
// Orthographic size is 1/2 the vertical size seen by the camera
// Sets the camera to be sized around the sprite bounds
float cameraSize = spriteBounds.size.y * Screen.height / Screen.width;
camera.orthographicSize = cameraSize;
```

> Note: Camera must be orthographic for this code to work.

## Input

### Mouse Input

#### Getting Mouse Position

1. Get pixel position: https://docs.unity3d.com/ScriptReference/Input-mousePosition.html
2. Convert to world space: https://docs.unity3d.com/ScriptReference/Camera.ScreenToWorldPoint.html


## Errors

#### "Cannot implicitly convert type 'TYPE' to 'System.Action'"

```c#
Action _nextAction;
// ...
_currentDialogue.NextAction = () => {};
// ...
_nextAction = _currentDialogue.NextAction();
```

Don't let your tired brain trick you - you're assigning that variable the
**return value** of that function, but it wants the function itself. 

