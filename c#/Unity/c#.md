<!-- TOC ignore:true -->
# C# & Unity 

This cheatsheet contains notes on Unity-specific code in C#.

**Contents**

<!-- TOC -->

- [C# \& Unity](#c--unity)
- [Unity-Specific C#](#unity-specific-c)
	- [Singleton](#singleton)
	- [Resources](#resources)
	- [Random Numbers](#random-numbers)
	- [Instantiating GameObjects](#instantiating-gameobjects)
		- [Setting Position](#setting-position)
	- [2D Physics](#2d-physics)
		- [Rigidbodies](#rigidbodies)
	- [Coroutines](#coroutines)
	- [Colliders](#colliders)
	- [Handling Keyboard Input](#handling-keyboard-input)
		- [GetAxisRaw](#getaxisraw)
	- [UI](#ui)
		- [Positioning Via Script](#positioning-via-script)
		- [Positioning In World Space](#positioning-in-world-space)
			- [Move UI Element to Game Object Position](#move-ui-element-to-game-object-position)
		- [UI Blocking Game Objects](#ui-blocking-game-objects)
	- [Everything Sprites](#everything-sprites)
		- [Sizing/Scaling Sprites](#sizingscaling-sprites)
		- [Sizing/Positioning Box Collider](#sizingpositioning-box-collider)
		- [Zooming Camera to Sprite Size](#zooming-camera-to-sprite-size)
	- [Input](#input)
		- [Mouse Input](#mouse-input)
			- [Getting Mouse Position](#getting-mouse-position)
	- [Errors](#errors)
			- ["Cannot implicitly convert type 'TYPE' to 'System.Action'"](#cannot-implicitly-convert-type-type-to-systemaction)

<!-- /TOC -->
<!-- /TOC -->

----

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

### Setting Position

Sometimes position needs to be set after the object is instantiated

```c#
var obj = Instantiate(...);

((RectTransform)obj.transform).anchoredPosition = new Vector2.zero;
```

[Stackoverflow](https://stackoverflow.com/questions/63990288/unity2d-instantiated-object-always-at-wrong-position)

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

### Sizing/Scaling Sprites

The `SpriteRenderer` will provide `bounds` which is its size in world space. 
If you want a sprite to span from position (0, 0) to (10, 10), essentially a 10x10 box, then you can scale the sprite based on its `bounds`:

```c#
float ratioX = 10f / _spriteRenderer.bounds.size.x;
float ratioY = 10f / _spriteRenderer.bounds.size.y;
_spriteRenderer.transform.localScale = Vector3.Scale(_spriteRenderer.transform.localScale, new Vector3(ratioX, ratioY, 1f));

```

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

