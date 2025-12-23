import React from "react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const primaryLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

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
          >
            ☰
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
        )}
      </div>
    </nav>
  );
};
