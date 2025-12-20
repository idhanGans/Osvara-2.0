# Osvara Backend Documentation

## Project Overview

Osvara backend is a Node.js/Express REST API server providing product management, order processing, payment integration with Stripe, and WhatsApp messaging capabilities.

## Technology Stack

- **Express.js** - Web framework
- **TypeScript** - Type-safe development
- **Stripe** - Payment processing
- **CORS** - Cross-origin requests
- **UUID** - Unique ID generation
- **Dotenv** - Environment management

## Project Structure

```
src/
├── index.ts         # Main server file
├── routes/          # API route handlers
├── controllers/     # Business logic
├── models/          # Data structures
└── middleware/      # Express middleware
```

## API Endpoints

### Products

#### Get All Products

```
GET /api/products
Query: ?category=Gamis (optional)
Response: Product[]
```

#### Get Product by ID

```
GET /api/products/:id
Response: Product
```

### Orders

#### Create Order

```
POST /api/orders
Body: {
  items: [{ productId: string, quantity: number }],
  customerInfo: {
    name: string,
    email: string,
    phone: string,
    address: string
  }
}
Response: Order
```

#### Get Order by ID

```
GET /api/orders/:id
Response: Order
```

### Payments

#### Create Payment Intent

```
POST /api/payments/create-intent
Body: {
  amount: number,
  orderId: string
}
Response: {
  clientSecret: string,
  paymentIntentId: string
}
```

#### Confirm Payment

```
POST /api/payments/confirm
Body: {
  orderId: string,
  paymentIntentId: string
}
Response: {
  success: boolean,
  message: string,
  order: Order
}
```

### WhatsApp

#### Send WhatsApp Message

```
POST /api/whatsapp/send
Body: {
  phone: string,
  message: string,
  orderId?: string
}
Response: {
  success: boolean,
  message: string,
  link: string
}
```

### SEO

#### Sitemap

```
GET /sitemap.xml
```

#### Robots

```
GET /robots.txt
```

## Data Models

### Product

```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  description: string;
  stock: number;
}
```

### Order

```typescript
interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  paymentStatus: string;
  createdAt: Date;
}
```

### CartItem

```typescript
interface CartItem {
  productId: string;
  quantity: number;
}
```

## Environment Variables

```env
# Server
PORT=5000
NODE_ENV=development

# Stripe
STRIPE_SECRET_KEY=sk_test_your_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_key

# JWT
JWT_SECRET=your-secret-key

# WhatsApp
WHATSAPP_API_KEY=your_api_key

# Database
DATABASE_URL=sqlite:./osvara.db
```

## Setup Instructions

### 1. Installation

```bash
cd backend
npm install
```

### 2. Environment Configuration

```bash
cp .env.example .env
# Edit .env with your credentials
```

### 3. Start Development Server

```bash
npm run dev
```

Server will run on `http://localhost:5000`

### 4. Build for Production

```bash
npm run build
npm start
```

## Payment Integration (Stripe)

### Setup

1. Create Stripe account: https://stripe.com
2. Get API keys from dashboard
3. Add to `.env`:
   ```
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```

### Test Cards

- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- Requires auth: `4000 0025 0000 3155`

### Implementation Flow

1. Frontend creates payment intent via `/api/payments/create-intent`
2. Frontend handles Stripe payment with clientSecret
3. Backend confirms payment via `/api/payments/confirm`
4. Order status updated to "confirmed"

## WhatsApp Integration

### Setup with Twilio (Recommended)

```bash
npm install twilio
```

Configuration:

```typescript
import twilio from "twilio";

const client = twilio(accountSid, authToken);

await client.messages.create({
  body: "Your message",
  from: "whatsapp:+14155552671",
  to: "whatsapp:+1234567890",
});
```

### Current Implementation

Currently returns WhatsApp link for manual sharing. Replace with actual API integration.

## CORS Configuration

```typescript
app.use(
  cors({
    origin: ["http://localhost:3000", "https://osvara.com"],
    credentials: true,
  })
);
```

## Error Handling

All endpoints return consistent error responses:

```json
{
  "error": "Error message",
  "status": 400
}
```

## Middleware

### Built-in

- `express.json()` - JSON parser
- `cors()` - CORS headers
- `express.static()` - Serve static files

## Authentication (Future)

Add JWT authentication:

```typescript
const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

// Middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};
```

## Database Migration (Future)

Replace in-memory storage with:

### SQLite

```bash
npm install sqlite3 sequelize
```

### MongoDB

```bash
npm install mongoose
```

### PostgreSQL

```bash
npm install pg sequelize
```

## Logging

Add logging with Winston:

```bash
npm install winston
```

## Deployment

### Heroku

```bash
heroku create osvara-api
heroku config:set STRIPE_SECRET_KEY=sk_test_...
git push heroku main
```

### Railway

```bash
railway link
railway up
```

### DigitalOcean

```bash
npm run build
# Deploy dist folder
```

## Testing

```bash
npm install --save-dev jest @types/jest ts-jest
npm test
```

## Performance

- Connection pooling for databases
- Response caching headers
- Compression middleware
- Rate limiting (future)

## Security

Implement:

- Input validation
- SQL injection prevention
- XSS protection
- Rate limiting
- HTTPS only (production)
- CORS restrictions

## Monitoring

Add with services like:

- New Relic
- Datadog
- Sentry for error tracking

## API Documentation

Generate with Swagger:

```bash
npm install swagger-ui-express swagger-jsdoc
```

Add JSDoc comments and serve at `/api-docs`

## Development Commands

```bash
# Start dev server
npm run dev

# Build TypeScript
npm run build

# Run production build
npm start

# Run tests (when added)
npm test
```

## Troubleshooting

### Port Already in Use

```bash
lsof -ti:5000 | xargs kill -9
```

### Stripe Key Issues

- Verify keys in `.env`
- Check Stripe dashboard for live/test mode
- Ensure correct region

### CORS Errors

- Add frontend URL to CORS whitelist
- Check `Origin` header in request

### Database Connection

- Verify DATABASE_URL format
- Check database server status
- Review connection pool settings

## Resources

- [Express.js Guide](https://expressjs.com)
- [Stripe API Docs](https://stripe.com/docs/api)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [REST API Best Practices](https://restfulapi.net)

---

For more information, see the main README.md
