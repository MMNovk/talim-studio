export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-8 py-8 flex items-center justify-between max-md:flex-col max-md:gap-5 max-md:text-center">
        <span className="text-base text-ink/40">talimstudio.com</span>
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
