'use client'

import { motion } from 'framer-motion'

interface EvidenceFeature {
  title: string
  description: string
  icon: string
}

const evidenceFeatures: EvidenceFeature[] = [
  {
    title: 'Blockchain Anchoring',
    description: 'Immutable timestamp records of every threat detected, prosecution-ready evidence.',
    icon: '⛓️',
  },
  {
    title: 'Forensic Reports',
    description: 'Detailed analysis of attack vectors, attack timing, and threat actor signatures.',
    icon: '📋',
  },
  {
    title: 'CERT-Ready Logs',
    description: 'Compliance-ready documentation for regulatory bodies and law enforcement.',
    icon: '✅',
  },
]

export function EvidenceSection() {
  const hashCharacters = ['a', '5', 'f', '3', 'b', '8', 'c', '2', 'd', '7', 'e', '1', '9', '0']

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="relative w-full py-20 md:py-32 px-6 bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hash-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect width="60" height="60" fill="none" stroke="rgba(220, 38, 38, 0.2)" strokeWidth="1" />
              <circle cx="30" cy="30" r="2" fill="rgba(220, 38, 38, 0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hash-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-balance mb-4 text-foreground">
            <span className="text-primary">Proof That Cannot Be Altered</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Immutable, cryptographically verified evidence for legal action and regulatory compliance.
          </p>
        </motion.div>

        {/* Hash generation visualization */}
        <motion.div
          className="mb-16 p-6 md:p-8 rounded-xl border border-primary/20 bg-gradient-to-br from-card/50 to-background/50 font-mono text-xs md:text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Hash header */}
          <div className="text-primary font-semibold mb-4">Threat Evidence Hash</div>

          {/* Hash value with animation */}
          <div className="flex flex-wrap gap-1 mb-4 p-4 bg-background/50 rounded border border-primary/10">
            {[...Array(64)].map((_, i) => (
              <motion.span
                key={i}
                className="text-primary"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  textShadow: [
                    '0 0 10px rgba(220, 38, 38, 0)',
                    '0 0 10px rgba(220, 38, 38, 0.5)',
                    '0 0 10px rgba(220, 38, 38, 0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.02,
                  repeat: Infinity,
                }}
              >
                {hashCharacters[Math.floor(Math.random() * hashCharacters.length)]}
              </motion.span>
            ))}
          </div>

          {/* Hash info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-muted-foreground text-xs">
            <div>
              <span className="text-primary">Algorithm:</span> SHA-256
            </div>
            <div>
              <span className="text-primary">Timestamp:</span> 2026-02-11T14:32:45Z
            </div>
            <div>
              <span className="text-primary">Status:</span> <span className="text-green-500">Verified</span>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {evidenceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
              whileHover={{ y: -5 }}
            >
              {/* Card */}
              <div className="h-full p-6 md:p-8 rounded-xl border border-primary/20 bg-gradient-to-br from-card/30 to-background/50 hover:border-primary/40 transition-all duration-300">
                {/* Icon */}
                <div className="text-4xl md:text-5xl mb-4">{feature.icon}</div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{feature.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Compliance badges */}
        <motion.div
          className="mt-16 p-6 md:p-8 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 via-background to-primary/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="text-xl font-bold text-foreground mb-6">Enterprise Compliance</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['GDPR Ready', 'ISO 27001', 'SOC 2 Type II', 'CERT-CC Verified'].map((badge, i) => (
              <motion.div
                key={i}
                className="p-4 text-center rounded-lg bg-background/50 border border-primary/10"
                whileHover={{ borderColor: 'var(--primary)' }}
              >
                <div className="text-sm font-semibold text-primary">{badge}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
