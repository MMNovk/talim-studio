export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-12 h-16 bg-paper/90 backdrop-blur-md border-b border-ink/[0.08]">
      <a href="#" className="font-syne font-extrabold text-[17px] tracking-tight text-ink no-underline">
        <span className="inline-block bg-ink text-accent px-1.5 py-[1px] rounded-[3px] mr-0.5">T</span>
        alim Studio
      </a>

      <ul className="hidden md:flex gap-9 list-none">
        <li>
          <a href="#services" className="text-[13px] font-medium text-ink-2 no-underline tracking-wide hover:text-ink transition-colors">
            Services
          </a>
        </li>
        <li>
          <a href="#work" className="text-[13px] font-medium text-ink-2 no-underline tracking-wide hover:text-ink transition-colors">
            Work
          </a>
        </li>
        <li>
          <a href="#process" className="text-[13px] font-medium text-ink-2 no-underline tracking-wide hover:text-ink transition-colors">
            Process
          </a>
        </li>
        <li>
          <a href="#about" className="text-[13px] font-medium text-ink-2 no-underline tracking-wide hover:text-ink transition-colors">
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-[13px] font-medium bg-ink text-accent px-[18px] py-2 rounded-sm no-underline hover:opacity-85 transition-opacity"
          >
            Start a project
          </a>
        </li>
      </ul>
    </nav>
  )
}
