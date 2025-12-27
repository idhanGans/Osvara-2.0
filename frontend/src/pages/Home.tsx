import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCard } from "../components/ProductCard";
import { GoogleReviews } from "../components/GoogleReviews";
import {
  getFeaturedProducts,
  categories as productCategories,
} from "../data/products";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
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

  const featuredProducts = getFeaturedProducts();

  const stats = [
    { number: "5+", label: "Years of Experience" },
    { number: "500+", label: "Products Sold" },
    { number: "1000+", label: "Happy Customers" },
    { number: "4.9", label: "Customer Rating" },
  ];

  const categories = productCategories;

  return (
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
                className="text-sm tracking-widest text-grey mb-6 uppercase"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Osvara Fashion
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-light text-black mb-8 leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {heroSlides[currentHeroSlide].title}{" "}
                <span className="italic font-serif">
                  {heroSlides[currentHeroSlide].titleHighlight}
                </span>
              </motion.h1>

              <motion.p
                className="text-lg text-grey mb-10 max-w-xl leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {heroSlides[currentHeroSlide].description}
              </motion.p>

              <motion.button
                onClick={() => navigate(heroSlides[currentHeroSlide].link)}
                className="px-12 py-4 bg-black text-white font-medium tracking-wide hover:bg-grey transition-colors shadow-sm hover:shadow-md"
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
              <div className="absolute inset-0 bg-grey/10 rounded-lg overflow-hidden shadow-md">
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
                  : "bg-grey/40 w-1.5 hover:bg-grey/60"
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
                <h3 className="text-lg font-light text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-grey">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative h-96"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-grey/10 rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=600&fit=crop"
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-grey text-sm tracking-widest">/</div>
                <div className="text-grey text-sm tracking-widest">ABOUT</div>
                <div className="text-grey text-sm tracking-widest">(01)</div>
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight">
                About <span className="italic font-serif">Osvara</span>
              </h2>

              <p className="text-grey text-lg leading-relaxed mb-6">
                Our studio is dedicated to crafting clean, purposeful fashion
                that honors tradition while embracing modern elegance.
              </p>

              <p className="text-grey text-lg leading-relaxed mb-8">
                Every piece is designed with intention, using premium fabrics
                and thoughtful details that elevate your everyday wear.
              </p>

              <Link to="/about">
                <motion.button
                  className="px-8 py-3 border border-black text-black font-medium tracking-wide hover:bg-black hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Learn More
                </motion.button>
              </Link>
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
                <div className="text-grey text-sm tracking-widest">/</div>
                <div className="text-grey text-sm tracking-widest">
                  COLLECTIONS
                </div>
                <div className="text-grey text-sm tracking-widest">(02)</div>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-light text-black"
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
                      <span className="w-max px-6 py-2 bg-white text-black font-medium text-sm tracking-wide group-hover:bg-grey group-hover:text-white transition-colors">
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
                <div className="text-grey text-sm tracking-widest">/</div>
                <div className="text-grey text-sm tracking-widest">
                  FEATURED
                </div>
                <div className="text-grey text-sm tracking-widest">(03)</div>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-light text-black"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="py-24 px-6 bg-gradient-to-r from-black via-gray-800 to-black">
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
              Exclusive <span className="italic font-serif">New Year</span> Sale
            </h2>
            <p className="text-lg text-silver mb-8">
              Discover our latest collection with special discounts on selected
              items.
            </p>
            <Link to="/products">
              <motion.button
                className="px-10 py-4 bg-white text-black font-medium tracking-wide hover:bg-silver transition-colors shadow-lg hover:shadow-xl"
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
              <div className="text-grey text-sm tracking-widest">/</div>
              <div className="text-grey text-sm tracking-widest">WHY US</div>
              <div className="text-grey text-sm tracking-widest">(04)</div>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
              Why Choose Osvara
            </h2>

            <p className="text-lg text-grey">
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
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all border border-silver/20"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <div className="text-5xl font-light text-silver mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-light text-black mb-4 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-grey text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              <div className="text-grey text-sm tracking-widest">/</div>
              <div className="text-grey text-sm tracking-widest">
                TESTIMONIALS
              </div>
              <div className="text-grey text-sm tracking-widest">(05)</div>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-black">
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
                className="bg-white border border-silver/20 p-10 shadow-md hover:shadow-lg transition-shadow rounded-lg"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-black text-sm font-medium mb-4">
                  ★★★★★ {testimonial.rating}
                </div>
                <p className="text-grey text-lg leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-silver/20 pt-6">
                  <div className="text-black font-light">
                    {testimonial.author}
                  </div>
                  <div className="text-grey text-sm mt-1">
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
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 bg-gradient-to-r from-gray-100 via-white to-gray-100 border-t border-silver/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-light text-black mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Subscribe Now
          </motion.h2>

          <motion.p
            className="text-grey text-lg mb-12 leading-relaxed"
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
              className="flex-1 px-6 py-4 bg-white border border-silver/50 text-black placeholder-grey focus:outline-none focus:border-black transition-colors shadow-sm focus:shadow-md rounded"
            />
            <button className="px-10 py-4 bg-black text-white font-medium tracking-wide hover:bg-grey transition-colors shadow-md hover:shadow-lg rounded">
              Subscribe
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
