import type { Request, Response, NextFunction } from "express";
import * as productService from "../services/product.service.js";

export async function getProducts(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const products = await productService.getProducts();
    res.json({ success: true, data: products });
  } catch (err) {
    next(err);
  }
}

export async function getProductById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
}

