"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  PlayCircle,
  Target,
  Radio,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Market & Trend Research",
    description:
      "We identify emerging trends and high-potential products before your competitors, using AI models that analyze millions of data points in real time.",
  },
  {
    icon: Users,
    title: "Creator & Influencer Strategy",
    description:
      "Our team finds and evaluates the best-fit influencers for your brand — analyzing engagement, audience fit, and ROI potential to maximize your partnerships.",
  },
  {
    icon: PlayCircle,
    title: "Content & Ad Consulting",
    description:
      "We analyze top-performing content patterns and help you craft winning video and ad strategies backed by data, not guesswork.",
  },
  {
    icon: Target,
    title: "Competitive Intelligence",
    description:
      "Gain a strategic edge with in-depth competitor analysis — from pricing strategies and product positioning to growth trajectories and market share.",
  },
  {
    icon: Radio,
    title: "Livestream Optimization",
    description:
      "We provide actionable insights on livestream scheduling, engagement tactics, and conversion optimization based on extensive performance data.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Growth Advisory",
    description:
      "Receive personalized, AI-driven strategic recommendations on product selection, pricing, market entry, and scaling your TikTok Shop business.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Features() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our <span className="gradient-text">Consulting Services</span>
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Expert-led, AI-powered consulting to help you dominate the TikTok
            Shop ecosystem with data-driven strategies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="glass-card rounded-2xl p-8 transition-all duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <Icon className="w-6 h-6 text-primary-light" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
