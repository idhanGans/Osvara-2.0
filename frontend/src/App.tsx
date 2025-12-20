import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/Home";
import { ProductsPage } from "./pages/Products";
import { GalleryPage } from "./pages/Gallery";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";
import "./index.css";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col text-gray-900">
        <AnimatedBackground />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
