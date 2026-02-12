import Stripe from "stripe";
import { env } from "../config/env.js";
import { prisma } from "../prisma/client.js";
import { PaymentStatus } from "@prisma/client";
import { updateOrderPaymentStatusByPaymentIntentId } from "./order.service.js";

const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export async function createPaymentIntentForOrder(orderId: string) {
  const order = await prisma.order.findUnique({ where: { id: orderId } });

  if (!order) {
    throw { status: 404, message: "Order not found" };
  }

  if (order.paymentStatus === PaymentStatus.PAID) {
    throw { status: 400, message: "Order already paid" };
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: order.totalAmount,
    currency: "idr",
    metadata: {
      orderId: order.id,
    },
    automatic_payment_methods: { enabled: true },
  });

  await prisma.order.update({
    where: { id: order.id },
    data: {
      paymentStatus: PaymentStatus.REQUIRES_PAYMENT,
      stripePaymentIntentId: paymentIntent.id,
    },
  });

  return paymentIntent.client_secret;
}

export function constructStripeEventFromRequest(rawBody: Buffer, sig: string) {
  return stripe.webhooks.constructEvent(rawBody, sig, env.STRIPE_WEBHOOK_SECRET);
}

export async function handleStripeWebhook(event: Stripe.Event) {
  switch (event.type) {
    case "payment_intent.succeeded": {
      const pi = event.data.object as Stripe.PaymentIntent;
      await updateOrderPaymentStatusByPaymentIntentId(
        pi.id,
        PaymentStatus.PAID
      );
      break;
    }
    case "payment_intent.payment_failed": {
      const pi = event.data.object as Stripe.PaymentIntent;
      await updateOrderPaymentStatusByPaymentIntentId(
        pi.id,
        PaymentStatus.FAILED
      );
      break;
    }
    default:
      break;
  }
}

