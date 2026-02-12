import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.footer
<<<<<<< HEAD
      className="relative z-10 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 border-t border-gray-300 py-12"
      style={{
        boxShadow:
          "0 -10px 40px rgba(0, 0, 0, 0.1), 0 -2px 10px rgba(0, 0, 0, 0.05)",
      }}
=======
      className="bg-white border-t border-gray-200 py-12 shadow-sm"
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Brand */}
<<<<<<< HEAD
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">OSVARA</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Elegant muslimah clothing with premium quality and stunning
              designs
=======
          <div className="md:col-span-4">
            <Link to="/">
              <h3 className="text-xl font-light tracking-widest text-black mb-3">
                OSVARA®
              </h3>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-4">
              Crafting elegant muslimah fashion with simplicity and purpose.
              Every piece designed with intention.
            </p>
            <p className="text-gray-500 text-sm">
              <strong className="text-gray-900">Address:</strong>
              <br />
              Jl. Kemang Raya No. 123
              <br />
              Jakarta Selatan, 12560
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
            </p>
          </div>

          {/* Quick Links */}
<<<<<<< HEAD
          <div>
            <h4 className="text-black font-bold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Products", "Gallery", "About Us", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`/${link.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-600 hover:text-black text-sm transition-colors inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link}
                      </span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-black font-bold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-gray-600 flex items-center gap-2 hover:text-black transition-colors">
                <FaPhone className="text-black" /> +62 812-3456-7890
              </p>
              <p className="text-gray-600 flex items-center gap-2 hover:text-black transition-colors">
                <FaMapMarkerAlt className="text-black" /> Jakarta, Indonesia
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-black font-bold mb-4 text-sm uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[
                { icon: FaInstagram, href: "#", label: "Instagram" },
                { icon: FaFacebook, href: "#", label: "Facebook" },
                { icon: FaWhatsapp, href: "#", label: "WhatsApp" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all shadow-sm"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
=======
          <div className="md:col-span-2">
            <h4 className="text-gray-900 font-light mb-4 tracking-wide">
              Navigate
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-500 hover:text-black text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-2">
            <h4 className="text-gray-900 font-light mb-4 tracking-wide">
              Categories
            </h4>
            <ul className="space-y-2">
              {["Gamis", "Khimar", "Abaya", "Accessories"].map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/products?category=${cat}`}
                    className="text-gray-500 hover:text-black text-sm transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="md:col-span-2">
            <h4 className="text-gray-900 font-light mb-4 tracking-wide">
              Information
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-500 hover:text-black text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-500 hover:text-black text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <span className="text-gray-500 text-sm">
                  Shipping & Returns
                </span>
              </li>
              <li>
                <span className="text-gray-500 text-sm">Privacy Policy</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2">
            <h4 className="text-gray-900 font-light mb-4 tracking-wide">
              Connect With Us
            </h4>
            <div className="flex gap-3 mb-4">
              <motion.a
                href="https://instagram.com/osvara"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-600 hover:text-black transition-colors border border-gray-200 p-3 hover:border-black rounded"
                whileHover={{ y: -3 }}
              >
                <FaInstagram size={18} />
              </motion.a>
              <motion.a
                href="https://facebook.com/osvara"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-600 hover:text-black transition-colors border border-gray-200 p-3 hover:border-black rounded"
                whileHover={{ y: -3 }}
              >
                <FaFacebook size={18} />
              </motion.a>
              <motion.a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-gray-600 hover:text-black transition-colors border border-gray-200 p-3 hover:border-black rounded"
                whileHover={{ y: -3 }}
              >
                <FaWhatsapp size={18} />
              </motion.a>
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
            </div>
            <p className="text-gray-500 text-sm">hello@osvara.com</p>
            <p className="text-gray-500 text-sm">+62 812-3456-7890</p>
          </div>
        </div>

        {/* Bottom */}
<<<<<<< HEAD
        <div className="border-t border-gray-300 pt-6 mt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Osvara. All rights reserved. |{" "}
            <a href="#" className="hover:text-black transition-colors">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="hover:text-black transition-colors">
              {" "}
              Terms of Service
            </a>
          </p>
=======
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs tracking-wide">
              © {currentYear} Osvara. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs tracking-wide">
              Crafted with <span className="text-black">♥</span> in Jakarta,
              Indonesia
            </p>
          </div>
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
        </div>
      </div>
    </motion.footer>
  );
};
