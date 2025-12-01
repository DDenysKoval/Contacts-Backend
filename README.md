# Contacts Backend

**Summary:**
Contacts Backend is a backend service for storing and managing contacts via REST API. The repository includes the server-side implementation, Swagger/Redocly API documentation, and environment configuration example.

---

## Technologies

* Node.js
* JavaScript
* Express
* Swagger / Redocly for API documentation

## Features

* CRUD operations for contacts (create, read, update, delete)
* Data validation
* API documentation via Swagger
* Environment-based configuration

---

## Quick Start (Local)

1. Clone the repository:

```bash
git clone https://github.com/DDenysKoval/Contacts-Backend.git
cd Contacts-Backend
```

2. Install dependencies:

```bash
npm install
```

3. Copy `.env.example` to `.env` and configure environment variables.

4. Start development server:

```bash
npm run dev
```

5. Open API documentation (if available):

* Swagger UI or Redocly — check `/swagger`, `/docs`, or your configuration.

---

## Environment Variables (.env)

An `.env.example` file is provided. Copy it to `.env` and set your values. Typical variables might include:

```
PORT=3000
DATABASE_URL=<connection-string>
JWT_SECRET=<your-jwt-secret>
NODE_ENV=development
```

> Review `.env.example` for exact keys.

---

## NPM Scripts

Refer to `package.json` for full list. Common scripts:

* `npm run dev` — start in development mode
* `npm start` — production start
* `npm test` — run tests (if available)

---

## API Documentation

The project includes a `swagger` and/or `docs` folder with an OpenAPI specification. To view:

1. Run the server
2. Open Swagger UI (`http://localhost:3000/api-docs`)
