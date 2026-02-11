'use client'

import React from "react"

import { motion } from 'framer-motion'
import { TrendingUp, Lock, Target } from 'lucide-react'

interface Stat {
  value: string
  label: string
  description: string
  icon: React.ReactNode
}

const stats: Stat[] = [
  {
    value: '₹50,000 Cr',
    label: 'Security Market',
    description: 'Expanding enterprise security spending across India',
    icon: <TrendingUp className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    value: '₹8,000 Cr',
    label: 'Identity Defense',
    description: 'Advanced authentication and threat detection demand',
    icon: <Lock className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    value: '90%+',
    label: 'SaaS Margins',
    description: 'High-margin software service models',
    icon: <Target className="w-6 h-6" strokeWidth={1.5} />,
  },
]

export function MarketSection() {
  return (
    <section className="relative w-full py-24 md:py-40 px-6 bg-background overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span
            className="font-cinzel text-sm uppercase tracking-widest text-primary font-semibold mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Enterprise Opportunity
          </motion.span>
          <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-balance mb-6 text-foreground leading-tight">
            A Market Transformed
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Enterprise security spending accelerates across India. AI-generated threats demand intelligent defense. The opportunity for those with superior technology is unprecedented.
          </p>
        </motion.div>

        {/* Stats Grid - Professional and elegant */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: '-100px' }}
              className="group"
            >
              <div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.01] backdrop-blur-xl p-10 hover:border-primary/40 transition-all duration-300">
                {/* Top accent */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                />

                {/* Icon */}
                <motion.div
                  className="text-primary mb-6 inline-flex p-3 rounded-lg bg-white/[0.03] group-hover:bg-white/[0.08] transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {stat.icon}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-primary mb-3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>

                  <h3 className="font-cinzel text-sm md:text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {stat.label}
                  </h3>

                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main value proposition card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative group"
        >
          <div className="relative rounded-2xl border border-primary/20 bg-white/[0.02] backdrop-blur-xl p-12 md:p-16 lg:p-20 overflow-hidden">
            {/* Top accent line */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />

            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h3 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
                The Opportunity
              </h3>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-base md:text-lg">
                  Enterprise security spending across India accelerates at double-digit rates. AI-generated threats demand intelligent, automated defense. PhishermanAI captures the convergence of critical market need and advanced technology—positioning leaders for unprecedented growth.
                </p>

                <p className="text-base md:text-lg">
                  From BFSI to government, healthcare to education, every sector faces the same vulnerability. Every organization requires defense that evolves faster than threats. The market is vast, urgent, and ready.
                </p>

                {/* Key capabilities */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10 pt-10 border-t border-white/10">
                  <div className="group/metric">
                    <div className="font-cinzel text-2xl font-bold text-primary mb-2 group-hover/metric:text-foreground transition-colors">2-3x</div>
                    <div className="text-xs text-muted-foreground font-cinzel uppercase tracking-wider">Faster Detection</div>
                  </div>
                  <div className="group/metric">
                    <div className="font-cinzel text-2xl font-bold text-primary mb-2 group-hover/metric:text-foreground transition-colors">99.9%</div>
                    <div className="text-xs text-muted-foreground font-cinzel uppercase tracking-wider">Accuracy</div>
                  </div>
                  <div className="group/metric">
                    <div className="font-cinzel text-2xl font-bold text-primary mb-2 group-hover/metric:text-foreground transition-colors">Zero-Delay</div>
                    <div className="text-xs text-muted-foreground font-cinzel uppercase tracking-wider">Response</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
