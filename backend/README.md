# Sohrab Amini Portfolio

A modern, scalable, and high-performance personal portfolio built with React, Vite, Tailwind CSS, and a custom Express.js backend. The project is designed with a clean architecture and will include a dedicated admin panel for dynamic content management.

---

## Overview

This project is more than a personal portfolio. It is a custom portfolio platform with a dedicated content management system (CMS) that allows the website owner to manage all sections without modifying the source code.

The website focuses on performance, responsive design, modern UI/UX, and maintainability.

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- DaisyUI
- Framer Motion
- React Scroll
- Axios
- Iconsax React

### Backend

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Zod Validation
- Cloudinary (Image Management)

---

## Features

### Public Website

- Modern Hero Section
- About Section
- Services
- Portfolio
- Contact
- Responsive Design
- Dark / Light Theme
- Smooth Scroll Navigation
- Optimized Images (WebP)

### Admin Panel (Upcoming)

- Secure Admin Authentication
- Dashboard
- Hero Management
- About Management
- Services Management
- Portfolio Management
- Contact Management
- Website Settings
- Image Upload Manager

---

## Project Structure

```text
SohrabAmini/

├── src/
├── public/
├── backend/
│
├── package.json
├── vite.config.js
└── README.md
```

---

## Backend Structure

```text
backend/

├── prisma/
├── src/
│   ├── config/
│   ├── constants/
│   ├── controllers/
│   ├── middlewares/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validations/
│   ├── app.js
│   └── server.js
│
├── uploads/
├── tests/
├── package.json
└── .env
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/taharezazade/Sohrab-Amini-Portfolio.git
```

Install frontend dependencies

```bash
npm install
```

Start frontend

```bash
npm run dev
```

Install backend dependencies

```bash
cd backend
npm install
```

Run backend

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000
DATABASE_URL=
JWT_SECRET=
CLIENT_URL=http://localhost:5173
```

---

## Roadmap

- Backend Infrastructure
- Database Design
- Authentication
- REST API
- Image Upload System
- Admin Dashboard
- Dynamic Website Content
- SEO Improvements
- Analytics
- Performance Optimization

---

## Performance Goals

- Lighthouse Score 95+
- Responsive on all devices
- Optimized WebP assets
- Lazy Loading
- Clean Architecture
- Scalable Backend

---

## Security

- JWT Authentication
- Password Hashing
- Request Validation
- Rate Limiting
- Secure HTTP Headers
- Environment Variable Protection

---

## License

All intellectual property, source code, visual assets, UI design, branding, and content belong to **Sohrab Amini**.

Unauthorized copying, redistribution, modification, or commercial use of any part of this project is prohibited without prior written permission.

---

## Developer

Designed and developed by **Taha Rezazade**

GitHub:
https://github.com/taharezazade

---

© Sohrab Amini. All rights reserved.