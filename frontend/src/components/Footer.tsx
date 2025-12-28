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
      className="bg-white border-t border-gray-200 py-12 shadow-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Brand */}
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
            </p>
          </div>

          {/* Quick Links */}
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
            </div>
            <p className="text-gray-500 text-sm">hello@osvara.com</p>
            <p className="text-gray-500 text-sm">+62 812-3456-7890</p>
          </div>
        </div>

        {/* Bottom */}
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
        </div>
      </div>
    </motion.footer>
  );
};
