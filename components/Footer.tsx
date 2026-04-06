export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/[0.06] px-12 py-8 flex items-center justify-between max-md:flex-col max-md:gap-5 max-md:text-center max-md:px-6 max-md:py-7">
      <a href="#" className="font-syne font-extrabold text-sm tracking-tight text-white no-underline">
        Talim<span className="text-accent">Studio</span>
      </a>

      <ul className="flex gap-7 list-none max-md:justify-center">
        {[
          { href: '#services', label: 'Services' },
          { href: '#work', label: 'Work' },
          { href: '#about', label: 'About' },
          { href: '#contact', label: 'Contact' },
        ].map(({ href, label }) => (
          <li key={label}>
            <a
              href={href}
              className="text-xs text-white/40 no-underline tracking-[0.04em] hover:text-accent transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <p className="text-xs text-white/25 tracking-wide">© 2026 Talim Studio · NYC</p>
    </footer>
  )
}
