'use client'

import { motion } from 'framer-motion'

export function HoneypotSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative w-full py-20 md:py-32 px-6 bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* Red glow background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-balance mb-6">
              <span className="text-primary">We Don't Just Block.</span>
              <span className="block text-foreground">We Bait.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Our honeypot layer doesn't just defend. It deceives attackers, captures their methods, and learns 
              from every attempted intrusion. It's a trap disguised as vulnerability.
            </motion.p>

            {/* Feature list */}
            <motion.div variants={containerVariants} className="space-y-4">
              {[
                {
                  title: 'AI-Generated Adaptive Replies',
                  desc: 'Respond with authentic, context-aware messages that keep attackers engaged and exposed.',
                },
                {
                  title: 'LLM vs LLM Deception',
                  desc: 'Advanced language models engaged in a chess match of wit and strategy.',
                },
                {
                  title: 'Reinforcement Learning',
                  desc: 'Each interaction teaches the system. Every attack makes us smarter.',
                },
                {
                  title: 'Continuous Attacker Profiling',
                  desc: 'Build behavioral signatures of attackers for future detection and blocking.',
                },
              ].map((feature, index) => (
                <motion.div key={index} variants={itemVariants} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-background text-xs font-bold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Chat simulation */}
          <motion.div
            className="relative h-96 md:h-full min-h-96"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Chat interface mockup */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background rounded-xl border border-primary/20 p-4 flex flex-col overflow-hidden">
              {/* Chat header */}
              <div className="pb-3 border-b border-primary/10">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">PhishermanAI Honeypot</p>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 py-4">
                {/* Attacker message */}
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="max-w-xs bg-secondary/50 rounded-lg px-4 py-2 border border-primary/10">
                    <p className="text-sm text-foreground">Hey, verify your account now</p>
                  </div>
                </motion.div>

                {/* System response - animated */}
                <motion.div
                  className="flex justify-end"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="max-w-xs bg-primary/20 rounded-lg px-4 py-2 border border-primary/30">
                    <p className="text-sm text-primary">Which account would you like me to verify?</p>
                  </div>
                </motion.div>

                {/* Attacker response */}
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="max-w-xs bg-secondary/50 rounded-lg px-4 py-2 border border-primary/10">
                    <p className="text-sm text-foreground">Your gmail account...</p>
                  </div>
                </motion.div>

                {/* System analyzing */}
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 text-xs text-primary">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span>Analyzing threat...</span>
                  </div>
                </motion.div>
              </div>

              {/* Input area */}
              <div className="mt-auto pt-4 border-t border-primary/10">
                <input
                  type="text"
                  placeholder="Type your response..."
                  disabled
                  className="w-full bg-background border border-primary/10 rounded px-3 py-2 text-xs text-muted-foreground placeholder-muted-foreground/50 cursor-not-allowed"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
