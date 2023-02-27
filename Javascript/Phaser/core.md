# Core Concepts

## The Pieces

Phaser is based on "games" and "scenes" within the game that use different reserved functions to manage game flow. Scenes can render "game objects", handle user input, update animations, etc.

- `preload` (before scene loads)
- `create` (renders things)
- `update` (runs every animation frame)

### Example Getting Started

1. Get a server running that loads an HTML file containing at least one node (with a valid ID attribute) for the Phaser game.
2. Create an instance of `Phaser.Game`, pass it config values:
   - `height`, `width`, and `parent` (the HTML node ID)
3. Create "scene" one of two ways:
   - Subclass `Phaser.Scene` and include [reserved functions](#reserved-functions) as methods on the class.
   - Define [reserved functions](#reserved-functions) on their own.
4. Provide either scene functions or classes to the `Phaser.Game` instance in the config object.

That`s it! The tough part will be building the game itself.

---

## The Game Object

The game object holds all the configuration settings for the Phaser game. It is configured by creating a new instance of `Phaser.Game` with a config object.

This creates an HTML `canvas` element and appends it to the document.

[Common settings](https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig):

- `scale` ([`ScaleConfig` Object](https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.ScaleConfig)):
    - `height` and `width` (Number): Base size of the game
    - `autoCenter` ([`Center` option](https://photonstorm.github.io/phaser3-docs/Phaser.Scale.Center.html)): How the game should be centered
    - `mode`
    - `parent` (String):  HTML element in which to place the game canvas
    - *Note: many of these options can be set on their own outside of the `scale` option. Put them in `scale` for further organization.*
- `title` (String): Title shown in browser console
- `backgroundColor` (String): This color surrounds the game in any empty space. Default is black
- `scene` (Object of [reserved functions](#reserved-functions) or Array of `Phaser.Scene` subclasses): Scenes or scene functions to use for the game. Will use first scene first or the scene where `active` is `true`
- `physics` ([PhysicsConfig Object](https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.PhysicsConfig)): Physics settings. There are currently two main modes, `arcade` and `matter` (MatterJS support)

---

## Scenes

Scenes are a way to organize larger projects, and are subclasses of `Phaser.Scene`. Any game object will contain at least once scene or functions that make up a scene, such as `create` (see below).

The first scene provided in the array of `scene`s in the game config will be loaded first. Each scene is provided a unique `key` in the `constructor`'s `super` method call (`super({ key: 'uniqueSceneKey' })`).
Scenes can load one another by passing the unique scene key to `this.scene.load`.

### Reserved Functions

Phaser uses reserved functions, similar to "lifecycle methods" in React, to allow us to do things at different points in the game loop.

> Note: These functions can be written using any valid function syntax that does not override `this` - that means **no** arrow functions.

| Function Name | Job |
|---------------|---------|
| `preload` | Loads assets for scene |
| `create` | Renders things to scene |
| `update` | Runs every animation frame |

#### Quick Guide Diagram

![Function flow diagram](https://content.codecademy.com/courses/learn-phaser/Phaser%20Scene%20Flow.png)

#### Helpful Methods

*`preload`*:

| Name | Explanation |
|-------------|-|
| `load.setBaseURL` | If all files are in `src/assets` then you can append that to all `load`s |
| | |



---

## State

It's just an object..

```js
const gameState = {}

```

---

## Game Objects

We can add a lot of objects to the scene, including [sprites](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObjectFactory.html#sprite__anchor), [images](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObjectFactory.html#image__anchor), custom-drawn [shapes](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObjectFactory.html#rectangle__anchor), and [text](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObjectFactory.html#text__anchor).

> **Note:** Objects will be added to the scene in order. That means add your backgrounds before your text, etc. 

```js
function create() {
    const someText = this.add.text(200, 200, `Some text right here`)
    const someRect = this.add.rectangle(200, 400, 50, 50, 0xFFFFFF)

    // Don`t forget to load your assets in `preload`!
    const someSprite = this.add.sprite()
    const someImage = this.add.image(400, 500, `image-key`)
}
```

### Colors

Colors must be a number format and we tend to use hexadecimal, so the format will be `0xFFFFFF` where `FFFFFF` is the hex code for the chose color.

---

## Events

Events are handled with a combination of:

- calling `.setInteractive()` on the GameObject which will respond to input
- handling events on that GameObject using callback functions

### Keyboard Events

`this.input.keyboard.on()`

### Mouse Events

```js

```

### Common Events

[Full List]()

| Event Name | Meaning |
|------------|--------|
| `pointerdown` | the mouse button has been pressed (but not released) on the GameObject. |
| `pointerup` | the mouse button has been released over a GameObject. |
| `pointerover` | the mouse pointer hovers over the GameObject. |
| `pointerout` | the mouse pointer that was hovering over a GameObject is moved somewhere else. |



---

## Grid Movement

Since the `update` method runs every animation frame, that is where we want any movement logic to go.

Objects have `x` and `y` properties which are their coordinates. Access `myObj.x` and directly modify that value to move the object left and right, for example.

![Grid System diagram](https://content.codecademy.com/courses/learn-phaser/Phaser%20Grid%20System.png)


---

## To Be Organized

A place for random notes while I think of them, to be organized later. 

- Containers do not support sprite animations (this.anims.create etc)
    - They DO support tweens for shapes etc. 