import { api } from "./client";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  imageUrl?: string | null;
  price: number;
  stock: number;
  active: boolean;
}

export async function getProducts(): Promise<Product[]> {
  const res = await api.get("/products");
  return res.data.data;
}

export async function getProductById(id: string): Promise<Product> {
  const res = await api.get(`/products/${id}`);
  return res.data.data;
}

