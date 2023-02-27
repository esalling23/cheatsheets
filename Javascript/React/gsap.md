# GSAP

Aka "GreenSock"

## Debugging

### Register Plugin Error

1. Ensure the plugin is registered: 
```js
import Plugin from 'gsap/Plugin'

gsap.registerPlugin(Plugin);
```

2. Double check your `.from`, `.to`, etc: 

What follows are examples of things that do/do not work for reference. 

**Cannot combine `css` w/ `xPercent`**
```js

// Does NOT work (w/ warning about missing plugin)
tl.to(terrainRef.current, {
  duration: 0,
  xPercent: 0,
  css: { zIndex: 1 },
})

// Works
tl.to(terrainRef.current, {
  duration: 0,
  xPercent: 0,
}).to(terrainRef.current, {
  duration: 0,
  css: { zIndex: 1 },
});

```