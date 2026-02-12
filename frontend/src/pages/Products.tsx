import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ProductCard } from "../components/ProductCard";
import { getProducts, type Product } from "../api/productApi";

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState(1000000);
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = products
    .filter((product) => {
      const categoryMatch =
        selectedCategory === "all" || product.category === selectedCategory;
      const priceMatch = product.price <= priceRange;
      const searchMatch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && priceMatch && searchMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const categories = React.useMemo(() => {
    const set = new Set<string>();
    for (const p of products) {
      set.add(p.category);
    }
    return ["all", ...Array.from(set)];
  }, [products]);

  return (
    <div className="pt-16 pb-20 min-h-screen">
      {/* Hero Banner */}
      <motion.div
<<<<<<< HEAD
        className="bg-gray-100 py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-5xl font-bold text-black text-center">
          Our Products
        </h1>
        <p className="text-gray-600 text-center mt-4">
          Discover our exclusive collection
=======
        className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-5xl font-light text-white text-center tracking-wide">
          Our Products
        </h1>
        <p className="text-gray-400 text-center mt-4 max-w-xl mx-auto">
          Discover our exclusive collection of modest fashion crafted with
          elegance
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar - Filters */}
          <motion.div
<<<<<<< HEAD
            className="bg-white border border-gray-200 rounded-lg p-6 h-fit"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-black font-bold text-lg mb-6">Filters</h3>

            {/* Category Filter */}
            <div className="mb-8">
              <h4 className="text-black font-bold mb-4">Category</h4>
=======
            className="bg-white border border-gray-200 rounded-lg p-6 h-fit shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-gray-900 font-medium text-lg mb-6">Filters</h3>

            {/* Search */}
            <div className="mb-8">
              <h4 className="text-gray-900 font-medium mb-4">Search</h4>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors bg-white"
              />
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h4 className="text-gray-900 font-medium mb-4">Category</h4>
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
              <div className="space-y-2">
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === cat
<<<<<<< HEAD
                        ? "bg-black text-white font-bold"
                        : "text-gray-600 hover:text-black"
=======
                        ? "bg-black text-white font-medium"
                        : "text-gray-500 hover:text-black hover:bg-gray-50"
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    {cat === "all" ? "All Products" : cat}
                    <span className="float-right text-sm">
                      {cat === "all"
                        ? `(${products.length})`
                        : `(${products.filter((p) => p.category === cat).length})`}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
<<<<<<< HEAD
            <div>
              <h4 className="text-black font-bold mb-4">Price Range</h4>
=======
            <div className="mb-8">
              <h4 className="text-gray-900 font-medium mb-4">Price Range</h4>
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
              <input
                type="range"
                min="100000"
                max="1000000"
                step="50000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full"
              />
<<<<<<< HEAD
              <p className="text-gray-600 text-sm mt-2">
                Up to Rp {priceRange.toLocaleString("id-ID")}
              </p>
=======
              <div className="flex justify-between text-gray-500 text-sm mt-2">
                <span>Rp 100,000</span>
                <span>Rp {priceRange.toLocaleString("id-ID")}</span>
              </div>
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
            </div>

            {/* Reset Button */}
            <motion.button
              onClick={() => {
                setSelectedCategory("all");
                setPriceRange(1000000);
                setSearchQuery("");
                setSortBy("newest");
                setSearchParams({});
              }}
<<<<<<< HEAD
              className="w-full mt-6 px-4 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
=======
              className="w-full px-4 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors"
              whileHover={{ scale: 1.02 }}
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
            >
              Reset Filters
            </motion.button>
          </motion.div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <motion.div
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
<<<<<<< HEAD
              <p className="text-gray-600">
                Showing {filteredProducts.length} products
              </p>
              <select className="bg-white border border-gray-300 text-gray-900 px-4 py-2 rounded-lg focus:outline-none focus:border-black">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Rated</option>
=======
              <p className="text-gray-500">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-300 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:border-black"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Most Rated</option>
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
              </select>
            </motion.div>

            {loading && (
              <div className="py-8 text-center text-gray-500">
                Loading products...
              </div>
            )}
            {error && !loading && (
              <div className="py-8 text-center text-red-500">{error}</div>
            )}
            {!loading && !error && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product, idx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <ProductCard
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.imageUrl ?? ""}
                        category={product.category}
                        rating={4.8}
                      />
                    </motion.div>
                  ))}
                </div>

<<<<<<< HEAD
            {filteredProducts.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-gray-600 text-lg">
                  No products found. Try adjusting your filters.
                </p>
              </motion.div>
=======
                {filteredProducts.length === 0 && (
                  <motion.div
                    className="text-center py-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-light text-gray-900 mb-2">
                      No products found
                    </h3>
                    <p className="text-gray-500">
                      Try adjusting your filters or search query.
                    </p>
                  </motion.div>
                )}
              </>
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
