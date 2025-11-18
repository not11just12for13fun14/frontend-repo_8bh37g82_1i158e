import React from 'react'
import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="relative py-16 md:py-24 bg-[#079BA3] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(100%_120%_at_10%_0%,rgba(255,255,255,0.18)_0%,transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] items-center gap-8 md:gap-10">
          <div className="text-white">
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm">Ready for moments that actually matter?</h3>
            <p className="mt-3 text-white/90 max-w-2xl">Join a community built on presence, not perfection. Your people are one prompt away.</p>
          </div>
          <div className="flex md:justify-end">
            <motion.button
              whileHover={{ y: -3, boxShadow: '0 18px 45px rgba(255,107,107,0.45)' }}
              className="px-7 md:px-9 py-4 rounded-full bg-[#FF6B6B] text-white font-semibold tracking-tight border-2 border-white/10"
            >
              Let’s Go
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
