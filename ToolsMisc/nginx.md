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