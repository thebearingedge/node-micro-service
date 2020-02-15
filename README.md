# node-micro-service

An example dockerized node application.

### NPM Scripts

```json
"scripts": {
  "dev": "nodemon -r dotenv/config .",
  "build": "docker build .",
  "start": "docker-compose up --build -d",
  "stop": "docker-compose down",
  "db:start": "docker-compose up --build -d postgres",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```
