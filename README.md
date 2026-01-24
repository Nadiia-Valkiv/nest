# NestJS Project

## 📋 Project Overview

A basic NestJS application demonstrating modular architecture and environment configuration.

**Features:**
- Users Module with Controller and Service
- Environment configuration (development & production)
- Centralized config management

## Project Structure
```
src/
├── config/
│   └── configuration.ts        # Environment configuration
├── users/
│   ├── users.controller.ts     # HTTP endpoints
│   ├── users.service.ts        # Business logic
│   └── users.module.ts         # Module definition
├── app.module.ts               # Root module (imports ConfigModule & UsersModule)
└── main.ts                     # Entry point
```
## ⚙️ Configuration

The project uses environment-based configuration:

- `.env.development` - Local development settings
- `.env.production` - Production settings
- `configuration.ts` - Loads and structures env variables
- `ConfigModule` imported in `app.module.ts` with `isGlobal: true`

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Learning impression
I really like NestJS because it's very similar to Angular. The decorators, modules, and dependency injection work the same way, so it's easy for me to learn. I hope my Angular knowledge will help me with backend development!