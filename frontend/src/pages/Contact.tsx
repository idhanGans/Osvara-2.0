import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="pt-20 pb-20">
      <motion.div
        className="bg-gray-100 py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-5xl font-bold text-black text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mt-4">
          We'd love to hear from you
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          {[
            {
              icon: FaPhone,
              title: "Phone",
              content: "+62 812-3456-7890",
              desc: "Mon-Fri, 9:00 AM - 6:00 PM",
            },
            {
              icon: FaWhatsapp,
              title: "WhatsApp",
              content: "+62 812-3456-7890",
              desc: "Quick responses 24/7",
            },
            {
              icon: FaEnvelope,
              title: "Email",
              content: "hello@osvara.com",
              desc: "We reply within 24 hours",
            },
          ].map((contact, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-300 rounded-lg p-8 text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <contact.icon className="text-black text-4xl mx-auto mb-4" />
              <h3 className="text-black font-bold text-xl mb-2">
                {contact.title}
              </h3>
              <p className="text-gray-900 text-lg mb-2">{contact.content}</p>
              <p className="text-gray-500 text-sm">{contact.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-black mb-8">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="text-black font-bold block mb-2">
                  Full Name
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-black transition-colors"
                  placeholder="Your name"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-black font-bold block mb-2">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-black transition-colors"
                  placeholder="Your email"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-black font-bold block mb-2">
                  Phone Number
                </label>
                <motion.input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-black transition-colors"
                  placeholder="Your phone number"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-black font-bold block mb-2">
                  Subject
                </label>
                <motion.select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-black transition-colors"
                  whileFocus={{ scale: 1.01 }}
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="order-status">Order Status</option>
                  <option value="returns">Returns & Refunds</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </motion.select>
              </div>

              {/* Message */}
              <div>
                <label className="text-black font-bold block mb-2">
                  Message
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="Your message..."
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  className="bg-green-50 border border-green-500 text-green-700 p-4 rounded-lg text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ✓ Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Store Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white border border-gray-300 rounded-lg p-8">
              <h3 className="text-black text-2xl font-bold mb-6 flex items-center gap-2">
                <FaMapMarkerAlt /> Visit Our Boutique
              </h3>
              <p className="text-gray-700 mb-4">
                <strong className="text-black">Osvara Boutique</strong>
                <br />
                Jl. Kemang Raya No. 123
                <br />
                Jakarta Selatan, 12560
                <br />
                Indonesia
              </p>
              <div className="mt-6 pt-6 border-t border-gray-300">
                <h4 className="text-black font-bold mb-3">Store Hours</h4>
                <div className="text-gray-600 space-y-1 text-sm">
                  <p>Monday - Friday: 10:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: 12:00 PM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-8">
              <h3 className="text-black text-2xl font-bold mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/6281234567890"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-300 rounded-lg hover:border-black transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <FaWhatsapp className="text-black text-2xl" />
                  <span className="text-gray-900">Chat on WhatsApp</span>
                </motion.a>
                <motion.a
                  href="tel:+6281234567890"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-300 rounded-lg hover:border-black transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <FaPhone className="text-black text-2xl" />
                  <span className="text-gray-900">Call Us</span>
                </motion.a>
                <motion.a
                  href="mailto:hello@osvara.com"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-300 rounded-lg hover:border-black transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <FaEnvelope className="text-black text-2xl" />
                  <span className="text-gray-900">Send Email</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
