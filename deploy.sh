#!/bin/bash

# Complete Deployment Script for Osvara 2.0
# This script guides you through the entire deployment process

set -e

echo "🚀 OSVARA 2.0 - COMPLETE DEPLOYMENT SCRIPT"
echo "=========================================="
echo ""
echo "This script will guide you through deploying:"
echo "✓ Frontend to Vercel"
echo "✓ Backend to Vercel"
echo "✓ Database to Supabase"
echo ""
echo "Prerequisites:"
echo "- GitHub account (code pushed)"
echo "- Vercel account"
echo "- Supabase account"
echo "- Stripe account (live keys)"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Wait for user confirmation
read -p "Ready to deploy? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "Deployment cancelled."
  exit 1
fi

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 1: SUPABASE DATABASE SETUP${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "📍 Go to: https://supabase.com"
echo "1. Create new project"
echo "2. Save database password securely"
echo "3. Copy DATABASE_URL from Project Settings → Database"
echo "4. Save the URL"
echo ""
read -p "Press Enter once you have the DATABASE_URL: "

echo ""
read -p "Paste your DATABASE_URL (it will be hidden): " -s DATABASE_URL
echo ""

# Validate DATABASE_URL format
if [[ ! $DATABASE_URL =~ postgresql:// ]]; then
  echo -e "${RED}❌ Invalid DATABASE_URL format${NC}"
  exit 1
fi

echo -e "${GREEN}✓ DATABASE_URL saved${NC}"
echo ""

# Create .env file for backend
echo -e "${BLUE}Setting up backend/.env.local...${NC}"
cd backend

cat > .env.local << EOF
DATABASE_URL=$DATABASE_URL
NODE_ENV=development
PORT=5000
STRIPE_SECRET_KEY=sk_test_placeholder
STRIPE_WEBHOOK_SECRET=whsec_placeholder
FRONTEND_URL=http://localhost:3000
EOF

echo -e "${GREEN}✓ .env.local created in backend${NC}"
echo ""

echo "📍 Get Stripe keys from: https://dashboard.stripe.com/apikeys"
echo "   - Copy TEST Secret Key (sk_test_...)"
echo ""
read -p "Paste Stripe TEST Secret Key: " STRIPE_KEY
sed -i '' "s/STRIPE_SECRET_KEY=sk_test_placeholder/STRIPE_SECRET_KEY=$STRIPE_KEY/" .env.local

echo "   - Copy TEST Webhook Secret from Webhooks"
echo ""
read -p "Paste Stripe TEST Webhook Secret: " STRIPE_WEBHOOK
sed -i '' "s/STRIPE_WEBHOOK_SECRET=whsec_placeholder/STRIPE_WEBHOOK_SECRET=$STRIPE_WEBHOOK/" .env.local

echo -e "${GREEN}✓ Stripe keys added${NC}"
echo ""

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 2: INITIALIZE DATABASE MIGRATIONS${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

npm install 2>/dev/null || true
npx prisma validate
npx prisma generate
npx prisma migrate deploy

echo -e "${GREEN}✓ Database migrations complete${NC}"
echo ""

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 3: VERCEL BACKEND DEPLOYMENT${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "📍 Installation check..."

if ! command -v vercel &> /dev/null; then
  echo "Installing Vercel CLI..."
  npm i -g vercel
fi

echo ""
echo "📍 Deploy backend to Vercel:"
echo "1. Run: vercel --prod"
echo "2. When prompted for environment variables, add:"
echo "   - DATABASE_URL: (paste the Supabase URL)"
echo "   - STRIPE_SECRET_KEY: (paste the key from .env.local)"
echo "   - STRIPE_WEBHOOK_SECRET: (paste the secret)"
echo "   - FRONTEND_URL: (will update later)"
echo "   - NODE_ENV: production"
echo ""
read -p "Press Enter when ready to deploy backend, OR press Ctrl+C to do it manually later"

cd ..
cd backend
vercel --prod

echo ""
read -p "Paste your backend URL (e.g., https://osvara-backend.vercel.app): " BACKEND_URL

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 4: FRONTEND ENV AND DEPLOYMENT${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

cd ../frontend

cat > .env.local << EOF
VITE_API_URL=$BACKEND_URL
VITE_STRIPE_PUBLIC_KEY=pk_test_placeholder
VITE_ENV=development
EOF

echo "📍 Get Stripe Public Key from: https://dashboard.stripe.com/apikeys"
echo "   - Copy TEST Publishable Key (pk_test_...)"
echo ""
read -p "Paste Stripe TEST Publishable Key: " STRIPE_PK
sed -i '' "s/VITE_STRIPE_PUBLIC_KEY=pk_test_placeholder/VITE_STRIPE_PUBLIC_KEY=$STRIPE_PK/" .env.local

echo -e "${GREEN}✓ Frontend .env.local created${NC}"
echo ""

echo "📍 Deploy frontend to Vercel:"
echo "1. Run: vercel --prod"
echo "2. Set environment variables:"
echo "   - VITE_API_URL: $BACKEND_URL"
echo "   - VITE_STRIPE_PUBLIC_KEY: (public key from above)"
echo ""
read -p "Press Enter when ready to deploy frontend, OR press Ctrl+C to do it manually"

vercel --prod

echo ""
read -p "Paste your frontend URL (e.g., https://osvara-frontend.vercel.app): " FRONTEND_URL

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 5: FINAL CONFIGURATION${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

echo "📍 Update backend FRONTEND_URL environment variable:"
echo "1. Go to Vercel Dashboard → Backend Project"
echo "2. Settings → Environment Variables"
echo "3. Update FRONTEND_URL to: $FRONTEND_URL"
echo "4. Redeploy"
echo ""
read -p "Press Enter when done"

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ DEPLOYMENT COMPLETE!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "Your application is now live at:"
echo "Frontend: $FRONTEND_URL"
echo "Backend:  $BACKEND_URL"
echo "Database: Supabase"
echo ""
echo "Next steps:"
echo "1. Test at: $FRONTEND_URL"
echo "2. Try purchasing with Stripe test card: 4242 4242 4242 4242"
echo "3. Check orders in Supabase dashboard"
echo "4. When ready for production, update Stripe to LIVE keys"
echo ""
