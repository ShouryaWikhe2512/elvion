'use client'

import React from "react"

import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, Layers, ScanFace } from 'lucide-react'

interface ThreatCard {
  number: string
  description: string
  icon: React.ReactNode
  severity: 'critical' | 'high' | 'extreme'
}

const threatData: ThreatCard[] = [
  {
    number: '₹22,845 Cr',
    description: 'Lost in cyber fraud annually',
    icon: <DollarSign className="w-7 h-7" strokeWidth={1.5} />,
    severity: 'critical',
  },
  {
    number: '40-50%',
    description: 'YoY growth in AI-generated phishing attacks',
    icon: <TrendingUp className="w-7 h-7" strokeWidth={1.5} />,
    severity: 'high',
  },
  {
    number: 'Multi-Channel Attacks',
    description:
      'Email, WhatsApp, Telegram, voice calls, and deepfake video — everywhere at once.',
    icon: <Layers className="w-7 h-7" strokeWidth={1.5} />,
    severity: 'extreme',
  },
  {
    number: 'Humans Can’t Detect AI',
    description:
      'Synthetic voices and personas are now indistinguishable in real-time interactions.',
    icon: <ScanFace className="w-7 h-7" strokeWidth={1.5} />,
    severity: 'extreme',
  },
]

export function ThreatSection() {
  return (
    <section className="relative w-full py-20 md:py-40 px-6 bg-background overflow-hidden">
      {/* Subtle background (match AISection tone) */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
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
            The Threat Landscape
          </motion.span>
          <h2 className="font-cinzel text-4xl md:text-7xl font-bold text-balance mb-6 text-foreground leading-tight">
            The New Phishing Reality
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI has removed cost, language, and scale barriers. The result is more attacks, more believable personas, and faster fraud.
          </p>
        </motion.div>

        {/* Threat cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {threatData.map((threat, index) => (
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
                animate={{ opacity: [0, 0.02, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
                {/* Top accent */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                />

                {/* Severity badge (quiet) */}
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-cinzel uppercase tracking-wider text-muted-foreground group-hover:border-primary/20 group-hover:text-foreground/80 transition-colors">
                    {threat.severity}
                  </span>
                </div>

                {/* Icon */}
                <motion.div
                  className="text-primary mb-6 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.06 }}
                >
                  {threat.icon}
                </motion.div>

                {/* Metric */}
                <div className="mb-3">
                  <div className="font-cinzel text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {threat.number}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {threat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
