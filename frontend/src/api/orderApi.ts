import { api } from "./client";

export type CartItemPayload = {
  productId: string;
  quantity: number;
};

export type CreateOrderPayload = {
  email: string;
  fullName?: string;
  shippingAddress?: string;
  items: CartItemPayload[];
};

export type OrderResponse = {
  id: string;
  totalAmount: number;
  paymentStatus: string;
};

export async function createOrder(
  payload: CreateOrderPayload
): Promise<OrderResponse> {
  const res = await api.post("/orders", payload);
  return res.data.data;
}

