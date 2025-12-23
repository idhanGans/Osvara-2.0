import React from "react";
import { motion } from "framer-motion";

export const GalleryPage: React.FC = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Premium Gamis",
      image: "https://via.placeholder.com/400x300?text=Gallery1",
    },
    {
      id: 2,
      title: "Elegant Khimar",
      image: "https://via.placeholder.com/400x300?text=Gallery2",
    },
    {
      id: 3,
      title: "Black Abaya",
      image: "https://via.placeholder.com/400x300?text=Gallery3",
    },
    {
      id: 4,
      title: "Gold Details",
      image: "https://via.placeholder.com/400x300?text=Gallery4",
    },
    {
      id: 5,
      title: "Collection Display",
      image: "https://via.placeholder.com/400x300?text=Gallery5",
    },
    {
      id: 6,
      title: "Fashion Show",
      image: "https://via.placeholder.com/400x300?text=Gallery6",
    },
    {
      id: 7,
      title: "Detail Work",
      image: "https://via.placeholder.com/400x300?text=Gallery7",
    },
    {
      id: 8,
      title: "New Collection",
      image: "https://via.placeholder.com/400x300?text=Gallery8",
    },
    {
      id: 9,
      title: "Premium Fabrics",
      image: "https://via.placeholder.com/400x300?text=Gallery9",
    },
  ];

  const [selectedImage, setSelectedImage] = React.useState<
    (typeof galleryImages)[0] | null
  >(null);

  return (
    <div className="pt-20 pb-20">
      <motion.div
        className="bg-gray-100 py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-5xl font-bold text-black text-center">Gallery</h1>
        <p className="text-gray-600 text-center mt-4">
          Explore our stunning collection
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {galleryImages.map((item) => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-64"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-3xl w-full"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
            >
              ✕
            </button>
            <h2 className="text-white text-2xl font-bold mt-4 text-center">
              {selectedImage.title}
            </h2>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
