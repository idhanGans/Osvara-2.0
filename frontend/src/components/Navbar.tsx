import React from "react";
import { motion } from "framer-motion";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 w-full bg-dark/95 backdrop-blur-md border-b border-gold/20 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="text-3xl font-bold text-gold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            OSVARA
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-silver hover:text-gold transition-colors relative group"
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gold"
                  scaleX={0}
                  groupHover={{ scaleX: 1 }}
                  style={{ originX: 0 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Cart Icon */}
          <motion.button
            className="relative text-gold"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            🛒
            <span className="absolute -top-2 -right-2 bg-gold text-dark rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              0
            </span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-silver hover:text-gold"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
