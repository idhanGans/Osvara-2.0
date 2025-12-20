# Osvara Frontend Documentation

## Project Overview

Osvara frontend is a modern React application built with TypeScript, Vite, and Tailwind CSS. It features interactive animations with Framer Motion and a responsive design for the premium muslimah clothing e-commerce platform.

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Axios** - HTTP client

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer component
│   ├── ProductCard.tsx # Product display card
│   ├── MockupProduct.tsx # Virtual try-on
│   ├── GoogleMaps.tsx  # Store location
│   └── GoogleReviews.tsx # Customer reviews
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Products.tsx    # Products listing
│   ├── Gallery.tsx     # Image gallery
│   ├── About.tsx       # About us
│   └── Contact.tsx     # Contact page
├── assets/             # Static files
├── App.tsx             # Main app component
├── main.tsx            # React entry point
└── index.css           # Global styles
```

## Components

### Navbar

- Fixed navigation bar with logo
- Responsive mobile menu
- Cart icon with badge
- Smooth navigation with Framer Motion

**Props**: None (uses React Router for navigation)

### Footer

- Company info
- Quick links
- Contact information
- Social media links
- Copyright notice

### ProductCard

Display product in grid with:

- Product image with hover zoom
- Category badge
- Rating stars
- Price in Indonesian Rupiah
- Add to cart button

**Props**:

```typescript
{
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}
```

### MockupProduct

Virtual try-on feature:

- Height slider (140-180 cm)
- Weight slider (40-100 kg)
- Photo upload
- Share mockup button
- Real-time scaling preview

**Props**:

```typescript
{
  productImage: string;
  productName: string;
}
```

### GoogleMaps

Embedded store location map using Google Maps iframe.

### GoogleReviews

Display customer reviews with:

- Customer name and avatar
- Star ratings
- Review text
- Review date
- Link to full Google Reviews

## Pages

### Home Page

- Hero section with animated title
- Featured products grid
- Collections showcase
- Why choose us section
- Customer reviews
- Newsletter signup

### Products Page

- Product filtering by category
- Price range slider
- Product sorting
- Responsive grid layout
- Search functionality

### Gallery Page

- Image grid showcase
- Lightbox modal view
- Image titles
- Responsive columns

### About Page

- Company story
- Core values
- Why choose section
- Store location with Google Maps
- Contact information

### Contact Page

- Contact form with validation
- Contact information cards
- Store hours
- Quick contact buttons (WhatsApp, Phone, Email)
- Google Maps

## Styling

### Tailwind CSS Configuration

```javascript
// Colors
dark: #0F0F0F
gold: #D4AF37
silver: #E8E8E8
cream: #FFF8F0

// Custom animations
fade-in, slide-up, bounce-smooth, glow
```

### Responsive Design

- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

Use Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

## Animations

Framer Motion animations include:

```typescript
// Fade in on view
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}

// Slide up
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}

// Hover scale
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}

// Rotate
animate={{ rotate: 360 }}
transition={{ duration: 20, repeat: Infinity }}
```

## API Integration

### Base URL

Development: `http://localhost:5000/api`
Production: `https://api.osvara.com/api`

### Example API Call

```typescript
import axios from "axios";

const fetchProducts = async () => {
  try {
    const response = await axios.get("/api/products");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
```

## Form Handling

Example for contact form:

```typescript
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  // Send to backend
  await axios.post("/api/contact", formData);
};
```

## Performance Optimization

1. **Code Splitting**: React Router lazy loading
2. **Image Optimization**: Use responsive images with srcset
3. **Lazy Loading**: IntersectionObserver for viewport-based loading
4. **CSS Minification**: Tailwind purges unused styles
5. **Bundle Size**: Vite creates optimized builds

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server on port 3000
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Environment Variables

Create `.env.local`:

```
VITE_API_URL=http://localhost:5000/api
VITE_STRIPE_KEY=pk_test_your_key
```

Access in code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## SEO Meta Tags

In `index.html`:

```html
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<meta name="og:title" content="..." />
<meta name="og:description" content="..." />
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Build Fails

```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run build
```

## Best Practices

1. **Components**: Keep components small and focused
2. **Props**: Use TypeScript for prop types
3. **State**: Use React hooks for state management
4. **Performance**: Memoize expensive components
5. **Accessibility**: Add aria labels and semantic HTML
6. **Testing**: Write tests for critical components

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Vite Guide](https://vitejs.dev)

---

For more information, see the main README.md
