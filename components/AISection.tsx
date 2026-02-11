'use client'

import React from "react"

import { motion } from 'framer-motion'

interface AIFeature {
  title: string
  description: string
  icon: React.ReactNode
}

const aiFeatures: AIFeature[] = [
  {
    title: 'Multi-Agent LLM Detection',
    description: 'Deploy multiple specialized AI agents to detect coordinated threats across all vectors.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Intent-Based Analysis',
    description: 'Understand not just what the threat says, but what it intends to achieve.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Obfuscation-Resistant',
    description: 'Cut through encoding tricks and evasion techniques. Real threats stand out.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Zero-Day Identification',
    description: 'Catch attacks before they spread. Pattern analysis that learns and adapts instantly.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export function AISection() {
  return (
    <section className="relative w-full py-20 md:py-40 px-6 bg-background overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
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
            className="text-primary text-sm uppercase tracking-widest font-semibold mb-4 block font-cinzel"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Intelligence vs Intelligence
          </motion.span>
          <h2 className="font-cinzel text-4xl md:text-7xl font-bold text-balance mb-6 text-foreground leading-tight">
            Fighting the Upside Down with AI
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            When threats evolve at machine speed, only machine intelligence can match it. Our multi-agent architecture learns, adapts, and strikes faster than any attack.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-24">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: '-100px' }}
              className="group relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                animate={{
                  opacity: [0, 0.02, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <div className="relative h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
                {/* Top accent with glow */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                />

                {/* Icon with color */}
                <motion.div
                  className="text-primary mb-6 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title with cinzel */}
                <h3 className="font-cinzel text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center information box - professional and dark */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-white/[0.03] via-primary/[0.02] to-white/[0.01] backdrop-blur-xl p-12 md:p-20 text-center overflow-hidden relative">
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 bg-radial-gradient opacity-10 pointer-events-none"
              animate={{
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            <div className="relative z-10">
              <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-foreground mb-6">
                Real-Time Defense Intelligence
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-lg">
                Our multi-layered AI architecture processes threats in real-time, adapting and learning from every interaction to stay ahead of evolving attack patterns. Zero delays. Zero compromise.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
