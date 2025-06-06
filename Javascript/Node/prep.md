# Interview Prep

## How does NodeJS handle child processes? 

NodeJS is a **single threaded** process. 
It does not expose child threads/thread management to the developer. 
Child threads are spawned by Node to handle tasks such as async input/output, but these run behind the scenes & do not execute any application JS code or block the main event loop. 

This said, there is the ChildProcess module & other experimental modules for exposing threading support.

## How does NodeJS support multi-processor platforms, and does it fully utilize all processor resources?

As NodeJS defaults to using a single thread, it will run on a single processor core. However, the Cluster module provides support for deployment over multi-core systems, which allows for multiple worker processes sharing the same port. 

## What is typically the first argument passed to a NodeJS callback handler?

An error object, which will be null or undefined if no error exists. 

```js
function callback(err, results) {
	if (err) {
		// handle error, return
	}

	// no error, standard callback handling
}
```

## What is REPL & it's purpose? 

REPL stands for Read, Evaluate, Print, and Loop
This is the coding sandbox environment for NodeJS and is used for code testing w/o scripts & for the creation of CLI (command line interface) applications. 

## setTimeout usage question

Consider the following code:
```js
console.log('first')
setTimeout(() => {
	console.log('second')
}, 0)
console.log('third')
```
Which outputs 
```
first
third
second
```

Assuming this is the correct output - how else could we write this code? 

---

### Answer: Using `setImmediate`

`setTimeout` will return a callback that is added to the function stack to be run as soon as possible. Even though we pass `0` as the `delay` parameter, this function will still run after `console.log('third')` since that function is already in the queue. 
`setImmediate` will achieve the same effect, except it doesn't use the queue of functions. It will instead check for I/O event handlers. If all I/O events in the current snapshot are processed, it will execute the provided `callback` parameter. This is faster than `setTimeout(fn, 0)`. 

New code: 
```js
console.log('first')
setImmediate(() => {
	console.log('second')
})
console.log('third')
```

## What is the preferred method of resolving unhandled exceptions in NodeJS?

Unhandled exceptions can be caught at the `Proess` level by attaching a handler for an `uncaughtException` event. 

```js
process.on('uncaughtException', (err) => {
	console.log(`Caught exception: ${err}`)
})
```

This is a crude way of handling errors. You lose the context of the error, and once the error has bubbled up to the `Process` level, restarting the application is likely the only solution to resolve it. 

Other methods of handling errors includes the `domain` module, which is currently deprecated. There are other NPM packages such as `boom` or `youch` which assist with handling errors. Additionally, API middleware such as ExpressJS middleware can assist with handling errors. 

## Browser vs Server

Both web browser & server code can be written in JS, however the browser environment is very different from the server environment. Recently, WebServices have made running NodeJS in the browser possible, but usually NodeJS is reserved for server-side code. 