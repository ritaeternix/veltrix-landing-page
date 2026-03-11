"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for getting started with TikTok analytics.",
    features: [
      "Basic product analytics",
      "100 searches per day",
      "7-day historical data",
      "Basic trend reports",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    description: "For serious sellers who want AI-powered insights.",
    features: [
      "Full analytics suite",
      "Unlimited searches",
      "365-day historical data",
      "AI-powered recommendations",
      "Creator intelligence",
      "Competitor tracking",
      "Weekly AI reports",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams and agencies managing multiple brands.",
    features: [
      "Everything in Professional",
      "API access",
      "Custom AI models",
      "White-label reports",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "On-call support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-slate max-w-xl mx-auto">
            Start free. Upgrade when you&apos;re ready to unlock the full power
            of AI analytics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-primary/10 to-accent/5 border-2 border-primary/40"
                  : "glass-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold flex items-center gap-1.5">
                  <Zap className="w-3 h-3" /> Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-slate">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-slate mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                    <span className="text-sm text-slate">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`block text-center py-3 rounded-xl font-medium transition-all ${
                  plan.highlighted
                    ? "glow-button text-white"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
