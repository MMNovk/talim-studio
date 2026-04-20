import './clarte-marquee.css'

const pubs = ['VOGUE', 'ALLURE', 'THE CUT', 'NEW YORK MAGAZINE', 'BYRDIE', 'REFINERY29', "HARPER'S BAZAAR", 'COVETEUR']

function Segment() {
  return (
    <span>
      {pubs.map((name) => (
        <span key={name}>
          <span className="clarte-marquee-pub">{name}</span>
          <span className="clarte-marquee-diamond">&nbsp;&nbsp;◆&nbsp;&nbsp;</span>
        </span>
      ))}
    </span>
  )
}

export default function ClarteMarquee() {
  return (
    <div className="clarte-marquee-strip">
      <div className="clarte-marquee-track">
        <Segment />
        <Segment />
        <Segment />
        <Segment />
      </div>
    </div>
  )
}
