# Sohrab Amini — Admin Dashboard

Administrative dashboard and content management system for the Sohrab Amini Portfolio.

The admin application provides authenticated access to portfolio content and communicates with the backend REST API for managing website data.

---

# Overview

The dashboard is responsible for managing the content displayed on the public portfolio website.

```text
Admin Dashboard
      │
      │ REST API
      ▼
Backend API
      │
      │ Prisma
      ▼
PostgreSQL
      │
      │ REST API
      ▼
Public Portfolio
```

Changes made in the dashboard are persisted through the backend API and database.

---

# Features

## Authentication

* Login
* Protected routes
* Authentication state
* Access control
* Session handling
* Logout

---

# Dashboard

The dashboard includes:

* Overview
* Statistics
* Quick actions
* Timeline
* Responsive sidebar
* Header
* Breadcrumb navigation
* Theme switching
* Global search

---

# Global Search

The dashboard provides a global content search.

Features include:

* Debounced search
* Search API integration
* Search result grouping
* Resource-aware navigation
* Empty states
* Error handling
* `Ctrl + K`
* `Cmd + K`

Search resources include:

```text
Hero
About
Services
Portfolio
Contact
Settings
```

---

# Service Management

Service management includes:

* Create service
* Edit service
* Delete service
* Activate service
* Deactivate service
* Reorder services
* Search services
* Filter services
* Service statistics
* Service details
* Form validation
* Loading states
* Empty states
* Delete confirmation

Service fields include:

```text
title
shortDescription
description
icon
category
color
features
technologies
order
isActive
```

---

# Portfolio Management

Portfolio management provides:

* Project creation
* Project editing
* Project deletion
* Project listing
* Project details
* Slug management
* Published status
* Featured status
* Project ordering
* Technology management
* Project metadata
* Portfolio image management

Supported project statuses:

```text
DRAFT
PUBLISHED
ARCHIVED
```

---

# Contact Management

Contact management allows administrators to update:

* Phone number
* WhatsApp number
* Contact information

The updated data is persisted in PostgreSQL through the backend API and can then be consumed by the public website.

---

# Architecture

The admin application separates UI, API communication, business-facing hooks, and reusable components.

A typical resource follows:

```text
Page
↓
Hook
↓
Service
↓
API
↓
Axios
↓
Backend API
```

For example:

```text
Portfolio Page
      ↓
usePortfolio
      ↓
portfolio.service
      ↓
portfolio.api
      ↓
Axios
      ↓
/api/portfolio
```

---

# Project Structure

```text
admin/
│
├── public/
│
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   └── ...
│
├── .env
├── package.json
└── README.md
```

---

# Technology Stack

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
* Tailwind Merge

---

# Environment

Create:

```text
admin/.env
```

Configure the backend API:

```env
VITE_API_URL=http://localhost:5000/api
```

---

# Installation

```bash
cd admin

npm install
```

Start development server:

```bash
npm run dev
```

---

# API Integration

The dashboard should communicate with the backend through the centralized Axios/API layer.

Avoid making direct Axios requests inside individual UI components.

The preferred architecture is:

```text
Component
   ↓
Hook
   ↓
Service
   ↓
API
   ↓
Axios
```

This keeps API contracts centralized and makes resources easier to maintain.

---

# UI Architecture

The dashboard uses reusable UI components for common operations such as:

* Buttons
* Inputs
* Forms
* Modals
* Tables
* Cards
* Status indicators
* Loading states
* Empty states
* Confirmation dialogs
* Navigation elements

Domain-specific components remain inside their respective feature areas.

---

# Error Handling

The dashboard handles:

* API errors
* Validation errors
* Authentication errors
* Loading states
* Empty states
* Failed requests
* Delete failures
* Save failures

User-facing notifications are handled through the project's notification system.

---

# Development Workflow

Start the backend first:

```bash
cd ../backend

npm run dev
```

Then start the admin dashboard:

```bash
cd ../admin

npm run dev
```

Make sure:

```env
VITE_API_URL=http://localhost:5000/api
```

points to the running backend.

---

# Development Principles

When implementing a new CMS resource, maintain the existing architecture:

```text
API
↓
Service
↓
Hook
↓
Page
↓
Components
```

The frontend contract must remain synchronized with the backend route and response contract.

Avoid:

* Hard-coded API URLs
* Direct HTTP calls from presentational components
* Duplicated API logic
* Inconsistent response parsing
* Resource-specific logic inside generic components

---

# Related Applications

The dashboard communicates with:

```text
../backend
```

and manages data consumed by:

```text
../portfolio
```

---

# License

MIT License
