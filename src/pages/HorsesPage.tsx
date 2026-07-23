import { useState } from 'react'
import { Heart, X } from 'lucide-react'
import DonateButton from '../components/DonateButton'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { horses, type Horse } from '../data/site'

export default function HorsesPage() {
  const [selected, setSelected] = useState<Horse | null>(null)

  return (
    <>
      <PageHero eyebrow="Meet the rescue horses" title="They are not simply part of the sanctuary. They are its heart." image="/images/horse-field.webp">
        <p>Every resident carries a different story, but each one shares the same promise: safety, dignity, and dependable care.</p>
      </PageHero>

      <section className="section section--cream">
        <div className="container intro-panel">
          <Reveal>
            <span className="eyebrow">An ongoing promise</span>
            <h2>Rescuing a horse is not a one-time event.</h2>
            <p>
              It is a commitment to nutritious feed, clean water, veterinary monitoring, hoof care, safe shelter, secure fencing, patient handling, and the time each animal needs to settle into a new life.
            </p>
          </Reveal>
          <Reveal className="intro-panel__action" delay={100}>
            <Heart />
            <p>Every donation helps the sanctuary continue honoring that promise.</p>
            <DonateButton className="button button--gold" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="horse-grid">
            {horses.map((horse, index) => (
              <Reveal key={horse.name} className="horse-card" delay={(index % 4) * 70}>
                <button type="button" onClick={() => setSelected(horse)} aria-label={`Read ${horse.name}'s story`}>
                  <span className="horse-card__image-wrap">
                    <img src={horse.image} alt={`${horse.name} at Unique Diamond Horse Sanctuary`} loading="lazy" />
                    <span className="horse-card__hover">Read their story</span>
                  </span>
                  <span className="horse-card__copy">
                    <span className="eyebrow">Sanctuary resident</span>
                    <strong>{horse.name}</strong>
                    <span>{horse.summary}</span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="horse-modal-title">
          <button className="modal__backdrop" type="button" onClick={() => setSelected(null)} aria-label="Close story" />
          <article className="horse-modal">
            <button className="modal__close" type="button" onClick={() => setSelected(null)} aria-label="Close story"><X /></button>
            <img src={selected.image} alt={`${selected.name} at the sanctuary`} />
            <div className="horse-modal__copy">
              <span className="eyebrow">Meet {selected.name}</span>
              <h2 id="horse-modal-title">{selected.name}</h2>
              <p>{selected.story}</p>
              <DonateButton className="button button--gold" label={`Support horses like ${selected.name}`} />
            </div>
          </article>
        </div>
      )}
    </>
  )
}
