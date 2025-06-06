# System Design

Notes largely taken from [this article](https://interviewing.io/guides/system-design-interview/part-two)

## Databases

ACID: 
SQL is better for ACID

Atomicity - transactions must revert in case of failure
Consistency - data is always up-to-date
Isolation - all reads/writes are independent & do not impact one another
Durability - data is not lost due to a failed read/write


Speed: 
SQL has faster reads usually
NoSQL has faster writes usually, slower reads

SQL's ACID-ity causes low latency if not required
For a messaging app, *eventual* consistency is perfectly fine, whereas in a payments app consistency must be immediate to avoid duplicate payments, etc. 
If eventual consistency is okay, then SQL is likely overkill unless other (A,I,D) are extremely important.

SQL is not great for mixed schema data. Requires migration process for updating fields, etc. 

### NoSQL

This is a catch-all term for many types of dbs:
- "key value"
- document
- columnar
- graph

MongoDB is a document store but supports key-value setup as well. 

## Scaling

Vertical vs horizontal scaling

Vertical = make the current system BIGGER and BEEFIER
Horizontal = duplicate the current system & distribute the load

Usually we cannot JUST do vertical - we'll run into limitations eventually, and having a single system means if it fails, it's down. Horizontal scaling offers us opportunities to redirect users to the duplicate systems if one fails. 

### DB Sharding

Sharding is a way of splitting up dbs into different groups. An item will use a hash function to determine which shard it should live in. Then, during queries the hash function is used to find the item in the correct shard. 

### Compute Scaling

This process involves splitting up data & ordering it in a queue for reads to fetch & writes to store.


## CAP Theorum

C - Consistency (all nodes in a distributed system have the same data at all times)
A - Availability (system is always available to users)
P - Partition Tolerance (if something fails in network or communication, the system still works)

Usually P is necessary - fault tolerance. 

But we cannot have all 3, says the CAP theorum. 
So which do we pick - Availability or Consistency? 

Financial systems, for example, need consistency. If data is out of sync with other nodes, actions like withdrawals should not be available bc we need to avoid these mistakes at all costs. 

Social media systems, for example, need availability. Even if a user isn't seeing the most up-to-date videos or posts, that's okay. What the user needs is available content, even if it's old. 
^ These systems are known to have *eventual* consistency. 

## Web Auth & Security

Security tradeoffs are between risks in a secure system vs functionality for users. 

- Authentication - who are you talking to
- Authorization - who has access to do The Thing

### Hash Function
a function that will process a password for example, turning it into a cryptographic hash for storage

Cryptographic hash functions make it as mathematically difficult as possible to determine the original value. 

Pass a hash through the same hash fn to get the original password. 

"my password" -> hash fn -> "garbled hexadecimal"
"garbled hexadecimal" -> hash fn -> "my password"

Generally we don't do this, and instead compare hashes: 
- user provides pw in login form
- we hash the provided pw
- we grab the stored hashed pw from the db
- compare the two hashes - if match, it's the same pw :)  log em in!

### Salting

Salting adds randomness to the pws - we can put pws through multiple "rounds" of salting for increased security. 

**Rainbow tables:**
A large table of common pws & their hashes using a common hashing fn. Used by hackers -- if they compare the rainbow table against a scraped db of users & their hashed pws, they can quickly find matches and identify pws. 

We defend against usage of rainbow tables with salting, bc it changes the common-ness of the pws with the added randomness. 
Salting essentially renders rainbow tables useless :)

### Session tokens

Once logged in, we don't want to have to send our authentication info (username, pw) each time. Instead, we generate a temporary token the user can use for a period of time. The token will be deleted (logout) or regenerated (expiration, rotation, new login). 

These tokens should be hashed & salted just like passwords. Rotate them silently in the background with each request to ensure they aren't useful for long, and are only being used by an active logged in user. 

### JSON Web Tokens (JWT)

JSON payload with info about the user & their permissions. This must be signed (private & public key) or encrypted (like a session token) to be secure. 

### Cookies

Browser cookies are a way to store session tokens or JWT for use in each request the logged-in user makes. 

Server can send a response with a `Set-Cookie` header that will tell the browser to store the cookie. The cookie will the *automatically* be sent in future requests from the client -> server.

Some flags help us secure cookies: 
- "Secure" flag tells browser to only include it in HTTPS (encrypted) requests
- "HttpOnly" flag ensures the cookie cannot be accessed via JS
- "SameSite" protects against CSRF (cross site request forgery) attacks

## Load balancers

Spread the load around to avoid nodes having to take on all of the traffic. 

Techniques
- Round robin: Send requests to a new node each time, so request 1 goes to node 1, r2 goes to n2, etc. until you run out of nodes & circle back to n1 & continue
- Least connections/Response time: send requests to the node w/ the least connections or the minimum response time
- Hashing: hash info about the request & use it to determine the node to send the request to. This means the same user would likely hit the same node each time, which can be good for WebSocket communication.

## Caching

Store a computation so you don't need to calculate it again in the future. 

This can be used to speed up requests at the trade-off of storage/memory space bc we are storing these computations. 

Caching is usually used for read-heavy systems.

80/20 rule says store 80% of the read requests in 20% of the memory. Identifying the most common read requests will enable you to efficiently cache what most of the read requests want to view. 

Be sure to consider cache expiration & invalidation so that cache data is not too stale for too long. 

### Cache aside pattern

First check cache for data - if it's not there, try the db & add to cache. 

This pattern can create stale data in the cache if the db was updated since the data was cached. We can use "time to expire" configurations to ensure the data is updated occassionally. 

If there are a lot of cache misses ie data not in the cache, then we're doing a lot of work (check cache, go to db, write to cache, return to user).

### Write through and Write back/behind patterns

Application writes data to cache, and cache writes data to db. 

If we do the db write async, it's called a write-back or write-behind since the process is happening in the background. If it's sync, we call it write-through. 

### Cache invalidation


Most popular strategy for cache invalidation is Least Recently Used (LRU). You cache data along with a timestamp of last read - if we need to make room for new data, remove the item with the oldest timestamp. 

### Dynamic programming

Dynamic programming uses caches to determine data updates. For example, if a function counts lines and counts 11, and then later we have 13 lines, we might use the previous count & then only run the function on the lines we haven't counted to update the cache to 13. 

## Message Queues

Line up tasks in order & handle them one-by-one, removing them from the queue after they're handled. First in-first out. 

**Asynchronous systems** do not wait for responses from sent requests - instead, all requests are sent to an intermediary queue/message broker. Aka "fire and forget" calls bc the original sender doesn't care about the response at all. only the intermediary really cares. 

Advantages of intermediary queues: 
- in the case of traffic spikes, the server will not get a surge of requests. the message queue will still manage sending the requests to the server in order. 
- for expensive processing, we can split up the messages so that the expensive one can happen while other messages are still being recieved & managed in the queue. 
- queues can manage sending data to multiple systems w/o the client needing to know about all the systems
- this decouples the client from the server, so the client doesn't need to know the server address

In a message queue/asynchronous system we have **Producers** of messages and **Consumers** of messages. The queue links producers to consumers.

Message queues have many different implementations, so they could have *any combo* of the following: 
- guaranteed delivery
- messages handled in-order of being sent/recieved
- no duplicate messages are handled/delivered
- at-least-once delivery to idempotent consumers
  - [see more](https://microservices.io/patterns/communication-style/idempotent-consumer.html)

Software examples: Kaftka, RabbitMQ

## Indexing



