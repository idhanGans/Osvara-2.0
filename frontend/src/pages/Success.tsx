import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const SuccessPage: React.FC = () => {
  const [params] = useSearchParams();
  const orderId = params.get("orderId") || localStorage.getItem("osvara_last_order_id");
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-light text-black mb-4">
          Payment Successful
        </h1>
        {orderId && (
          <p className="text-gray-600 mb-4">
            Your order ID is{" "}
            <span className="font-mono text-black">{orderId}</span>
          </p>
        )}
        <p className="text-gray-500 mb-8">
          Thank you for shopping with Osvara. A confirmation will be sent to your email.
        </p>
        <Link
          to="/products"
          className="inline-block px-8 py-4 bg-black text-white rounded hover:bg-gray-900 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

