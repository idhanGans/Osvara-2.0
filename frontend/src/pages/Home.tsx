import React from "react";
import { ProductCard } from "../components/ProductCard";
import { GoogleReviews } from "../components/GoogleReviews";

export const HomePage: React.FC = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Premium Silk Gamis",
      price: 450000,
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      category: "Gamis",
      rating: 4.8,
    },
    {
      id: "2",
      name: "Elegant Khimar Set",
      price: 350000,
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      category: "Khimar",
      rating: 4.9,
    },
    {
      id: "3",
      name: "Luxury Black Abaya",
      price: 550000,
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80&sat=-30",
      category: "Abaya",
      rating: 5,
    },
    {
      id: "4",
      name: "Embroidered Gamis",
      price: 520000,
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      category: "Gamis",
      rating: 4.7,
    },
  ];

  const quickFilters = [
    "New In",
    "Best Seller",
    "Sporty Modest",
    "Office Ready",
    "Accessories",
    "Sale",
  ];

  const promoTiles = [
    {
      title: "Flash Sale",
      subtitle: "Diskon s.d. 50%",
      cta: "Belanja sekarang",
      image:
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Modest Essentials",
      subtitle: "Pilihan harian premium",
      cta: "Lihat koleksi",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "New Arrivals",
      subtitle: "Rilis mingguan terbaru",
      cta: "Jelajahi",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80&sat=-20",
    },
  ];

  return (
    <div className="pt-24 space-y-20">
      {/* Hero */}
      <section className="relative px-4">
        <div
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-300 rounded-3xl p-8 lg:p-12"
          style={{
            boxShadow:
              "0 20px 60px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
          }}
        >
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Osvara Collection • New Season
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
              Modestwear modern dengan desain minimalis dan elegan
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Siluet rapi, bahan adem, dan spektrum warna hitam, abu-abu, serta
              silver yang elegan untuk kerja, kasual, hingga acara spesial.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                className="px-6 py-3 rounded-full bg-gradient-to-r from-black to-gray-800 text-white text-sm font-semibold"
                style={{
                  boxShadow:
                    "0 8px 25px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                Belanja sekarang
              </button>
              <button
                className="px-6 py-3 rounded-full border-2 border-gray-400 text-sm font-semibold text-gray-900 hover:border-black bg-gradient-to-b from-white to-gray-50"
                style={{
                  boxShadow:
                    "0 4px 15px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.08)",
                }}
              >
                Lihat lookbook
              </button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-700">
              <span className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 border border-gray-300">
                ✔︎ Bahan adem & ringan
              </span>
              <span className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 border border-gray-300">
                ✔︎ Potongan modest
              </span>
              <span className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 border border-gray-300">
                ✔︎ Ukuran lengkap
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/5] rounded-3xl overflow-hidden border border-gray-300 bg-cover bg-center"
              style={{
                boxShadow:
                  "0 15px 50px rgba(0, 0, 0, 0.25), 0 5px 15px rgba(0, 0, 0, 0.15)",
              }}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80&sat=-20')",
              }}
            />
            <div
              className="absolute -bottom-4 -left-4 bg-gradient-to-br from-white to-gray-100 border border-gray-300 rounded-2xl p-4 w-48"
              style={{
                boxShadow:
                  "0 12px 40px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-1">
                Highlight
              </p>
              <p className="text-sm font-semibold text-gray-900">
                Monochrome Abaya Set
              </p>
              <p className="text-xs text-gray-600">Mulai Rp 499.000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick filters */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {quickFilters.map((item) => (
              <button
                key={item}
                className="px-4 py-2 rounded-full border border-gray-300 bg-gradient-to-b from-white to-gray-50 text-sm font-medium text-gray-900 hover:border-black transition-all"
                style={{
                  boxShadow:
                    "0 4px 15px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.08)";
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Promo tiles */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promoTiles.map((tile, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-gray-300 bg-cover bg-center min-h-[220px] flex items-end"
              style={{
                boxShadow:
                  "0 15px 50px rgba(0, 0, 0, 0.25), 0 5px 15px rgba(0, 0, 0, 0.15)",
              }}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.7) 100%), url(${tile.image})`,
              }}
            >
              <div className="p-6 text-white">
                <p className="text-sm uppercase tracking-[0.18em] text-white/80">
                  {tile.subtitle}
                </p>
                <h3 className="text-2xl font-semibold">{tile.title}</h3>
                <button
                  className="mt-3 inline-flex items-center text-sm font-semibold bg-gradient-to-r from-white to-gray-100 text-black px-4 py-2 rounded-full"
                  style={{
                    boxShadow:
                      "0 6px 20px rgba(255, 255, 255, 0.5), 0 2px 8px rgba(255, 255, 255, 0.3)",
                  }}
                >
                  {tile.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                New Arrivals
              </h2>
              <p className="text-sm text-gray-600">Drop terbaru minggu ini</p>
            </div>
            <a
              href="/products"
              className="text-sm font-semibold text-black hover:underline"
            >
              Lihat semua
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle strip */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4">
          {["Office Ready", "Weekend Casual", "Evening Event"].map(
            (tag, idx) => (
              <div
                key={tag}
                className="relative overflow-hidden rounded-2xl border border-gray-300 bg-gradient-to-b from-white to-gray-100"
                style={{
                  boxShadow:
                    "0 12px 40px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.12)",
                }}
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80&sat=${
                      -20 * idx
                    }')`,
                  }}
                />
                <div className="p-4 flex items-center justify-between text-gray-900">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                      Style guide
                    </p>
                    <p className="text-lg font-semibold text-gray-900">{tag}</p>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    Lihat ↗
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Reviews */}
      <section className="px-4">
        <div
          className="max-w-7xl mx-auto rounded-3xl border border-gray-300 bg-gradient-to-b from-white to-gray-50 p-6"
          style={{
            boxShadow:
              "0 15px 50px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.12)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Apa kata pelanggan
              </h3>
              <p className="text-sm text-gray-600">
                Ulasan asli dari pembeli Osvara
              </p>
            </div>
            <span className="text-sm font-semibold text-black">4.9/5 ★</span>
          </div>
          <GoogleReviews />
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-4 pb-16">
        <div
          className="max-w-5xl mx-auto rounded-3xl border border-gray-700 bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 text-center"
          style={{
            boxShadow:
              "0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          <h3 className="text-2xl font-semibold text-white mb-2">
            Dapatkan info rilis terbaru
          </h3>
          <p className="text-sm text-gray-300 mb-6">
            Koleksi mingguan, penawaran eksklusif, dan tips styling langsung ke
            inbox kamu.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Email kamu"
              className="flex-1 rounded-full border border-gray-600 bg-gray-800 px-4 py-3 text-sm text-white focus:border-white focus:ring-0"
            />
            <button
              className="px-6 py-3 rounded-full bg-white text-black text-sm font-semibold"
              style={{
                boxShadow:
                  "0 8px 25px rgba(255, 255, 255, 0.3), 0 2px 8px rgba(255, 255, 255, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(255, 255, 255, 0.4), 0 4px 12px rgba(255, 255, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(255, 255, 255, 0.3), 0 2px 8px rgba(255, 255, 255, 0.2)";
              }}
            >
              Daftar sekarang
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
