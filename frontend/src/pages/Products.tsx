import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "../components/ProductCard";

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState(1000000);

  const allProducts = [
    {
      id: "1",
      name: "Premium Silk Gamis",
      price: 450000,
      image: "https://via.placeholder.com/300x400?text=Gamis1",
      category: "Gamis",
      rating: 4.8,
    },
    {
      id: "2",
      name: "Elegant Khimar Set",
      price: 350000,
      image: "https://via.placeholder.com/300x400?text=Khimar1",
      category: "Khimar",
      rating: 4.9,
    },
    {
      id: "3",
      name: "Luxury Black Abaya",
      price: 550000,
      image: "https://via.placeholder.com/300x400?text=Abaya1",
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
    {
      id: "5",
      name: "Designer Abaya Maxi",
      price: 650000,
      image: "https://via.placeholder.com/300x400?text=Abaya2",
      category: "Abaya",
      rating: 4.9,
    },
    {
      id: "6",
      name: "Silk Khimar Premium",
      price: 400000,
      image: "https://via.placeholder.com/300x400?text=Khimar2",
      category: "Khimar",
      rating: 4.8,
    },
    {
      id: "7",
      name: "Gold Embroidered Gamis",
      price: 580000,
      image: "https://via.placeholder.com/300x400?text=Gamis3",
      category: "Gamis",
      rating: 5,
    },
    {
      id: "8",
      name: "Platinum Abaya",
      price: 720000,
      image: "https://via.placeholder.com/300x400?text=Abaya3",
      category: "Abaya",
      rating: 4.6,
    },
  ];

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;
    const priceMatch = product.price <= priceRange;
    return categoryMatch && priceMatch;
  });

  const categories = ["all", "Gamis", "Khimar", "Abaya"];

  return (
    <div className="pt-20 pb-20">
      <motion.div
        className="bg-gradient-to-r from-dark to-dark/80 py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-5xl font-bold text-gold text-center">
          Our Products
        </h1>
        <p className="text-silver/70 text-center mt-4">
          Discover our exclusive collection
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <motion.div
            className="bg-dark border border-gold/30 rounded-lg p-6 h-fit"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-gold font-bold text-lg mb-6">Filters</h3>

            {/* Category Filter */}
            <div className="mb-8">
              <h4 className="text-gold font-bold mb-4">Category</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === cat
                        ? "bg-gold text-dark font-bold"
                        : "text-silver/70 hover:text-gold"
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    {cat === "all" ? "All Products" : cat}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <h4 className="text-gold font-bold mb-4">Price Range</h4>
              <input
                type="range"
                min="0"
                max="1000000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full"
              />
              <p className="text-silver/70 text-sm mt-2">
                Up to Rp {priceRange.toLocaleString("id-ID")}
              </p>
            </div>

            {/* Reset Button */}
            <motion.button
              onClick={() => {
                setSelectedCategory("all");
                setPriceRange(1000000);
              }}
              className="w-full mt-6 px-4 py-2 border border-gold text-gold rounded-lg hover:bg-gold/10 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Reset Filters
            </motion.button>
          </motion.div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <motion.div
              className="flex justify-between items-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-silver/70">
                Showing {filteredProducts.length} products
              </p>
              <select className="bg-dark border border-gold/30 text-silver px-4 py-2 rounded-lg focus:outline-none focus:border-gold">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Rated</option>
              </select>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-silver/70 text-lg">
                  No products found. Try adjusting your filters.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
