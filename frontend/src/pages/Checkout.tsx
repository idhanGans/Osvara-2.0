import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { FaLock, FaArrowLeft, FaCreditCard, FaWallet } from "react-icons/fa";

export const Checkout: React.FC = () => {
  const { items, getTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    province: "",
    notes: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<string>("transfer");

  const subtotal = getTotal();
  const shipping = subtotal >= 500000 ? 0 : 25000;
  const total = subtotal + shipping;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for payment integration
    alert("Payment integration coming soon! Your order has been recorded.");
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-light text-primary mb-6">Checkout</h1>
            <p className="text-muted mb-8">
              Your cart is empty. Add some items before checking out.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-secondary rounded hover:bg-dark transition-colors"
            >
              <FaArrowLeft />
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-6"
          >
            <FaArrowLeft size={14} />
            Back to Cart
          </Link>
          <h1 className="text-4xl font-light text-primary">Checkout</h1>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left - Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <motion.div
                className="bg-secondary p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-xl font-light text-primary mb-6">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-muted mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-light border border-muted/30 rounded focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-light border border-muted/30 rounded focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-light border border-muted/30 rounded focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-light border border-muted/30 rounded focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Shipping Address */}
              <motion.div
                className="bg-secondary p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-xl font-light text-primary mb-6">
                  Shipping Address
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-muted mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="Street address, building, etc."
                      className="w-full px-4 py-3 bg-light border border-muted/30 rounded focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm text-muted mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-light border border-muted/30 rounded focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted mb-2">
                        Province *
                      </label>
                      <select
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-light border border-muted/30 rounded focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="">Select</option>
                        <option value="DKI Jakarta">DKI Jakarta</option>
                        <option value="Jawa Barat">Jawa Barat</option>
                        <option value="Jawa Tengah">Jawa Tengah</option>
                        <option value="Jawa Timur">Jawa Timur</option>
                        <option value="Banten">Banten</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-muted mb-2">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-light border border-muted/30 rounded focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-2">
                      Order Notes (Optional)
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Any special instructions..."
                      className="w-full px-4 py-3 bg-light border border-muted/30 rounded focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div
                className="bg-secondary p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-xl font-light text-primary mb-6">
                  Payment Method
                </h2>
                <div className="space-y-4">
                  <label
                    className={`flex items-center gap-4 p-4 border rounded cursor-pointer transition-all ${
                      paymentMethod === "transfer"
                        ? "border-primary bg-light"
                        : "border-muted/30 hover:border-muted"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="transfer"
                      checked={paymentMethod === "transfer"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <FaWallet className="text-primary" size={20} />
                    <div>
                      <div className="font-medium text-primary">
                        Bank Transfer
                      </div>
                      <div className="text-sm text-muted">
                        Transfer to BCA, Mandiri, or BNI
                      </div>
                    </div>
                  </label>

                  <label
                    className={`flex items-center gap-4 p-4 border rounded cursor-pointer transition-all ${
                      paymentMethod === "card"
                        ? "border-primary bg-light"
                        : "border-muted/30 hover:border-muted"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <FaCreditCard className="text-primary" size={20} />
                    <div>
                      <div className="font-medium text-primary">
                        Credit / Debit Card
                      </div>
                      <div className="text-sm text-muted">
                        Coming soon - Visa, Mastercard
                      </div>
                    </div>
                  </label>
                </div>
              </motion.div>
            </div>

            {/* Right - Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                className="bg-secondary p-8 rounded-lg shadow-lg sticky top-32"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-xl font-light text-primary mb-6">
                  Order Summary
                </h2>

                {/* Items */}
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div
                      key={`${item.id}-${item.size}-${item.color}`}
                      className="flex gap-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-primary truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-muted">
                          {item.size} / {item.color} × {item.quantity}
                        </p>
                        <p className="text-sm text-primary">
                          Rp{" "}
                          {(item.price * item.quantity).toLocaleString("id-ID")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-3 border-t border-muted/20 pt-6">
                  <div className="flex justify-between text-muted">
                    <span>Subtotal</span>
                    <span>Rp {subtotal.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between text-muted">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `Rp ${shipping.toLocaleString("id-ID")}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-xl font-light text-primary border-t border-muted/20 pt-4">
                    <span>Total</span>
                    <span>Rp {total.toLocaleString("id-ID")}</span>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full mt-8 py-4 bg-primary text-secondary rounded font-medium tracking-wide hover:bg-dark transition-colors flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaLock size={14} />
                  Place Order
                </motion.button>

                <p className="text-xs text-muted text-center mt-4">
                  Your payment is secure and encrypted
                </p>
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
