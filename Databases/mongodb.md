# MongoDB

## Advantages

- Supports field, range-based, string pattern matching type queries
- Supports primary & secondary indexes on fields
- Basically uses JS objects in place of procedures
- Uses a dynamic database schema
- Very easy to scale vertically
- Has inbuilt support for data partitioning (sharding)

- Supports Indexing
- Designed to scale
- Rich with Features
- High Performance
- Load Balancing
- Supports sharding

## Setup

First step is to install `mongodb` package & ensure you are connected to your MongoDB instance. 

On your server (NodeJS example) you'll need to establish the connection and get access to the `db` object. 

Then, you can access collections via `db.collectionName`
You can insert, query, etc. using `db.collectionName.methodName`

Some common methods are `.find` for querying and `.insert` or `.insertMany` for adding documents to the collection. 

## Indexing

Indexing is the process of marking certain fields for easy lookup in MongoDB. You can have a limited number (34) of indexed fields in a given collection. 
You can use the `.createIndex` method to create indexes. After performing a query, use the `.explain('executionStats')` method to understand how the index has affected the query. 

## Transactions

MongoDB transactions provide the means to execute multiple operations as a single logical unit of work. This ensures that **either all operations within the transaction are completed successfully, or none of them take effect**, maintaining data consistency and integrity.

This supports atomic transactions - where either all actions complete or none do.

https://medium.com/@vikramgyawali57/transactions-in-mongodb-basics-and-example-4c2d8aab55eb

## Sharding aka "partitioning"

Sharding is the process of splitting up data across machines. 

MongoDB’s sharding allows you to create a cluster of many machines (shards) and break up a collection across them, putting a subset of data on each shard.

## Replica Set

A group of servers with one primary (used for writes) and several secondary databases used for backups and reads. If the primary crashes, a new primary is elected amongst the secondaries. 

