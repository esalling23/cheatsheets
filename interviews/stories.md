# Stories From Experience

We'll try to use the STAR method

## NodeJS Stories

## ExpressJS Stories

## Socket.io Stories

Challenge: Session management & player reconnect on loss

Story: 
While working on the Jackbox-style party games "Emerging Citizens", we needed to handle players dropping due to poor connection etc. and allow them to re-join games that were in progress. 
We kept track of players in an array, and if one dropped they were marked as no longer connected. We kicked the player from the socket room if they were disconnected for a given amount of time, otherwise if they re-joined the room they would be marked as connected again would join the relevant socket room. 
To handle catching players up, we would note the last socket event name that occurred & re-broadcast it to the player when they rejoined.

## MongoDB Stories

Challenge: Repeated query performance improvements
This was not out of necessity but rather a look-ahead and best practice approach based on query repetition.

Story: During my time building Slack bot's "Daedalus", we needed to keep track of all messages sent by players during gameplay. In a separate application for research purposes the team wanted a display of the messages to filter through and understand. 
Due to the high number of messages, the team wanted to make sure performance wouldn't be an issue when filtering by different players or bots. Each message tracked a username, which was either a human or a bot. We added an index to the `username` field to improve the performance of these searches. 
In addition, there were a lot of times that the researchers wanted to see messages just in certain stages of the game or during certain time blocks. For this reason we also added indeces for the `gameStage` and `timestamp` fields of the messages. 
We considered creating aggregate pipelines to assist with data sorting and grouping, but due to the research team's use of CSV data analysing software decided that aggregates would not provide much additional value. 
