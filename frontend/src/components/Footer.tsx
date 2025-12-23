import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="relative z-10 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 border-t border-gray-300 py-12"
      style={{
        boxShadow:
          "0 -10px 40px rgba(0, 0, 0, 0.1), 0 -2px 10px rgba(0, 0, 0, 0.05)",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">OSVARA</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Elegant muslimah clothing with premium quality and stunning
              designs
            </p>
          </div>

          {/* Quick Links */}
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
            </div>
          </div>
        </div>

        {/* Bottom */}
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
        </div>
      </div>
    </motion.footer>
  );
};
