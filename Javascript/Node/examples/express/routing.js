// ExpressJS is used to simplify building NodeJS applications
// by including support for things like middleware, routing, and more
const express = require('express')

const app = express()
const PORT = 3000

// A route handles requests at a given endpoint
// It has access to the `next` function 
// in the case that it does not want to return a response
const route = (req, res, next) => {
	console.log('do something')

	if (false) {
		res.status(200).send('success')
	} else {
		// will move on to the next function on the chain
		next('Error: data missing') 
	}
}

// A middleware function can be run in between route handling
// It gets access to the same information as a route
// It MUST call `next` to continue through the chain
const middleware = (req, res, next) => {
	if (false) {
		// all good, continue on
		next('data found')
	} else {
		next('data missing')
	}
}

// Middleware can be plugged in at the app level...
// app.use(middleware)

// or at the route level
app.get('/test', middleware, route)

// and can also be used to handle errors by accepting an error as 
// the first argument of the middleware function
const errorHandler = (err, req, res, next) => {
	console.log('Error:', err)
	// Can be used to respond with error data
	res.status(500).send({ err })
}
// error handling middleware are usually used at the end of the chain 
// to catch errors that occur in earlier routing
app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`Server running at port ${PORT}`)
})