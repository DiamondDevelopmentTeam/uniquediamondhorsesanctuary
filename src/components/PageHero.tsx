import type { ReactNode } from 'react'

export default function PageHero({
  eyebrow,
  title,
  children,
  image = '/images/about-banner.webp',
}: {
  eyebrow: string
  title: string
  children?: ReactNode
  image?: string
}) {
  return (
    <section className="page-hero" style={{ '--hero-image': `url(${image})` } as React.CSSProperties}>
      <div className="page-hero__veil" />
      <div className="container page-hero__content">
        <span className="eyebrow eyebrow--light">{eyebrow}</span>
        <h1>{title}</h1>
        {children && <div className="page-hero__text">{children}</div>}
      </div>
    </section>
  )
}
