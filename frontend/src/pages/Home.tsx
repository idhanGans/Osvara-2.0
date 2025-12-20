import React from "react";
import { motion } from "framer-motion";
import { ProductCard } from "../components/ProductCard";
import { GoogleReviews } from "../components/GoogleReviews";

export const HomePage: React.FC = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Premium Silk Gamis",
      price: 450000,
      image: "https://via.placeholder.com/300x400?text=Gamis",
      category: "Gamis",
      rating: 4.8,
    },
    {
      id: "2",
      name: "Elegant Khimar Set",
      price: 350000,
      image: "https://via.placeholder.com/300x400?text=Khimar",
      category: "Khimar",
      rating: 4.9,
    },
    {
      id: "3",
      name: "Luxury Black Abaya",
      price: 550000,
      image: "https://via.placeholder.com/300x400?text=Abaya",
      category: "Abaya",
      rating: 5,
    },
    {
      id: "4",
      name: "Embroidered Gamis",
      price: 520000,
      image: "https://via.placeholder.com/300x400?text=Gamis2",
      category: "Gamis",
      rating: 4.7,
    },
  ];

  const categories = [
    { name: "Gamis", icon: "👗", description: "Traditional Islamic dresses" },
    { name: "Khimar", icon: "🧕", description: "Premium head coverings" },
    { name: "Abaya", icon: "🤎", description: "Elegant abayas" },
    { name: "Accessories", icon: "✨", description: "Complete your look" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        className="min-h-screen bg-gradient-to-b from-dark to-dark/80 flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 border border-gold/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-60 h-60 border border-gold/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-6xl md:text-7xl font-bold text-gold mb-6 animate-glow"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            OSVARA
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-silver mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Elegance Meets Tradition
          </motion.p>

          <motion.p
            className="text-lg text-silver/70 mb-12 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Discover exquisite muslimah clothing with premium quality, stunning
            designs, and interactive virtual mockup experience
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-gold text-dark font-bold rounded-lg hover:bg-gold/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <motion.section
        className="py-20 px-4 bg-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-4xl font-bold text-gold text-center mb-16">
          Our Collections
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="bg-dark border border-gold/30 rounded-lg p-6 text-center hover:border-gold transition-colors cursor-pointer"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <span className="text-5xl block mb-4">{cat.icon}</span>
              <h3 className="text-xl font-bold text-gold mb-2">{cat.name}</h3>
              <p className="text-silver/70 text-sm">{cat.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Products */}
      <motion.section
        className="py-20 px-4 bg-dark/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-4xl font-bold text-gold text-center mb-16">
          Featured Products
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <motion.div className="text-center mt-12" whileHover={{ scale: 1.05 }}>
          <button className="px-8 py-3 bg-gold text-dark font-bold rounded-lg hover:bg-gold/90">
            View All Products
          </button>
        </motion.div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="py-20 px-4 bg-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-4xl font-bold text-gold text-center mb-16">
          Why Choose Osvara?
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Premium Quality",
              desc: "Highest quality fabrics and craftsmanship",
              icon: "✨",
            },
            {
              title: "Virtual Mockup",
              desc: "Try before you buy with our interactive mockup",
              icon: "📸",
            },
            {
              title: "Easy Checkout",
              desc: "Direct payment with multiple options",
              icon: "💳",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <span className="text-5xl block mb-4">{item.icon}</span>
              <h3 className="text-xl font-bold text-gold mb-2">{item.title}</h3>
              <p className="text-silver/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Google Reviews */}
      <motion.section className="py-20 px-4 bg-dark/50">
        <div className="max-w-6xl mx-auto">
          <GoogleReviews />
        </div>
      </motion.section>

      {/* Newsletter */}
      <motion.section
        className="py-20 px-4 bg-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-silver/70 mb-8">
            Get exclusive offers and latest collections delivered to your inbox
          </p>

          <motion.div className="flex gap-2" whileHover={{ scale: 1.02 }}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-dark border border-gold/30 rounded-lg text-silver focus:outline-none focus:border-gold"
            />
            <motion.button
              className="px-8 py-3 bg-gold text-dark font-bold rounded-lg hover:bg-gold/90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};
