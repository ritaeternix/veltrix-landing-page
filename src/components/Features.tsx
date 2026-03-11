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
    title: "Trending Discovery",
    description:
      "Discover trending products before your competitors with AI prediction models analyzing real-time data across millions of listings.",
  },
  {
    icon: Users,
    title: "Creator Intelligence",
    description:
      "Find the perfect influencers for your brand. Analyze engagement rates, audience demographics, and ROI potential at scale.",
  },
  {
    icon: PlayCircle,
    title: "Video & Ad Analytics",
    description:
      "Understand what makes content go viral. AI-powered analysis of top-performing videos reveals winning patterns and strategies.",
  },
  {
    icon: Target,
    title: "Competitor Tracking",
    description:
      "Monitor competitors in real-time. Track pricing strategies, product launches, market positioning, and growth trajectories.",
  },
  {
    icon: Radio,
    title: "Livestream Insights",
    description:
      "Optimize livestream performance with data on peak hours, conversion rates, viewer engagement, and revenue analytics.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description:
      "Receive personalized AI-driven recommendations on product selection, pricing optimization, and content strategy.",
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
    <section id="features" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Win on TikTok</span>
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Six powerful tools powered by AI to give you an unfair advantage in
            the TikTok Shop ecosystem.
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
