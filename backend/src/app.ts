import express from "express";
import morgan from "morgan";
import { corsMiddleware } from "./config/cors.js";
import productRoutes from "./routes/product.routes.js";
import orderRoutes from "./routes/order.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import healthRoutes from "./routes/health.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { notFound } from "./middleware/notFound.js";

const app = express();

// Stripe webhook (raw body)
app.post(
  "/api/payments/webhook",
  express.raw({ type: "application/json" }),
  (req, _res, next) => {
    (req as any).rawBody = (req as any).body;
    next();
  }
);

app.use(morgan("dev"));
app.use(corsMiddleware);
app.use(express.json());

// API routes
app.use("/api", healthRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);

// Preserve existing SEO + robots endpoints
app.get("/sitemap.xml", (_req, res) => {
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

app.get("/robots.txt", (_req, res) => {
  res.type("text/plain");
  res.send(`User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://osvara.com/sitemap.xml`);
});

// 404 + error
app.use(notFound);
app.use(errorHandler);

export { app };

