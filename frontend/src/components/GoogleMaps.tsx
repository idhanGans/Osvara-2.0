import React from "react";
import { motion } from "framer-motion";

interface GoogleMapsProps {
  apiKey?: string;
}

export const GoogleMaps: React.FC<GoogleMapsProps> = () => {
  return (
    <motion.div
      className="w-full rounded-lg overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2638374999506!2d106.8270646!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3cbb5555555%3A0xf6d6d6d6d6d6d6d6!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890"
        width="100%"
        height="400"
        style={{ border: "2px solid #D4AF37" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  );
};
