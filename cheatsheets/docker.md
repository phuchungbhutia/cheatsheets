title: Docker Cheatsheet

category: DevOps
description: A quick reference guide for essential Docker commands, container management, and best practices for deploying applications.

---

## 🛠️ Commands

### **Basic Docker Operations**

| Command              | Description                            |
| -------------------- | -------------------------------------- |
| `docker --version` | Check Docker version                   |
| `docker info`      | Display system-wide Docker information |
| `docker help`      | Get help with Docker commands          |

### **Container Management**

| Command                            | Description                               |
| ---------------------------------- | ----------------------------------------- |
| `docker run <image>`             | Run a container from an image             |
| `docker ps`                      | List running containers                   |
| `docker ps -a`                   | List all containers (running and stopped) |
| `docker stop <container>`        | Stop a running container                  |
| `docker rm <container>`          | Remove a stopped container                |
| `docker exec -it <container> sh` | Open a shell inside a running container   |

### **Image Management**

| Command                            | Description                       |
| ---------------------------------- | --------------------------------- |
| `docker images`                  | List all local images             |
| `docker pull <image>`            | Download an image from Docker Hub |
| `docker build -t <image_name> .` | Build an image from a Dockerfile  |
| `docker rmi <image>`             | Remove an image                   |

### **Networking & Volumes**

| Command                                  | Description             |
| ---------------------------------------- | ----------------------- |
| `docker network ls`                    | List available networks |
| `docker network create <network_name>` | Create a new network    |
| `docker volume ls`                     | List available volumes  |
| `docker volume create <volume_name>`   | Create a new volume     |

### **Docker Compose & Swarm**

| Command                  | Description                         |
| ------------------------ | ----------------------------------- |
| `docker-compose up -d` | Start services in detached mode     |
| `docker-compose down`  | Stop and remove services            |
| `docker swarm init`    | Initialize Docker Swarm mode        |
| `docker service ls`    | List running services in Swarm mode |

---

## 🔄 Workflows

### **Running a Basic Container**

1. Pull an image using `docker pull <image>`.
2. Run a container using `docker run <image>`.
3. List running containers using `docker ps`.

### **Building & Managing Images**

1. Create a Dockerfile and build an image using `docker build -t <image_name> .`.
2. Remove unused images using `docker image prune`.

### **Using Docker Compose for Multi-Container Applications**

1. Define services in `docker-compose.yml`.
2. Start services using `docker-compose up -d`.
3. Stop services using `docker-compose down`.

---

## 💡 Examples

```sh
# Run a container from an image
docker run ubuntu

# Build an image from a Dockerfile
docker build -t myapp .

# List running containers
docker ps
```

---

## 📚 References

- **[CLI Cheat Sheet - Docker Documentation](https://docs.docker.com/get-started/docker_cheatsheet.pdf)**
- **[The Ultimate Docker Cheat Sheet | dockerlabs](https://dockerlabs.collabnix.com/docker/cheatsheet/)**
- **[Docker Cheat Sheet : Complete Guide (2024) | GeeksforGeeks](https://www.geeksforgeeks.org/docker-cheat-sheet/)**

```
<!-- end list -->
```
