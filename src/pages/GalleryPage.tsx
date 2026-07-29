import { useState } from 'react'
import PageHero from '../components/PageHero'
import PhotoLightbox from '../components/PhotoLightbox'
import ResponsiveImage from '../components/ResponsiveImage'
import Reveal from '../components/Reveal'
import { galleryImages } from '../data/site'

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <>
      <PageHero eyebrow="Sanctuary gallery" title="Quiet moments, curious faces, and lives made safer." image="/images/horse-portrait-2.webp">
        <p>A glimpse of the horses, ponies, paddocks, friendships, and everyday care that make up sanctuary life.</p>
      </PageHero>
      <section className="section section--cream">
        <div className="container gallery-grid">
          {galleryImages.map((photo, index) => (
            <Reveal className={`gallery-tile gallery-tile--${(index % 7) + 1}`} key={photo.src} delay={(index % 5) * 60}>
              <button type="button" onClick={() => setActive(index)} aria-label={`Enlarge: ${photo.alt}`}>
                <ResponsiveImage photo={photo} sizes="(max-width: 560px) 50vw, (max-width: 1100px) 33vw, 25vw" />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {active !== null && (
        <PhotoLightbox
          photos={galleryImages}
          active={active}
          onChange={setActive}
          onClose={() => setActive(null)}
          label="Sanctuary gallery photo viewer"
        />
      )}
    </>
  )
}
