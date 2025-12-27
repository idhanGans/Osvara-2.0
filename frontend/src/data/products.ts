export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  rating: number;
  reviewCount?: number;
  description?: string;
  sizes?: string[];
  colors?: string[];
  inStock?: boolean;
  isNew?: boolean;
  isSale?: boolean;
}

export const products: Product[] = [
  // Gamis Collection
  {
    id: "1",
    name: "Premium Silk Gamis Emerald",
    price: 450000,
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&h=1000&fit=crop",
    ],
    category: "Gamis",
    rating: 4.8,
    reviewCount: 124,
    description:
      "Elegant silk gamis in beautiful emerald green. Perfect for special occasions and daily wear. Made from premium quality silk with intricate embroidery details.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Emerald", "Navy", "Black", "Maroon"],
    inStock: true,
    isNew: true,
  },
  {
    id: "2",
    name: "Embroidered Royal Gamis",
    price: 520000,
    originalPrice: 650000,
    image:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=500&fit=crop",
    category: "Gamis",
    rating: 4.7,
    reviewCount: 89,
    description:
      "Luxurious gamis with intricate gold embroidery. Features a flattering A-line silhouette and comfortable breathable fabric.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Dusty Pink", "Sage Green", "Cream"],
    inStock: true,
    isSale: true,
  },
  {
    id: "3",
    name: "Modern Minimalist Gamis",
    price: 380000,
    image:
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&h=500&fit=crop",
    category: "Gamis",
    rating: 4.9,
    reviewCount: 156,
    description:
      "Clean and modern gamis design perfect for everyday wear. Soft cotton blend fabric for maximum comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Grey", "Black", "Navy"],
    inStock: true,
  },
  {
    id: "4",
    name: "Floral Print Gamis Collection",
    price: 420000,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
    category: "Gamis",
    rating: 4.6,
    reviewCount: 78,
    description:
      "Beautiful floral print gamis featuring delicate patterns. Lightweight and perfect for spring and summer.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Floral Blue", "Floral Pink", "Floral Green"],
    inStock: true,
    isNew: true,
  },

  // Khimar Collection
  {
    id: "5",
    name: "Elegant Silk Khimar",
    price: 350000,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
    category: "Khimar",
    rating: 4.9,
    reviewCount: 203,
    description:
      "Premium silk khimar with beautiful draping. Easy to style and comfortable for all-day wear.",
    sizes: ["Standard", "Large"],
    colors: ["Black", "Navy", "Brown", "Cream", "Dusty Pink"],
    inStock: true,
  },
  {
    id: "6",
    name: "Instant Khimar Premium",
    price: 280000,
    image:
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=400&h=500&fit=crop",
    category: "Khimar",
    rating: 4.8,
    reviewCount: 167,
    description:
      "Easy-to-wear instant khimar. No pins required, perfect for busy women on the go.",
    sizes: ["Standard"],
    colors: ["Black", "Grey", "Navy", "Maroon", "Forest Green"],
    inStock: true,
  },
  {
    id: "7",
    name: "Chiffon Layer Khimar",
    price: 320000,
    originalPrice: 400000,
    image:
      "https://images.unsplash.com/photo-1583391733981-8b530c8a9585?w=400&h=500&fit=crop",
    category: "Khimar",
    rating: 4.7,
    reviewCount: 92,
    description:
      "Elegant layered chiffon khimar with beautiful flowing design. Perfect for formal occasions.",
    sizes: ["Standard", "Large"],
    colors: ["Champagne", "Blush", "Sage", "Lilac"],
    inStock: true,
    isSale: true,
  },
  {
    id: "8",
    name: "Jersey Comfort Khimar",
    price: 250000,
    image:
      "https://images.unsplash.com/photo-1631233859262-0c61b2bb8c97?w=400&h=500&fit=crop",
    category: "Khimar",
    rating: 4.6,
    reviewCount: 134,
    description:
      "Super comfortable jersey khimar ideal for daily activities. Stretchy and easy to maintain.",
    sizes: ["Standard"],
    colors: ["Black", "Charcoal", "Navy", "Olive"],
    inStock: true,
  },

  // Abaya Collection
  {
    id: "9",
    name: "Luxury Black Abaya",
    price: 550000,
    image:
      "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?w=400&h=500&fit=crop",
    category: "Abaya",
    rating: 5.0,
    reviewCount: 287,
    description:
      "Timeless black abaya with subtle details. Premium nidha fabric with beautiful finishing.",
    sizes: ["52", "54", "56", "58", "60"],
    colors: ["Black"],
    inStock: true,
  },
  {
    id: "10",
    name: "Designer Embroidered Abaya",
    price: 680000,
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=500&fit=crop",
    category: "Abaya",
    rating: 4.9,
    reviewCount: 156,
    description:
      "Stunning designer abaya with intricate handmade embroidery. A statement piece for special occasions.",
    sizes: ["52", "54", "56", "58"],
    colors: ["Black with Gold", "Navy with Silver", "Maroon with Gold"],
    inStock: true,
    isNew: true,
  },
  {
    id: "11",
    name: "Open Front Kimono Abaya",
    price: 480000,
    image:
      "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=400&h=500&fit=crop",
    category: "Abaya",
    rating: 4.7,
    reviewCount: 98,
    description:
      "Modern open-front kimono style abaya. Versatile design that can be styled multiple ways.",
    sizes: ["S/M", "L/XL"],
    colors: ["Black", "Olive", "Burgundy", "Navy"],
    inStock: true,
  },
  {
    id: "12",
    name: "Butterfly Sleeve Abaya",
    price: 520000,
    originalPrice: 620000,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop",
    category: "Abaya",
    rating: 4.8,
    reviewCount: 112,
    description:
      "Elegant butterfly sleeve abaya with flowing silhouette. Perfect for both casual and formal wear.",
    sizes: ["52", "54", "56", "58", "60"],
    colors: ["Black", "Charcoal", "Deep Purple"],
    inStock: true,
    isSale: true,
  },

  // Accessories Collection
  {
    id: "13",
    name: "Pearl Hijab Pin Set",
    price: 85000,
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=500&fit=crop",
    category: "Accessories",
    rating: 4.8,
    reviewCount: 345,
    description:
      "Elegant pearl hijab pin set. Includes 6 pieces in different sizes. Safe and secure hold.",
    colors: ["Gold", "Silver", "Rose Gold"],
    inStock: true,
  },
  {
    id: "14",
    name: "Magnetic Hijab Pin Premium",
    price: 120000,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop",
    category: "Accessories",
    rating: 4.9,
    reviewCount: 278,
    description:
      "Premium magnetic hijab pins. No holes in your fabric! Strong magnet with beautiful design.",
    colors: ["Gold Floral", "Silver Crystal", "Rose Gold Pearl"],
    inStock: true,
    isNew: true,
  },
  {
    id: "15",
    name: "Silk Hijab Underscarves",
    price: 95000,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=500&fit=crop",
    category: "Accessories",
    rating: 4.7,
    reviewCount: 189,
    description:
      "Comfortable silk underscarves. Keeps your hijab in place and adds comfort. Set of 3 pieces.",
    colors: ["Neutral Pack", "Dark Pack", "Colorful Pack"],
    inStock: true,
  },
  {
    id: "16",
    name: "Luxury Hijab Bag",
    price: 350000,
    originalPrice: 450000,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop",
    category: "Accessories",
    rating: 4.6,
    reviewCount: 67,
    description:
      "Elegant leather bag perfect for carrying your hijab and essentials. Multiple compartments.",
    colors: ["Black", "Brown", "Cream", "Burgundy"],
    inStock: true,
    isSale: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.isNew || p.rating >= 4.8).slice(0, 4);
};

export const getSaleProducts = (): Product[] => {
  return products.filter((p) => p.isSale);
};

export const categories = [
  {
    name: "Gamis",
    description: "Traditional Islamic dresses with modern designs",
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=600&h=400&fit=crop",
    count: products.filter((p) => p.category === "Gamis").length,
  },
  {
    name: "Khimar",
    description: "Premium head coverings for every occasion",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=400&fit=crop",
    count: products.filter((p) => p.category === "Khimar").length,
  },
  {
    name: "Abaya",
    description: "Elegant abayas with timeless designs",
    image:
      "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?w=600&h=400&fit=crop",
    count: products.filter((p) => p.category === "Abaya").length,
  },
  {
    name: "Accessories",
    description: "Complete your look with our accessories",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=400&fit=crop",
    count: products.filter((p) => p.category === "Accessories").length,
  },
];
