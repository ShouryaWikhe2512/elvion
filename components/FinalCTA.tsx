'use client'

import { motion } from 'framer-motion'

export function FinalCTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative w-full py-20 md:py-32 px-6 bg-background overflow-hidden">
      {/* Intense red glow background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-primary via-transparent to-transparent"
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Animated fog effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-primary text-sm md:text-base font-semibold tracking-widest uppercase mb-6"
          >
            The Time to Act is Now
          </motion.p>

          {/* Main headline */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black text-balance leading-tight mb-6 text-foreground"
          >
            Before AI Breaks <span className="text-primary text-glow">Trust</span>...
            <span className="block mt-2">Build Defense</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Enterprise-grade cybersecurity intelligence powered by AI. Purpose-built for the threats of 2026 and beyond.
            Move fast. Protect better. Win.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg glow-red hover:glow-red-intense transition-all duration-300 shadow-lg"
            >
              Partner With PhishermanAI
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary text-primary font-bold text-lg rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              Schedule a Demo
            </motion.button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs md:text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Enterprise Grade</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Real-Time Defense</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="mt-16 pt-8 border-t border-primary/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-sm text-muted-foreground mb-4">Have questions? Let's talk.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
            <a href="mailto:hello@phishermanai.com" className="text-primary hover:text-primary/80 transition">
              hello@phishermanai.com
            </a>
            <span className="text-muted-foreground hidden sm:block">•</span>
            <a href="tel:+911234567890" className="text-primary hover:text-primary/80 transition">
              +91 123 456 7890
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
