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
      initials: "SN",
    },
    {
      name: "Dewi Lestari",
      rating: 5,
      text: "Koleksi abaya yang sangat elegan. Customer service responsif dan helpful. Highly recommended!",
      date: "1 month ago",
      initials: "DL",
    },
    {
      name: "Fatimah Az-Zahra",
      rating: 4,
      text: "Bagus sekali, hanya saja waktu pengiriman agak lama. Tapi worth it untuk kualitasnya!",
      date: "1 month ago",
      initials: "FA",
    },
  ];

  return (
    <motion.div
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
<<<<<<< HEAD
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Google Reviews
      </h2>
=======
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="text-gray-400 text-sm tracking-widest">/</div>
          <div className="text-gray-400 text-sm tracking-widest">
            TESTIMONIALS
          </div>
          <div className="text-gray-400 text-sm tracking-widest">(05)</div>
        </div>
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
          Customer Reviews
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          What our customers say about their experience with Osvara
        </p>
      </div>
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mockReviews.map((review, idx) => (
          <motion.div
            key={idx}
<<<<<<< HEAD
            className="bg-white border border-gray-200 rounded-lg p-6"
            style={{
              boxShadow:
                "0 8px 30px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)",
            }}
            whileHover={{
              y: -5,
              boxShadow:
                "0 15px 50px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.12)",
            }}
=======
            className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-lg hover:border-black transition-all duration-300"
            whileHover={{ y: -5 }}
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            {/* Header */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-light text-sm mr-4">
                {review.initials}
              </div>
              <div>
<<<<<<< HEAD
                <h4 className="text-gray-900 font-bold">{review.name}</h4>
                <p className="text-gray-500 text-sm">{review.date}</p>
=======
                <h4 className="text-gray-900 font-medium">{review.name}</h4>
                <p className="text-gray-400 text-sm">{review.date}</p>
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < review.rating
                      ? "text-black text-lg"
<<<<<<< HEAD
                      : "text-gray-300 text-lg"
=======
                      : "text-gray-200 text-lg"
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
                  }
                >
                  ★
                </span>
              ))}
            </div>

            {/* Review Text */}
<<<<<<< HEAD
            <p className="text-gray-600 text-sm leading-relaxed">
              {review.text}
=======
            <p className="text-gray-500 text-sm leading-relaxed italic">
              "{review.text}"
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
            </p>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
<<<<<<< HEAD
      <motion.button
        className="mx-auto block mt-8 bg-gradient-to-r from-black to-gray-800 text-white px-8 py-3 rounded-lg font-bold transition-colors"
        style={{
          boxShadow:
            "0 10px 35px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
        whileHover={{
          scale: 1.05,
          boxShadow:
            "0 15px 50px rgba(0, 0, 0, 0.4), 0 6px 18px rgba(0, 0, 0, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
=======
      <motion.a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto block mt-12 w-fit px-10 py-4 bg-black text-white font-medium tracking-wide hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
      >
        View More Reviews on Google
      </motion.a>
    </motion.div>
  );
};
