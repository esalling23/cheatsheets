# Nginx

```sh
server {
    server_name eronsalling.me www.eronsalling.me;

    location = /favicon.ico { access_log off; log_not_found off; }
    location /static {
        expires -1;
        alias /home/eron/eron-salling-portfolio/staticfiles;
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }

    client_max_body_size 100M;



    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/eronsalling.me/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/eronsalling.me/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
# server {
#     if ($host = eronsalling.me) {
#         return 301 https://$host$request_uri;
#     } # managed by Certbot


#     if ($host = www.eronsalling.me) {
#         return 301 https://$host$request_uri;
#     } # managed by Certbot


#     listen 80;
#     listen [::]:80;
#     server_name eronsalling.me www.eronsalling.me;
#     client_max_body_size 100M;

# }
# server {
#     server_name eronsalling.me www.eronsalling.me;
#     listen 80;
#     return 404; # managed by Certbot
# }
# server {
#     if ($host = eronsalling.me) {
#         return 301 https://$host$request_uri;
#     } # managed by Certbot


#     server_name eronsalling.me www.eronsalling.me;
#     listen 80;
#     return 404; # managed by Certbot
# }

```


Working configuration:
```

# Redirect all HTTP traffic to HTTPS, and handle www to non-www redirect
server {
    listen 80;
    listen [::]:80;
    server_name squeezer.eronsalling.me www.squeezer.eronsalling.me;

    # Redirect to HTTPS with non-www
    return 301 https://squeezer.eronsalling.me$request_uri;
}

# HTTPS server block with www to non-www redirect
server {
    listen 443 ssl;
    server_name squeezer.eronsalling.me www.squeezer.eronsalling.me;

    ssl_certificate /etc/letsencrypt/live/squeezer.eronsalling.me/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/squeezer.eronsalling.me/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

    client_max_body_size 100M;

    # Redirect www to non-www
    if ($host = www.squeezer.eronsalling.me) {
        return 301 https://squeezer.eronsalling.me$request_uri;
    }

    location / {
        proxy_pass http://143.198.132.99:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}




```


# Redirect all HTTP traffic to HTTPS, and handle www to non-www redirect
server {
    listen 80;
    listen [::]:80;
    server_name ecommerce.eronsalling.me www.ecommerce.eronsalling.me;

    # Redirect to HTTPS with non-www
    return 301 https://ecommerce.eronsalling.me$request_uri;
}

# HTTPS server block with www to non-www redirect
server {
    listen 443 ssl;
    server_name ecommerce.eronsalling.me www.ecommerce.eronsalling.me;

    ssl_certificate /etc/letsencrypt/live/ecommerce.eronsalling.me/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/ecommerce.eronsalling.me/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

    client_max_body_size 100M;

    # Redirect www to non-www
    if ($host = www.ecommerce.eronsalling.me) {
        return 301 https://ecommerce.eronsalling.me$request_uri;
    }

    location / {
        proxy_pass http://143.198.132.99:4147;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}


