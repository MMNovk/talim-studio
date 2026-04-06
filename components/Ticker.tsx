const items = [
  'Small Business Websites',
  'Creative Portfolios',
  'Landing Pages',
  'E-Commerce Stores',
  'Brand Identity',
  'Fast Delivery',
  'NYC Based',
]

export default function Ticker() {
  // Duplicate items so the seamless loop works (second half is the repeat)
  const allItems = [...items, ...items]

  return (
    <div className="overflow-hidden border-t border-b border-ink/10 bg-ink py-3.5">
      <div className="flex w-max animate-ticker">
        {allItems.map((item, i) => (
          <span
            key={i}
            className="font-syne font-semibold text-xs tracking-[0.1em] uppercase text-accent px-10 whitespace-nowrap"
          >
            {item} <span className="text-accent/30">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
