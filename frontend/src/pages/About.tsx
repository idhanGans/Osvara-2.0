import React from "react";
import { motion } from "framer-motion";
import { GoogleMaps } from "../components/GoogleMaps";

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 pb-20">
      <motion.div
        className="bg-gray-100 py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-5xl font-bold text-black text-center">
          About Osvara
        </h1>
        <p className="text-gray-600 text-center mt-4">Our story and mission</p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Our Story */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-4xl font-bold text-black mb-8">Our Story</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Osvara was founded in 2020 with a simple mission: to make
                elegant, high-quality Islamic fashion accessible to every
                muslimah woman. We believe that fashion and modesty are not
                mutually exclusive – they can beautifully complement each other.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Our founder, passionate about traditional Islamic clothing and
                modern design, started creating pieces that blend timeless
                elegance with contemporary style. Today, Osvara has grown into a
                trusted brand serving thousands of satisfied customers across
                the region.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We source the finest fabrics from around the world and work with
                skilled craftspeople to create each piece with care and
                attention to detail.
              </p>
            </motion.div>

            <motion.div
              className="bg-white border border-gray-300 rounded-lg p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <img
                src="https://via.placeholder.com/400x400?text=About+Us"
                alt="About Osvara"
                className="w-full rounded-lg"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Our Values */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                desc: "We use premium materials and expert craftsmanship in every piece",
                icon: "✨",
              },
              {
                title: "Integrity",
                desc: "Honest pricing, authentic products, and transparent business practices",
                icon: "💎",
              },
              {
                title: "Inclusivity",
                desc: "Fashion for every woman, every size, every style preference",
                icon: "🤝",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-gray-300 rounded-lg p-8 text-center"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <span className="text-5xl block mb-4">{value.icon}</span>
                <h3 className="text-black font-bold text-2xl mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Customers Choose Us */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Why Choose Osvara?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Premium Quality Fabrics",
                desc: "Imported from trusted suppliers worldwide",
              },
              {
                title: "Expert Craftsmanship",
                desc: "Each piece handcrafted by skilled artisans",
              },
              {
                title: "Virtual Mockup",
                desc: "Try before you buy with our interactive tool",
              },
              {
                title: "Fast Shipping",
                desc: "Delivered to your doorstep within 2-3 days",
              },
              {
                title: "100% Authentic",
                desc: "No counterfeit products, guaranteed",
              },
              {
                title: "Easy Returns",
                desc: "Hassle-free 30-day return policy",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <span className="text-black text-2xl">✓</span>
                <div>
                  <h3 className="text-black font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Store Location */}
        <motion.section
          className="bg-white border border-gray-300 rounded-lg p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-3xl font-bold text-black mb-8">Visit Our Store</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-black font-bold text-xl mb-4">
                Osvara Boutique
              </h3>
              <p className="text-gray-700 mb-6">
                Jl. Kemang Raya No. 123
                <br />
                Jakarta Selatan, 12560
                <br />
                Indonesia
              </p>
              <p className="text-gray-700 mb-4">
                <strong className="text-black">Phone:</strong> +62 812-3456-7890
                <br />
                <strong className="text-black">WhatsApp:</strong> +62
                812-3456-7890
                <br />
                <strong className="text-black">Email:</strong> hello@osvara.com
              </p>
              <p className="text-gray-700 mb-6">
                <strong className="text-black">Hours:</strong>
                <br />
                Monday - Friday: 10:00 - 19:00
                <br />
                Saturday: 10:00 - 20:00
                <br />
                Sunday: 12:00 - 18:00
              </p>
            </div>

            <GoogleMaps />
          </div>
        </motion.section>
      </div>
    </div>
  );
};
