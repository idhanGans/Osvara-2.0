<<<<<<< HEAD
import React from "react";
=======
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
import { ProductCard } from "../components/ProductCard";
import { GoogleReviews } from "../components/GoogleReviews";
import { getProducts, type Product } from "../api/productApi";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [productError, setProductError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const promotions = [
    "🎉 New Year Sale - Up to 50% off on selected items!",
    "✨ Free shipping on orders over Rp 500,000",
    "🎁 Special promotion: Buy 2 Get 1 Free on accessories",
    "💝 Premium collection now available - Limited stock!",
  ];

  const heroSlides = [
    {
<<<<<<< HEAD
      id: "1",
      name: "Premium Silk Gamis",
      price: 450000,
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      category: "Gamis",
      rating: 4.8,
    },
    {
      id: "2",
      name: "Elegant Khimar Set",
      price: 350000,
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      category: "Khimar",
      rating: 4.9,
    },
    {
      id: "3",
      name: "Luxury Black Abaya",
      price: 550000,
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80&sat=-30",
      category: "Abaya",
      rating: 5,
    },
    {
      id: "4",
      name: "Embroidered Gamis",
      price: 520000,
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      category: "Gamis",
      rating: 4.7,
    },
  ];

  const quickFilters = [
    "New In",
    "Best Seller",
    "Sporty Modest",
    "Office Ready",
    "Accessories",
    "Sale",
  ];

  const promoTiles = [
    {
      title: "Flash Sale",
      subtitle: "Diskon s.d. 50%",
      cta: "Belanja sekarang",
      image:
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Modest Essentials",
      subtitle: "Pilihan harian premium",
      cta: "Lihat koleksi",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "New Arrivals",
      subtitle: "Rilis mingguan terbaru",
      cta: "Jelajahi",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80&sat=-20",
    },
=======
      title: "Elegant Muslim Fashion for",
      titleHighlight: "Modern Women",
      description:
        "Discover our curated collection of premium Islamic clothing designed with simplicity and purpose.",
      image:
        "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=600&h=600&fit=crop",
      buttonText: "Shop Products",
      link: "/products",
    },
    {
      title: "Premium Khimar Collection for",
      titleHighlight: "Every Occasion",
      description:
        "Explore our elegant khimar styles crafted from the finest fabrics for comfort and sophistication.",
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop",
      buttonText: "View Khimar",
      link: "/products?category=Khimar",
    },
    {
      title: "Luxurious Abaya Designs with",
      titleHighlight: "Timeless Elegance",
      description:
        "Experience the perfect blend of tradition and contemporary style in our exclusive abaya collection.",
      image:
        "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?w=600&h=600&fit=crop",
      buttonText: "Explore Abayas",
      link: "/products?category=Abaya",
    },
    {
      title: "Complete Your Look with",
      titleHighlight: "Premium Accessories",
      description:
        "From elegant pins to luxury bags, find the perfect finishing touches for your modest wardrobe.",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop",
      buttonText: "Shop Accessories",
      link: "/products?category=Accessories",
    },
    {
      title: "Beautiful Gamis for",
      titleHighlight: "Every Moment",
      description:
        "Discover the latest additions to our gamis collection featuring beautiful designs and premium fabrics.",
      image:
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=600&fit=crop",
      buttonText: "Shop Gamis",
      link: "/products?category=Gamis",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [promotions.length]);

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(heroTimer);
  }, [heroSlides.length]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch(() => {
        setProductError("Failed to load products");
      })
      .finally(() => setLoadingProducts(false));
  }, []);

  const featuredProducts = products.slice(0, 4);

  const stats = [
    { number: "5+", label: "Years of Experience" },
    { number: "500+", label: "Products Sold" },
    { number: "1000+", label: "Happy Customers" },
    { number: "4.9", label: "Customer Rating" },
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
  ];

  const categories = React.useMemo(() => {
    const map = new Map<
      string,
      { name: string; description: string; image: string; count: number }
    >();
    for (const p of products) {
      const existing = map.get(p.category);
      if (existing) {
        existing.count += 1;
      } else {
        // fallback image/description – customize as needed
        map.set(p.category, {
          name: p.category,
          description: `Explore our ${p.category} collection`,
          image: p.imageUrl || "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=600&h=400&fit=crop",
          count: 1,
        });
      }
    }
    return Array.from(map.values());
  }, [products]);

  return (
<<<<<<< HEAD
    <div className="pt-24 space-y-20">
      {/* Hero */}
      <section className="relative px-4">
        <div
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-300 rounded-3xl p-8 lg:p-12"
          style={{
            boxShadow:
              "0 20px 60px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
          }}
        >
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Osvara Collection • New Season
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
              Modestwear modern dengan desain minimalis dan elegan
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Siluet rapi, bahan adem, dan spektrum warna hitam, abu-abu, serta
              silver yang elegan untuk kerja, kasual, hingga acara spesial.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                className="px-6 py-3 rounded-full bg-gradient-to-r from-black to-gray-800 text-white text-sm font-semibold"
                style={{
                  boxShadow:
                    "0 8px 25px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                Belanja sekarang
              </button>
              <button
                className="px-6 py-3 rounded-full border-2 border-gray-400 text-sm font-semibold text-gray-900 hover:border-black bg-gradient-to-b from-white to-gray-50"
                style={{
                  boxShadow:
                    "0 4px 15px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.08)",
                }}
              >
                Lihat lookbook
              </button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-700">
              <span className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 border border-gray-300">
                ✔︎ Bahan adem & ringan
              </span>
              <span className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 border border-gray-300">
                ✔︎ Potongan modest
              </span>
              <span className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 border border-gray-300">
                ✔︎ Ukuran lengkap
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/5] rounded-3xl overflow-hidden border border-gray-300 bg-cover bg-center"
              style={{
                boxShadow:
                  "0 15px 50px rgba(0, 0, 0, 0.25), 0 5px 15px rgba(0, 0, 0, 0.15)",
              }}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80&sat=-20')",
              }}
            />
            <div
              className="absolute -bottom-4 -left-4 bg-gradient-to-br from-white to-gray-100 border border-gray-300 rounded-2xl p-4 w-48"
              style={{
                boxShadow:
                  "0 12px 40px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-1">
                Highlight
              </p>
              <p className="text-sm font-semibold text-gray-900">
                Monochrome Abaya Set
              </p>
              <p className="text-xs text-gray-600">Mulai Rp 499.000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick filters */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {quickFilters.map((item) => (
              <button
                key={item}
                className="px-4 py-2 rounded-full border border-gray-300 bg-gradient-to-b from-white to-gray-50 text-sm font-medium text-gray-900 hover:border-black transition-all"
                style={{
                  boxShadow:
                    "0 4px 15px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.08)";
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Promo tiles */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promoTiles.map((tile, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-gray-300 bg-cover bg-center min-h-[220px] flex items-end"
              style={{
                boxShadow:
                  "0 15px 50px rgba(0, 0, 0, 0.25), 0 5px 15px rgba(0, 0, 0, 0.15)",
              }}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.7) 100%), url(${tile.image})`,
              }}
            >
              <div className="p-6 text-white">
                <p className="text-sm uppercase tracking-[0.18em] text-white/80">
                  {tile.subtitle}
                </p>
                <h3 className="text-2xl font-semibold">{tile.title}</h3>
                <button
                  className="mt-3 inline-flex items-center text-sm font-semibold bg-gradient-to-r from-white to-gray-100 text-black px-4 py-2 rounded-full"
                  style={{
                    boxShadow:
                      "0 6px 20px rgba(255, 255, 255, 0.5), 0 2px 8px rgba(255, 255, 255, 0.3)",
                  }}
                >
                  {tile.cta}
                </button>
              </div>
            </div>
=======
    <div className="pt-16">
      {/* Promotional Banner */}
      <div className="bg-black text-white py-3 px-6 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="text-center text-sm md:text-base font-light tracking-wide"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {promotions[currentSlide]}
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1.5">
          {promotions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                idx === currentSlide
                  ? "bg-white w-4"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-32 px-6 bg-white flex items-center justify-center relative overflow-hidden shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroSlide}
            className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Left Content */}
            <div className="relative z-10">
              <motion.div
                className="text-sm tracking-widest text-gray-400 mb-6 uppercase"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Osvara Fashion
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {heroSlides[currentHeroSlide].title}{" "}
                <span className="italic font-serif text-black">
                  {heroSlides[currentHeroSlide].titleHighlight}
                </span>
              </motion.h1>

              <motion.p
                className="text-lg text-gray-500 mb-10 max-w-xl leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {heroSlides[currentHeroSlide].description}
              </motion.p>

              <motion.button
                onClick={() => navigate(heroSlides[currentHeroSlide].link)}
                className="px-12 py-4 bg-black text-white font-medium tracking-wide hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {heroSlides[currentHeroSlide].buttonText}
              </motion.button>
            </div>

            {/* Right Image */}
            <motion.div
              className="relative h-96 md:h-full min-h-96"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gray-500/10 rounded-lg overflow-hidden shadow-md">
                <img
                  src={heroSlides[currentHeroSlide].image}
                  alt={heroSlides[currentHeroSlide].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroSlide(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentHeroSlide
                  ? "bg-black w-8"
                  : "bg-gray-300 w-1.5 hover:bg-black/60"
              }`}
              aria-label={`Go to hero slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white/50 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Premium Quality",
                desc: "Finest fabrics and craftsmanship",
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ),
              },
              {
                title: "Fast Shipping",
                desc: "Delivered to your door quickly",
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M18 18.5a1.5 1.5 0 1 1-3 0m-12 0a1.5 1.5 0 1 1-3 0M3 9l2.757-7.351A1 1 0 0 1 6.634 1h12.732a1 1 0 0 1 .877.649L22 9M3 9h19v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
                  </svg>
                ),
              },
              {
                title: "Easy Returns",
                desc: "Hassle-free return policy",
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 8h16M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M4 8l1.2 10.8A2 2 0 0 0 7.15 20h9.7a2 2 0 0 0 1.95-1.2L20 8M10 4V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1" />
                  </svg>
                ),
              },
              {
                title: "Secure Payment",
                desc: "100% safe transactions",
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l6 3v5.82c0 4.35-2.62 8.4-6 10-3.38-1.6-6-5.65-6-10V6.18l6-3z" />
                  </svg>
                ),
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="text-center p-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image Card with enhanced visuals */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Decorative background element */}
              <motion.div
                className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl"
                initial={{ opacity: 0, rotate: -3 }}
                whileInView={{ opacity: 1, rotate: -3 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />

              {/* Main image container */}
              <motion.div
                className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=600&fit=crop"
                  alt="About Osvara"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating badge */}
                <motion.div
                  className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <p className="text-sm font-medium text-gray-900">
                    Since 2020
                  </p>
                  <p className="text-xs text-gray-500">Crafting Elegance</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Content side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-gray-400 text-sm tracking-widest">/</div>
                <div className="text-gray-400 text-sm tracking-widest">
                  ABOUT
                </div>
                <div className="text-gray-400 text-sm tracking-widest">
                  (01)
                </div>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                About{" "}
                <span className="italic font-serif text-black">Osvara</span>
              </motion.h2>

              <motion.p
                className="text-gray-500 text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Our studio is dedicated to crafting clean, purposeful fashion
                that honors tradition while embracing modern elegance.
              </motion.p>

              <motion.p
                className="text-gray-500 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Every piece is designed with intention, using premium fabrics
                and thoughtful details that elevate your everyday wear.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <Link to="/about">
                  <motion.button
                    className="group relative px-8 py-4 bg-white border-2 border-black text-black font-medium tracking-wide overflow-hidden transition-all duration-300 hover:text-white"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Learn More</span>
                    <motion.div
                      className="absolute inset-0 bg-black"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <div>
              <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="text-gray-400 text-sm tracking-widest">/</div>
                <div className="text-gray-400 text-sm tracking-widest">
                  COLLECTIONS
                </div>
                <div className="text-gray-400 text-sm tracking-widest">
                  (02)
                </div>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-light text-gray-900"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                Our Collections
              </motion.h2>
            </div>
            <Link to="/products">
              <motion.button
                className="px-8 py-3 border border-black text-black font-medium tracking-wide hover:bg-black hover:text-white transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                View All Collections
              </motion.button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categories.map((cat, idx) => (
              <Link key={idx} to={`/products?category=${cat.name}`}>
                <motion.div
                  className="group cursor-pointer relative"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <h3 className="text-3xl font-light mb-2 tracking-wide">
                        {cat.name}
                      </h3>
                      <p className="text-sm text-white/80 mb-2">
                        {cat.description}
                      </p>
                      <p className="text-xs text-white/60 mb-4">
                        {cat.count} Products
                      </p>
                      <span className="w-max px-6 py-2 bg-black text-white font-medium text-sm tracking-wide group-hover:bg-gray-800 transition-colors">
                        Go To Shop
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Featured products */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                New Arrivals
              </h2>
              <p className="text-sm text-gray-600">Drop terbaru minggu ini</p>
            </div>
            <a
              href="/products"
              className="text-sm font-semibold text-black hover:underline"
            >
              Lihat semua
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
=======
      {/* Featured Products */}
      <section className="py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <div>
              <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="text-gray-400 text-sm tracking-widest">/</div>
                <div className="text-gray-400 text-sm tracking-widest">
                  FEATURED
                </div>
                <div className="text-gray-400 text-sm tracking-widest">
                  (03)
                </div>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-light text-gray-900"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                Featured Products
              </motion.h2>
            </div>
            <Link to="/products">
              <motion.button
                className="px-8 py-3 border border-black text-black font-medium tracking-wide hover:bg-black hover:text-white transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                Go To Shop
              </motion.button>
            </Link>
          </div>

          {loadingProducts && (
            <div className="py-8 text-center text-gray-500">
              Loading products...
            </div>
          )}
          {productError && !loadingProducts && (
            <div className="py-8 text-center text-red-500">{productError}</div>
          )}
          {!loadingProducts && !productError && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.imageUrl ?? ""}
                    category={product.category}
                    rating={4.8}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Sale Banner */}
      <section className="py-24 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="text-sm tracking-widest text-silver mb-4 uppercase">
              Limited Time
            </div>
            <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Exclusive{" "}
              <span className="italic font-serif text-silver">New Year</span>{" "}
              Sale
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Discover our latest collection with special discounts on selected
              items.
            </p>
            <Link to="/products">
              <motion.button
                className="px-10 py-4 bg-white text-black font-medium tracking-wide hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Shop Sale
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-80"
          >
            <div className="absolute inset-0 bg-white/10 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1530268729831-4be0ea6ec218?w=600&h=400&fit=crop"
                alt="Sale"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute top-8 right-8 text-center">
              <div className="text-6xl font-light text-white mb-2">20%</div>
              <div className="text-silver text-sm tracking-widest">OFF</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-gray-400 text-sm tracking-widest">/</div>
              <div className="text-gray-400 text-sm tracking-widest">
                WHY US
              </div>
              <div className="text-gray-400 text-sm tracking-widest">(04)</div>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Why Choose <span className="text-black">Osvara</span>
            </h2>

            <p className="text-lg text-gray-500">
              We believe in quality, purpose, and elegance in every piece we
              create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Premium Quality",
                desc: "We use only the finest fabrics and craftsmanship, ensuring every piece meets our high standards for elegance and durability.",
              },
              {
                title: "Thoughtful Design",
                desc: "Every detail is considered. From fabric selection to final stitch, we design with intention and care.",
              },
              {
                title: "Timeless Style",
                desc: "Our pieces transcend trends, offering classic elegance that remains beautiful season after season.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-black"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <div className="text-5xl font-light text-silver mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Lifestyle strip */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4">
          {["Office Ready", "Weekend Casual", "Evening Event"].map(
            (tag, idx) => (
              <div
                key={tag}
                className="relative overflow-hidden rounded-2xl border border-gray-300 bg-gradient-to-b from-white to-gray-100"
                style={{
                  boxShadow:
                    "0 12px 40px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.12)",
                }}
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80&sat=${
                      -20 * idx
                    }')`,
                  }}
                />
                <div className="p-4 flex items-center justify-between text-gray-900">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                      Style guide
                    </p>
                    <p className="text-lg font-semibold text-gray-900">{tag}</p>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    Lihat ↗
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Reviews */}
      <section className="px-4">
        <div
          className="max-w-7xl mx-auto rounded-3xl border border-gray-300 bg-gradient-to-b from-white to-gray-50 p-6"
          style={{
            boxShadow:
              "0 15px 50px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.12)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Apa kata pelanggan
              </h3>
              <p className="text-sm text-gray-600">
                Ulasan asli dari pembeli Osvara
              </p>
            </div>
            <span className="text-sm font-semibold text-black">4.9/5 ★</span>
          </div>
          <GoogleReviews />
=======
      {/* Testimonials */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-gray-400 text-sm tracking-widest">/</div>
              <div className="text-gray-400 text-sm tracking-widest">
                TESTIMONIALS
              </div>
              <div className="text-gray-400 text-sm tracking-widest">(05)</div>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              What Our Customers Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {[
              {
                text: "Osvara's attention to detail and quality is unmatched. Every piece I own feels special and lasts beautifully.",
                author: "Aisha Rahman",
                role: "Customer",
                rating: "5/5",
              },
              {
                text: "The designs are timeless and elegant. I appreciate how they honor tradition while feeling modern.",
                author: "Fatima Ahmed",
                role: "Customer",
                rating: "4.9/5",
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-gray-200 p-10 shadow-md hover:shadow-lg hover:border-black transition-all rounded-lg"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-black text-sm font-medium mb-4">
                  ★★★★★ {testimonial.rating}
                </div>
                <p className="text-gray-500 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-gray-900 font-light">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <GoogleReviews />
          </motion.div>
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
        </div>
      </section>

      {/* Newsletter */}
<<<<<<< HEAD
      <section className="px-4 pb-16">
        <div
          className="max-w-5xl mx-auto rounded-3xl border border-gray-700 bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 text-center"
          style={{
            boxShadow:
              "0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          <h3 className="text-2xl font-semibold text-white mb-2">
            Dapatkan info rilis terbaru
          </h3>
          <p className="text-sm text-gray-300 mb-6">
            Koleksi mingguan, penawaran eksklusif, dan tips styling langsung ke
            inbox kamu.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Email kamu"
              className="flex-1 rounded-full border border-gray-600 bg-gray-800 px-4 py-3 text-sm text-white focus:border-white focus:ring-0"
            />
            <button
              className="px-6 py-3 rounded-full bg-white text-black text-sm font-semibold"
              style={{
                boxShadow:
                  "0 8px 25px rgba(255, 255, 255, 0.3), 0 2px 8px rgba(255, 255, 255, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(255, 255, 255, 0.4), 0 4px 12px rgba(255, 255, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(255, 255, 255, 0.3), 0 2px 8px rgba(255, 255, 255, 0.2)";
              }}
            >
              Daftar sekarang
=======
      <section className="py-24 px-6 bg-gradient-to-r from-gray-100 via-white to-gray-100 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-light text-gray-900 mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Subscribe Now
          </motion.h2>

          <motion.p
            className="text-gray-500 text-lg mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get the latest news, updates and exclusive offers directly to your
            inbox. Be the first to know about our new collections and special
            promotions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black transition-colors shadow-sm focus:shadow-md rounded"
            />
            <button className="px-10 py-4 bg-black text-white font-medium tracking-wide hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg rounded">
              Subscribe
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
