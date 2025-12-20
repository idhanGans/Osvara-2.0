# Quick Reference Guide

## 🚀 Quick Start

### Install Everything

```bash
cd frontend && npm install
cd ../backend && npm install
cd ..
```

### Run Dev Servers (from root)

```bash
npm run dev
```

Or in separate terminals:

```bash
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend
cd frontend && npm run dev
```

### Access the Application

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

---

## 📁 Key Files & Their Purpose

| File                                      | Purpose                                 |
| ----------------------------------------- | --------------------------------------- |
| `frontend/src/App.tsx`                    | Main React app router                   |
| `frontend/src/pages/Home.tsx`             | Landing page                            |
| `frontend/src/components/ProductCard.tsx` | Product display component               |
| `backend/src/index.ts`                    | Express server & API routes             |
| `backend/.env`                            | Environment variables (add Stripe keys) |
| `frontend/tailwind.config.js`             | Color & animation config                |

---

## 🎨 Customization Quick Tips

### Change Colors

Edit `frontend/tailwind.config.js`:

```javascript
colors: {
  'gold': '#D4AF37',      // Change this
  'dark': '#0F0F0F',      // Or this
  'silver': '#E8E8E8',    // Or this
}
```

### Add New Product

Edit `backend/src/index.ts` - `products` array:

```typescript
{
  id: '5',
  name: 'Your Product Name',
  price: 500000,
  category: 'Gamis',
  image: 'https://your-image-url.jpg',
  rating: 4.9,
  description: 'Description here',
  stock: 25,
}
```

### Change Company Info

Search for:

- `+62 812-3456-7890` → Your phone number
- `hello@osvara.com` → Your email
- `Jakarta, Indonesia` → Your location
- `Osvara` → Your brand name

### Add New Page

1. Create `frontend/src/pages/YourPage.tsx`
2. Add route in `frontend/src/App.tsx`:
   ```typescript
   <Route path="/your-page" element={<YourPage />} />
   ```
3. Add link in `frontend/src/components/Navbar.tsx`

---

## 🔌 API Quick Reference

### Get Products

```bash
curl http://localhost:5000/api/products
curl http://localhost:5000/api/products?category=Gamis
```

### Create Order

```bash
curl -X POST http://localhost:5000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "items": [{"productId": "1", "quantity": 1}],
    "customerInfo": {
      "name": "John",
      "email": "john@example.com",
      "phone": "+6281234567890",
      "address": "Jakarta"
    }
  }'
```

### Test Payment

```bash
curl -X POST http://localhost:5000/api/payments/create-intent \
  -H "Content-Type: application/json" \
  -d '{"amount": 500000, "orderId": "order-123"}'
```

---

## 🧪 Testing

### Test Payment Card (Stripe)

- Number: `4242 4242 4242 4242`
- Exp: `12/25`
- CVC: `123`

### Test Products

All products are pre-loaded. Visit `/products` to see them.

### Test Form Submission

Contact form validates and displays success message.

---

## 🚨 Common Issues & Fixes

| Issue               | Solution                                                              |
| ------------------- | --------------------------------------------------------------------- |
| Port already in use | Kill process: `lsof -ti:5000 \| xargs kill -9`                        |
| Module not found    | Run `npm install` in that directory                                   |
| CORS errors         | Verify backend is running and proxy is set in vite.config.ts          |
| Stripe not working  | Check `.env` has correct keys (starts with `sk_test_` and `pk_test_`) |
| Page looks broken   | Clear browser cache (Ctrl+Shift+Del) and hard refresh (Ctrl+F5)       |

---

## 📦 Dependencies at a Glance

### Frontend

- `react` - UI library
- `tailwindcss` - Styling
- `framer-motion` - Animations
- `react-router-dom` - Navigation
- `axios` - HTTP requests

### Backend

- `express` - Web framework
- `stripe` - Payments
- `cors` - Cross-origin support
- `typescript` - Type safety
- `dotenv` - Environment config

---

## 🚀 Deploy Commands

### Build

```bash
npm run build
```

### Deploy Frontend to Vercel

```bash
cd frontend
npm run build
vercel --prod
```

### Deploy Backend to Heroku

```bash
cd backend
npm run build
heroku login
heroku create
git push heroku main
```

---

## 🔐 Security Checklist

Before production:

- [ ] Change JWT_SECRET in `.env`
- [ ] Use HTTPS only
- [ ] Add input validation
- [ ] Enable CORS restrictions
- [ ] Set secure cookie flags
- [ ] Add rate limiting
- [ ] Add request logging
- [ ] Use real database (not in-memory)
- [ ] Hide `.env` file
- [ ] Add API authentication

---

## 📊 Project Stats

- **Pages**: 5 (Home, Products, Gallery, About, Contact)
- **Components**: 6 main components
- **Colors**: Black, Gold, Silver
- **Animations**: 5+ Framer Motion animations
- **API Endpoints**: 9 endpoints
- **Responsive**: Mobile, Tablet, Desktop

---

## 🎯 Next Steps

1. ✅ Setup complete
2. 🔑 Add Stripe keys to `.env`
3. 🖼️ Replace placeholder images
4. 📝 Update company information
5. 💾 Add real database (PostgreSQL/MongoDB)
6. 📧 Setup email notifications
7. 💬 Enable WhatsApp integration
8. 🔍 Submit to Google Search Console
9. 📱 Test on mobile devices
10. 🚀 Deploy to production

---

## 📞 Support

- **Documentation**: See README.md, SETUP.md, ARCHITECTURE.md
- **Frontend Guide**: See frontend/README.md
- **Backend Guide**: See backend/README.md
- **Issues**: Check TROUBLESHOOTING section above

---

## 🎓 Learning Resources

- [React Tutorial](https://react.dev/learn)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [Express.js Guide](https://expressjs.com/en/starter/basic-routing.html)
- [Stripe Integration](https://stripe.com/docs/stripe-js)
- [Framer Motion](https://www.framer.com/motion/)

---

**Happy coding! Build something amazing with Osvara! 🚀✨**
