"use client";

import { motion } from "framer-motion";
import { Link, BarChart3, Rocket } from "lucide-react";

const steps = [
  {
    icon: Link,
    number: "01",
    title: "Connect",
    description:
      "Link your TikTok Shop account in under 30 seconds. Our secure integration ensures your data stays protected.",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Analyze",
    description:
      "AI automatically analyzes market trends, competitor strategies, and opportunities across 500M+ data points.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Grow",
    description:
      "Act on actionable insights to boost sales, optimize content, and scale your TikTok Shop business.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get Started in <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-slate max-w-xl mx-auto">
            From sign-up to insights in minutes — not days.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6 relative">
                  <Icon className="w-7 h-7 text-white" />
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#0A0A0F] border-2 border-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-light">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
