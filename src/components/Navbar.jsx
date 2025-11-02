import { Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/50 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 grid place-items-center text-white font-bold shadow-lg">
            F
          </div>
          <span className="font-semibold text-gray-900 tracking-tight group-hover:text-gray-700 transition-colors">
            Flames Portfolio
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-white transition-colors">
            <Github className="h-5 w-5 text-gray-700" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-white transition-colors">
            <Linkedin className="h-5 w-5 text-gray-700" />
          </a>
          <a href="#contact" aria-label="Email" className="p-2 rounded-md hover:bg-white transition-colors">
            <Mail className="h-5 w-5 text-gray-700" />
          </a>
        </div>
      </div>
    </header>
  )
}
