import { createHash } from 'node:crypto'

export class Block {
	constructor (index, timestamp, data, previousHash = '') {
		this.index = index
		this.timestamp = timestamp
		this.data = data
		this.previousHash = previousHash
		this.hash = this.calculateHash()
	}

	calculateHash() {
		const data = this.index + this.timestamp + this.previousHash + JSON.stringify(this.data);
		console.log(data)
		const hash = createHash('sha256').write(data)
		console.log(hash)
		// hash.write(data)
		return hash
	}
}