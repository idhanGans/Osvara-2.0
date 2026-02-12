# Vercel Deployment Guide

## What is Vercel?

Vercel is the platform built by the creators of Next.js. It provides:

- **Frontend Hosting:** Automatic deployments from Git, global CDN
- **Serverless Functions:** Run Node.js backend code without managing servers
- **Edge Functions:** Run code at edge locations worldwide
- **Analytics:** Monitor performance and errors

Perfect for full-stack applications like yours.

---

## Part 1: Frontend Deployment to Vercel

### 1. Create Vercel Account

1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose GitHub login (recommended)
4. Authorize Vercel access to your repositories
5. You're in!

### 2. Deploy Frontend

#### Method A: Import from Git (Recommended)

1. Go to Vercel Dashboard
2. Click "New Project" or "Add New..." → "Project"
3. Find your Git repository
4. Click "Import"
5. Configure:
   - **Project Name:** `osvara-frontend` (or whatever)
   - **Root Directory:** `frontend/`
   - **Framework:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Add Environment Variables:
   ```
   VITE_API_URL = https://osvara-backend.vercel.app (update after backend deployed)
   VITE_STRIPE_PUBLIC_KEY = pk_live_xxxxxxxx (from Stripe)
   ```
7. Click "Deploy"

#### Method B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# From frontend directory
cd frontend
vercel
# Follow prompts, link to GitHub repo
# For production: vercel --prod
```

### 3. Frontend Deployment Complete

After deployment:

- Your frontend is at: `https://YOUR_PROJECT.vercel.app`
- Automatic HTTPS and SSL certificate
- Deployments happen automatically when you push to main branch
- Can preview pull requests before merging

---

## Part 2: Backend Deployment to Vercel

Vercel serverless functions can run your Express.js backend!

### 1. Prepare Backend Code

Create `api/` directory for Vercel:

```bash
cd backend
mkdir -p api
```

Create `api/server.ts` (wrapper for Express):

```typescript
import { createServer } from "http";
import { app } from "../src/app";

export default createServer(app);
```

Update `package.json` scripts:

```json
{
  "scripts": {
    "build": "prisma generate && tsc",
    "dev": "node --loader ts-node/esm src/server.ts",
    "start": "node dist/src/server.ts"
  }
}
```

### 2. Create vercel.json

Already created in your backend directory. Verify it has:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "DATABASE_URL": "@osvara_database_url",
    "STRIPE_SECRET_KEY": "@osvara_stripe_secret",
    "STRIPE_WEBHOOK_SECRET": "@osvara_stripe_webhook",
    "FRONTEND_URL": "@osvara_frontend_url",
    "NODE_ENV": "production",
    "PORT": "3001"
  }
}
```

### 3. Deploy Backend

#### Method A: Import on Vercel

1. Go to Vercel Dashboard
2. Click "New Project"
3. Import your repository
4. Select `backend` as root directory
5. Configure:
   - **Build:** `npm run build`
   - **Output:** `dist`
6. Add environment variables (see below)
7. Deploy

#### Method B: Vercel CLI

```bash
cd backend
vercel --prod
# Follow prompts and add environment variables
```

### 4. Add Backend Environment Variables

In Vercel Backend Project Settings:

1. Click "Settings" (top menu)
2. Go to "Environment Variables"
3. Add for Production:
   ```
   DATABASE_URL = postgresql://postgres:PASSWORD@...supabase.co:5432/postgres
   STRIPE_SECRET_KEY = sk_live_... (production key)
   STRIPE_WEBHOOK_SECRET = whsec_...
   FRONTEND_URL = https://osvara.vercel.app (or your frontend URL)
   NODE_ENV = production
   ```

### 5. Backend Deployment Complete

After deployment:

- Your API is at: `https://osvara-backend.vercel.app`
- Environment variables are set
- Database connection is ready

---

## Part 3: Connect Frontend to Backend

### Update Frontend Environment

In Vercel Frontend Project:

1. Go to Settings → Environment Variables
2. Update `VITE_API_URL`:
   ```
   VITE_API_URL = https://osvara-backend.vercel.app
   ```
3. Redeploy or create new deployment

### Verify Connection

After redeployment, test:

```javascript
// In browser console on frontend
fetch("https://osvara-backend.vercel.app/api/products")
  .then((r) => r.json())
  .then(console.log);
```

---

## Part 4: Vercel Project Settings

### Deployment Settings

