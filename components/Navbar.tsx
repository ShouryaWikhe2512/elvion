'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Track scroll position
  if (typeof window !== 'undefined') {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-sm border-b border-primary/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-2xl font-black text-primary tracking-tight"
          whileHover={{ scale: 1.05 }}
        >
          {'<'} PhishermanAI {'>'}
        </motion.div>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#threat" className="text-sm text-muted-foreground hover:text-primary transition">
            The Threat
          </a>
          <a href="#defense" className="text-sm text-muted-foreground hover:text-primary transition">
            Our Defense
          </a>
          <a href="#market" className="text-sm text-muted-foreground hover:text-primary transition">
            Market
          </a>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg text-sm hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  )
}
