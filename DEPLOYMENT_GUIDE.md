# Osvara 2.0 - Complete Deployment Guide

This guide covers deploying your full-stack application:

- **Frontend**: Vercel
- **Backend**: Supabase (with Edge Functions)
- **Database**: PostgreSQL (via Supabase)

---

## Prerequisites

1. **Supabase Account** - Create one at https://supabase.com
2. **Vercel Account** - Create one at https://vercel.com
3. **Stripe Account** - Already configured (update with production keys)
4. **Git Repository** - Push your code to GitHub/GitLab
5. **Node.js 18+** - Installed locally

---

## Part 1: Database Setup (Supabase PostgreSQL)

### Step 1: Create Supabase Project

1. Go to https://supabase.com and sign in
2. Click "New Project"
3. Configure:
   - **Name**: `osvara` (or your preference)
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose closest to your users
   - **Pricing**: Free tier is fine for testing

### Step 2: Get Database Credentials

1. Go to Project Settings → Database
2. Copy the connection string under "URI":
   - Format: `postgresql://postgres:[PASSWORD]@[HOST]:[PORT]/postgres`
3. Save for later use

### Step 3: Run Migrations

1. Clone/download your project locally
2. Set up local environment:

```bash
cd backend
npm install
```

3. Create `.env.local` file in backend directory:

```
DATABASE_URL=postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres
NODE_ENV=development
PORT=5000
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
FRONTEND_URL=http://localhost:3000
```

4. Run migrations:

```bash
npx prisma migrate deploy
npx prisma db seed  # Optional: seed initial data
```

---

## Part 2: Backend Deployment (Supabase)

### Step 1: Prepare Backend for Supabase

Your current backend is a Node.js Express app. For Supabase, we have two options:

**Option A (Recommended): Use Supabase Edge Functions**

- Lightweight, serverless deployment
- No cold start issues with persistent connections

**Option B: Deploy to Another Service**

- Railway, Render, or similar (keep current Express setup)

We'll cover **Option A** below.

### Step 2: Convert to Supabase Edge Function

Create `supabase/functions/api/index.ts`:

```typescript
// This acts as your API endpoint
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  // Route to your Express app or handle directly
  return new Response("API ready", { status: 200 });
});
```

**Alternative (Simpler): Deploy Express to Vercel**

Create `vercel.json` in backend root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "DATABASE_URL": "@osvara_database_url",
    "STRIPE_SECRET_KEY": "@osvara_stripe_secret",
    "STRIPE_WEBHOOK_SECRET": "@osvara_stripe_webhook",
    "FRONTEND_URL": "@osvara_frontend_url"
  }
}
```

### Step 3: Set Environment Variables in Supabase

1. Go to Supabase Project → Settings → API Settings
2. Note your project URL and API keys
3. Update `.env.production`:

```
DATABASE_URL=postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres
NODE_ENV=production
PORT=3001
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
FRONTEND_URL=https://yourdomain.com
```

---

## Part 3: Frontend Deployment (Vercel)

### Step 1: Prepare Frontend for Vercel

Create `vercel.json` in frontend root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "VITE_API_URL": "@osvara_api_url"
  },
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Step 2: Update Frontend API Configuration

Create/update `frontend/src/config/api.ts`:

```typescript
const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? "http://localhost:5000" : "https://your-api.com");

export default API_URL;
```

Update `frontend/src/api/client.ts`:

```typescript
import axios from "axios";
import API_URL from "../config/api";

const client = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
```

### Step 3: Update vite.config.ts for Production

The current config proxies to localhost. Update to handle production:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy:
      process.env.NODE_ENV !== "production"
        ? {
            "/api": {
              target: "http://localhost:5000",
              changeOrigin: true,
            },
          }
        : undefined,
  },
});
```

### Step 4: Deploy to Vercel

1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Configure:
   - **Root Directory**: `frontend/`
   - **Framework**: Vite
   - **Environment Variables**:
     - `VITE_API_URL`: Your backend API URL
     - `VITE_STRIPE_KEY`: Your public Stripe key

5. Click Deploy

---

## Part 4: Connecting Everything

### Update Backend Environment Variables

Once you have deployment URLs, set environment variables:

**In Supabase:**

1. Project Settings → API Settings
2. Add custom environment variables:
   - `FRONTEND_URL`: `https://your-vercel-domain.vercel.app`

**In Vercel (Frontend):**

1. Project Settings → Environment Variables
2. Add:
   - `VITE_API_URL`: `https://your-supabase-api-url.supabase.co`

### Update CORS Configuration

Backend `src/config/cors.ts`:

```typescript
export const corsOptions = {
  origin: [process.env.FRONTEND_URL, "http://localhost:3000"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
};
```

---

## Part 5: Stripe Configuration

### Production Keys

1. Get live keys from Stripe Dashboard
2. Update environment variables in both Supabase and Vercel:
   - `STRIPE_SECRET_KEY`: Live secret key
   - `STRIPE_WEBHOOK_SECRET`: Create webhook in Stripe dashboard

### Webhook Setup

1. Stripe Dashboard → Webhooks
2. Add endpoint: `https://your-supabase-api/webhooks/stripe`
3. Subscribe to events:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`

---

## Part 6: Database Backups & Monitoring

### Supabase Dashboard

- **Database** → Monitor query performance
- **Storage** → Manage file uploads
- **Logs** → Check API logs
- **SQL Editor** → Run manual queries

### Automated Backups

Supabase provides daily backups on free tier. Upgrade plan for more frequent backups.

---

## Quick Deployment Checklist

- [ ] Supabase project created and migrations run
- [ ] Database credentials saved securely
- [ ] Backend environment variables set
- [ ] Frontend API client configured
- [ ] Frontend deployed to Vercel
- [ ] Backend deployed (Edge Functions or alternative)
- [ ] CORS configured
- [ ] Stripe production keys updated
- [ ] Stripe webhooks configured
- [ ] Domain/DNS pointing to Vercel
- [ ] SSL certificates installed (automatic on Vercel)
- [ ] Database connection tested
- [ ] Payment flow tested with Stripe test mode first

---

## Troubleshooting

### Database Connection Issues

```bash
# Test connection locally
npx prisma db execute --stdin < /dev/null
```

### CORS Errors

- Check frontend URL in backend env vars
- Ensure credentials: true in Axios client
- Check allowed origins in cors.ts

### Stripe Webhooks Not Working

- Verify webhook secret matches environment
- Check logs in Stripe dashboard
- Ensure endpoint URL is accessible

### Environment Variables Not Loading

- Vercel: Need to redeploy after adding env vars
- Supabase: Changes take effect immediately
- Check variable names (case-sensitive)

---

## Additional Resources

- Supabase Docs: https://supabase.com/docs
- Vercel Docs: https://vercel.com/docs
- Prisma Deployment: https://www.prisma.io/docs/guides/deployment
- Stripe Integration: https://stripe.com/docs/stripe-cli

---

## Next Steps

1. Follow this guide step-by-step
2. Test locally before deploying
3. Deploy database first
4. Deploy backend second
5. Deploy frontend last
6. Test end-to-end in production

Need help? Check the troubleshooting section or consult the resource links above.
