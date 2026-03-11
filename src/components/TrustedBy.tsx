"use client";

import { motion } from "framer-motion";

const brands = [
  "ShopNova",
  "TrendBase",
  "CreatorHub",
  "DataPulse",
  "ViralEdge",
  "MarketFlow",
];

export default function TrustedBy() {
  return (
    <section className="relative py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-dark mb-10 uppercase tracking-widest"
        >
          Trusted by leading brands and agencies
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
        >
          {brands.map((brand) => (
            <div
              key={brand}
              className="text-xl font-bold text-white/10 hover:text-white/25 transition-colors select-none"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
