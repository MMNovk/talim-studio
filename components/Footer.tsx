export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-8 py-8 flex items-center justify-between max-md:flex-col max-md:gap-5 max-md:text-center">
        <span className="font-black text-ink">TS</span>
        <nav className="flex items-center gap-8">
          {['Services', 'Work', 'Process', 'About', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-base text-ink/40 no-underline hover:text-ink transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <span className="text-base text-ink/40">© 2026 Talim Studio · NYC</span>
      </div>
    </footer>
  )
}
