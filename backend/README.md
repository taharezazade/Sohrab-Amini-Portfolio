# Sohrab Amini — Backend API

RESTful backend API for the Sohrab Amini Portfolio and CMS.

The backend is built with Node.js, Express.js, Prisma ORM, and PostgreSQL and provides authentication, content management, validation, file upload infrastructure, search, and standardized API responses for the public website and admin dashboard.

---

## Architecture

The backend follows a layered architecture:

```text
Request
   ↓
Route
   ↓
Middleware
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Prisma
   ↓
PostgreSQL
```

Each layer has a specific responsibility.

### Route

Defines HTTP endpoints and middleware chains.

### Middleware

Handles concerns such as:

* Authentication
* Authorization
* Validation
* File uploads
* Error handling

### Controller

Responsible for HTTP request/response handling.

### Service

Contains business rules and application logic.

### Repository

Contains database operations.

### Prisma

Provides database access through the Prisma ORM.

---

# Technology Stack

* Node.js
* Express.js
* Prisma ORM
* PostgreSQL
* JWT
* bcrypt
* Zod
* Multer
* Cloudinary
* Helmet
* CORS
* Cookie Parser
* Morgan
* Compression
* Nodemon

---

# Directory Structure

```text
backend/
│
├── prisma/
│   ├── schema.prisma
│   └── seed.js
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validations/
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

---

# API Routes

The API is mounted under:

```text
/api
```

Available resources:

```text
/api/auth
/api/hero
/api/about
/api/services
/api/portfolio
/api/portfolio-images
/api/contact
/api/settings
/api/upload
/api/search
```

---

# Domain Architecture

The main content domains follow the same general pattern:

```text
Repository
Validation
Service
Controller
Route
```

This allows each domain to remain independent and easier to maintain.

---

# Portfolio

Portfolio supports:

```text
GET    /api/portfolio
GET    /api/portfolio/published
GET    /api/portfolio/featured
GET    /api/portfolio/slug/:slug
GET    /api/portfolio/:id

POST   /api/portfolio
PUT    /api/portfolio/:id
DELETE /api/portfolio/:id

PATCH  /api/portfolio/:id/status
PATCH  /api/portfolio/:id/featured
PATCH  /api/portfolio/:id/order
```

Portfolio images have their own management layer.

---

# Services

The Service domain supports:

* CRUD
* Active/inactive status
* Ordering
* Reordering
* Statistics
* Validation
* Structured features
* Technologies
* Categories
* Icons
* Colors

---

# Contact

The Contact domain manages:

```text
phone
whatsapp
image
```

The public website uses the Contact API rather than relying exclusively on hard-coded contact values.

The API supports:

* Fetch contact
* Fetch contact by ID
* Create contact
* Update contact
* Upsert contact
* Delete contact
* Check existence
* Count records
* Update phone
* Update WhatsApp
* Image operations

---

# Global Search

The search API provides centralized search across content resources.

Supported resources include:

* Hero
* About
* Services
* Portfolio
* Contact
* Settings

Search logic is isolated per resource so an unavailable resource does not unnecessarily break the entire search operation.

---

# Database

The application uses PostgreSQL through Prisma.

Primary models include:

```text
Admin
Hero
About
Service
Portfolio
PortfolioImage
Contact
Setting
```

Enums include:

```text
Role
ProjectStatus
```

---

# Prisma Commands

Install dependencies:

```bash
npm install
```

Generate Prisma Client:

```bash
npx prisma generate
```

Create and apply a development migration:

```bash
npx prisma migrate dev
```

Open Prisma Studio:

```bash
npx prisma studio
```

Run database seed when configured:

```bash
npx prisma db seed
```

---

# Environment Variables

Create:

```text
backend/.env
```

Example:

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE

JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret

PORT=5000
NODE_ENV=development
```

Never commit production secrets.

---

# Installation

```bash
cd backend

npm install
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

Start development server:

```bash
npm run dev
```

---

# API Response Contract

Successful API responses use a standardized structure:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Request completed successfully.",
  "data": {},
  "meta": null,
  "timestamp": "2026-01-01T00:00:00.000Z"
}
```

This contract is consumed by the frontend API/service layers.

---

# Validation

Zod schemas validate incoming application data before database operations.

Validation covers:

* Required fields
* Optional fields
* IDs
* Phone numbers
* WhatsApp numbers
* Resource-specific constraints
* Update payloads
* Ordering payloads

---

# Error Handling

The API uses centralized error handling for:

* Validation errors
* Authentication errors
* Authorization errors
* Resource-not-found errors
* Conflict errors
* Database errors
* Upload errors
* Unexpected application errors

Controllers delegate failures to the global error middleware through `next(error)`.

---

# Authentication

Authentication uses:

* JWT access tokens
* Refresh tokens
* Cookies where configured
* bcrypt password hashing
* Role-based authorization

The primary administrative role is:

```text
ADMIN
```

---

# File Uploads

The upload layer is based on Multer and is isolated from individual domain services.

Supported workflows include:

* Image uploads
* Portfolio images
* Hero assets
* Resume uploads
* Other CMS-managed files

---

# Development

Run the backend:

```bash
npm run dev
```

The default development API URL is:

```text
http://localhost:5000/api
```

---

# Related Applications

This backend is consumed by:

```text
../portfolio
../admin
```

The public website should use the backend through the configured:

```env
VITE_API_URL
```

---

# Development Principles

When adding a new domain, follow:

```text
Prisma Model
↓
Repository
↓
Validation
↓
Service
↓
Controller
↓
Route
↓
Frontend API
↓
Frontend Service
↓
Hook
↓
UI
```

Avoid putting database queries directly inside controllers or React components.

---

# License

MIT License
