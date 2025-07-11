# skygem-insurance-frontend

A modern insurance recommendation app built with **Next.js**, **React**, and **TypeScript**.

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1. Clone the Repository
```sh
git clone https://github.com/sagun-k/skygem-insurance.git
cd skygem-insurance
```

### 2. Install Dependencies
This project uses pnpm (As we might change the project structure to mono-repo in future for better experience). If you don't have it.
```sh
npm install -g pnpm
```
Then install all dependencies
```sh
pnpm install
```

### 3.Development
```sh
pnpm run dev
```
Open http://localhost:3000 in your browser to view the app.

### 3. Dockerization
We already have setup dockerfile
Build and run docker

docker build -t skygem-insurance-frontend .
docker run -p 3000:3000 --env-file .env.local skygem-insurance-frontend


### 4.Deployment
Deploy to Vercel (Recommended)
Go to vercel.com and import your GitHub repo.

Set environment variables in Vercel dashboard (from .env.local).

Vercel will auto-deploy on push to main or production.

#Deploy Anywhere (Custom)
Host on Netlify, AWS Amplify, or your own VPS

Run pnpm build then pnpm start or next export if using static export