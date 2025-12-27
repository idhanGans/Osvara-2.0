import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getProductById, products } from "../data/products";
import { useCart } from "../context/CartContext";
import { ProductCard } from "../components/ProductCard";

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = getProductById(id || "");

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [showAddedNotification, setShowAddedNotification] = useState(false);

  if (!product) {
    return (
      <div className="pt-20 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-primary mb-4">
            Product Not Found
          </h1>
          <p className="text-muted mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Link
            to="/products"
            className="px-8 py-3 bg-primary text-secondary font-medium tracking-wide hover:bg-dark transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        size: selectedSize,
        color: selectedColor,
      },
      quantity
    );
    setShowAddedNotification(true);
    setTimeout(() => setShowAddedNotification(false), 3000);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-20 pb-20">
      {/* Breadcrumb */}
      <div className="bg-light py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-muted">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-primary">
              Products
            </Link>
            <span className="mx-2">/</span>
            <Link
              to={`/products?category=${product.category}`}
              className="hover:text-primary"
            >
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative overflow-hidden rounded-lg bg-light mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-primary text-secondary px-3 py-1 text-xs tracking-wide">
                  NEW
                </span>
              )}
              {product.isSale && (
                <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-xs tracking-wide">
                  SALE
                </span>
              )}
            </div>
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-lg bg-light cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="text-sm text-muted tracking-wide mb-2">
              {product.category}
            </div>
            <h1 className="text-3xl font-light text-primary mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < Math.floor(product.rating)
                        ? "text-primary"
                        : "text-muted/30"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-muted text-sm">
                {product.rating} ({product.reviewCount || 0} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-light text-primary">
                Rp {product.price.toLocaleString("id-ID")}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted line-through">
                  Rp {product.originalPrice.toLocaleString("id-ID")}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <label className="block text-primary font-medium mb-3">
                  Size
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border transition-colors ${
                        selectedSize === size
                          ? "bg-primary text-secondary border-primary"
                          : "border-muted/30 text-primary hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <label className="block text-primary font-medium mb-3">
                  Color
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border transition-colors ${
                        selectedColor === color
                          ? "bg-primary text-secondary border-primary"
                          : "border-muted/30 text-primary hover:border-primary"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-primary font-medium mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-muted/30 text-primary hover:border-primary transition-colors"
                >
                  -
                </button>
                <span className="text-xl font-light w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-muted/30 text-primary hover:border-primary transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex gap-4">
              <motion.button
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-secondary py-4 font-medium tracking-wide hover:bg-dark transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Add to Cart
              </motion.button>
              <motion.button
                onClick={() => {
                  handleAddToCart();
                  navigate("/cart");
                }}
                className="px-8 py-4 border border-primary text-primary font-medium tracking-wide hover:bg-primary hover:text-secondary transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Buy Now
              </motion.button>
            </div>

            {/* Added Notification */}
            {showAddedNotification && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg"
              >
                ✓ Added to cart successfully!
              </motion.div>
            )}

            {/* Product Features */}
            <div className="mt-8 pt-8 border-t border-muted/20">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted">
                  <span>🚚</span> Free shipping over Rp 500,000
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <span>↩️</span> 30-day easy returns
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <span>✨</span> Premium quality materials
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <span>💳</span> Secure payment
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-light text-primary mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
