# WebSockets

The WebSocket ptotocol allows a client to establish two-way full duplex communication with a server. 

## Background Concepts

### Polling

Polling is the process of a client pinging a server for updates. This method pre-dates WebSockets which are more efficient for server <--> client two-way communication.

The first type of polling is **short polling**, which involves the client pinging the server at a reliable interval with an AJAX/HTTP request to get new information. The server will respond with either new or no updates for the client. The client will then continue to ping until it gets the information it needs. 

Another form of polling, **long polling**, involves a similar process of polling in which the client pings the server for data, but instead of the server responding immediately with either new or no updates, the server waits until **new updates are available**. Only then will it respond to the client, reducing the number of calls the client needs to make for updates & responses the server needs to handle. 

### Two-way communication

Two-way communication can also be called **full-duplex communication**. In this system, both parties that are communicating with eachother can both send & receive information. 

Other forms of communication include half-duplex communication in which participants take turns sending or receiving information (like a walkie-talkie) and simplex communication that involves one party sending & one party receiving information.

In WebSockets, both the server & client can send & receive information. 

### Server-Sent Events (SSE) and EventSource

[Server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) can be used when the client needs server information, but not the other way around. This can be useful for features such as Twitter or blog feeds, in which the client needs to be updates when the server has new data, but the server doesn't need to get any data from the client to provide its updates. 

> Traditionally, a web page has to send a request to the server to receive new data; that is, the page requests data from the server. With server-sent events, it's possible for a server to send new data to a web page at any time, by pushing messages to the web page. These incoming messages can be treated as Events + data inside the web page.

The server sending information to the client is also known as **server-push** because the server is pushing updates to the client directly.

`EventSource` is used to implement SSE, and opens a persistent, one-directional communication channel from the server to the client over HTTP. 

SSE is not fully supported in older browsers and limited in most browsers.

### Latency

Low latency means there is very little time between requests & responses. WebSockets are generally known as having low latency due to their speedy response times. This is because the connection is already established & open so no additional packets are needed to establish the TCP connection.

## Socket.io

Socket.io is a JavaScript library that adds further features to the WebSocket API, including rooms, multi-socket broadcasting, and both client & server integrations, to name a few. 

