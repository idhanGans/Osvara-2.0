#!/bin/bash

# Osvara 2.0 - Complete Setup Script
# This script automates the initial setup of your development environment

set -e

echo "🎯 Osvara 2.0 - Complete Development Setup"
echo "==========================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Function to print steps
print_step() {
  echo ""
  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${BLUE}$1${NC}"
  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo ""
}

# Check Node.js version
print_step "Step 1: Checking Node.js"
NODE_VERSION=$(node -v)
echo "✓ Node.js version: $NODE_VERSION"

if ! [[ $NODE_VERSION =~ v(1[8-9]|[2-9][0-9]) ]]; then
  echo -e "${YELLOW}⚠ Warning: Node 18+ recommended${NC}"
fi
echo ""

# Setup Backend
print_step "Step 2: Setting up Backend"
cd backend
echo "📦 Installing backend dependencies..."
npm install
echo "✓ Backend dependencies installed"
echo ""

# Create backend .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
  echo -e "${YELLOW}⚠ Creating .env.local (IMPORTANT: Update with your values)${NC}"
  cat > .env.local << 'EOF'
NODE_ENV=development
PORT=5000
DATABASE_URL=postgresql://postgres:PASSWORD@localhost:5432/postgres
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_secret_here
FRONTEND_URL=http://localhost:3000
EOF
  echo "✓ .env.local created"
  echo -e "${YELLOW}   Please update with your actual credentials${NC}"
else
  echo "✓ .env.local already exists"
fi
echo ""

# Setup Frontend
print_step "Step 3: Setting up Frontend"
cd ../frontend
echo "📦 Installing frontend dependencies..."
npm install
echo "✓ Frontend dependencies installed"
echo ""

# Create frontend .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
  echo -e "${YELLOW}⚠ Creating .env.local for frontend${NC}"
  cat > .env.local << 'EOF'
VITE_API_URL=http://localhost:5000
VITE_STRIPE_PUBLIC_KEY=pk_test_your_key_here
VITE_ENV=development
EOF
  echo "✓ Frontend .env.local created"
  echo -e "${YELLOW}   Please update VITE_STRIPE_PUBLIC_KEY${NC}"
else
  echo "✓ .env.local already exists"
fi
echo ""

# Project Info
print_step "Step 4: Project Information"
echo "Frontend: Vercel (SPA with Vite)"
echo "Backend: Express.js (Node.js)"
echo "Database: PostgreSQL via Supabase"
echo "Payment: Stripe"
echo ""

# Completion
print_step "✅ Setup Complete!"
echo ""
echo "📋 Next steps:"
echo ""
echo "1️⃣  Update configuration files with your API keys:"
echo "   - backend/.env.local → DATABASE_URL, Stripe keys"
echo "   - frontend/.env.local → VITE_STRIPE_PUBLIC_KEY"
echo ""
echo "2️⃣  Set up database:"
echo "   - Create Supabase project: https://supabase.com"
echo "   - Get DATABASE_URL from Project Settings"
echo "   - Run: ./setup-supabase.sh"
echo ""
echo "3️⃣  Start development:"
echo "   - Terminal 1: cd backend && npm run dev"
echo "   - Terminal 2: cd frontend && npm run dev"
echo "   - Open: http://localhost:3000"
echo ""
echo "4️⃣  Deploy (when ready):"
echo "   - Read: QUICK_DEPLOY.md for fast start"
echo "   - Read: DEPLOYMENT_GUIDE.md for detailed steps"
echo "   - Follow: DEPLOYMENT_CHECKLIST.md"
echo ""
echo -e "${GREEN}Happy coding! 🚀${NC}"
echo ""
