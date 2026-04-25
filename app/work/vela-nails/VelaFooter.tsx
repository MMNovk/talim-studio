'use client'

export default function VelaFooter() {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{
      background: "#111",
      color: "#F5F5F5",
      padding: "40px 48px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "16px",
    }}>
      <span style={{ fontWeight: 600, fontSize: "15px", letterSpacing: "0.02em" }}>
        Vela Nails
      </span>
      <div style={{ display: "flex", gap: "32px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#999" }}>
        <a href="#services" onClick={scrollTo('services')} style={{ color: "inherit", textDecoration: "none" }}>Services</a>
        <a href="#about" onClick={scrollTo('about')} style={{ color: "inherit", textDecoration: "none" }}>About</a>
        <a href="#booking" onClick={scrollTo('booking')} style={{ color: "inherit", textDecoration: "none" }}>Book</a>
        <a href="#find-us" onClick={scrollTo('find-us')} style={{ color: "inherit", textDecoration: "none" }}>Find Us</a>
      </div>
      <span style={{ fontSize: "12px", color: "#666" }}>
        Built by Talim Studio →
      </span>
    </footer>
  )
}
