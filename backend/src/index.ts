import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import Stripe from "stripe";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_dummy", {
  apiVersion: "2023-10-16",
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// In-memory database (replace with real DB in production)
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

interface CartItem {
  productId: string;
  quantity: number;
}

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

// Mock Products Database
const products: Product[] = [
  {
    id: "1",
    name: "Premium Silk Gamis",
    price: 450000,
    category: "Gamis",
    image: "https://via.placeholder.com/300x400?text=Gamis1",
    rating: 4.8,
    description: "Elegant silk gamis with premium embroidery",
    stock: 20,
  },
  {
    id: "2",
    name: "Elegant Khimar Set",
    price: 350000,
    category: "Khimar",
    image: "https://via.placeholder.com/300x400?text=Khimar1",
    rating: 4.9,
    description: "Luxury khimar set with matching accessories",
    stock: 30,
  },
  {
    id: "3",
    name: "Luxury Black Abaya",
    price: 550000,
    category: "Abaya",
    image: "https://via.placeholder.com/300x400?text=Abaya1",
    rating: 5,
    description: "Premium black abaya with gold embroidery",
    stock: 15,
  },
  {
    id: "4",
    name: "Embroidered Gamis",
    price: 520000,
    category: "Gamis",
    image: "https://via.placeholder.com/300x400?text=Gamis2",
    rating: 4.7,
    description: "Beautiful embroidered gamis in various colors",
    stock: 25,
  },
];

const orders: Order[] = [];

// Routes

// Get all products
app.get("/api/products", (req: Request, res: Response) => {
  const category = req.query.category;

  if (category) {
    const filtered = products.filter((p) => p.category === category);
    return res.json(filtered);
  }

  res.json(products);
});

// Get single product
app.get("/api/products/:id", (req: Request, res: Response) => {
  const product = products.find((p) => p.id === req.params.id);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
});

// Create order
app.post("/api/orders", (req: Request, res: Response) => {
  try {
    const { items, customerInfo } = req.body;

    // Validate items
    if (!items || items.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    // Calculate total
    let total = 0;
    for (const item of items) {
      const product = products.find((p) => p.id === item.productId);
      if (product) {
        total += product.price * item.quantity;
      }
    }

    const order: Order = {
      id: uuidv4(),
      items,
      total,
      status: "pending",
      customerInfo,
      paymentStatus: "unpaid",
      createdAt: new Date(),
    };

    orders.push(order);

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to create order" });
  }
});

// Create payment intent (Stripe)
app.post("/api/payments/create-intent", async (req: Request, res: Response) => {
  try {
    const { amount, orderId } = req.body;

    if (!amount || amount < 100) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount),
      currency: "idr",
      metadata: { orderId },
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error("Payment error:", error);
    res.status(500).json({ error: "Payment failed" });
  }
});

// Confirm payment
app.post("/api/payments/confirm", (req: Request, res: Response) => {
  try {
    const { orderId, paymentIntentId } = req.body;

    // Find and update order
    const order = orders.find((o) => o.id === orderId);
    if (order) {
      order.paymentStatus = "paid";
      order.status = "confirmed";
    }

    res.json({
      success: true,
      message: "Payment confirmed",
      order,
    });
  } catch (error) {
    res.status(500).json({ error: "Payment confirmation failed" });
  }
});

// WhatsApp API endpoint
app.post("/api/whatsapp/send", (req: Request, res: Response) => {
  try {
    const { phone, message, orderId } = req.body;

    // Format phone number (add country code if needed)
    const formattedPhone = phone.startsWith("+")
      ? phone
      : `+62${phone.substring(1)}`;

    // In production, use Twilio or WhatsApp Business API
    // For now, return success response
    const whatsappLink = `https://wa.me/${formattedPhone.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(message)}`;

    res.json({
      success: true,
      message: "WhatsApp message ready to send",
      link: whatsappLink,
      orderId,
    });
  } catch (error) {
    res.status(500).json({ error: "WhatsApp message failed" });
  }
});

// Get order by ID
app.get("/api/orders/:id", (req: Request, res: Response) => {
  const order = orders.find((o) => o.id === req.params.id);

  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }

  res.json(order);
});

// Health check
app.get("/api/health", (req: Request, res: Response) => {
  res.json({ status: "Server is running" });
});

// SEO Sitemap
app.get("/sitemap.xml", (req: Request, res: Response) => {
  res.type("application/xml");
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://osvara.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://osvara.com/products</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://osvara.com/gallery</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://osvara.com/about</loc>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://osvara.com/contact</loc>
    <priority>0.7</priority>
  </url>
</urlset>`);
});

// Robots.txt
app.get("/robots.txt", (req: Request, res: Response) => {
  res.type("text/plain");
  res.send(`User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://osvara.com/sitemap.xml`);
});

// 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✓ Server running at http://localhost:${PORT}`);
  console.log(`✓ API documentation available at http://localhost:${PORT}/api`);
});
