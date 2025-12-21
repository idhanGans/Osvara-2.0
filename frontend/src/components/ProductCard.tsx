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
      className="bg-[#0f0f12] border border-gold/20 rounded-2xl overflow-hidden shadow-lg shadow-black/30 hover:shadow-gold/10 transition-all cursor-pointer group"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative overflow-hidden h-64 bg-black">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-4 left-4 bg-[#0f0f12]/90 backdrop-blur text-xs font-medium text-silver px-3 py-1 rounded-full border border-gold/30">
          {category}
        </span>
        <span className="absolute top-4 right-4 bg-gold text-dark text-xs font-semibold px-3 py-1 rounded-full">
          Baru
        </span>
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gold text-dark px-5 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
          Lihat Detail
        </button>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-silver font-semibold text-base line-clamp-2">
          {name}
        </h3>

        <div className="flex items-center gap-2 text-xs text-silver/60">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={
                i < Math.floor(rating) ? "text-gold" : "text-silver/30"
              }
            >
              ★
            </span>
          ))}
          <span className="text-silver/60">{rating.toFixed(1)}</span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-semibold text-gold">
            Rp {price.toLocaleString("id-ID")}
          </span>
          <button className="rounded-full border border-gold/30 px-3 py-2 text-sm text-gold hover:border-gold">
            🛒
          </button>
        </div>
      </div>
    </motion.div>
  );
};
