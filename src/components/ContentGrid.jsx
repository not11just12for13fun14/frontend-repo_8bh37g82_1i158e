import React from 'react'
import { motion } from 'framer-motion'

const blocks = [
  { h: 'h-40', w: 'col-span-2', c: '#079BA3', t: 'Pop-up park cleanup at 4? say less.' },
  { h: 'h-56', w: 'col-span-1', c: '#FF6B6B', t: '2-minute sketch challenge. Go!' },
  { h: 'h-32', w: 'col-span-1', c: '#079BA3', t: 'No filter sunsets only.' },
  { h: 'h-52', w: 'col-span-1', c: '#FF6B6B', t: 'Street music jam – bring anything.' },
  { h: 'h-72', w: 'col-span-2', c: '#079BA3', t: 'Today’s vibe: do something tiny but brave.' },
  { h: 'h-44', w: 'col-span-1', c: '#FF6B6B', t: 'Drop your city’s best random view.' },
  { h: 'h-36', w: 'col-span-1', c: '#079BA3', t: 'Coffee in the rain appreciation club.' },
]

export default function ContentGrid() {
  return (
    <section className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">A Vibe, Not a Feed</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">A dynamic, non-uniform grid that feels alive. Jump into moments that speak to you.</p>
        </div>

        {/* Staggered masonry-like grid with intentional chaos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {blocks.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
              className={`${b.w} ${b.h} relative rounded-3xl overflow-hidden`}
            >
              <div className="absolute inset-0" style={{ background: b.c }} />
              <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_0%,rgba(255,255,255,0.35)_0%,transparent_60%)]" />
              <div className="relative p-4 md:p-6 text-white font-semibold drop-shadow-sm text-sm md:text-base">
                {b.t}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
