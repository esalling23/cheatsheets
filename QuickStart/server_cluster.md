# Server Clusters

Assumes you have a cluster on Digital Ocean. May apply to other hosting services, may not. 

Mostly focused on DNS setup & Ubuntu commands.

## Get Going

1. Create an Ubuntu cluster
   1. SSH keys
2. Set up Nginx
3. Set up LetsEncrypt
4. Install your stack-specific stuff (node, whatever)

### Ubuntu Server Setup

#### Nginx

```

# Redirect all HTTP traffic to HTTPS, and handle www to non-www redirect
server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;

    # Redirect to HTTPS with non-www
    return 301 https://example.com$request_uri;
}

# HTTPS server block with www to non-www redirect
server {
    listen 443 ssl;
    server_name example.com www.example.com;

    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

    client_max_body_size 100M;

    # Redirect www to non-www
    if ($host = www.example.com) {
        return 301 https://example.com$request_uri;
    }

    location / {
        proxy_pass http://<SERVER_IP>:<APP_PORT>;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

```

#### LetsEncrypt

```
sudo certbot --nginx -d example.com -d www.example.com
```

## Debugging

Something's not quite right.

1. Confirm Nginx is running properly (`sudo systemctl status nginx`)
2. Confirm you have a valid LetsEncrypt certificate (`sudo certbot certificates`)
3. Check the DNS
   1. [Confirm changes have been propagated](https://www.whatsmydns.net/)
   2. [Other common issues](https://www.digitalocean.com/community/tutorials/how-to-fix-common-letsencrypt-errors)

## HTTPS

Keep in mind that port 3000 is an https port ([???](https://community.letsencrypt.org/t/site-cant-provide-a-secure-connection/191917/2))
So it will not work or SSL connections

## Stack-Specifics

Setup for specific stacks. 

### Django & React



### ME*N (MongoDB, Express, * Any frontend, Node)

The following steps focus on setting up a backend using Node, MongoDB, and Express.

1. install npm, grunt client, pm2 (node) https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04
"sudo apt-get install gcc make build-essential"
2. https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04 (node) -- http://www.tutorialspoint.com/articles/how-to-install-mongodb-on-ubuntu-16-04
3. make sure node has permissions to srv (sudo chmod -R 777 /srv/)
4. pm2 setup (local) `pm2 deploy deploy.json production setup`
5. add `.env` file to backend folder
6. check pm2 is running on servers by seeing if the folders are in srv 
  - You may need to set permissions for node
7. npm install and link framework & app (if npm keeps getting killed try https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-16-04)
8. make sure app is working (`node server.js`)
9.  Install Pm2: `NODE_ENV=production pm2 start server.js -- portfolio-website --env production` http://pm2.keymetrics.io/docs/usage/deployment/

## Copy files 

So you made a file on your server cluster that now you want on your local machine? 

Run on the server: 
```sh
scp eron@143.198.132.99:~/eron-salling-portfolio/projects.csv ~/Developer/eron-salling-portfolio/projects.csv
```

Other way around? got a file on local machine you need on server? 

Run on local:
```sh
scp ~/Developer/eron-salling-portfolio/projects.csv eron@143.198.132.99:~/eron-salling-portfolio/projects.csv
```