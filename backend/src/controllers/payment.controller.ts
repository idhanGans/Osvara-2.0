import type { Request, Response, NextFunction } from "express";
import { z } from "zod";
import {
  constructStripeEventFromRequest,
  createPaymentIntentForOrder,
  handleStripeWebhook,
} from "../services/payment.service.js";

const createIntentSchema = z.object({
  orderId: z.string().min(1),
});

export async function createPaymentIntent(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { orderId } = createIntentSchema.parse(req.body);
    const clientSecret = await createPaymentIntentForOrder(orderId);
    res.status(201).json({ success: true, clientSecret });
  } catch (err) {
    next(err);
  }
}

export async function stripeWebhook(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const sig = req.headers["stripe-signature"] as string;

  try {
    const event = constructStripeEventFromRequest(
      (req as any).rawBody as Buffer,
      sig
    );
    await handleStripeWebhook(event);
    res.json({ received: true });
  } catch (err) {
    next(err);
  }
}

