"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px]" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Dominate
            <br />
            <span className="gradient-text">TikTok Shop?</span>
          </h2>
          <p className="text-lg md:text-xl text-slate mb-10">
            Join 10,000+ sellers using Veltrix to unlock AI-powered insights.
            Start free — no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="glow-button flex items-center gap-2 text-white font-semibold px-10 py-4 rounded-xl text-lg"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-slate-dark mt-6">
            Free 7-day trial · No credit card · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
