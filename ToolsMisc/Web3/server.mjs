import express from 'express'
import crypto from 'crypto-js'
import Web3 from 'web3'

// Will allow us to interact with Ethereum blockchain
const web3 = new Web3(
	new Web3.providers.HttpProvider('http://localhost:8545')
)

const app = express()

app.use(express.json());

const blockchain = new Blockchain();

app.post('/addData', (req, res) => {
    let data = req.body;
    let newBlock = new Block(blockchain.getLatestBlock().index + 1, new Date(), data);
    blockchain.addBlock(newBlock);
    res.status(200).send("Data added successfully");
});

app.get('/getChain', (req, res) => {
	res.status(200).send(blockchain.chain);
});

app.listen(3000, () => {
	console.log('Server running on port 3000')
})