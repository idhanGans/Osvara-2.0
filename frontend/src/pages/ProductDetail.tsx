import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getProductById, getProducts, type Product } from "../api/productApi";
import { useCart } from "../context/CartContext";
import { ProductCard } from "../components/ProductCard";

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [showAddedNotification, setShowAddedNotification] = useState(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    Promise.all([getProductById(id), getProducts()])
      .then(([p, all]) => {
        setProduct(p);
        setRelated(
          all
            .filter((ap) => ap.category === p.category && ap.id !== p.id)
            .slice(0, 4)
        );
        setError(null);
      })
      .catch(() => setError("Failed to load product"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="pt-20 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-500">Loading product...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="pt-20 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-black mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-500 mb-8">
            {error ?? "The product you're looking for doesn't exist."}
          </p>
          <Link
            to="/products"
            className="px-8 py-3 bg-black text-white font-medium tracking-wide hover:bg-grey transition-colors"
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
        image: product.imageUrl ?? "",
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
      <div className="bg-gray-50 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-black">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-black">
              Products
            </Link>
            <span className="mx-2">/</span>
            <Link
              to={`/products?category=${product.category}`}
              className="hover:text-black"
            >
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black">{product.name}</span>
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
            <div className="relative overflow-hidden rounded-lg bg-gray-50 mb-4">
              <img
                src={product.imageUrl ?? ""}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs tracking-wide">
                  NEW
                </span>
              )}
              {product.isSale && (
                <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-xs tracking-wide">
                  SALE
                </span>
              )}
            </div>
            {/* additional images could be rendered here when schema supports them */}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="text-sm text-gray-500 tracking-wide mb-2">
              {product.category}
            </div>
            <h1 className="text-3xl font-light text-black mb-4">
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
                        ? "text-black"
                        : "text-gray-500/30"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">
                {product.rating} ({product.reviewCount || 0} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-light text-black">
                Rp {product.price.toLocaleString("id-ID")}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size Selection */}
            {/* Size / color options could be backed by API later; keep UI for now */}
            {product && Array.isArray((product as any).sizes) && (product as any).sizes.length > 0 && (
              <div className="mb-6">
                <label className="block text-black font-medium mb-3">
                  Size
                </label>
                <div className="flex flex-wrap gap-3">
                  {(product as any).sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border transition-colors ${
                        selectedSize === size
                          ? "bg-black text-white border-primary"
                          : "border-gray-300/30 text-black hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product && Array.isArray((product as any).colors) && (product as any).colors.length > 0 && (
              <div className="mb-6">
                <label className="block text-black font-medium mb-3">
                  Color
                </label>
                <div className="flex flex-wrap gap-3">
                  {(product as any).colors.map((color: string) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border transition-colors ${
                        selectedColor === color
                          ? "bg-black text-white border-primary"
                          : "border-gray-300/30 text-black hover:border-primary"
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
              <label className="block text-black font-medium mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300/30 text-black hover:border-primary transition-colors"
                >
                  -
                </button>
                <span className="text-xl font-light w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300/30 text-black hover:border-primary transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex gap-4">
              <motion.button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-4 font-medium tracking-wide hover:bg-grey transition-colors"
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
                className="px-8 py-4 border border-primary text-black font-medium tracking-wide hover:bg-black hover:text-white transition-colors"
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
            <div className="mt-8 pt-8 border-t border-gray-300/20">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-500">
                  <span>🚚</span> Free shipping over Rp 500,000
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <span>↩️</span> 30-day easy returns
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <span>✨</span> Premium quality materials
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <span>💳</span> Secure payment
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-light text-black mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {related.map((rp) => (
                <ProductCard
                  key={rp.id}
                  id={rp.id}
                  name={rp.name}
                  price={rp.price}
                  image={rp.imageUrl ?? ""}
                  category={rp.category}
                  rating={4.8}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
