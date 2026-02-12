#!/bin/bash

# Osvara 2.0 - Database Migration Script for Supabase
# This script helps set up your Supabase database with migrations

set -e

echo "🚀 Osvara 2.0 - Supabase Database Setup"
echo "========================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if .env.local exists
if [ ! -f "backend/.env.local" ]; then
  echo -e "${YELLOW}⚠ No .env.local file found in backend directory${NC}"
  echo ""
  echo "Please create backend/.env.local with the following:"
  echo ""
  echo "DATABASE_URL=postgresql://postgres:PASSWORD@host.supabase.co:5432/postgres"
  echo "NODE_ENV=development"
  echo "PORT=5000"
  echo "STRIPE_SECRET_KEY=sk_test_..."
  echo "STRIPE_WEBHOOK_SECRET=whsec_..."
  echo "FRONTEND_URL=http://localhost:3000"
  echo ""
  echo "Then run this script again."
  exit 1
fi

echo "✓ Found .env.local"
echo ""

# Navigate to backend
cd backend

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

echo ""
echo "✓ Dependencies ready"
echo ""

# Validate Prisma schema
echo "🔍 Validating Prisma schema..."
npx prisma validate
echo "✓ Schema is valid"
echo ""

# Generate Prisma client
echo "⚙️ Generating Prisma client..."
npx prisma generate
echo "✓ Prisma client generated"
echo ""

# Run migrations
echo "🗄️ Running database migrations..."
echo "(This will create tables in your Supabase database)"
echo ""
npx prisma migrate deploy
echo ""
echo -e "${GREEN}✓ Migrations completed successfully${NC}"
echo ""

# Optional: Run seed
echo "📊 Would you like to seed initial data? (y/n)"
read -r response

if [ "$response" = "y" ] || [ "$response" = "Y" ]; then
  if [ -f "prisma/seed.ts" ]; then
    echo "🌱 Seeding database..."
    npx prisma db seed
    echo -e "${GREEN}✓ Database seeded${NC}"
  else
    echo -e "${YELLOW}⚠ No seed.ts file found, skipping seed${NC}"
  fi
fi

echo ""
echo -e "${GREEN}✅ Supabase database is ready!${NC}"
echo ""
echo "Next steps:"
echo "1. Verify tables in Supabase dashboard: https://app.supabase.com"
echo "2. Test local development: npm run dev"
echo "3. Check products in database"
echo ""
