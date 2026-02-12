import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

export const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-20 pb-20 min-h-screen">
        <motion.div
          className="bg-gradient-to-r from-dark to-dark/80 py-16 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="text-5xl font-bold text-white text-center">
            Shopping Cart
          </h1>
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-8xl mb-8">🛒</div>
            <h2 className="text-2xl font-light text-black mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link
              to="/products"
              className="inline-block px-10 py-4 bg-black text-white font-medium tracking-wide hover:bg-grey transition-colors"
            >
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  const shippingCost = getTotal() >= 500000 ? 0 : 25000;
  const grandTotal = getTotal() + shippingCost;

  return (
    <div className="pt-20 pb-20 min-h-screen bg-gray-50">
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-black mb-8">Shopping Cart</h1>
        <p className="text-gray-600">Cart feature coming soon...</p>
=======
      <motion.div
        className="bg-gradient-to-r from-dark to-dark/80 py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-5xl font-bold text-white text-center">
          Shopping Cart
        </h1>
        <p className="text-white/70 text-center mt-4">
          {items.length} item{items.length > 1 ? "s" : ""} in your cart
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-black text-white px-6 py-4 grid grid-cols-12 gap-4 text-sm font-medium tracking-wide">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Total</div>
              </div>

              {/* Items */}
              {items.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="px-6 py-4 grid grid-cols-12 gap-4 items-center border-b border-gray-300/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {/* Product Info */}
                  <div className="col-span-6 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <Link
                        to={`/products/${item.id}`}
                        className="text-black font-medium hover:underline"
                      >
                        {item.name}
                      </Link>
                      <p className="text-gray-500 text-sm">{item.category}</p>
                      {item.size && (
                        <p className="text-gray-500 text-xs">Size: {item.size}</p>
                      )}
                      {item.color && (
                        <p className="text-gray-500 text-xs">
                          Color: {item.color}
                        </p>
                      )}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 text-xs mt-1 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-2 text-center text-gray-500">
                    Rp {item.price.toLocaleString("id-ID")}
                  </div>

                  {/* Quantity */}
                  <div className="col-span-2 flex items-center justify-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 border border-gray-300/30 text-black hover:border-primary transition-colors rounded"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 border border-gray-300/30 text-black hover:border-primary transition-colors rounded"
                    >
                      +
                    </button>
                  </div>

                  {/* Total */}
                  <div className="col-span-2 text-center font-medium text-black">
                    Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                  </div>
                </motion.div>
              ))}

              {/* Footer */}
              <div className="px-6 py-4 flex justify-between items-center bg-gray-50">
                <button
                  onClick={clearCart}
                  className="text-red-500 text-sm hover:underline"
                >
                  Clear Cart
                </button>
                <Link
                  to="/products"
                  className="text-black text-sm hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 sticky top-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-xl font-medium text-black mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>Rp {getTotal().toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span>
                    {shippingCost === 0
                      ? "FREE"
                      : `Rp ${shippingCost.toLocaleString("id-ID")}`}
                  </span>
                </div>
                {shippingCost > 0 && (
                  <p className="text-xs text-gray-500/70">
                    Free shipping on orders over Rp 500,000
                  </p>
                )}
                <div className="border-t border-gray-300/20 pt-4 flex justify-between text-lg font-medium text-black">
                  <span>Total</span>
                  <span>Rp {grandTotal.toLocaleString("id-ID")}</span>
                </div>
              </div>

              <Link to="/checkout">
                <motion.button
                  className="w-full bg-black text-white py-4 font-medium tracking-wide hover:bg-grey transition-colors rounded"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Proceed to Checkout
                </motion.button>
              </Link>

              <p className="text-xs text-gray-500 text-center mt-4">
                Secure checkout powered by trusted payment providers
              </p>

              {/* Payment Icons */}
              <div className="flex justify-center gap-4 mt-4">
                <span className="text-2xl">💳</span>
                <span className="text-2xl">🏦</span>
                <span className="text-2xl">📱</span>
              </div>
            </motion.div>
          </div>
        </div>
>>>>>>> 4e863753f46699ec8476bb2ded8ecab272a3a9dd
      </div>
    </div>
  );
};
