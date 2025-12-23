import React from "react";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  rating,
}) => {
  return (
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
        </div>
      </div>
    </motion.div>
  );
};
