'use client'

import React from "react"

import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, Users, Radio } from 'lucide-react'

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
    number: '100%',
    description: 'Of humans can be deceived by AI personas',
    icon: <Users className="w-7 h-7" strokeWidth={1.5} />,
    severity: 'extreme',
  },
  {
    number: '∞',
    description: 'Voice and deepfake scams rising exponentially',
    icon: <Radio className="w-7 h-7" strokeWidth={1.5} />,
    severity: 'extreme',
  },
]

export function ThreatSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative w-full py-24 md:py-40 px-6 bg-background overflow-hidden">
      {/* Atmospheric background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-primary/8 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.08, 0.05, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      {/* Grid pattern overlay - subtle */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="threat-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(220, 38, 38, 0.5)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#threat-grid)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span
            className="font-cinzel text-sm uppercase tracking-widest text-primary font-semibold mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            The Threat Landscape
          </motion.span>
          <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-balance mb-6 text-foreground leading-tight">
            An Unprecedented Crisis
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The digital world faces unprecedented threats. These are not predictions—they are today's reality.
          </p>
        </motion.div>

        {/* Threat cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {threatData.map((threat, index) => {
            const isCritical = threat.severity === 'critical'
            const isExtreme = threat.severity === 'extreme'

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                {/* Animated glow background on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
                  animate={isExtreme ? { opacity: [0.05, 0.1, 0.05] } : {}}
                  transition={isExtreme ? { duration: 3, repeat: Infinity } : {}}
                />

                <div
                  className={`relative h-full p-10 md:p-12 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                    isExtreme
                      ? 'border-primary/40 bg-white/[0.03] group-hover:border-primary/60 group-hover:bg-white/[0.06]'
                      : isCritical
                        ? 'border-primary/30 bg-white/[0.02] group-hover:border-primary/50 group-hover:bg-white/[0.05]'
                        : 'border-white/10 bg-white/[0.01] group-hover:border-primary/30 group-hover:bg-white/[0.04]'
                  }`}
                >
                  {/* Top accent line - animated */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  />

                  {/* Icon container with glow */}
                  <motion.div
                    className={`inline-flex p-4 rounded-xl mb-8 text-primary transition-all duration-300 ${
                      isExtreme
                        ? 'bg-primary/20 group-hover:bg-primary/30'
                        : isCritical
                          ? 'bg-primary/15 group-hover:bg-primary/25'
                          : 'bg-white/[0.06] group-hover:bg-primary/15'
                    }`}
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    animate={isExtreme ? { scale: [1, 1.05, 1] } : {}}
                    transition={
                      isExtreme
                        ? {
                            duration: 2.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }
                        : {}
                    }
                  >
                    {threat.icon}
                  </motion.div>

                  {/* Number - the main metric */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                    className="mb-3"
                  >
                    <div
                      className={`font-cinzel text-4xl md:text-5xl font-bold mb-2 group-hover:text-primary/90 transition-colors ${
                        isExtreme
                          ? 'text-primary animate-pulse-glow'
                          : isCritical
                            ? 'text-primary'
                            : 'text-foreground'
                      }`}
                    >
                      {threat.number}
                    </div>
                  </motion.div>

                  {/* Description */}
                  <p className="text-muted-foreground text-base leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {threat.description}
                  </p>

                  {/* Severity indicator - subtle */}
                  {(isCritical || isExtreme) && (
                    <motion.div
                      className="absolute top-6 right-6 flex items-center gap-2 text-xs font-cinzel uppercase tracking-wider"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className={`w-2 h-2 rounded-full ${isExtreme ? 'bg-primary' : 'bg-primary/60'}`}
                        animate={isExtreme ? { scale: [1, 1.3, 1], opacity: [1, 0.8, 1] } : {}}
                        transition={isExtreme ? { duration: 1.5, repeat: Infinity } : {}}
                      />
                      <span className={isExtreme ? 'text-primary' : 'text-primary/60'}>
                        {isExtreme ? 'EXTREME' : 'CRITICAL'}
                      </span>
                    </motion.div>
                  )}

                  {/* Bottom corner accent - responsive */}
                  <motion.div
                    className="absolute bottom-0 right-0 w-16 h-16 border-t border-l border-primary/20 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={isExtreme ? { borderColor: 'rgba(220, 38, 38, 0.4)' } : {}}
                    transition={isExtreme ? { duration: 2, repeat: Infinity, repeatType: 'reverse' } : {}}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
