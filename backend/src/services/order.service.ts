import { prisma } from "../prisma/client.js";
import { PaymentStatus } from "@prisma/client";

export type CreateOrderItemInput = {
  productId: string;
  quantity: number;
};

export type CreateOrderInput = {
  email: string;
  fullName?: string;
  shippingAddress?: string;
  items: CreateOrderItemInput[];
};

export async function createOrder(input: CreateOrderInput) {
  if (!input.items.length) {
    throw { status: 400, message: "Order must contain at least one item" };
  }

  const productIds = input.items.map((i) => i.productId);
  const products = await prisma.product.findMany({
    where: { id: { in: productIds }, active: true },
  });

  if (products.length !== productIds.length) {
    throw { status: 400, message: "One or more products not found or inactive" };
  }

  let totalAmount = 0;

  for (const item of input.items) {
    if (item.quantity <= 0) {
      throw { status: 400, message: "Quantity must be positive" };
    }

    const product = products.find((p) => p.id === item.productId)!;

    if (product.stock < item.quantity) {
      throw {
        status: 400,
        message: `Insufficient stock for product ${product.name}`,
      };
    }

    totalAmount += product.price * item.quantity;
  }

  const order = await prisma.$transaction(async (tx) => {
    const createdOrder = await tx.order.create({
      data: {
        email: input.email,
        fullName: input.fullName,
        shippingAddress: input.shippingAddress,
        totalAmount,
        paymentStatus: PaymentStatus.PENDING,
        items: {
          create: input.items.map((item) => {
            const product = products.find((p) => p.id === item.productId)!;
            return {
              productId: product.id,
              quantity: item.quantity,
              unitPrice: product.price,
            };
          }),
        },
      },
      include: { items: true },
    });

    for (const item of input.items) {
      const product = products.find((p) => p.id === item.productId)!;
      await tx.product.update({
        where: { id: product.id },
        data: { stock: { decrement: item.quantity } },
      });
    }

    return createdOrder;
  });

  return order;
}

export async function markOrderPaid(orderId: string, paymentIntentId: string) {
  return prisma.order.update({
    where: { id: orderId },
    data: {
      paymentStatus: PaymentStatus.PAID,
      stripePaymentIntentId: paymentIntentId,
    },
  });
}

export async function updateOrderPaymentStatusByPaymentIntentId(
  paymentIntentId: string,
  status: PaymentStatus
) {
  return prisma.order.updateMany({
    where: { stripePaymentIntentId: paymentIntentId },
    data: { paymentStatus: status },
  });
}

