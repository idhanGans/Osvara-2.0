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
      className="bg-dark border border-gold/30 rounded-lg overflow-hidden hover:border-gold transition-colors cursor-pointer group"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-64 bg-dark/50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <motion.div
          className="absolute top-4 right-4 bg-gold text-dark px-3 py-1 rounded-full text-sm font-bold"
          whileHover={{ scale: 1.1 }}
        >
          {category}
        </motion.div>
        <motion.button
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gold text-dark px-6 py-2 rounded-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Product
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-gold font-bold text-lg mb-2 line-clamp-2">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
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
          <span className="text-silver/50 text-sm ml-2">
            ({rating.toFixed(1)})
          </span>
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gold">
            Rp {price.toLocaleString("id-ID")}
          </span>
          <motion.button
            className="bg-gold/20 text-gold border border-gold p-2 rounded-lg hover:bg-gold hover:text-dark transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            🛒
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
