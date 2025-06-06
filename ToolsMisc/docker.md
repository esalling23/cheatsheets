# Docker

Docker is a platform that enables developers to package applications and their dependencies into containers, ensuring consistency across different environments. With Docker Desktop and Docker Compose, you can easily build, run, and manage multi-container applications locally.

**How to Use Docker with Docker Desktop and Docker Compose:**
1. **Install Docker Desktop:** Download and install Docker Desktop for your operating system from the official Docker website.
2. **Write a Dockerfile:** Define your application's environment and dependencies in a `Dockerfile`.
3. **Create a docker-compose.yml:** Use a `docker-compose.yml` file to configure and run multi-container Docker applications.
4. **Build Images:** Run `docker-compose build` to build your application images.
5. **Start Services:** Use `docker-compose up` to start all services defined in your compose file.
6. **Manage Containers:** Use Docker Desktop's GUI or CLI commands (`docker ps`, `docker stop`, etc.) to manage running containers.
7. **Stop Services:** Run `docker-compose down` to stop and remove containers, networks, and volumes created by `up`.

Docker simplifies development workflows, promotes environment consistency, and streamlines deployment processes.


## Connecting to Docker Container

To connect to a running Docker container from your local terminal, use the following command:

```sh
docker exec -it <container_name_or_id> /bin/bash
```

- Replace `<container_name_or_id>` with the actual name or ID of your running container.
- If the container uses `sh` instead of `bash`, use `/bin/sh`:

```sh
docker exec -it <container_name_or_id> /bin/sh
```

This command opens an interactive shell session inside the container, allowing you to run commands as if you were inside the container's environment.

### Postgres Instance

[See here](https://stackoverflow.com/questions/37694987/connecting-to-postgresql-in-a-docker-container-from-outside)


