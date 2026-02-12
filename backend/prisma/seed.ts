import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Basic initial products – adapt as needed
  const products = [
    {
      name: "Premium Silk Gamis Emerald",
      slug: "premium-silk-gamis-emerald",
      category: "Gamis",
      description:
        "Elegant silk gamis in beautiful emerald green with premium embroidery.",
      imageUrl:
        "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&h=1000&fit=crop",
      price: 450000,
      stock: 20,
      active: true,
    },
    {
      name: "Elegant Silk Khimar",
      slug: "elegant-silk-khimar",
      category: "Khimar",
      description:
        "Premium silk khimar with beautiful draping for everyday and special occasions.",
      imageUrl:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1000&fit=crop",
      price: 350000,
      stock: 30,
      active: true,
    },
    {
      name: "Luxury Black Abaya",
      slug: "luxury-black-abaya",
      category: "Abaya",
      description:
        "Timeless black abaya with subtle detailing, made from premium fabric.",
      imageUrl:
        "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?w=800&h=1000&fit=crop",
      price: 550000,
      stock: 15,
      active: true,
    },
    {
      name: "Pearl Hijab Pin Set",
      slug: "pearl-hijab-pin-set",
      category: "Accessories",
      description:
        "Elegant pearl hijab pin set, includes multiple sizes for versatile styling.",
      imageUrl:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=1000&fit=crop",
      price: 85000,
      stock: 50,
      active: true,
    },
  ];

  for (const p of products) {
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: p,
      create: p,
    });
  }

  console.log("Seed data inserted/updated.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

