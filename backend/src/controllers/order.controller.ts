import type { Request, Response, NextFunction } from "express";
import * as orderService from "../services/order.service.js";
import { z } from "zod";

const orderSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(1).optional(),
  shippingAddress: z.string().min(1).optional(),
  items: z
    .array(
      z.object({
        productId: z.string().min(1),
        quantity: z.number().int().positive(),
      })
    )
    .nonempty(),
});

export async function createOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const input = orderSchema.parse(req.body);
    const order = await orderService.createOrder(input);
    res.status(201).json({ success: true, data: order });
  } catch (err) {
    next(err);
  }
}

