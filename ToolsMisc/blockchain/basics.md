# Blockchain Basics

A blockchain is a distributed database of interconnected blocks. 
Each block contains cryptographically secured data, and the entire network is decentralized so there is no single point of failure. 

- **Decentralization**: The absense of a central authority makes the network more resilient & reliable. 
- **Consensus**: Consensus mechanisms, such as Proof of Work or Proof of Stake, enable agreement w/in the network w/o the need to trust any single participant.
- **Cryptography**: The use of cryptography ensures transaction & data security.

## How it Works

### Blocks

It all starts with the first block - the **genesis block**.

Blocks contain:
  - a unique, identifiable hash
	- the previous block's hash
	- at least 1 transation

Each block tracking the previous block makes the system very secure. A hacker would need to generate the hashes & match them to the right block w/o breaking any other blocks. 

### Mining

Any user on the blockchain network can perform transations, which ends up creating a block. The block is then added to the chain. The process of adding new blocks is known as **mining**.

A hash is generated when mining & used in creating a block. There are different methods (consensus mechanisms) for generating blocks/hashes, such as Proof of Work or Proof of Stake. 

### Consensus Mechanisms

The system the blockchain uses to choose the updater is called a "consensus mechanism." Most consensus mechanisms currently use either Proof of Work or Proof of Stake.

#### Proof of Work

In proof of work, the updater aka "miner" who is in charge of validating the new block transactions & adding them to the blockchain is decided through competition. 

For each group of transactions, the blockchain assigns a complex puzzle that can only be solved with brute computing power. Whoever solves the puzzle first gets to update the blockchain ledger. 

#### Proof of Stake

In Proof of Stake, the updater aka "validator" is chosen at random. Holders of the cryptocurrency can choose to "stake" their coins, setting them aside. Any user with staked coins can be chosen at random to be the validator. The more staked coins you have, the higher chance of your being chosen. 

#### Comparison

| method | pros | cons | real-world example |
|--------|------|------|--------------------|
| PoW | Older & proven (Bitcoin has been using for 10+ years), more difficult to gain advantage over due to the high physical resources (servers) required to run the crypto algorithms | slower (10 min average to add block on Bitcoin) with higher energy usage & physical footprint due to physical resources required | Bitcoin |
| PoS | more accessible for anyone to participate in the chain, lower energy/physical footprint, faster (12 sec average to add block on Ethereum) | lower barrier to manipulate since anyone can participate w/o need for super powered machines, allows rich to get richer bc more staked coins means more chance of being selected for a transaction, newer & less-proven system | Ethereum |

## In Practice

Blockchains can be written in many languages, including JavaScript. 