```
Settings → Git
- Production Branch: main (or master)
- Preview Deployments: All pull requests
- Automatic Deployments: Yes (when you push)
```

### Domains & SSL

```
Domains → Add Domain
- Add your custom domain (e.g., osvara.com)
- SSL: Automatic (Vercel handles it)
```

### Analytics

```
Analytics → Monitor
- Page load times
- Web Vitals (Core Web Vitals)
- Traffic patterns
- Error rates
```

### Logs

```
Deployments → Select Deployment → Logs
- Function Logs (backend API calls)
- Build Logs
- Error tracking
```

---

## Vercel vs Alternatives

| Platform   | Frontend     | Backend      | Cost          | Setup   |
| ---------- | ------------ | ------------ | ------------- | ------- |
| **Vercel** | ✅ Excellent | ✅ Good      | Free + $20/mo | Easiest |
| Netlify    | ✅ Excellent | ⚠️ Limited   | Free + $19/mo | Easy    |
| Firebase   | ✅ Good      | ✅ Good      | Pay per use   | Medium  |
| AWS        | ✅ Good      | ✅ Excellent | Pay per use   | Hard    |

**Recommendation:** Vercel is perfect for your use case.

---

## Common Vercel Deployment Issues

### Build Fails: "Cannot find module..."

```
Error: Cannot find module '@prisma/client'
```

**Solution:**

```bash
# Make sure dependencies are correct
npm install
# Commit package-lock.json
git add package-lock.json
git commit -m "Update dependencies"
git push
# Vercel will rebuild
```

### 404 Not Found on API

```
Error: 404 https://backend.vercel.app/api/products
```

**Solutions:**

- Check `VITE_API_URL` in frontend environment
- Verify backend function exists in `api/` folder
- Check routing in Express app
- Redeploy frontend after updating API URL

### CORS Error

```
Access to XMLHttpRequest blocked by CORS policy
```

**Solution:**

- Update `FRONTEND_URL` in backend environment
- Update `cors.ts` in backend
- Redeploy backend
- Clear browser cache

### Database Connection Timeout

```
Error: Client connection timeout
```

**Solutions:**

- Verify `DATABASE_URL` is correct
- Check Supabase IP whitelist settings
- Ensure database is running in Supabase
- Check network connectivity

### Environment Variables Not Loading

```
Error: Missing required env var: DATABASE_URL
```

**Solutions:**

```
1. Go to Vercel Project Settings
2. Verify all env vars are set
3. Important: Redeploy after adding/changing env vars
4. Check they appear in build logs
```

---

## Monitoring & Logs

### View Deployment Logs

```
Vercel Dashboard → Deployments → Select Deployment → Logs
```

### Real-time Function Logs

```
Vercel Dashboard → Analytics → Functions
```

### Error Tracking

```
Vercel Dashboard → Deployments → Errors
```

---

## Deployment Workflow

### After Each Change

```bash
# Backend change
cd backend
git add .
git commit -m "Update API"
git push origin main
# Vercel automatically redeploys backend

# Frontend change
cd frontend
git add .
git commit -m "Update UI"
git push origin main
# Vercel automatically redeploys frontend
```

### Preview Deployments

Create a pull request → Vercel automatically creates preview URL → Test → Merge → Production deployment

---

## Scaling on Vercel

### Free Tier (Good for MVP)

- 100GB bandwidth/month
- Serverless function execution time
- Build minutes: 6000/month

### Pro Tier ($20/month per project)

- 2TB bandwidth/month
- Concurrency: 100
- Priority support
- More build minutes

### Enterprise

- Custom limits
- Dedicated support
- SLAs

---

## Useful Commands

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Pull environment variables
vercel env pull .env.local

# View logs
vercel logs

# Remove deployment
vercel remove
```

---

## Vercel Documentation

- **Getting Started:** https://vercel.com/docs
- **Environment Variables:** https://vercel.com/docs/projects/environment-variables
- **Serverless Functions:** https://vercel.com/docs/functions/serverless-functions
- **Deployments:** https://vercel.com/docs/deployments/overview
- **Domains:** https://vercel.com/docs/concepts/projects/domains

---

## Next Steps

1. ✅ Create Vercel account
2. ✅ Import and deploy frontend
3. ✅ Import and deploy backend
4. ✅ Set environment variables
5. ✅ Test API connectivity
6. ✅ Monitor deployments
7. ✅ Set custom domain (optional)

---

**Ready to deploy? Follow QUICK_DEPLOY.md**
