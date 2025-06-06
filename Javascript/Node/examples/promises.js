
// Promises can be used to implement asynchronous code

const runPromise = () => {
	return new Promise((resolve, reject) => {
		// run some async code
		setTimeout(() => {
			// either `resolve` or `reject` based on success
			if (true) {
				// resolve after code has run
				resolve('data')
			} else {
				reject('error :(')
			}
		}, 2000)
	})
}

runPromise()
	.then(response => {
		console.log(response)
	})
	.catch(err => {
		console.error(err)
	})