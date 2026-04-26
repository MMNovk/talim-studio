'use client'

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

const linkStyle = {
  ...serif,
  fontSize: '10px',
  letterSpacing: '0.22em',
  textTransform: 'uppercase' as const,
  color: 'rgba(255,255,255,0.35)',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
}

export default function StephenYangNav() {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 60,
        padding: '24px 32px',
        display: 'flex',
        gap: '28px',
        pointerEvents: 'auto',
      }}
    >
      <a href="#about" onClick={scrollTo('about')} style={linkStyle}
        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
      >
        About
      </a>
      <a href="#contact" onClick={scrollTo('contact')} style={linkStyle}
        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
      >
        Contact
      </a>
    </nav>
  )
}
