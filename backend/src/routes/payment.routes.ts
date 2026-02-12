import { Router } from "express";
import * as paymentController from "../controllers/payment.controller.js";

const router = Router();

router.post("/create-intent", paymentController.createPaymentIntent);

// webhook is mounted separately with raw body in app.ts

export default router;

