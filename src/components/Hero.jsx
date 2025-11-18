import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Button = ({ children, variant = 'primary' }) => {
  const base = 'px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold tracking-tight transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/50 shadow-[0_10px_30px_rgba(0,0,0,0.15)]'
  const variants = {
    primary: 'bg-[#079BA3] text-white hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(7,155,163,0.35)]',
    outline: 'text-[#FF6B6B] border-2 border-[#FF6B6B] bg-white/10 backdrop-blur hover:bg-[#FF6B6B] hover:text-white hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(255,107,107,0.35)]',
  }
  return (
    <button className={`${base} ${variants[variant]}`}>{children}</button>
  )
}

export default function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [-50, 50], [8, -8])
  const rotateY = useTransform(mx, [-50, 50], [-12, 12])

  const onMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - left - width / 2
    const y = e.clientY - top - height / 2
    mx.set(x / 6)
    my.set(y / 6)
  }

  return (
    <section className="relative min-h-[90vh] md:min-h-screen overflow-hidden bg-white">
      {/* Layered gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E6FFFE] via-white to-[#E8FBFF]" />
      <div className="absolute -top-40 -left-32 w-[60vw] h-[60vw] rounded-full bg-[#079BA3]/10 blur-3xl" />
      <div className="absolute -bottom-48 -right-40 w-[55vw] h-[55vw] rounded-full bg-[#FF6B6B]/10 blur-3xl" />

      {/* Spline scene */}
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle overlay to maintain contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-36 pb-16 md:pb-28">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center">
          {/* Headline & CTA, intentionally offset */}
          <div className="order-2 md:order-1 md:translate-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#079BA3]/10 text-[#079BA3] text-xs md:text-sm font-semibold shadow-sm mb-6">
              Real. Authentic. Now.
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-[72px] leading-[0.95] font-extrabold tracking-tight">
              <span className="block text-slate-900 drop-shadow-[0_2px_0_rgba(7,155,163,0.12)]">Explorish is</span>
              <span className="block bg-clip-text text-transparent bg-[linear-gradient(92deg,#079BA3_0%,#46D6DE_40%,#7EE7F6_90%)] drop-shadow-[0_8px_24px_rgba(7,155,163,0.20)]">Real Life,</span>
              <span className="mt-1 block text-slate-900">Unfiltered & In the</span>
              <span className="block -skew-y-2 text-slate-900"><span className="relative inline-block"><span className="absolute -inset-1 rounded-lg bg-[#FF6B6B]/10 rotate-1" />Moment.</span></span>
            </h1>

            <p className="mt-6 max-w-xl text-slate-600 text-lg md:text-xl">
              Daily prompts nudge you to share what’s real. No filters. No pressure. Just you and your people, right now.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button>Join the Movement</Button>
              <Button variant="outline">See How It Works</Button>
            </div>
          </div>

          {/* Phone mockup with parallax tilt */}
          <div className="order-1 md:order-2 md:-translate-y-8" onMouseMove={onMouseMove}>
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative mx-auto w-[75%] sm:w-[65%] md:w-[380px] aspect-[9/19]"
            >
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-tr from-[#079BA3]/25 via-white to-[#FF6B6B]/25 blur-xl" />
              <motion.div
                initial={{ y: 10, scale: 0.98 }}
                animate={{ y: [10, -6, 10], scale: [0.98, 1, 0.98] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-full rounded-[32px] bg-white border border-slate-200 shadow-[0_30px_80px_rgba(2,20,38,0.2)] overflow-hidden"
              >
                {/* top bar */}
                <div className="absolute inset-x-0 top-0 h-7 bg-gradient-to-b from-slate-50 to-transparent" />
                {/* Split screen like BeReal */}
                <div className="h-full grid grid-rows-[1fr_auto]">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[radial-gradient(75%_100%_at_20%_20%,#079BA3_0%,#46D6DE_34%,#CEF9FF_100%)]" />
                    <div className="absolute bottom-4 left-4 right-4 text-white/95 font-semibold drop-shadow">“Spontaneous city picnics > planned brunches”</div>
                  </div>
                  <div className="relative p-4 bg-white/80 backdrop-blur">
                    <div className="absolute -top-10 -right-2 w-24 h-24 rounded-2xl bg-[#FF6B6B] shadow-[0_10px_30px_rgba(255,107,107,0.5)] border-4 border-white overflow-hidden">
                      <div className="w-full h-full bg-[conic-gradient(from_180deg_at_50%_50%,#FFB3B3_0%,#FF6B6B_40%,#FF8B8B_70%,#FFC7C7_100%)]" />
                    </div>
                    <div className="flex items-center justify-between text-slate-700">
                      <div className="text-sm font-semibold">Today’s prompt</div>
                      <div className="text-xs px-2 py-1 rounded-full bg-slate-100">2m left</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
