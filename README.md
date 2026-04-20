<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
=======
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
>>>>>>> ca34e640ee6f338f5d096eb2f3041a26f8e8a4bc
