# Personal setup

There's a million ways to host a website. The following outlines my main setup for personal projects:

## DigitalOcean

DigitalOcean is a cloud infrastructure provider that offers scalable and affordable hosting solutions. It allows developers to deploy, manage, and scale applications by providing virtual private servers (VPS), commonly referred to as "droplets." DigitalOcean is popular for its user-friendly interface, simplicity, and competitive pricing, making it ideal for both beginners and experienced developers.

## Ubuntu Droplets

An Ubuntu droplet is a virtual private server running the Ubuntu operating system, one of the most popular Linux distributions. In DigitalOcean, a droplet represents an isolated instance with its own dedicated CPU, memory, and storage resources. Ubuntu droplets are commonly used because Ubuntu is well-supported, secure, and has a vast repository of software packages. Users can deploy Ubuntu droplets to host websites, applications, databases, and other services.

## Nginx

Nginx (pronounced "engine-x") is a high-performance web server and reverse proxy server. It is widely used to serve static content, manage API requests, and handle load balancing across multiple servers. Nginx is known for its efficiency, speed, and ability to handle a large number of concurrent connections, making it an excellent choice for high-traffic websites and applications.

## Let's Encrypt

Let's Encrypt is a free, automated, and open certificate authority (CA) that provides SSL/TLS certificates. These certificates are used to encrypt data between the user's browser and the web server, ensuring secure communication and improving trust and SEO rankings. Let's Encrypt makes it easy for anyone to secure their website with HTTPS, and its certificates are supported by all major browsers. The automation provided by Let's Encrypt’s tools also simplifies the process of certificate issuance and renewal.

## PM2

PM2 is a production process manager for Node.js applications. It allows developers to run and manage their Node.js applications in the background as a service, providing features such as process monitoring, automatic restarts on failures, load balancing, and clustering. PM2 helps ensure that applications remain running smoothly and efficiently, even in production environments, by automatically handling errors and optimizing resource usage.

