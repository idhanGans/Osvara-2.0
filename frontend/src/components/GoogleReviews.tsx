import React from "react";
import { motion } from "framer-motion";

interface GoogleReviewsProps {
  placeId?: string;
}

export const GoogleReviews: React.FC<GoogleReviewsProps> = () => {
  // Mock reviews data - in production, fetch from Google Places API
  const mockReviews = [
    {
      name: "Siti Nurhaliza",
      rating: 5,
      text: "Produk berkualitas tinggi! Gamis yang saya beli sangat nyaman dan tampilannya mewah. Pengiriman cepat!",
      date: "2 weeks ago",
      image: "👩",
    },
    {
      name: "Dewi Lestari",
      rating: 5,
      text: "Koleksi abaya yang sangat elegan. Customer service responsif dan helpful. Highly recommended!",
      date: "1 month ago",
      image: "👩‍🦰",
    },
    {
      name: "Fatimah Az-Zahra",
      rating: 4,
      text: "Bagus sekali, hanya saja waktu pengiriman agak lama. Tapi worth it untuk kualitasnya!",
      date: "1 month ago",
      image: "👩‍🦱",
    },
  ];

  return (
    <motion.div
      className="py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Google Reviews
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockReviews.map((review, idx) => (
          <motion.div
            key={idx}
            className="bg-white border border-gray-200 rounded-lg p-6"
            style={{
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)'
            }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 15px 50px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.12)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            {/* Header */}
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{review.image}</span>
              <div>
                <h4 className="text-gray-900 font-bold">{review.name}</h4>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < review.rating
                      ? "text-black text-lg"
                      : "text-gray-300 text-lg"
                  }
                >
                  ★
                </span>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {review.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.button
        className="mx-auto block mt-8 bg-gradient-to-r from-black to-gray-800 text-white px-8 py-3 rounded-lg font-bold transition-colors"
        style={{
          boxShadow: '0 10px 35px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)'
        }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 15px 50px rgba(0, 0, 0, 0.4), 0 6px 18px rgba(0, 0, 0, 0.3)'
        }}
        whileTap={{ scale: 0.95 }}
      >
        View More Reviews on Google
      </motion.button>
    </motion.div>
  );
};
