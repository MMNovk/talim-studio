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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
        <nav className="flex items-center gap-8 max-md:flex-wrap max-md:justify-center max-md:gap-4">
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
