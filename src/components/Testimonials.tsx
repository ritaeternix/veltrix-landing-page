"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Natthapong K.",
    role: "E-Commerce Director, BrandNova",
    quote:
      "Veltrix's consulting team helped us increase TikTok Shop revenue by 340% in just 3 months. Their AI-driven market insights were invaluable to our strategy.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Head of Growth, TrendSetter Co.",
    quote:
      "The competitive intelligence and creator strategy they provided was a game-changer. We found top-performing creators 10x faster and our ROAS improved dramatically.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, DropShip Empire",
    quote:
      "Working with Veltrix feels like having a data science team on call. Their AI recommendations and ongoing advisory have been instrumental in scaling our business.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-slate max-w-xl mx-auto">
            Hear from brands and sellers who have transformed their TikTok Shop
            business with our consulting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-white/90 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
