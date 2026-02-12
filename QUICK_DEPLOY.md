# Production Deployment Quick Start

## TL;DR - Deploy in 5 Steps

### 1. Create Supabase Project

```bash
# Go to https://supabase.com
# Create project, copy DATABASE_URL from Project Settings → Database
# Save the connection string
```

### 2. Set Up Local Database

```bash
cd backend
# Create .env.local with your DATABASE_URL and Stripe keys
npx prisma migrate deploy
npx prisma db seed  # optional
```

### 3. Deploy Backend to Vercel

```bash
# From backend directory:
vercel deploy --prod

# Set environment variables when prompted:
# - DATABASE_URL (from Supabase)
# - STRIPE_SECRET_KEY (live key)
# - STRIPE_WEBHOOK_SECRET
# - FRONTEND_URL (will update after frontend deploy)
# - NODE_ENV=production
```

Note your backend URL: `https://[project-name].vercel.app`

### 4. Deploy Frontend to Vercel

```bash
# From frontend directory:
vercel deploy --prod

# Set environment variables:
# - VITE_API_URL=https://[backend-url]
# - VITE_STRIPE_PUBLIC_KEY
```

Note your frontend URL: `https://[your-domain].vercel.app`

### 5. Update Backend with Frontend URL

```bash
# Go to backend Vercel project settings
# Update FRONTEND_URL environment variable
# Redeploy to apply changes
```

---

## Environment Variables Quick Reference

### Backend (.env or Vercel settings)

| Variable                | Value                   | Source                       |
| ----------------------- | ----------------------- | ---------------------------- |
| `DATABASE_URL`          | `postgresql://...`      | Supabase Project Settings    |
| `NODE_ENV`              | `production`            | Set manually                 |
| `PORT`                  | `3001`                  | Set manually                 |
| `STRIPE_SECRET_KEY`     | `sk_live_...`           | Stripe Dashboard (LIVE keys) |
| `STRIPE_WEBHOOK_SECRET` | `whsec_...`             | Stripe Webhooks settings     |
| `FRONTEND_URL`          | `https://...vercel.app` | Your Vercel frontend URL     |

### Frontend (.env or Vercel settings)

| Variable                 | Value                   | Source                      |
| ------------------------ | ----------------------- | --------------------------- |
| `VITE_API_URL`           | `https://...vercel.app` | Your backend Vercel URL     |
| `VITE_STRIPE_PUBLIC_KEY` | `pk_live_...`           | Stripe Dashboard (Live key) |
| `VITE_ENV`               | `production`            | Set manually                |

---

## Verify Deployment Success

### Test Backend API

```bash
curl https://[backend-url]/api/health
# Should return 200 OK
```

### Test Frontend

```
Open https://[frontend-url] in browser
- Homepage loads
- Can view products
- Can add to cart
- Can go to checkout
- Payment page loads with Stripe elements
```

### Test Payment Flow

1. Go to checkout page
2. Fill in order details
3. Use Stripe test card: `4242 4242 4242 4242`
4. Complete payment
5. Verify success page appears
6. Check Supabase dashboard for new order record

---

## Troubleshooting

### Database Connection Error

```
Error: Can't reach database server
```

**Solution:**

- Verify DATABASE_URL is correct from Supabase
- Check IP whitelist in Supabase Network settings
- Restart Vercel deployment

### CORS Error in Browser

```
Access to XMLHttpRequest blocked by CORS policy
```

**Solution:**

- Update FRONTEND_URL in backend environment
- Verify cors.ts includes the correct origin
- Redeploy backend

### API Returns 404

```
Cannot POST /api/products
```

**Solution:**

- Verify backend deployed successfully
- Check VITE_API_URL in frontend environment
- Redeploy frontend

### Stripe Webhooks Not Working

```
Payment succeeded but order not created
```

**Solution:**

- Verify STRIPE_WEBHOOK_SECRET in backend
- Check webhook URL in Stripe dashboard
- Test webhook delivery in Stripe logs

---

## Additional Commands

### Local Testing Before Deploy

```bash
# Backend
cd backend
npm run build      # Check for build errors
npm run dev        # Test locally

# Frontend
cd frontend
npm run build      # Check for build errors
npm run preview    # Test production build
```

### Deploy Specific Environment

```bash
# From each directory:
vercel deploy --prod          # Production
vercel deploy                 # Preview (staging)
```

### View Deployment Logs

```bash
# Vercel CLI
vercel logs

# Backend database migrations
vercel env pull .env.production.local
# Then check Supabase dashboard
```

---

## Next Steps

1. ✅ Follow the 5-step quick start above
2. ✅ Test using "Verify Deployment Success" section
3. ✅ Check DEPLOYMENT_CHECKLIST.md for detailed steps
4. ✅ Read DEPLOYMENT_GUIDE.md for in-depth information
5. ✅ Set up monitoring and alerts

---

**Questions?** Check:

- [Supabase Docs](https://supabase.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Stripe Docs](https://stripe.com/docs)
- [Prisma Deployment](https://www.prisma.io/docs/guides/deployment)
