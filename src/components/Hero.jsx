import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center min-h-[90vh]">
        <div className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-purple-600" />
            Interactive 3D • Modern • Playful
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Creative Developer & Designer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-lg leading-relaxed text-gray-600 max-w-xl">
            I craft immersive interfaces, thoughtful interactions, and performant web apps. Dive into my world of code, motion, and delightful detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-5 py-3 font-medium shadow-lg shadow-black/10 hover:shadow-black/20 hover:-translate-y-0.5 transition">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-5 py-3 font-medium border border-gray-200 hover:bg-gray-50 transition">
              Contact Me
            </a>
          </motion.div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
