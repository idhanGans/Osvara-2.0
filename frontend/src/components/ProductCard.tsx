import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  rating,
  isNew,
  isSale,
}) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id,
      name,
      price,
      image,
      category,
    });
  };

  return (
<<<<<<< HEAD
    <motion.div
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        boxShadow:
          "0 10px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
      whileHover={{
        y: -6,
        boxShadow:
          "0 20px 60px rgba(0, 0, 0, 0.25), 0 8px 20px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative overflow-hidden h-64 bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-medium text-gray-900 px-3 py-1 rounded-full border border-gray-300">
          {category}
        </span>
        <span className="absolute top-4 right-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
          Baru
        </span>
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-5 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
          Lihat Detail
        </button>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-gray-900 font-semibold text-base line-clamp-2">
          {name}
        </h3>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={
                i < Math.floor(rating) ? "text-black" : "text-gray-300"
              }
            >
              ★
            </span>
          ))}
          <span className="text-gray-500">{rating.toFixed(1)}</span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-semibold text-black">
            Rp {price.toLocaleString("id-ID")}
          </span>
          <button className="rounded-full border border-gray-300 px-3 py-2 text-sm text-gray-900 hover:border-black">
            🛒
          </button>
=======
    <Link to={`/products/${id}`}>
      <motion.div
        className="group cursor-pointer shadow-sm hover:shadow-md transition-shadow bg-white rounded-lg overflow-hidden"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden h-80 bg-white">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {isNew && (
              <span className="bg-black text-white px-3 py-1 text-xs tracking-wide">
                NEW
              </span>
            )}
            {isSale && (
              <span className="bg-red-600 text-white px-3 py-1 text-xs tracking-wide">
                SALE
              </span>
            )}
          </div>
          <motion.div
            className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 text-xs tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {category}
          </motion.div>
          <motion.button
            onClick={handleAddToCart}
            className="absolute bottom-4 left-4 right-4 bg-black text-white py-3 font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-all hover:bg-gray-800"
          >
            Add to Cart
          </motion.button>
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-gray-900 font-light text-lg mb-2 tracking-wide line-clamp-1">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-3 gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={
                  i < Math.floor(rating) ? "text-black" : "text-gray-200"
                }
                style={{ fontSize: "12px" }}
              >
                ★
              </span>
            ))}
            <span className="text-gray-500 text-xs ml-1">
              {rating.toFixed(1)}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-light text-gray-900 tracking-wide">
              Rp {price.toLocaleString("id-ID")}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                Rp {originalPrice.toLocaleString("id-ID")}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
