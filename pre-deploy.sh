#!/bin/bash

# Osvara 2.0 - Pre-Deployment Verification Script
# Run this before deploying to catch any issues

set -e

echo "🔍 Starting pre-deployment checks..."
echo ""

# Check Node version
echo "✓ Checking Node.js version..."
NODE_VERSION=$(node -v)
echo "  Node version: $NODE_VERSION"
echo ""

# Check backend dependencies
echo "✓ Checking backend dependencies..."
cd backend
if [ ! -d "node_modules" ]; then
  npm install
fi
npm run build
echo "  Backend build successful"
echo ""

# Verify Prisma schema
echo "✓ Verifying Prisma schema..."
npx prisma validate
echo "  Prisma schema is valid"
echo ""

# Check frontend dependencies
cd ../frontend
echo "✓ Checking frontend dependencies..."
if [ ! -d "node_modules" ]; then
  npm install
fi
npm run build
echo "  Frontend build successful"
echo ""

# Check for environment variables
cd ..
echo "✓ Checking environment variable templates..."
if [ ! -f "backend/.env.example" ]; then
  echo "  ⚠ backend/.env.example is missing"
else
  echo "  Backend env template exists"
fi

if [ ! -f "frontend/.env.example" ]; then
  echo "  ⚠ frontend/.env.example is missing"
else
  echo "  Frontend env template exists"
fi
echo ""

echo "✅ All checks passed! Ready for deployment."
echo ""
echo "Next steps:"
echo "1. Set up Supabase project and get DATABASE_URL"
echo "2. Set environment variables in Supabase"
echo "3. Run migrations: cd backend && npx prisma migrate deploy"
echo "4. Deploy backend to Vercel: vercel deploy (from backend/)"
echo "5. Deploy frontend to Vercel: vercel deploy (from frontend/)"
echo "6. Update VITE_API_URL in Vercel frontend environment"
echo "7. Test production deployment"
