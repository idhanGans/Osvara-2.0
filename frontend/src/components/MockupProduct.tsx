import React, { useState } from "react";
import { motion } from "framer-motion";

interface MockupProductProps {
  productImage: string;
  productName: string;
}

export const MockupProduct: React.FC<MockupProductProps> = ({
  productImage,
  productName,
}) => {
  const [height, setHeight] = useState(165);
  const [weight, setWeight] = useState(60);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      className="bg-dark border border-gold/30 rounded-lg p-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <h3 className="text-gold text-xl font-bold mb-6">Virtual Mockup</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mockup Preview */}
        <div className="relative bg-cream/10 rounded-lg h-96 flex items-center justify-center overflow-hidden">
          <motion.div
            className="relative w-32 h-96"
            style={{
              scale: Math.max(0.8, Math.min(1.2, weight / 60)),
            }}
          >
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Your photo"
                className="w-full h-full object-cover rounded opacity-50 absolute"
              />
            ) : (
              <div className="absolute w-full h-full bg-silver/10 rounded flex items-center justify-center text-silver/30">
                Your Photo
              </div>
            )}
            <img
              src={productImage}
              alt={productName}
              className="w-full h-full object-cover relative z-10"
            />
          </motion.div>
        </div>

        {/* Controls */}
        <div className="space-y-6">
          {/* Height Control */}
          <div>
            <label className="text-gold font-bold block mb-2">
              Height: {height} cm
            </label>
            <input
              type="range"
              min="140"
              max="180"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-silver/50 text-sm mt-2">
              <span>140 cm</span>
              <span>180 cm</span>
            </div>
          </div>

          {/* Weight Control */}
          <div>
            <label className="text-gold font-bold block mb-2">
              Weight: {weight} kg
            </label>
            <input
              type="range"
              min="40"
              max="100"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-silver/50 text-sm mt-2">
              <span>40 kg</span>
              <span>100 kg</span>
            </div>
          </div>

          {/* Photo Upload */}
          <div>
            <label className="text-gold font-bold block mb-2">
              Upload Your Photo
            </label>
            <motion.label
              className="block border-2 border-dashed border-gold/50 rounded-lg p-4 text-center cursor-pointer hover:border-gold transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <span className="text-gold">Click to upload or drag & drop</span>
            </motion.label>
          </div>

          {/* Share Button */}
          <motion.button
            className="w-full bg-gold text-dark py-2 rounded-lg font-bold hover:bg-gold/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Share Mockup
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
