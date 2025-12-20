# Deployment Guide

## Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Stripe keys added to backend `.env`
- [ ] Images optimized and uploaded
- [ ] Company information updated
- [ ] All links working correctly
- [ ] Mobile responsive tested
- [ ] All forms tested
- [ ] API endpoints verified
- [ ] SEO meta tags added
- [ ] Legal pages reviewed (Privacy, Terms)

## Frontend Deployment

### Option 1: Vercel (Recommended)

**Advantages**: Zero-config, auto-scaling, built-in analytics

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Navigate to frontend**

   ```bash
   cd frontend
   ```

3. **Deploy**

   ```bash
   vercel --prod
   ```

4. **Configure Environment Variables**
   - Go to Vercel dashboard
   - Project Settings → Environment Variables
   - Add any required variables (API URL, etc.)

### Option 2: Netlify

**Advantages**: Git integration, CI/CD built-in

1. **Connect GitHub Repository**

   - Login to Netlify
   - Click "New site from Git"
   - Select your GitHub repo

2. **Configure Build Settings**

   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Deploy**
   - Netlify auto-deploys on git push

### Option 3: GitHub Pages

1. **Update vite.config.ts**

   ```typescript
   export default defineConfig({
     base: "/osvara/",
     // ... rest of config
   });
   ```

2. **Build and Deploy**
   ```bash
   npm run build
   git add dist/
   git commit -m "Deploy"
   git push
   ```

## Backend Deployment

### Option 1: Heroku

**Advantages**: Simple, reliable, good for Node.js

1. **Install Heroku CLI**

   ```bash
   brew tap heroku/brew && brew install heroku
   ```

2. **Login and Create App**

   ```bash
   heroku login
   cd backend
   heroku create osvara-api
   ```

3. **Set Environment Variables**

   ```bash
   heroku config:set STRIPE_SECRET_KEY=sk_test_...
   heroku config:set STRIPE_PUBLISHABLE_KEY=pk_test_...
   heroku config:set JWT_SECRET=your-secret-key
   heroku config:set NODE_ENV=production
   ```

4. **Deploy**

   ```bash
   git push heroku main
   ```

5. **View Logs**
   ```bash
   heroku logs --tail
   ```

### Option 2: Railway

**Advantages**: Modern interface, GitHub integration

1. **Sign Up and Connect GitHub**

   - Visit railway.app
   - Login with GitHub
   - Grant access

2. **Create New Project**

   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your Osvara repository

3. **Configure Variables**

   - Go to Variables
   - Add all environment variables from `.env`

4. **Auto-Deploy**
   - Railway auto-deploys on git push

### Option 3: AWS (EC2)

1. **Launch EC2 Instance**

   - AMI: Ubuntu 22.04 LTS
   - Instance type: t3.micro (free tier)

2. **SSH into Instance**

   ```bash
   ssh -i your-key.pem ubuntu@your-ip
   ```

3. **Setup Node.js**

   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Clone and Deploy**

   ```bash
   git clone your-repo-url
   cd Osvara\ 2.0/backend
   npm install
   npm run build
   ```

5. **Run with PM2**

   ```bash
   npm install -g pm2
   pm2 start dist/index.js --name "osvara-api"
   pm2 startup
   pm2 save
   ```

6. **Setup Nginx Reverse Proxy**
   ```bash
   sudo apt-get install nginx
   # Configure /etc/nginx/sites-available/default
   sudo systemctl restart nginx
   ```

## Database Setup

### PostgreSQL (Production-Ready)

1. **Local Development**

   ```bash
   brew install postgresql
   createdb osvara
   ```

2. **Cloud Hosting**

   - **Railway**: Automatic with project
   - **AWS RDS**: AWS console → RDS → Create database
   - **Heroku**: `heroku addons:create heroku-postgresql:hobby-dev`

3. **Connection String**
   ```
   postgresql://user:password@host:port/osvara
   ```

### MongoDB

1. **MongoDB Atlas** (Recommended)

   - Go to mongodb.com/cloud/atlas
   - Create free account
   - Create cluster
   - Get connection string

2. **Connection String**

   ```
   mongodb+srv://user:password@cluster.mongodb.net/osvara
   ```

3. **Add to .env**
   ```
   DATABASE_URL=mongodb+srv://user:password@cluster.mongodb.net/osvara
   ```

## SSL/HTTPS

### Automatic (Recommended)

- **Vercel**: Auto HTTPS
- **Netlify**: Auto HTTPS
- **Heroku**: Free with .herokuapp.com domain
- **Railway**: Auto HTTPS

