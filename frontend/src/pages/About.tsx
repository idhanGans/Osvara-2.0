import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Fatima Rahman",
      role: "Founder & Creative Director",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      description:
        "With over 10 years in fashion design, Fatima founded Osvara to bring elegant modest fashion to modern women.",
    },
    {
      name: "Aisha Hassan",
      role: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      description:
        "Aisha leads our design team, creating beautiful pieces that blend tradition with contemporary style.",
    },
    {
      name: "Sarah Abdullah",
      role: "Customer Experience",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      description:
        "Sarah ensures every customer has an exceptional experience from browsing to delivery.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Founded",
      description: "Osvara was born from a passion for elegant modest fashion",
    },
    {
      year: "2021",
      title: "First Store",
      description: "Opened our flagship boutique in Jakarta",
    },
    {
      year: "2022",
      title: "500+ Designs",
      description: "Expanded our collection to over 500 unique pieces",
    },
    {
      year: "2023",
      title: "Online Launch",
      description: "Launched our e-commerce platform nationwide",
    },
    {
      year: "2024",
      title: "Regional Expansion",
      description: "Extended shipping to Southeast Asia",
    },
    {
      year: "2025",
      title: "Growing Strong",
      description: "Serving thousands of happy customers",
    },
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <motion.div
        className="relative bg-gradient-to-r from-black via-gray-800 to-black py-24 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-light text-white tracking-wide mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About <span className="italic font-serif">Osvara</span>
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Crafting elegant modest fashion with simplicity and purpose since
            2020
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Our Story */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-grey text-sm tracking-widest">/</div>
                <div className="text-grey text-sm tracking-widest">
                  OUR STORY
                </div>
              </div>
              <h2 className="text-4xl font-light text-black mb-8">
                A Journey of <span className="italic font-serif">Passion</span>
              </h2>
              <p className="text-grey text-lg leading-relaxed mb-6">
                Osvara was founded in 2020 with a simple mission: to make
                elegant, high-quality Islamic fashion accessible to every
                muslimah woman. We believe that fashion and modesty are not
                mutually exclusive – they can beautifully complement each other.
              </p>
              <p className="text-grey text-lg leading-relaxed mb-6">
                Our founder, passionate about traditional Islamic clothing and
                modern design, started creating pieces that blend timeless
                elegance with contemporary style. Today, Osvara has grown into a
                trusted brand serving thousands of satisfied customers across
                the region.
              </p>
              <p className="text-grey text-lg leading-relaxed">
                We source the finest fabrics from around the world and work with
                skilled craftspeople to create each piece with care and
                attention to detail.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=700&fit=crop"
                  alt="About Osvara"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-black text-white p-8 shadow-xl">
                <div className="text-4xl font-light">5+</div>
                <div className="text-sm tracking-wider">
                  Years of Excellence
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Values */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-grey text-sm tracking-widest">/</div>
              <div className="text-grey text-sm tracking-widest">
                OUR VALUES
              </div>
            </div>
            <h2 className="text-4xl font-light text-black">
              What We <span className="italic font-serif">Stand For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                desc: "We use premium materials and expert craftsmanship in every piece we create",
                icon: "✨",
              },
              {
                title: "Integrity",
                desc: "Honest pricing, authentic products, and transparent business practices",
                icon: "💎",
              },
              {
                title: "Inclusivity",
                desc: "Fashion for every woman, every size, every style preference",
                icon: "🤝",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 rounded-lg p-10 text-center shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <span className="text-5xl block mb-6">{value.icon}</span>
                <h3 className="text-black font-medium text-2xl mb-4">
                  {value.title}
                </h3>
                <p className="text-grey leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-grey text-sm tracking-widest">/</div>
              <div className="text-grey text-sm tracking-widest">
                OUR JOURNEY
              </div>
            </div>
            <h2 className="text-4xl font-light text-black">
              Milestones & <span className="italic font-serif">Growth</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-silver/30" />

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  className={`flex items-center ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div
                    className={`flex-1 ${
                      idx % 2 === 0
                        ? "md:text-right md:pr-12"
                        : "md:text-left md:pl-12"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                      <span className="text-black font-light text-3xl">
                        {milestone.year}
                      </span>
                      <h3 className="text-black font-medium text-xl mt-2">
                        {milestone.title}
                      </h3>
                      <p className="text-grey mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-black rounded-full relative z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-grey text-sm tracking-widest">/</div>
              <div className="text-grey text-sm tracking-widest">OUR TEAM</div>
            </div>
            <h2 className="text-4xl font-light text-black">
              Meet the <span className="italic font-serif">People</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <div className="relative mb-6 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <h3 className="text-black font-medium text-xl mb-1">
                  {member.name}
                </h3>
                <p className="text-grey/70 text-sm tracking-wide mb-3">
                  {member.role}
                </p>
                <p className="text-grey text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-grey text-sm tracking-widest">/</div>
              <div className="text-grey text-sm tracking-widest">
                WHY OSVARA
              </div>
            </div>
            <h2 className="text-4xl font-light text-black">
              Why Customers <span className="italic font-serif">Choose Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Premium Quality Fabrics",
                desc: "Imported from trusted suppliers worldwide",
                icon: "🧵",
              },
              {
                title: "Expert Craftsmanship",
                desc: "Each piece handcrafted by skilled artisans",
                icon: "✂️",
              },
              {
                title: "Fast Shipping",
                desc: "Delivered to your doorstep within 2-3 days",
                icon: "🚚",
              },
              {
                title: "100% Authentic",
                desc: "No counterfeit products, guaranteed",
                icon: "✓",
              },
              {
                title: "Easy Returns",
                desc: "Hassle-free 30-day return policy",
                icon: "↩️",
              },
              {
                title: "Secure Payment",
                desc: "Multiple safe payment options",
                icon: "🔒",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="text-black font-medium text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-grey text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Store Location */}
        <motion.section
          className="bg-gradient-to-r from-black via-gray-800 to-black rounded-lg p-10 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-light mb-8">Visit Our Store</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-xl mb-2">Osvara Boutique</h3>
                  <p className="text-white/80">
                    Jl. Kemang Raya No. 123
                    <br />
                    Jakarta Selatan, 12560
                    <br />
                    Indonesia
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Contact</h4>
                  <p className="text-white/80">
                    Phone: +62 812-3456-7890
                    <br />
                    WhatsApp: +62 812-3456-7890
                    <br />
                    Email: hello@osvara.com
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Opening Hours</h4>
                  <p className="text-white/80">
                    Monday - Friday: 10:00 - 19:00
                    <br />
                    Saturday: 10:00 - 20:00
                    <br />
                    Sunday: 12:00 - 18:00
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-block mt-8 px-8 py-3 bg-white text-black font-medium tracking-wide hover:bg-gray-50 transition-colors"
              >
                Get Directions
              </Link>
            </div>

            <div className="rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8661456661166!2d106.81394!3d-6.2607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0e3%3A0x39a0d0fe47404d02!2sKemang%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1703654321000"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Osvara Store Location"
              />
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};
