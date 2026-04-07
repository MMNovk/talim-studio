import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-8 py-8 flex items-center justify-between max-md:flex-col max-md:gap-5 max-md:text-center">
        <div className="flex items-center gap-3">
          <span className="text-base text-ink/40">talimstudio.com</span>
          <a
            href="https://www.linkedin.com/in/mailyn-novkov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/40 hover:text-ink transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
        <nav className="flex items-center gap-8">
          {[
            { label: 'Services', href: '#what-we-build' },
            { label: 'Portfolio', href: '#portfolio' },
            { label: 'Process', href: '#process' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-base text-ink/40 no-underline hover:text-ink transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
        <span className="text-base text-ink/40">© 2026 Talim Studio · NYC</span>
      </div>
    </footer>
  )
}
