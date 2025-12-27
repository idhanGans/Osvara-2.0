import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      content: "+62 812-3456-7890",
      desc: "Mon-Fri, 9:00 AM - 6:00 PM",
      action: "tel:+6281234567890",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      content: "+62 812-3456-7890",
      desc: "Quick responses 24/7",
      action: "https://wa.me/6281234567890",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "hello@osvara.com",
      desc: "We reply within 24 hours",
      action: "mailto:hello@osvara.com",
    },
  ];

  const faqs = [
    {
      question: "What are your shipping options?",
      answer:
        "We offer standard shipping (3-5 days) and express shipping (1-2 days). Free shipping on orders over Rp 500,000.",
    },
    {
      question: "Can I return or exchange my order?",
      answer:
        "Yes! We have a 30-day hassle-free return policy. Items must be unworn with tags attached.",
    },
    {
      question: "Do you offer custom sizes?",
      answer:
        "Yes, we can customize sizes for select items. Please contact us for more details.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email and WhatsApp.",
    },
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-black via-gray-800 to-black py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl font-light text-white tracking-wide mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Contact <span className="italic font-serif">Us</span>
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We'd love to hear from you. Get in touch with us today.
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.action}
              target={contact.action.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.action.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="bg-white border border-silver/20 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all hover:border-primary group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <contact.icon className="text-black text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-black font-medium text-xl mb-2">
                {contact.title}
              </h3>
              <p className="text-black text-lg mb-2">{contact.content}</p>
              <p className="text-grey text-sm">{contact.desc}</p>
            </motion.a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-grey text-sm tracking-widest">/</div>
              <div className="text-grey text-sm tracking-widest">
                GET IN TOUCH
              </div>
            </div>
            <h2 className="text-3xl font-light text-black mb-8">
              Send us a <span className="italic font-serif">Message</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-black font-medium block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-silver/30 rounded-lg text-black focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-black font-medium block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-silver/30 rounded-lg text-black focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-black font-medium block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-silver/30 rounded-lg text-black focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="text-black font-medium block mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-silver/30 rounded-lg text-black focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="order-status">Order Status</option>
                    <option value="returns">Returns & Refunds</option>
                    <option value="custom-order">Custom Order</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-black font-medium block mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-silver/30 rounded-lg text-black focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 rounded-lg font-medium tracking-wide hover:bg-grey transition-colors disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {submitted && (
                <motion.div
                  className="bg-green-100 border border-green-500 text-green-700 p-4 rounded-lg text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
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
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Store Location Card */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-black text-2xl font-light mb-6 flex items-center gap-3">
                <FaMapMarkerAlt className="text-black" /> Visit Our Boutique
              </h3>
              <p className="text-grey mb-4">
                <strong className="text-black">Osvara Boutique</strong>
                <br />
                Jl. Kemang Raya No. 123
                <br />
                Jakarta Selatan, 12560
                <br />
                Indonesia
              </p>
              <div className="border-t border-silver/20 pt-4 mt-4">
                <h4 className="text-black font-medium mb-3">Store Hours</h4>
                <div className="text-grey space-y-1 text-sm">
                  <p>Monday - Friday: 10:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: 12:00 PM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white border border-silver/20 rounded-lg p-8 shadow-lg">
              <h3 className="text-black text-2xl font-light mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/6281234567890?text=Hi%20Osvara,%20I%20would%20like%20to%20inquire%20about..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-silver/10 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <FaWhatsapp className="text-green-600 text-2xl" />
                  <span className="text-black">Chat on WhatsApp</span>
                </motion.a>
                <motion.a
                  href="tel:+6281234567890"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-silver/10 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <FaPhone className="text-black text-2xl" />
                  <span className="text-black">Call Us</span>
                </motion.a>
                <motion.a
                  href="mailto:hello@osvara.com"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-silver/10 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <FaEnvelope className="text-black text-2xl" />
                  <span className="text-black">Send Email</span>
                </motion.a>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white border border-silver/20 rounded-lg p-8 shadow-lg">
              <h3 className="text-black text-2xl font-light mb-6">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://instagram.com/osvara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaInstagram size={24} />
                </motion.a>
                <motion.a
                  href="https://facebook.com/osvara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaFacebook size={24} />
                </motion.a>
                <motion.a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaWhatsapp size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          className="mb-16 rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8661456661166!2d106.81394!3d-6.2607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0e3%3A0x39a0d0fe47404d02!2sKemang%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1703654321000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Osvara Store Location"
          />
        </motion.div>

        {/* FAQs */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-grey text-sm tracking-widest">/</div>
              <div className="text-grey text-sm tracking-widest">FAQ</div>
            </div>
            <h2 className="text-3xl font-light text-black">
              Frequently Asked{" "}
              <span className="italic font-serif">Questions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 rounded-lg p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-black font-medium text-lg mb-3">
                  {faq.question}
                </h3>
                <p className="text-grey leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};
