import { motion } from 'framer-motion'

const skills = ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Spline', 'Node.js', 'FastAPI', 'MongoDB']

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">About me</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I'm a creative developer focused on crafting delightful, performant web experiences. I love blending design and engineering to build products people enjoy using — with a strong attention to detail, accessibility, and smooth motion.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Beyond the pixels, I care about clear communication, rapid iteration, and delivering value. I thrive in collaborative teams that ship.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Core skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="px-3 py-1.5 text-sm rounded-full bg-gray-100 text-gray-800 border border-gray-200">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100/60">
                <div className="font-semibold text-gray-900">Design Systems</div>
                <div className="mt-1 text-gray-600">Composable components with consistent UX.</div>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100/60">
                <div className="font-semibold text-gray-900">Performance</div>
                <div className="mt-1 text-gray-600">Ship fast sites with great Lighthouse scores.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
