# Next.js Data Fetching & API Integration Project

## Overview
This project was built as part of a web development assignment to demonstrate data fetching techniques and API integration using Next.js. It includes server-side rendering, static generation, client-side fetching, dynamic routing, and secure API endpoints.

---

## 🚀 Features

### 📡 API Routes
- `/api/posts` – Returns a list of blog posts (mock data)
- `/api/secure` – Protected route that requires a token query parameter

### ⚡ Data Fetching Methods
- `getStaticProps` – Used on the homepage for static generation
- `getStaticPaths` – Used for dynamic post pages
- `getServerSideProps` – Used for server-side rendering page
- Client-side fetching using `useEffect` and `fetch()`

### 🔐 Security
- Simple token-based protection for API route (`/api/secure?token=123`)

### 🧭 Pages
- Home page (list of posts)
- Dynamic post pages (`/posts/[id]`)
- Server-side rendering page (`/server`)
- Client-side fetching page (`/client`)

---

## 🛠️ Tech Stack
- Next.js
- React
- JavaScript (ES6+)
- REST API (built-in Next.js API routes)

---

## 📸 Learning Outcomes
- Understanding of static vs server-side rendering
- Working with API routes in Next.js
- Handling asynchronous data fetching
- Managing loading and error states in React
- Dynamic routing with Next.js

---

## ▶️ How to Run Locally

```bash
npm install
npm run dev
