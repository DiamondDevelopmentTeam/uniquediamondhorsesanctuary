import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { galleryImages } from '../data/site'

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null)
  const previous = () => setActive((current) => current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length)
  const next = () => setActive((current) => current === null ? null : (current + 1) % galleryImages.length)

  return (
    <>
      <PageHero eyebrow="Sanctuary gallery" title="Quiet moments, curious faces, and lives made safer." image="/images/horse-portrait-2.webp">
        <p>A glimpse of the horses, ponies, paddocks, friendships, and everyday care that make up sanctuary life.</p>
      </PageHero>
      <section className="section section--cream">
        <div className="container gallery-grid">
          {galleryImages.map((image, index) => (
            <Reveal className={`gallery-tile gallery-tile--${(index % 7) + 1}`} key={`${image}-${index}`} delay={(index % 5) * 60}>
              <button type="button" onClick={() => setActive(index)} aria-label={`Open sanctuary photo ${index + 1}`}>
                <img src={image} alt={`Unique Diamond Horse Sanctuary photo ${index + 1}`} loading="lazy" />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery photo viewer">
          <button className="lightbox__backdrop" onClick={() => setActive(null)} aria-label="Close gallery" />
          <button className="lightbox__close" onClick={() => setActive(null)} aria-label="Close gallery"><X /></button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={previous} aria-label="Previous photo"><ChevronLeft /></button>
          <img src={galleryImages[active]} alt={`Sanctuary gallery photo ${active + 1}`} />
          <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Next photo"><ChevronRight /></button>
          <span className="lightbox__count">{active + 1} / {galleryImages.length}</span>
        </div>
      )}
    </>
  )
}
