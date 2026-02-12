import { api } from "./client";

export type CreatePaymentIntentResponse = {
  clientSecret: string;
};

export async function createPaymentIntent(orderId: string) {
  const res = await api.post<CreatePaymentIntentResponse>(
    "/payments/create-intent",
    { orderId }
  );
  return res.data.clientSecret;
}

