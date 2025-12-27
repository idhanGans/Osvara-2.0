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
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="text-grey text-sm tracking-widest">/</div>
          <div className="text-grey text-sm tracking-widest">TESTIMONIALS</div>
          <div className="text-grey text-sm tracking-widest">(05)</div>
        </div>
        <h2 className="text-4xl md:text-5xl font-light text-black mb-4">
          Customer Reviews
        </h2>
        <p className="text-grey max-w-xl mx-auto">
          What our customers say about their experience with Osvara
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mockReviews.map((review, idx) => (
          <motion.div
            key={idx}
            className="bg-white border border-silver/30 rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            {/* Header */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-black to-grey flex items-center justify-center text-white font-light text-sm mr-4">
                {review.initials}
              </div>
              <div>
                <h4 className="text-black font-medium">{review.name}</h4>
                <p className="text-grey text-sm">{review.date}</p>
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
                      : "text-silver text-lg"
                  }
                >
                  ★
                </span>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-grey text-sm leading-relaxed italic">
              "{review.text}"
            </p>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto block mt-12 w-fit px-10 py-4 bg-black text-white font-medium tracking-wide hover:bg-grey transition-colors shadow-md hover:shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        View More Reviews on Google
      </motion.a>
    </motion.div>
  );
};
