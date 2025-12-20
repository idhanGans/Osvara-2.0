# Installation & Setup Guide

## Quick Start

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org))
- npm or yarn
- Git
- Stripe account ([Sign up](https://stripe.com))

### Step 1: Clone and Navigate

```bash
cd "Osvara 2.0"
```

### Step 2: Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Step 3: Install Backend Dependencies

```bash
cd ../backend
npm install
```

### Step 4: Configure Environment Variables

#### Backend Configuration

Create `.env` file in `backend/` directory:

```bash
cd backend
cp .env.example .env
```

Edit `.env` with your credentials:

```env
STRIPE_SECRET_KEY=sk_test_your_actual_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key_here
PORT=5000
NODE_ENV=development
JWT_SECRET=your-super-secret-jwt-key-change-in-production
WHATSAPP_API_KEY=your_whatsapp_api_key
DATABASE_URL=sqlite:./osvara.db
```

**Get Stripe Keys:**

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to Developers → API Keys
3. Copy Secret Key and Publishable Key
4. Paste into `.env`

### Step 5: Get Stripe Keys

1. Visit [Stripe Dashboard](https://dashboard.stripe.com)
2. Click **Developers** in the left sidebar
3. Click **API Keys** tab
4. You'll see:
   - Publishable key (starts with `pk_test_`)
   - Secret key (starts with `sk_test_`)
5. Copy the Secret key and add to `.env`:
   ```env
   STRIPE_SECRET_KEY=sk_test_your_key_here
   STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   ```

### Step 6: Run Backend

```bash
cd backend
npm run dev
```

Backend should start on `http://localhost:5000`

```
✓ Server running at http://localhost:5000
✓ API documentation available at http://localhost:5000/api
```

### Step 7: Run Frontend (in new terminal)

```bash
cd frontend
npm run dev
```

Frontend should start on `http://localhost:3000`

### Step 8: Open in Browser

Visit `http://localhost:3000` to see the website!

## Testing

### Test Products

Products are pre-loaded in the backend. Visit `/products` to see them.

### Test Payment

Use Stripe test card:

- **Card Number**: 4242 4242 4242 4242
- **Expiry**: Any future date (e.g., 12/25)
- **CVC**: Any 3 digits (e.g., 123)

### Test WhatsApp

- Form will generate a WhatsApp link
- Click to open on your phone
- Requires WhatsApp installed

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 5000 (backend)
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9
```

### Dependencies Not Installing

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Module Not Found Errors

```bash
# Reinstall dependencies
npm install

# Clear Vite cache (frontend)
rm -rf node_modules/.vite
npm run dev
```

### CORS Errors

The Vite dev server already has a proxy configured. If you get CORS errors:

1. Check backend is running on `http://localhost:5000`
2. Verify `.env` configuration
3. Restart both servers

### Stripe Errors

- Verify keys are copied correctly
- Check they're test keys (start with `sk_test_` and `pk_test_`)
- Ensure `.env` has no extra spaces
- Restart backend server after changing `.env`

## Project Structure After Setup

```
Osvara 2.0/
├── frontend/
│   ├── node_modules/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   └── README.md
│
└── backend/
    ├── node_modules/
    ├── src/
    ├── .env
    ├── package.json
    ├── tsconfig.json
    └── README.md
```

## Development Workflow

### Terminal 1 (Backend)

```bash
cd backend
npm run dev
# Runs on http://localhost:5000
```

### Terminal 2 (Frontend)

```bash
cd frontend
npm run dev
# Runs on http://localhost:3000
```

### Make Changes

- Edit files in `src/`
- Frontend hot-reloads on save
- Backend requires restart (use `Ctrl+C` then `npm run dev`)

## Build for Production

### Frontend Build

```bash
cd frontend
npm run build
# Creates dist/ folder
```

### Backend Build

```bash
cd backend
npm run build
# Creates dist/ folder
```

## Deployment

### Frontend to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# In frontend folder
cd frontend
vercel
# Follow prompts
```

### Backend to Heroku

```bash
# Install Heroku CLI
brew tap heroku/brew && brew install heroku

# Login and create app
heroku login
heroku create osvara-api

# Set environment variables
heroku config:set STRIPE_SECRET_KEY=sk_test_...
heroku config:set STRIPE_PUBLISHABLE_KEY=pk_test_...

# Deploy
cd backend
git push heroku main
```

## Next Steps

1. **Customize Products**: Edit `backend/src/index.ts` product list
2. **Add Real Images**: Replace placeholder images in components
3. **Customize Colors**: Edit `frontend/tailwind.config.js`
4. **Add Database**: Replace in-memory storage with real database
5. **Setup Email**: Configure transporter for order notifications
6. **Enable WhatsApp**: Integrate with Twilio or WhatsApp Business API

## Support Resources

- [React Docs](https://react.dev)
- [Express Docs](https://expressjs.com)
- [Stripe API](https://stripe.com/docs/api)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

## Tips

✨ **Pro Tips:**

- Use VS Code extension "Rest Client" to test API endpoints
- Check browser DevTools Network tab for API debugging
- Use `console.log()` for debugging
- Keep `.env` file secret (never commit it)
- Use `.env.example` to share configuration template

---

You're all set! Start building amazing features! 🚀
