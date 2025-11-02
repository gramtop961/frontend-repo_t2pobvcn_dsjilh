import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Let's build something great</h3>
          <p className="mt-2 text-gray-600 max-w-md">
            I'm available for freelance projects, collaborations, and full-time roles. Tell me about your idea.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 font-medium hover:-translate-y-0.5 transition">
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-4 py-2 font-medium border border-gray-200 hover:bg-gray-50 transition">
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-4 py-2 font-medium border border-gray-200 hover:bg-gray-50 transition">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Your name" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="you@domain.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Tell me a bit about your project..." />
            </div>
          </div>
          <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 font-medium hover:-translate-y-0.5 transition">
            Send
          </button>
        </form>
      </div>
      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Flames. All rights reserved.
      </div>
    </footer>
  )
}
