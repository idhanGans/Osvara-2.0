import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  id: number;
  title: string;
  image: string;
  category: string;
}

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: "Premium Silk Gamis Collection",
      image:
        "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=600&h=400&fit=crop",
      category: "Gamis",
    },
    {
      id: 2,
      title: "Elegant Khimar Styling",
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=400&fit=crop",
      category: "Khimar",
    },
    {
      id: 3,
      title: "Black Abaya Elegance",
      image:
        "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?w=600&h=400&fit=crop",
      category: "Abaya",
    },
    {
      id: 4,
      title: "Gold Embroidery Details",
      image:
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=400&fit=crop",
      category: "Details",
    },
    {
      id: 5,
      title: "Modest Fashion Display",
      image:
        "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&h=400&fit=crop",
      category: "Lookbook",
    },
    {
      id: 6,
      title: "Fashion Photoshoot",
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=400&fit=crop",
      category: "Lookbook",
    },
    {
      id: 7,
      title: "Handcrafted Details",
      image:
        "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600&h=400&fit=crop",
      category: "Details",
    },
    {
      id: 8,
      title: "New Spring Collection",
      image:
        "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=600&h=400&fit=crop",
      category: "Abaya",
    },
    {
      id: 9,
      title: "Premium Fabric Selection",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=400&fit=crop",
      category: "Details",
    },
    {
      id: 10,
      title: "Modest Evening Wear",
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=400&fit=crop",
      category: "Lookbook",
    },
    {
      id: 11,
      title: "Casual Gamis Style",
      image:
        "https://images.unsplash.com/photo-1631233859262-0c61b2bb8c97?w=600&h=400&fit=crop",
      category: "Gamis",
    },
    {
      id: 12,
      title: "Accessories Collection",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=400&fit=crop",
      category: "Accessories",
    },
  ];

  const categories = [
    "all",
    "Gamis",
    "Khimar",
    "Abaya",
    "Details",
    "Lookbook",
    "Accessories",
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="pt-20 pb-20">
      <motion.div
<<<<<<< HEAD
        className="bg-gray-100 py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-5xl font-bold text-black text-center">Gallery</h1>
        <p className="text-gray-600 text-center mt-4">
          Explore our stunning collection
=======
        className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-5xl font-light text-white text-center tracking-wide">
          Gallery
        </h1>
        <p className="text-white/70 text-center mt-4">
          Explore our stunning collection and style inspirations
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-gray-50 text-gray-500 hover:text-black"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat === "all" ? "All" : cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-lg cursor-pointer group h-72 shadow-lg"
                onClick={() => setSelectedImage(item)}
              >
<<<<<<< HEAD
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
=======
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs text-white/70 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-white font-light text-xl mt-1">
                      {item.title}
                    </h3>
                  </div>
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-light to-secondary p-12 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-light text-black mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Get daily style inspirations and be the first to see our new
            collections. Tag us with #OsvaraStyle to be featured!
          </p>
          <motion.a
            href="https://instagram.com/osvara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-medium tracking-wide hover:bg-grey transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @osvara
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
<<<<<<< HEAD
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
=======
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image.replace("600&h=400", "1200&h=800")}
                alt={selectedImage.title}
                className="w-full rounded-lg shadow-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-3xl hover:text-gray-500 transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <span className="text-xs text-white/70 uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h2 className="text-white text-2xl font-light mt-1">
                  {selectedImage.title}
                </h2>
              </div>
            </motion.div>
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
