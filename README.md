# Sohrab Amini Portfolio & CMS

A modern full-stack personal portfolio website and content management system (CMS), built with React, Node.js, Express, Prisma, and PostgreSQL.

The project is designed as a modular monorepo-style application containing three independent applications:

* `portfolio/` — Public portfolio website
* `admin/` — Administrative dashboard and CMS
* `backend/` — RESTful API and application backend

The architecture focuses on clean separation of concerns, maintainability, scalability, reusable components, API-driven content management, and consistent frontend/backend contracts.

---

## Overview

Sohrab Amini Portfolio is more than a static portfolio website.

The public website consumes content from a dedicated REST API, while the administrative dashboard provides authenticated content management capabilities.

Changes made through the CMS are persisted in PostgreSQL and become available to the public website through the API.

```text
                    ┌─────────────────────┐
                    │   Public Website    │
                    │     portfolio/      │
                    └──────────┬──────────┘
                               │
                               │ HTTP / REST API
                               ▼
                    ┌─────────────────────┐
                    │      Backend        │
                    │      backend/       │
                    └──────────┬──────────┘
                               │
                         Prisma ORM
                               │
                               ▼
                    ┌─────────────────────┐
                    │     PostgreSQL      │
                    └─────────────────────┘
                               ▲
                               │
                         HTTP / REST API
                               │
                    ┌──────────┴──────────┐
                    │   Admin Dashboard   │
                    │       admin/        │
                    └─────────────────────┘
```

---

# Features

## Public Portfolio Website

The public-facing application provides a responsive and animated personal portfolio experience.

### Sections

* Hero
* About
* Services
* Portfolio
* Contact
* Footer

### Website capabilities

* Responsive design
* Mobile-first layout
* Dark / Light theme
* Smooth animations
* Framer Motion transitions
* API-driven content
* Dynamic contact information
* Dynamic services
* Dynamic portfolio projects
* Responsive navigation
* Reusable UI components
* SEO-oriented structure
* Optimized asset usage
* Accessible interactive elements
* Loading and error states

---

# Admin Dashboard

The admin application provides a centralized CMS interface for managing portfolio content.

### Dashboard

* Dashboard overview
* Statistics
* Quick actions
* Timeline
* Global search
* Search result navigation
* Keyboard shortcut support
* Responsive layout
* Sidebar navigation
* Breadcrumb navigation
* Theme switching

### Content management

* Hero management
* About management
* Services management
* Portfolio management
* Contact management
* Settings management

### Service management

* Create service
* Update service
* Delete service
* Activate / deactivate service
* Reorder services
* Search services
* Filter services
* Service statistics
* Service details
* Form validation
* Empty states
* Loading states
* Delete confirmation

### Portfolio management

* Create projects
* Update projects
* Delete projects
* Fetch projects
* Fetch project by ID
* Fetch project by slug
* Published projects
* Featured projects
* Project status management
* Project ordering
* Project metadata
* Technology management
* Project image management
* Admin actions and controls

### Contact management

* Manage phone number
* Manage WhatsApp number
* Persist contact information
* Update contact information
* API-driven public contact data
* Validation
* Loading and error handling

---

# Backend API

The backend provides the central REST API consumed by both the public website and administrative dashboard.

### Core capabilities

* RESTful API
* JWT authentication
* Refresh token authentication
* Cookie-based authentication
* Authorization
* Role system
* Request validation
* Global error handling
* Standardized API responses
* Repository pattern
* Service layer
* Prisma ORM
* PostgreSQL
* File upload infrastructure
* Image upload support
* Resume upload support
* Database seeding
* CRUD operations
* Global search

---

# Backend Architecture

The backend follows a layered architecture with clear separation of responsibilities.

```text
Client
  │
  ▼
Route
  │
  ▼
Middleware
  │
  ▼
Controller
  │
  ▼
Service
  │
  ▼
Repository
  │
  ▼
Prisma ORM
  │
  ▼
PostgreSQL
```

### Responsibilities

#### Routes

Define API endpoints and connect requests to controllers.

#### Middleware

Handle cross-cutting concerns such as:

* Authentication
* Authorization
* Validation
* Upload handling
* Error handling

#### Controllers

Handle HTTP-level responsibilities:

* Request parameters
* Request body
* Calling services
* HTTP status codes
* API responses

