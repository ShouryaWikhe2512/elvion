"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-sm border-b border-primary/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
          <Image
            src="/Screenshot_2026-02-11_150059-removebg-preview (1).png"
            alt="Phisherman AI logo"
            width={220}
            height={60}
            priority
            className="h-12 w-auto"
          />
        </motion.div>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#threat"
            className="text-sm text-muted-foreground hover:text-primary transition"
          >
            The Threat
          </a>
          <a
            href="#defense"
            className="text-sm text-muted-foreground hover:text-primary transition"
          >
            Our Defense
          </a>
          <a
            href="#market"
            className="text-sm text-muted-foreground hover:text-primary transition"
          >
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
  );
}
