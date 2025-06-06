import dotenv from 'dotenv'
dotenv.config()

import { dirname } from "node:path";
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

import express from 'express'
import http from 'http'
import { MongoClient } from 'mongodb'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
  console.log('a user connected');
});

const client = new MongoClient(process.env.MONGO_CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

try {
	await client.connect()
} catch (err) {
	await client.close()
}

const database = client.db('chat')
const messages = database.collection('message')

const changeStream = messages.watch();

changeStream.on('change', next => {
	switch (next.operationType) {
		case 'insert':
			console.log(next.fullDocument.message)
			io.emit('chat message', next.fullDocument.message)
			break;
		case 'update':
			console.log(next.updateDescription.updatedFields.message)
			io.emit('chat message', next.updateDescription.updatedFields.message)
			break;
	}
})

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.get('/messages', async (req, res) => {
	const data = await messages.find({ message: { $ne: null }}).toArray()
	console.log(data)
	res.status(200).send(data)
})

server.listen(3000, () => {
	console.log('server listening at port 3000')
})