#### Services

Contain business logic and validation workflows.

#### Repositories

Handle database access through Prisma.

#### Prisma

Provides the ORM layer between the application and PostgreSQL.

---

# API Resources

The backend currently provides APIs for the following resources:

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

# Portfolio API

The Portfolio domain supports:

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

Portfolio image management is handled separately:

```text
POST   /api/portfolio-images/:portfolioId/images
GET    /api/portfolio-images/:portfolioId/images
GET    /api/portfolio-images/:id
PUT    /api/portfolio-images/:id
PATCH  /api/portfolio-images/:id/order
DELETE /api/portfolio-images/:id
DELETE /api/portfolio-images/portfolio/:portfolioId
GET    /api/portfolio-images/portfolio/:portfolioId/count
```

---

# Services API

The Services domain supports:

* Service CRUD
* Service activation
* Service deactivation
* Ordering
* Reordering
* Statistics
* Search and filtering
* Structured service metadata

Service data includes:

* Title
* Short description
* Description
* Icon
* Category
* Color
* Features
* Technologies
* Display order
* Active status

---

# Contact API

The Contact domain provides centralized contact information.

Supported data includes:

* Phone
* WhatsApp
* Contact record ID
* Timestamps

The public website reads the contact information through the backend API, allowing contact information managed from the dashboard to be reflected on the website without hard-coding the values into the public UI.

---

# Global Search

The dashboard includes a global search system.

Search is available across:

* Hero
* About
* Services
* Portfolio
* Contact
* Settings

The dashboard search includes:

* Debounced search
* Search API
* Search hook
* Search result navigation
* Resource-aware routing
* Empty states
* Error isolation
* `Ctrl + K` keyboard shortcut
* `Cmd + K` support on macOS

---

# Tech Stack

## Public Website

* React 19
* Vite
* React Router DOM
* Axios
* React Hook Form
* Zod
* Framer Motion
* Tailwind CSS v4
* DaisyUI
* Iconsax React
* Tailwind Merge

## Admin Dashboard

* React
* Vite
* React Router DOM
* Axios
* React Hook Form
* Zod
* Framer Motion
* Tailwind CSS
* DaisyUI
* Iconsax React

## Backend

* Node.js
* Express.js
* Prisma ORM
* PostgreSQL
* JWT
* bcrypt
* Cookie Parser
* Helmet
* Morgan
* CORS
* Compression
* Multer
* Cloudinary
* Zod

## Development

* ESLint
* Nodemon
* Prisma Studio
* Prisma Migrate
* Git
* GitHub

---

# Project Structure

```text
SohrabAmini/
│
├── admin/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── ...
│   ├── package.json
│   └── README.md
│
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.js
│   │
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── repositories/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── validations/
│   │   └── server.js
│   │
│   ├── package.json
│   └── README.md
│
├── portfolio/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   ├── package.json
│   └── README.md
│
├── .gitignore
└── README.md
```

---

# Database

The backend uses PostgreSQL through Prisma ORM.

Current primary domain models include:

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

Project status is represented using:

```text
DRAFT
PUBLISHED
ARCHIVED
```

Authentication roles currently include:

```text
ADMIN
```

---

# Environment Variables

Each application should maintain its own environment configuration.

Typical backend configuration:

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE

JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret

PORT=5000
NODE_ENV=development
```

Frontend applications use the backend API URL:

```env
VITE_API_URL=http://localhost:5000/api
```

Do not commit real secrets, database credentials, JWT secrets, API keys, or production environment files to Git.

---

# Getting Started

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* PostgreSQL
* Git

Recommended Node.js version:

```text
Node.js 20+
```

---

# Clone Repository

```bash
git clone https://github.com/taharezazade/Sohrab-Amini-Portfolio.git

cd Sohrab-Amini-Portfolio
```

---

# Backend Setup

```bash
cd backend

npm install
```

Create the environment file:

```text
backend/.env
```

Configure the required environment variables.

Then initialize Prisma:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

If the project provides a database seed:

```bash
npx prisma db seed
```

Start the backend:

```bash
npm run dev
```

The development API runs on:

```text
http://localhost:5000
```

The API base URL is:

```text
http://localhost:5000/api
```

---

# Admin Setup

Open a new terminal:

```bash
cd admin

npm install

