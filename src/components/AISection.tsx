"use client";

import { motion } from "framer-motion";
import { Brain, MessageSquare, FileText, BellRing } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "Forecast trends 7–30 days ahead with AI models trained on billions of data points.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Queries",
    description: "Ask questions in plain language. AI responds with data-backed answers instantly.",
  },
  {
    icon: FileText,
    title: "Auto-Generated Reports",
    description: "Weekly performance reports generated automatically, delivered to your inbox.",
  },
  {
    icon: BellRing,
    title: "Smart Alerts",
    description: "Get notified when new opportunities or threats emerge in your market.",
  },
];

export default function AISection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 mb-6">
              <Brain className="w-3.5 h-3.5 text-accent" />
              <span className="text-sm text-accent">AI-First Platform</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Built with <span className="gradient-text">AI at Its Core</span>
            </h2>
            <p className="text-lg text-slate mb-10">
              Unlike traditional analytics tools, Veltrix uses advanced machine
              learning to not just show you data — but tell you what to do with
              it.
            </p>

            <div className="space-y-6">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary-light" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {cap.title}
                      </h3>
                      <p className="text-slate text-sm leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* AI Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-3xl" />
            <div className="relative glass-card rounded-2xl p-8 md:p-10">
              {/* Neural network visual */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-auto opacity-80"
                fill="none"
              >
                {/* Connection lines */}
                {[
                  [80, 80, 200, 140],
                  [80, 200, 200, 140],
                  [80, 320, 200, 260],
                  [80, 200, 200, 260],
                  [200, 140, 320, 160],
                  [200, 260, 320, 240],
                  [200, 140, 320, 240],
                  [200, 260, 320, 160],
                ].map(([x1, y1, x2, y2], i) => (
                  <motion.line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#grad)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                  />
                ))}

                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>

                {/* Input layer */}
                {[80, 200, 320].map((y, i) => (
                  <motion.circle
                    key={`in-${i}`}
                    cx={80}
                    cy={y}
                    r={20}
                    fill="rgba(99, 102, 241, 0.15)"
                    stroke="#6366F1"
                    strokeWidth="1.5"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                  />
                ))}

                {/* Hidden layer */}
                {[140, 260].map((y, i) => (
                  <motion.circle
                    key={`hid-${i}`}
                    cx={200}
                    cy={y}
                    r={24}
                    fill="rgba(139, 92, 246, 0.2)"
                    stroke="#8B5CF6"
                    strokeWidth="1.5"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  />
                ))}

                {/* Output layer */}
                {[160, 240].map((y, i) => (
                  <motion.circle
                    key={`out-${i}`}
                    cx={320}
                    cy={y}
                    r={20}
                    fill="rgba(6, 182, 212, 0.15)"
                    stroke="#06B6D4"
                    strokeWidth="1.5"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.15 }}
                  />
                ))}

                {/* Labels */}
                <text x={80} y={370} textAnchor="middle" fill="#94A3B8" fontSize="11">
                  Data Input
                </text>
                <text x={200} y={370} textAnchor="middle" fill="#94A3B8" fontSize="11">
                  AI Processing
                </text>
                <text x={320} y={370} textAnchor="middle" fill="#94A3B8" fontSize="11">
                  Insights
                </text>
              </svg>

              <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-medium">
                    AI Model Active
                  </span>
                </div>
                <p className="text-sm text-slate">
                  Processing 2.4M data points/sec · Model accuracy: 94.7%
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
