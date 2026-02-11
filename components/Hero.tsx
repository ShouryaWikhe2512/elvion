'use client'

import { motion } from 'framer-motion'
import { Zap, Cpu, Shield } from 'lucide-react'

export function Hero() {
  const floatingParticles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 8 + Math.random() * 4,
  }))

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Atmospheric fog effect */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5" />
      </div>

      {/* Animated background grid - more subtle */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(220, 38, 38, 0.4)" strokeWidth="0.5" />
            <circle cx="60" cy="60" r="0.5" fill="rgba(220, 38, 38, 0.3)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Floating particles with drift */}
      {floatingParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-0.5 h-0.5 bg-primary rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Glow orbs in background */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary rounded-full blur-3xl opacity-5 pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.05, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Top subtitle with cinzel font */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <p className="font-cinzel text-primary text-sm md:text-base font-semibold tracking-widest uppercase letter-spacing">
            The Digital Firewall Awakens
          </p>
        </motion.div>

        {/* Main headline with professional horror feel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <h1 className="font-cinzel text-6xl md:text-8xl font-black leading-tight text-balance mb-2">
            <motion.span
              className="block"
              animate={{
                opacity: [1, 0.9, 1],
                textShadow: [
                  '0 0 40px rgba(220, 38, 38, 0.4), 0 0 80px rgba(220, 38, 38, 0.2)',
                  '0 0 60px rgba(220, 38, 38, 0.6), 0 0 120px rgba(220, 38, 38, 0.3)',
                  '0 0 40px rgba(220, 38, 38, 0.4), 0 0 80px rgba(220, 38, 38, 0.2)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 50%, #ffffff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              The Upside Down
            </motion.span>

            <motion.span
              className="block text-primary mt-2"
              animate={{
                opacity: [0.9, 1, 0.9],
                textShadow: [
                  '0 0 30px rgba(220, 38, 38, 0.5), 0 0 60px rgba(220, 38, 38, 0.3), inset 0 0 30px rgba(220, 38, 38, 0.1)',
                  '0 0 50px rgba(220, 38, 38, 0.8), 0 0 100px rgba(220, 38, 38, 0.5), inset 0 0 40px rgba(220, 38, 38, 0.2)',
                  '0 0 30px rgba(220, 38, 38, 0.5), 0 0 60px rgba(220, 38, 38, 0.3), inset 0 0 30px rgba(220, 38, 38, 0.1)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Is Real
            </motion.span>
          </h1>
        </motion.div>

        {/* Subheading with elegant text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 text-balance max-w-3xl mx-auto leading-relaxed"
        >
          Phishing evolved. Threats now wield{' '}
          <span className="text-primary font-semibold">synthetic voices, deepfakes, and AI personas</span>. 
          Your defense must evolve faster. We weaponize intelligence against intelligence.
        </motion.p>

        {/* CTA Buttons with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 50px rgba(220, 38, 38, 0.8), 0 0 100px rgba(220, 38, 38, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-primary text-primary-foreground font-cinzel font-semibold rounded-xl glow-red transition-all duration-300 text-lg"
          >
            Activate Defense
          </motion.button>
          <motion.button
            whileHover={{
              borderColor: 'rgba(220, 38, 38, 0.8)',
              boxShadow: '0 0 30px rgba(220, 38, 38, 0.3), inset 0 0 20px rgba(220, 38, 38, 0.05)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-primary text-primary font-cinzel font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300 text-lg"
          >
            Request Briefing
          </motion.button>
        </motion.div>

        {/* Trust indicators with Lucide icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm"
        >
          {[
            { label: 'Real-Time Detection', icon: Zap },
            { label: 'AI-Powered Defense', icon: Cpu },
            { label: 'Zero-Day Protected', icon: Shield },
          ].map((item, i) => {
            const IconComponent = item.icon
            return (
              <div
                key={i}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <IconComponent className="w-5 h-5 text-primary" strokeWidth={1.5} />
                <span className="font-cinzel text-xs uppercase tracking-wider">{item.label}</span>
              </div>
            )
          })}
        </motion.div>
      </motion.div>

      {/* Scroll indicator with animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <p className="text-primary text-xs uppercase tracking-widest font-cinzel mb-3">Descend Further</p>
        <motion.svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.div>
    </div>
  )
}
