# Node Scalable Architecture

## Scaling Strategies

### Horizontal Scaling

Increasingly splits the server into multiple instances which will each handle separate requests. This reduces the # of requests any one instance needs to handle at a time. 

**Cloning & load balancing** spreads the application across various instances/machines to enhance performance & resilience

### Vertical Scaling

Increases the resources a single server has to enable it to stay alive and handle requests. 

## Tools

### Cluster Module

[Website](https://nodejs.org/api/cluster.html#how-it-works)

Use the **cluster module**, a nodejs utility to fork the server according to the # of CPU cores

Notes: 
- Each cluster has it's own memory that cannot be shared with other clusters
  - Use a DB or memory cache (redis) to allow clusters to access shared memory
- Stateful communication poses challenges, as different workers may not have the same memory data. Stateless methods, such as JWT token-based authentication, can get around this problem. 

Each cluster uses worker threads to run code in a distinct child process, avoiding any interference with the main application. 

### PM2

[Website](https://github.com/Unitech/pm2)

Used as a process manager to provide support for managing multiple node applicaitons. It will restart worker processes one at a time, allowing workers to continue serving requests while others are being restarted. 
includes a built-in load balancer which enables clustering w/o modifying NodeJS code

- Automatic Restart: Whenever a Node.js application crashes or encounters an error, PM2 will automatically restart it.
- Process Monitoring: PM2 keeps track of application health by storing logs, monitoring resource usage, and tracking the status of Node.js processes.
- Load Balancing: PM2 simplifies load balancing with its built-in module.
- Zero-Downtime Deployment: PM2 can reload your application, ensuring zero downtime during deployments.
- Auto-start: PM2 saves the status of running processes and can auto-start them upon system reboot.
- Multiple Application Management: With PM2, you can run different Node.js processes and optimize your server resources.
