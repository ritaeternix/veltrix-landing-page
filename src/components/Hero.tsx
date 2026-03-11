"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 grid-pattern animate-grid" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-sm text-primary-light">AI-Driven E-Commerce Consulting</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6"
        >
          <span className="text-white">Strategic</span>
          <br />
          <span className="gradient-text">E-Commerce Intelligence</span>
          <br />
          <span className="text-white">for TikTok Shop</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate mb-10"
        >
          We help brands and sellers unlock growth on TikTok Shop with
          AI-powered data analytics, market research, and expert consulting
          tailored to your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <a
            href="#cta"
            className="glow-button flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-xl text-lg"
          >
            Book a Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 text-slate hover:text-white transition-colors px-6 py-3.5 rounded-xl border border-white/10 hover:border-white/20"
          >
            <MessageSquare className="w-5 h-5" />
            Explore Our Services
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm text-slate-dark"
        >
          Free initial consultation · No commitment required
        </motion.p>

      </div>
    </section>
  );
}
