# Architecture & Technical Implementation

## Frontend Architecture

### Component Hierarchy

```
App
├── Navbar
├── Router
│   ├── HomePage
│   │   ├── Hero Section
│   │   ├── Categories Section
│   │   ├── Products Grid (ProductCard x4)
│   │   ├── Why Choose Us
│   │   └── GoogleReviews
│   ├── ProductsPage
│   │   ├── Filters (Sidebar)
│   │   └── Products Grid (ProductCard x8)
│   ├── GalleryPage
│   │   └── Image Grid + Lightbox
│   ├── AboutPage
│   │   ├── Story Section
│   │   ├── Values Grid
│   │   ├── Why Choose Section
│   │   └── GoogleMaps
│   ├── ContactPage
│   │   ├── Contact Form
│   │   ├── Contact Info Cards
│   │   └── Quick Contact Links
│   ├── CartPage (Placeholder)
│   └── CheckoutPage (Placeholder)
└── Footer

```

### State Management

Currently using React hooks. For scaling, consider:

- **Zustand**: Lightweight state management
- **Redux**: Complex state needs
- **Context API**: Props drilling prevention

### API Integration

```typescript
// Example API call
const fetchProducts = async (category?: string) => {
  const params = category ? `?category=${category}` : "";
  const response = await axios.get(`/api/products${params}`);
  return response.data;
};
```

### Form Handling

Forms use React state with validation:

```typescript
const [form, setForm] = useState({ name: "", email: "" });
const [errors, setErrors] = useState({});

const validate = () => {
  const newErrors = {};
  if (!form.name) newErrors.name = "Required";
  if (!form.email) newErrors.email = "Invalid email";
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
```

## Backend Architecture

### Express Server Structure

```
Server (Port 5000)
├── Middleware
│   ├── CORS
│   ├── JSON Parser
│   └── Static Files
├── Routes
│   ├── GET /api/products
│   ├── GET /api/products/:id
│   ├── POST /api/orders
│   ├── GET /api/orders/:id
│   ├── POST /api/payments/create-intent
│   ├── POST /api/payments/confirm
│   ├── POST /api/whatsapp/send
│   ├── GET /sitemap.xml
│   └── GET /robots.txt
└── Error Handlers
```

### In-Memory Database Schema

#### Products Table

```
id: UUID
name: string
price: number (IDR)
category: string
image: URL
rating: float (0-5)
description: string
stock: number
```

#### Orders Table

```
id: UUID
items: CartItem[]
total: number
status: pending|confirmed|shipped|delivered
customerInfo:
  - name
  - email
  - phone
  - address
paymentStatus: unpaid|paid|refunded
createdAt: timestamp
```

### Payment Flow

1. **Frontend** → Creates order
2. **Backend** → Stores order, returns order ID
3. **Frontend** → Requests payment intent
4. **Backend** → Creates Stripe intent, returns client secret
5. **Frontend** → Collects payment with Stripe
6. **Frontend** → Sends confirmation
7. **Backend** → Updates order status

## API Response Format

### Success Response

```json
{
  "data": { ... },
  "status": 200,
  "message": "Success"
}
```

### Error Response

```json
{
  "error": "Error message",
  "status": 400,
  "code": "ERROR_CODE"
}
```

## Security Measures

### Frontend

- XSS Protection: React escapes output by default
- CSRF: Express-session + token-based (TODO)
- HTTPS: Required in production

### Backend

- Input Validation: Check all inputs
- SQL Injection Prevention: Use parameterized queries (with real DB)
- CORS: Restrict to known origins
- Rate Limiting: Implement per IP (TODO)
- Helmet: Add security headers (TODO)

```typescript
import helmet from "helmet";
app.use(helmet());
```

## Performance Optimization

### Frontend

```typescript
// Code splitting with React.lazy
const ProductsPage = lazy(() => import('./pages/Products'))

// Memoization
const MemoizedProductCard = memo(ProductCard)

// Image optimization
<img loading="lazy" src={...} />
```

### Backend

```typescript
// Caching headers
res.set("Cache-Control", "public, max-age=3600");

// Compression
import compression from "compression";
app.use(compression());

// Connection pooling
const pool = new Pool({ max: 20 });
```

## Testing Strategy

### Frontend Unit Tests

```typescript
// Example with Jest + React Testing Library
import { render, screen } from "@testing-library/react";
import { ProductCard } from "./ProductCard";

test("renders product card", () => {
  render(<ProductCard {...mockProps} />);
  expect(screen.getByText("Premium Silk Gamis")).toBeInTheDocument();
});
```

### API Integration Tests

```typescript
// Example with Jest + Supertest
import request from "supertest";
import app from "./index";

test("GET /api/products returns all products", async () => {
  const response = await request(app).get("/api/products");
  expect(response.status).toBe(200);
  expect(response.body).toBeInstanceOf(Array);
});
```

## Database Migration (Future)

### From In-Memory to PostgreSQL

```typescript
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Get all products
app.get("/api/products", async (req, res) => {
  const result = await pool.query("SELECT * FROM products");
  res.json(result.rows);
});
```

### Sequelize ORM Setup

```typescript
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_URL);

class Product extends Model {}
Product.init(
  {
    id: DataTypes.UUID,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    // ...
  },
  { sequelize }
);
```

## Deployment Architecture

### Development

```
Frontend: http://localhost:3000 (Vite)
Backend: http://localhost:5000 (Node)
```

### Production

```
Frontend: Vercel / Netlify (CDN)
Backend: Heroku / Railway / AWS (Node.js container)
Database: PostgreSQL / MongoDB (Cloud)
Storage: AWS S3 / GCS (Images)
```

### CI/CD Pipeline

```
GitHub Repository
├── Push to main
├── GitHub Actions (Auto-test & build)
├── Deploy to Vercel (Frontend)
└── Deploy to Heroku (Backend)
```

## Monitoring & Analytics

### Frontend

```typescript
import { Analytics } from "@vercel/analytics/react";
export default function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  );
}
```

### Backend

```typescript
import newrelic from "newrelic";
// Automatic monitoring
```

## SEO Implementation

### Meta Tags

```typescript
// In HTML head or with react-helmet
<Helmet>
  <title>Osvara - Premium Muslimah Clothing</title>
  <meta name="description" content="..." />
  <meta property="og:image" content="..." />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>
```

### Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Osvara",
  "url": "https://osvara.com",
  "logo": "https://osvara.com/logo.png",
  "sameAs": ["https://instagram.com/osvara"]
}
```

## Scalability Considerations

1. **Database Sharding**: Split data by region
2. **Caching**: Redis for frequent queries
3. **Load Balancing**: Nginx / AWS ALB
4. **Microservices**: Separate orders, payments, users services
5. **Message Queue**: RabbitMQ for async operations
6. **CDN**: CloudFlare / Akamai for static assets

---

This architecture supports growth from MVP to enterprise-scale application.
