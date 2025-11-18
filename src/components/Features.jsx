import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Spark Spontaneity',
    desc: 'Daily prompts that invite you to share the tiny, real moments around you.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#079BA3]">
        <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'No Filters, No Fakes',
    desc: 'A filter-free zone that celebrates unedited, honest shares.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#079BA3]">
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 4l16 16" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: 'Find Your People',
    desc: 'Explore local and global vibes. Join prompts and moments that resonate.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#079BA3]">
        <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 22c1.5-4.5 6-6 10-6s8.5 1.5 10 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section className="relative py-20 md:py-28 bg-[#F3F4F6]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-10 left-[10%] w-24 h-24 bg-white rounded-3xl rotate-6 shadow-lg" />
        <div className="absolute bottom-16 right-[12%] w-28 h-28 bg-white rounded-2xl -rotate-3 shadow-lg" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">Why Explorish?</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative rounded-[28px] bg-white p-6 md:p-8 shadow-[0_15px_40px_rgba(2,20,38,0.08)] border border-slate-100 overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#079BA3]/10 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-[#FF6B6B]/10 rounded-full" />
              <div className="relative">
                <div className="mb-5">{f.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-600">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
