type BrandProps = {
  compact?: boolean
}

export default function Brand({ compact = false }: BrandProps) {
  return (
    <span className={`brand ${compact ? 'brand--compact' : ''}`}>
      <img
        className="brand__logo"
        src="/images/udhs-logo.webp"
        alt="Unique Diamond Horse Sanctuary"
        decoding="async"
      />
    </span>
  )
}
