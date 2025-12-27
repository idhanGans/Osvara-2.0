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
            className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-xs tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {category}
          </motion.div>
          <motion.button
            onClick={handleAddToCart}
            className="absolute bottom-4 left-4 right-4 bg-white border border-black text-black py-3 font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black hover:text-white"
          >
            Add to Cart
          </motion.button>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-black font-light text-lg mb-2 tracking-wide line-clamp-1">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-3 gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={
                  i < Math.floor(rating) ? "text-black" : "text-grey/20"
                }
                style={{ fontSize: "12px" }}
              >
                ★
              </span>
            ))}
            <span className="text-grey text-xs ml-1">{rating.toFixed(1)}</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-light text-black tracking-wide">
              Rp {price.toLocaleString("id-ID")}
            </span>
            {originalPrice && (
              <span className="text-sm text-grey line-through">
                Rp {originalPrice.toLocaleString("id-ID")}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
