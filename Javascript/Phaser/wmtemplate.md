# WM Template

https://bitbucket.org/workinmaninteractive/template-phaser

- `src/index.js`: Entrypoint, where game and config are defined

## Scenes

In order of appearance:

- `src/scenes/SceneBoot.js`:
- `src/scenes/ScenePreloader.js`:
- `src/scenes/SceneSplash.js`:
- `src/world/SceneWorld.js`: Example world scene - the game itself

The `workinman/display/SceneBase.js` file provides a subclass of `Phaser.Scene` that includes:

- an `ElementManager` instance
- clears elements on `'shutdown'` event
- `inTransition` and `outTransition` methods, used by `WMUtils`

## ElementManager

The `ElementManager` class uses [Phaser Layers](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Layer.html) for managing game objects. 
