import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Neon Dashboard',
    description:
      'A real-time analytics dashboard with smooth motion and themeable components.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '3D Product Showcase',
    description:
      'Interactive 3D product explorer powered by WebGL and Spline for a playful feel.',
    tags: ['Spline', 'Three.js', 'UX'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Portfolio Engine',
    description:
      'A modular portfolio system with MDX content, dark mode, and fast loading.',
    tags: ['Vite', 'MDX', 'Design'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/40 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Selected Work
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              A curated mix of interfaces, experiments, and production apps.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, margin: '-50px' }}
              className="group relative rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {p.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                </div>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
