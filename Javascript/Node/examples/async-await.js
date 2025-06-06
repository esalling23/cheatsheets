// Async/await are newer syntax introduced in Node v8

const runAsync = async () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (true) resolve('data')
			else reject('error')
		}, 2000)
	})
}

const main = async () => {
	const data = await runAsync()
	console.log(data)
}

main().catch(console.error)