### Manual (AWS EC2)

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d yourdomain.com
```

## Domain Setup

### Connect Custom Domain

**Vercel**

1. Go to Project Settings
2. Domains
3. Add domain
4. Update DNS records

**Netlify**

1. Domain settings
2. Add custom domain
3. Update nameservers or DNS records

**Heroku**

1. Create app with domain name
2. Update DNS CNAME record

## Performance Optimization

### Frontend

```bash
# Check bundle size
npm run build
# Check dist folder size
```

Strategies:

- Lazy load images
- Code splitting
- Minify CSS/JS
- CDN for static assets

### Backend

```bash
# Add compression
npm install compression

# In index.ts
import compression from 'compression'
app.use(compression())
```

## Monitoring & Analytics

### Frontend

```typescript
// Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <YourComponent />
      <Analytics />
    </>
  );
}
```

### Backend

```bash
npm install newrelic
# Add newrelic.js configuration
```

## Continuous Deployment (CD)

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: "18"

      - name: Install and Build
        run: |
          npm install
          npm run build

      - name: Deploy to Vercel
        run: npx vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

## Environment Variables for Production

### Backend

```env
NODE_ENV=production
PORT=5000
STRIPE_SECRET_KEY=sk_live_your_real_key
STRIPE_PUBLISHABLE_KEY=pk_live_your_real_key
JWT_SECRET=your-very-secure-random-string
DATABASE_URL=postgresql://user:password@host/osvara
WHATSAPP_API_KEY=your_real_api_key
ALLOWED_ORIGINS=https://osvara.com,https://www.osvara.com
```

### Frontend

```env
VITE_API_URL=https://api.osvara.com/api
VITE_STRIPE_KEY=pk_live_your_real_key
```

## Monitoring & Logging

### Backend Logs

```bash
# Heroku
heroku logs --tail

# Railway
railway logs

# AWS CloudWatch
aws logs tail /aws/ec2/osvara-api --follow
```

### Error Tracking

```bash
npm install sentry/node
```

```typescript
import * as Sentry from "@sentry/node";
Sentry.init({ dsn: "your-sentry-dsn" });
```

## Backup Strategy

### Database

```bash
# PostgreSQL backup
pg_dump osvara > backup.sql

# MongoDB backup
mongodump --db osvara --archive=backup.archive
```

### Code

- Git repository (GitHub)
- Automated backups

## Post-Deployment

1. **Test All Features**

   - Product browsing
   - Product filtering
   - Add to cart
   - Checkout flow
   - Payment
   - Forms

2. **Monitor Performance**

   - Page load times
   - API response times
   - Error rates

3. **Setup Monitoring Alerts**

   - Uptime alerts
   - Error alerts
   - Performance alerts

4. **Update DNS Records**

   - Point domain to hosting
   - Setup email (if needed)

5. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools

## Scaling for Growth

As traffic increases:

1. **Database**

   - Upgrade tier
   - Add read replicas
   - Implement caching (Redis)

2. **Backend**

   - Add load balancer
   - Horizontal scaling
   - Microservices

3. **Frontend**

   - CDN optimization
   - Image optimization
   - Service Worker

4. **Infrastructure**
   - Multi-region deployment
   - Failover mechanisms
   - Auto-scaling groups

## Cost Optimization

- **Vercel/Netlify**: Pay as you grow
- **Heroku**: Upgrade from hobby tier
- **Railway**: More generous free tier
- **AWS**: Use spot instances, reserved instances
- **Database**: Start with shared hosting, scale up

## Security for Production

1. **API Security**

   ```typescript
   app.use(helmet());
   app.use(
     rateLimit({
       windowMs: 15 * 60 * 1000,
       max: 100,
     })
   );
   ```

2. **HTTPS Only**

   - Redirect HTTP to HTTPS
   - HSTS headers

3. **Environment Variables**

   - Never commit `.env`
   - Use secure storage
   - Rotate secrets regularly

4. **Database Security**
   - Strong passwords
   - VPC isolation
   - Regular backups
   - Encryption at rest

## Troubleshooting Deployment

| Issue                     | Solution                 |
| ------------------------- | ------------------------ |
| Build fails               | Check logs for errors    |
| 502 Bad Gateway           | Check backend is running |
| CORS errors               | Update ALLOWED_ORIGINS   |
| Out of memory             | Increase dyno size       |
| Database connection error | Check DATABASE_URL       |

---

## Deployment Checklist - Final

- [ ] Frontend deployed to Vercel/Netlify
- [ ] Backend deployed to Heroku/Railway/AWS
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] All environment variables set
- [ ] Database configured
- [ ] Email system working (if applicable)
- [ ] Payment processing tested
- [ ] Forms tested and working
- [ ] Analytics enabled
- [ ] Monitoring alerts set
- [ ] Backup system active
- [ ] CDN configured
- [ ] Search engines notified

**Congratulations! Your Osvara store is live! 🎉**
