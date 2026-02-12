import React from "react";
<<<<<<< HEAD
=======
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { getItemCount } = useCart();

  const primaryLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

<<<<<<< HEAD
  const categories = [
    "Wanita",
    "Pria",
    "Anak",
    "Sport",
    "Modest",
    "Aksesoris",
    "Sale",
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200 text-gray-900 shadow-lg">
      <style>{`
        nav {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
        }
      `}</style>
      {/* Top info bar */}
      <div className="hidden md:flex h-10 items-center justify-center text-xs tracking-[0.08em] uppercase text-gray-600 border-b border-gray-200">
        Gratis ongkir Jabodetabek • Pengembalian mudah 30 hari • Belanja aman
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 py-4">
          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-black text-2xl"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
=======
  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <motion.nav
      className="fixed top-0 w-full bg-white border-b border-gray-300/20 z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="text-lg font-light tracking-widest text-black"
              whileHover={{ scale: 1.02 }}
            >
              OSVARA®
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link key={item.name} to={item.href}>
                <motion.span
                  className={`text-sm transition-colors tracking-wide ${
                    isActive(item.href)
                      ? "text-black font-medium"
                      : "text-gray-500 hover:text-black"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Cart Icon */}
          <Link to="/cart">
            <motion.div
              className="relative text-black cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {getItemCount()}
                </span>
              )}
            </motion.div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo */}
          <a
            className="text-2xl font-semibold tracking-tight text-black"
            href="/"
          >
            OSVARA
          </a>

          {/* Search bar */}
          <div className="flex-1 hidden md:flex">
            <input
              type="search"
              placeholder="Cari gamis, khimar, abaya, aksesoris..."
              className="w-full rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-900 focus:border-black focus:ring-0"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 text-gray-900">
            <a
              href="/account"
              className="hidden sm:inline text-sm hover:text-gray-600"
            >
              Akun
            </a>
            <a
              href="/wishlist"
              className="hidden sm:inline text-sm hover:text-gray-600"
            >
              Favorit
            </a>
            <a
              href="/cart"
              className="relative text-sm font-semibold text-black"
            >
              🛒
              <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 text-[11px] flex items-center justify-center">
                0
              </span>
            </a>
          </div>
        </div>

        {/* Category rail */}
        <div className="flex items-center gap-3 overflow-x-auto pb-3 text-sm font-medium text-gray-900">
          {categories.map((cat) => (
            <a
              key={cat}
              href="#"
              className="whitespace-nowrap px-3 py-2 rounded-full bg-gray-100 border border-gray-300 hover:border-black shadow-sm"
            >
              {cat}
            </a>
          ))}
        </div>

        {/* Mobile search & links */}
        {isOpen && (
<<<<<<< HEAD
          <div className="md:hidden pb-4 space-y-3">
            <input
              type="search"
              placeholder="Cari produk..."
              className="w-full rounded-full border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-black focus:ring-0"
            />

            <div className="grid grid-cols-2 gap-2 text-sm">
              {primaryLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-lg border border-gray-300 px-3 py-2 text-gray-900 hover:border-black"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
=======
          <motion.div
            className="md:hidden pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 transition-colors ${
                  isActive(item.href)
                    ? "text-black font-medium"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-gray-500 hover:text-black"
            >
              Cart ({getItemCount()})
            </Link>
          </motion.div>
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
        )}
      </div>
    </nav>
  );
};
