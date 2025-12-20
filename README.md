# Osvara - Elegant E-Commerce Platform

A modern, responsive e-commerce platform for muslimah clothing with interactive features, virtual mockup, direct payment, and WhatsApp integration.

## 🌟 Features

### Frontend Features

- **Responsive Design**: Mobile-first approach with seamless experience on all devices
- **Interactive Animations**: Smooth Framer Motion animations throughout the site
- **Elegant UI**: Black, gold, and silver color scheme
- **Virtual Mockup**: Try products with height/weight adjustments and photo overlay
- **Add to Cart**: Smooth shopping experience
- **Product Gallery**: Beautiful image showcase with lightbox
- **Google Reviews**: Real customer testimonials
- **Google Maps**: Store location display
- **Newsletter Signup**: Email subscription feature

### Backend Features

- **RESTful API**: Complete product and order management
- **Stripe Payment Integration**: Secure direct payment processing
- **WhatsApp Integration**: Order status via WhatsApp
- **Order Management**: Track orders and payment status
- **SEO Optimization**: Sitemap, robots.txt, meta tags
- **CORS Enabled**: Secure cross-origin requests

## 📦 Project Structure

```
Osvara 2.0/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── assets/         # Images and static files
│   │   ├── App.tsx         # Main app component
│   │   ├── main.tsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── index.html          # HTML template
│   ├── vite.config.ts      # Vite configuration
│   ├── tailwind.config.js  # Tailwind CSS config
│   └── package.json        # Dependencies
│
└── backend/
    ├── src/
    │   ├── routes/         # API routes
    │   ├── controllers/    # Business logic
    │   ├── models/         # Data models
    │   ├── middleware/     # Express middleware
    │   └── index.ts        # Server entry point
    ├── .env                # Environment variables
    ├── tsconfig.json       # TypeScript config
    └── package.json        # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Stripe account for payment processing
- Basic knowledge of React and Express

### Installation

#### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on `http://localhost:3000`

#### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Backend will run on `http://localhost:5000`

## 🔐 Environment Variables

### Backend (.env)

```
STRIPE_SECRET_KEY=sk_test_your_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_key
PORT=5000
NODE_ENV=development
JWT_SECRET=your-secret-key
WHATSAPP_API_KEY=your_api_key
DATABASE_URL=sqlite:./osvara.db
```

### Frontend (vite.config.ts)

The Vite config already has proxy setup for API calls to `http://localhost:5000`

## 📚 API Endpoints

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/products?category=Gamis` - Filter by category

### Orders

- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order details

### Payments

- `POST /api/payments/create-intent` - Create Stripe payment intent
- `POST /api/payments/confirm` - Confirm payment

### WhatsApp

- `POST /api/whatsapp/send` - Send WhatsApp message

### SEO

- `GET /sitemap.xml` - XML sitemap
- `GET /robots.txt` - Robots configuration

## 🎨 Design System

### Colors

- **Dark**: `#0F0F0F` - Primary background
- **Gold**: `#D4AF37` - Primary accent
- **Silver**: `#E8E8E8` - Primary text
- **Cream**: `#FFF8F0` - Accent background

### Typography

- Font Family: Poppins
- Sizes: Responsive with Tailwind CSS

### Animations

- Fade In, Slide Up, Bounce, Glow effects
- Framer Motion for interactive elements
- Smooth scroll behavior

## 🛒 Shopping Flow

1. **Browse Products**: View products with filters
2. **Virtual Mockup**: Try product with custom height/weight
3. **Add to Cart**: Simple add to cart functionality
4. **Checkout**: Direct payment via Stripe
5. **Confirmation**: Order confirmation with WhatsApp option

## 💳 Payment Integration

### Stripe Setup

1. Create Stripe account
2. Get API keys from dashboard
3. Add keys to `.env` file
4. Test payments with test card: `4242 4242 4242 4242`

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

All components are fully responsive with Tailwind CSS.

## 🔍 SEO Features

- Meta tags in HTML head
- Semantic HTML structure
- Sitemap.xml for search engines
- robots.txt for crawler guidance
- Mobile-friendly design
- Fast loading with Vite

## 🚀 Deployment

### Frontend (Vercel/Netlify)

```bash
npm run build
# Deploy 'dist' folder
```

### Backend (Heroku/Railway)

```bash
npm run build
# Deploy with 'dist' folder
```

## 📞 Support

- **Email**: hello@osvara.com
- **WhatsApp**: +62 812-3456-7890
- **Address**: Jl. Kemang Raya No. 123, Jakarta

## 📄 License

MIT License - Feel free to use this project

## 🎯 Future Enhancements

- [ ] User authentication system
- [ ] Customer reviews and ratings
- [ ] Wishlist feature
- [ ] Order history
- [ ] Real database integration
- [ ] Email notifications
- [ ] Analytics dashboard
- [ ] Inventory management
- [ ] Multiple payment gateways
- [ ] Multi-language support

---

Made with ❤️ by Osvara Team