npm run dev
```

The Vite development server will provide the local dashboard URL.

---

# Portfolio Setup

Open another terminal:

```bash
cd portfolio

npm install

npm run dev
```

The Vite development server will provide the local public website URL.

---

# Development Workflow

The recommended development flow is:

```text
1. Start PostgreSQL
        ↓
2. Start Backend
        ↓
3. Start Admin Dashboard
        ↓
4. Start Public Portfolio
        ↓
5. Manage content through Admin
        ↓
6. Verify API response
        ↓
7. Verify public website
```

This keeps the CMS, API, database, and public application synchronized.

---

# API Response Format

The backend uses a standardized response structure.

Successful responses follow this general format:

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

This standardization allows frontend API and service layers to handle responses consistently.

---

# Validation

Request validation is implemented using Zod.

Validation is applied at the service/API boundary for resources such as:

* Authentication
* Services
* Portfolio
* Contact
* Other managed resources

Validation protects the API from malformed or incomplete input before database operations are executed.

---

# Error Handling

The backend uses centralized error handling.

The architecture separates:

```text
Validation Errors
Business Logic Errors
Authentication Errors
Authorization Errors
Database Errors
Upload Errors
Unknown Errors
```

Errors are converted into consistent HTTP responses rather than being handled independently inside every route.

---

# File Uploads

The backend includes an upload infrastructure based on Multer.

The upload layer supports image-related workflows and other file types required by the CMS.

Uploads are separated from business logic so resource services do not need to directly manage multipart parsing.

---

# Security

Security-related backend functionality includes:

* JWT authentication
* Refresh tokens
* HTTP-only cookies where applicable
* Password hashing with bcrypt
* Authentication middleware
* Authorization middleware
* Helmet
* CORS
* Request validation
* Centralized error handling
* Environment-based secrets

Sensitive configuration must remain outside version control.

---

# Current Progress

## Public Portfolio

* [x] Hero
* [x] About
* [x] Services
* [x] Portfolio
* [x] Contact
* [x] Footer
* [x] Responsive layout
* [x] Theme switching
* [x] Animations
* [x] API integration
* [x] SEO improvements

## Backend

* [x] Authentication system
* [x] Hero API
* [x] About API
* [x] Services API
* [x] Portfolio API
* [x] Portfolio image API
* [x] Contact API
* [x] Settings API
* [x] Upload infrastructure
* [x] Validation
* [x] Error handling
* [x] Standardized API responses
* [x] Database seed
* [x] Prisma models
* [x] Repository pattern
* [x] Service layer
* [x] Global search API

## Admin Dashboard

* [x] Authentication
* [x] Protected routes
* [x] Dashboard
* [x] Responsive layout
* [x] Sidebar
* [x] Header
* [x] Breadcrumb navigation
* [x] Theme switching
* [x] Dashboard widgets
* [x] Global search
* [x] Service management
* [x] Portfolio management
* [x] Contact management
* [ ] About management
* [ ] Settings management

---

# Architecture Principles

The project follows several core engineering principles:

### Separation of Concerns

Frontend presentation, API communication, business logic, and database access are separated.

### Reusability

Common UI components, API services, hooks, validation schemas, and backend utilities are designed for reuse.

### Consistent Contracts

Frontend API layers follow the backend endpoint and response contracts instead of accessing HTTP endpoints directly throughout components.

### Maintainability

Domain-specific functionality is organized into dedicated modules.

### Scalability

New resources can be added using the same architectural pattern:

```text
Model
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
API Service
↓
Hook
↓
UI
```

---

# Project Goals

The long-term goals of the project are:

* Clean architecture
* Scalable backend
* Reusable frontend architecture
* Strong API contracts
* Maintainable codebase
* Secure authentication
* High performance
* Modern UI/UX
* SEO-friendly public website
* Centralized content management
* Consistent development standards

---

# Notes

Some licensed assets, fonts, premium graphics, and media may intentionally be excluded from the repository.

Replace excluded assets with properly licensed alternatives before deploying the project.

Never commit:

```text
.env
.env.local
database credentials
JWT secrets
API keys
private certificates
production credentials
```

---

# License

This project is licensed under the MIT License.

---

# Author

**Taha Rezazade**

Frontend Developer • UI/UX Designer • Full Stack Web Developer

GitHub:

https://github.com/taharezazade
