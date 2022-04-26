# NodeJS Express Auth

This project is for coding test to create an API for authentication and authorization using Express.

## Configure Environment Variables
Initialize environment variables for the project.

```bash 
cp env.example .env
```
(Optional) when using docker, remember initialize the environment variables with the following command:

```bash
cp docker.env.example .docker.dev.env
```

## Run: Development Mode
Run the project in development mode with the following command:

```bash
yarn dev
```

OR using docker:

```bash
docker-compose --env-file .docker.dev.env -f docker-compose.dev.yml up
```

## Test
Run test using the following command:

```bash
yarn test --coverage
```

API Documentation can be accessed through swagger doc on: http://localhost:3000/swagger