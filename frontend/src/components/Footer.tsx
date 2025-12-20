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
      className="bg-dark border-t border-gold/20 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">OSVARA</h3>
            <p className="text-silver/70 text-sm">
              Elegant muslimah clothing with premium quality and stunning
              designs
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Products", "Gallery", "About Us", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`/${link.toLowerCase().replace(" ", "-")}`}
                      className="text-silver/70 hover:text-gold text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-bold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <p className="text-silver/70 flex items-center gap-2">
                <FaPhone className="text-gold" /> +62 812-3456-7890
              </p>
              <p className="text-silver/70 flex items-center gap-2">
                <FaMapMarkerAlt className="text-gold" /> Jakarta, Indonesia
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-gold font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: FaInstagram, href: "#" },
                { icon: FaFacebook, href: "#" },
                { icon: FaWhatsapp, href: "#" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  className="text-gold hover:text-silver transition-colors"
                  whileHover={{ scale: 1.3, rotate: 10 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/20 pt-8">
          <p className="text-center text-silver/50 text-sm">
            © {currentYear} Osvara. All rights reserved. | Privacy Policy |
            Terms of Service
          </p>
        </div>
      </div>
    </motion.footer>
  );
};
