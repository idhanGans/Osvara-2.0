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
    <nav className="sticky top-0 z-40 bg-[#0b0b0f]/90 backdrop-blur border-b border-gold/15 text-silver">
      {/* Top info bar */}
      <div className="hidden md:flex h-10 items-center justify-center text-xs tracking-[0.08em] uppercase text-silver/70 border-b border-gold/10">
        Gratis ongkir Jabodetabek • Pengembalian mudah 30 hari • Belanja aman
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 py-4">
          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-gold text-2xl"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            ☰
          </button>

          {/* Logo */}
          <a
            className="text-2xl font-semibold tracking-tight text-gold"
            href="/"
          >
            OSVARA
          </a>

          {/* Search bar */}
          <div className="flex-1 hidden md:flex">
            <input
              type="search"
              placeholder="Cari gamis, khimar, abaya, aksesoris..."
              className="w-full rounded-full border border-gold/20 bg-[#0f0f12] px-4 py-2 text-sm text-silver focus:border-gold/50 focus:ring-0"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 text-silver">
            <a
              href="/account"
              className="hidden sm:inline text-sm hover:text-gold"
            >
              Akun
            </a>
            <a
              href="/wishlist"
              className="hidden sm:inline text-sm hover:text-gold"
            >
              Favorit
            </a>
            <a
              href="/cart"
              className="relative text-sm font-semibold text-gold"
            >
              🛒
              <span className="absolute -top-2 -right-2 bg-gold text-dark rounded-full w-5 h-5 text-[11px] flex items-center justify-center">
                0
              </span>
            </a>
          </div>
        </div>

        {/* Category rail */}
        <div className="flex items-center gap-3 overflow-x-auto pb-3 text-sm font-medium text-silver">
          {categories.map((cat) => (
            <a
              key={cat}
              href="#"
              className="whitespace-nowrap px-3 py-2 rounded-full bg-[#0f0f12] border border-gold/15 hover:border-gold/40 shadow-sm"
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
              className="w-full rounded-full border border-gold/20 bg-[#0f0f12] px-4 py-3 text-sm text-silver focus:border-gold/50 focus:ring-0"
            />

            <div className="grid grid-cols-2 gap-2 text-sm">
              {primaryLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-lg border border-gold/15 px-3 py-2 text-silver hover:border-gold/40"
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
