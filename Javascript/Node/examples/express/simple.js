// ExpressJS is used to simplify building NodeJS applications
// by including support for things like middleware, routing, and more

const express = require('express')

const app = express()

const PORT = 3000

app.listen(PORT, () => {
	console.log(`Server running at port ${PORT}`)
})