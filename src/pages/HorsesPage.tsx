import { ArrowRight, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import DonateButton from '../components/DonateButton'
import PageHero from '../components/PageHero'
import ResponsiveImage from '../components/ResponsiveImage'
import Reveal from '../components/Reveal'
import { getHorseDonationUrl, horses } from '../data/site'

export default function HorsesPage() {
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
              <Reveal key={horse.slug} className="horse-card" delay={(index % 4) * 70}>
                <Link className="horse-card__primary" to={`/horses/${horse.slug}`} aria-label={`Read ${horse.name}'s story`}>
                  <span className="horse-card__image-wrap">
                    <ResponsiveImage photo={horse.photos[0]} sizes="(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                    <span className="horse-card__hover">Read their story</span>
                  </span>
                  <span className="horse-card__copy">
                    <span className="eyebrow">Sanctuary resident</span>
                    <strong>{horse.name}</strong>
                    <span>{horse.summary}</span>
                  </span>
                </Link>
                <div className="horse-card__actions">
                  <Link className="text-link" to={`/horses/${horse.slug}`}>
                    Read their story <ArrowRight />
                  </Link>
                  <a href={getHorseDonationUrl(horse)} target="_blank" rel="noreferrer">
                    {horse.sponsorshipLabel || `Support ${horse.name}`}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
