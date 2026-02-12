# Osvara 2.0 Deployment Checklist

## Pre-Deployment Setup

### Prerequisites

- [ ] GitHub account with repository pushed
- [ ] Vercel account created
- [ ] Supabase account created
- [ ] Stripe account with API keys ready
- [ ] Node.js 18+ installed locally

### Local Development Testing

- [ ] `npm install` runs successfully in both frontend and backend
- [ ] `npm run build` completes without errors
- [ ] `npm run dev` works locally
- [ ] Frontend can connect to backend API
- [ ] Payment flow works in Stripe test mode

---

## Database Setup (Supabase PostgreSQL)

### Supabase Configuration

- [ ] Create new Supabase project
- [ ] Choose PostgreSQL location closest to users
- [ ] Save database password securely
- [ ] Note project URL: `https://[PROJECT_ID].supabase.co`
- [ ] Copy database connection string

### Local Database Setup

- [ ] Create `.env.local` in backend with DATABASE_URL
- [ ] Run: `cd backend && npm install`
- [ ] Run: `npx prisma generate`
- [ ] Run: `npx prisma migrate deploy`
- [ ] Run: `npx prisma db seed` (optional, if seed.ts exists)
- [ ] Verify tables created in Supabase dashboard

### Database Testing

- [ ] Create test product in database
- [ ] Query products from dashboard
- [ ] Verify all tables present (Product, Order, OrderItem)

---

## Backend Deployment (Vercel)

### Environment Configuration

- [ ] Update backend/.env.example with production values
- [ ] Get DATABASE_URL from Supabase (production)
- [ ] Generate Stripe live API keys (not test keys)
- [ ] Generate Stripe webhook secret
- [ ] Set FRONTEND_URL to Vercel deployment URL (temporary: https://osvara.vercel.app)

### Backend Code Preparation

- [ ] Update src/config/cors.ts with production URL
- [ ] Verify all environment variables in src/config/env.ts
- [ ] Check tsconfig.json for proper settings
- [ ] Verify package.json build and start scripts

### Vercel Deployment

- [ ] Push code to GitHub
- [ ] Go to vercel.com/new
- [ ] Import repository
- [ ] Set Root Directory: `backend`
- [ ] Framework: Other (Node.js)
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `dist`
- [ ] Add environment variables:
  - [ ] DATABASE_URL (from Supabase)
  - [ ] STRIPE_SECRET_KEY (live key)
  - [ ] STRIPE_WEBHOOK_SECRET
  - [ ] FRONTEND_URL (update after frontend deploy)
  - [ ] NODE_ENV=production
  - [ ] PORT=3001
- [ ] Deploy and note API URL (e.g., https://osvara-backend.vercel.app)

### Post-Backend Deployment

- [ ] Test API endpoint: `curl https://[api-url]/health`
- [ ] Check Vercel logs for errors
- [ ] Verify database connection in logs

---

## Frontend Deployment (Vercel)

### Frontend Configuration

- [ ] Create `.env.local` in frontend with VITE_API_URL
- [ ] Verify vite.config.ts production settings
- [ ] Update src/api/client.ts with API_URL import
- [ ] Verify Stripe public key is set correctly

### Frontend Code Preparation

- [ ] Build locally: `npm run build`
- [ ] Test build output: `npm run preview`
- [ ] Verify all environment variables use VITE\_ prefix
- [ ] Check for any hardcoded localhost URLs

### Vercel Deployment

- [ ] Push updated code to GitHub
- [ ] Go to vercel.com/new
- [ ] Import repository
- [ ] Set Root Directory: `frontend`
- [ ] Framework: Vite
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `dist`
- [ ] Add environment variables:
  - [ ] VITE_API_URL=https://[backend-url] (from backend deployment)
  - [ ] VITE_STRIPE_PUBLIC_KEY (from Stripe dashboard)
- [ ] Deploy and note frontend URL (e.g., https://osvara.vercel.app)

### Update Backend with Frontend URL

- [ ] Go back to backend Vercel project
- [ ] Update FRONTEND_URL environment variable
- [ ] Redeploy backend (settings change)

---

## Stripe Configuration

### Stripe Dashboard Setup

- [ ] Switch to Live API keys (not test keys)
- [ ] Create webhook endpoint for production
  - [ ] URL: `https://[backend-url]/webhooks/stripe`
  - [ ] Events: `payment_intent.succeeded`, `payment_intent.payment_failed`
- [ ] Copy webhook signing secret
- [ ] Update STRIPE_WEBHOOK_SECRET in backend

### Stripe Testing

- [ ] Use Stripe test cards initially for testing
- [ ] Verify payment flow completes
- [ ] Check webhook logs in Stripe dashboard

---

## Post-Deployment Testing

### Functionality Testing

- [ ] Frontend loads without errors
- [ ] Can view products
- [ ] Can add products to cart
- [ ] Can proceed to checkout
- [ ] Payment page loads
- [ ] Can complete payment (use Stripe test card)
- [ ] Order confirmation page appears
- [ ] Email confirmation sent

### Performance Testing

- [ ] Frontend loads in < 3 seconds
- [ ] API responses are < 500ms
- [ ] Database queries are optimized
- [ ] Check Vercel analytics

### Error Handling

- [ ] Network error handlers work
- [ ] Invalid payment shows proper error
- [ ] 404 pages work correctly
- [ ] Server errors handled gracefully

### Database Verification

- [ ] New orders appear in Supabase dashboard
- [ ] Product inventory updates correctly
- [ ] No duplicate database entries

---

## Domain & SSL Setup

### Vercel Domain Configuration

- [ ] Add custom domain in Vercel project settings
- [ ] Update DNS records (instructions in Vercel)
- [ ] Wait for DNS propagation (usually 24 hours)
- [ ] Verify SSL certificate installed
- [ ] Test HTTPS connection

### Email Configuration (if needed)

- [ ] Set up email service (SendGrid, Mailgun, etc.)
- [ ] Configure order confirmation emails
- [ ] Test email delivery

---

## Monitoring & Maintenance

### Setup Monitoring

- [ ] Enable Vercel Analytics
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Monitor Supabase query performance
- [ ] Set up alerts for failures

### Regular Maintenance

- [ ] Monitor database size
- [ ] Review error logs weekly
- [ ] Update dependencies monthly
- [ ] Backup database regularly
- [ ] Monitor payment processing

### Documentation

- [ ] Document deployment process
- [ ] Document environment variables
- [ ] Document database schema
- [ ] Create runbook for common issues

---

## Rollback Plan

- [ ] Keep previous working deployment version
- [ ] Document rollback steps
- [ ] Test rollback procedure
- [ ] Have Vercel deployment history accessible

---

## Final Launch Checklist

Before going fully live:

- [ ] All tests passing
- [ ] Performance acceptable
- [ ] Error handling working
- [ ] Payment processing confirmed
- [ ] User documentation ready
- [ ] Support process established
- [ ] Analytics tracking configured
- [ ] Backup procedures in place

✅ **Ready for Production!**
