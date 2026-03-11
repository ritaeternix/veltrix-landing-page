"use client";

import { motion } from "framer-motion";

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Powerful Dashboard,{" "}
            <span className="gradient-text">Intuitive Design</span>
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            See every dimension of your data in one place — sales trends, market
            share, competitor analysis, and creator performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-cyan/20 rounded-3xl blur-2xl opacity-40" />

          <div className="relative glass-card rounded-2xl p-2 border border-white/10">
            <div className="rounded-xl bg-navy overflow-hidden">
              {/* Mock Dashboard UI */}
              <div className="p-4 border-b border-white/5 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-white/5 text-xs text-slate">
                    app.veltrix.io/dashboard
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate mb-1">Overview</div>
                    <div className="text-2xl font-bold text-white">
                      Analytics Dashboard
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary-light text-xs font-medium">
                      7 Days
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-white/5 text-slate text-xs">
                      30 Days
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-white/5 text-slate text-xs">
                      90 Days
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Total Revenue", value: "$284,392", change: "+23.5%" },
                    { label: "Products Sold", value: "12,847", change: "+18.2%" },
                    { label: "Active Creators", value: "342", change: "+31.0%" },
                    { label: "Conversion Rate", value: "4.82%", change: "+2.1%" },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/5"
                    >
                      <div className="text-xs text-slate mb-2">
                        {metric.label}
                      </div>
                      <div className="text-xl font-bold text-white">
                        {metric.value}
                      </div>
                      <div className="text-xs text-emerald-400 mt-1">
                        {metric.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div className="rounded-xl bg-white/[0.02] border border-white/5 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm font-medium text-white">
                      Revenue Trend
                    </div>
                    <div className="flex items-center gap-4 text-xs text-slate">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Revenue
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-cyan" />
                        Orders
                      </span>
                    </div>
                  </div>
                  <div className="flex items-end gap-1.5 h-32">
                    {[40, 55, 45, 70, 60, 80, 75, 90, 85, 95, 88, 100].map(
                      (h, i) => (
                        <div key={i} className="flex-1 flex flex-col gap-1">
                          <div
                            className="w-full rounded-sm bg-gradient-to-t from-primary/40 to-primary/80"
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/[0.02] border border-white/5 p-5">
                    <div className="text-sm font-medium text-white mb-4">
                      Top Products
                    </div>
                    {[
                      { name: "Wireless Earbuds Pro", sales: "$23,482", rank: 1 },
                      { name: "LED Ring Light 12\"", sales: "$18,295", rank: 2 },
                      { name: "Phone Gimbal Stabilizer", sales: "$15,841", rank: 3 },
                    ].map((p) => (
                      <div
                        key={p.rank}
                        className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center text-xs text-primary-light font-medium">
                            {p.rank}
                          </span>
                          <span className="text-sm text-white/80">
                            {p.name}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-white">
                          {p.sales}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl bg-white/[0.02] border border-white/5 p-5">
                    <div className="text-sm font-medium text-white mb-4">
                      Top Creators
                    </div>
                    {[
                      { name: "@sarah_reviews", followers: "2.4M", roi: "340%" },
                      { name: "@tech_daily", followers: "1.8M", roi: "285%" },
                      { name: "@lifestyle_max", followers: "950K", roi: "220%" },
                    ].map((c, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent/30 to-cyan/30" />
                          <div>
                            <div className="text-sm text-white/80">
                              {c.name}
                            </div>
                            <div className="text-xs text-slate">
                              {c.followers} followers
                            </div>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-emerald-400">
                          {c.roi} ROI
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
