'use client'

import React from "react"

import { motion } from 'framer-motion'

interface AudioVideoFeature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: AudioVideoFeature[] = [
  {
    title: 'AI Voice Phishing Detection',
    description: 'Detect synthetic voice calls and voice cloning attacks in real-time. No more grandparent scams.',
    icon: '🎙️',
  },
  {
    title: 'Deepfake Video Analysis',
    description: 'Identify manipulated videos using advanced biometric and temporal consistency analysis.',
    icon: '🎬',
  },
  {
    title: 'Multi-Modal AI Verification',
    description: 'Cross-check video, audio, and metadata to catch even the most sophisticated deepfakes.',
    icon: '🔬',
  },
]

export function AudioVideoSection() {
  return (
    <section className="relative w-full py-20 md:py-32 px-6 bg-background overflow-hidden">
      {/* Waveform background animation */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(220, 38, 38, 0.3)" />
              <stop offset="50%" stopColor="rgba(220, 38, 38, 0.1)" />
              <stop offset="100%" stopColor="rgba(220, 38, 38, 0.3)" />
            </linearGradient>
          </defs>
          {[...Array(50)].map((_, i) => (
            <motion.line
              key={i}
              x1={i * 25}
              y1="200"
              x2={i * 25}
              y2={150 + Math.sin(i) * 50}
              stroke="url(#waveGradient)"
              strokeWidth="2"
              animate={{
                y2: [150 + Math.sin(i) * 50, 200 + Math.sin(i) * 50, 150 + Math.sin(i) * 50],
              }}
              transition={{
                duration: 2,
                delay: i * 0.05,
                repeat: Infinity,
              }}
            />
          ))}
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
            <span className="text-primary">Voices Can Lie</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            But they can't hide from us. We've trained to recognize the subtle artifacts of AI generation.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -5 }}
            >
              {/* Card */}
              <div className="h-full p-6 md:p-8 rounded-xl border border-primary/20 bg-gradient-to-br from-card/50 to-background hover:border-primary/50 transition-all duration-300">
                {/* Icon */}
                <div className="text-5xl md:text-6xl mb-4">{feature.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-primary to-transparent rounded-tr-xl"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Audio waveform visualization */}
        <motion.div
          className="mt-16 p-8 md:p-12 rounded-xl border border-primary/30 bg-gradient-to-b from-primary/5 to-background"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Waveform display */}
          <div className="mb-6">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Audio Analysis</p>
            <div className="flex items-end gap-1 h-16">
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t"
                  animate={{
                    height: ['20%', Math.random() * 100 + '%', '20%'],
                  }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.02,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Analysis result */}
          <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-primary">Voice Authenticity Score</span>
              <span className="text-lg font-bold text-primary">94.7%</span>
            </div>
            <div className="w-full bg-primary/20 rounded-full h-2">
              <motion.div
                className="bg-primary h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '94.7%' }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              This audio contains 5.3% synthetic components detected via biometric analysis.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
