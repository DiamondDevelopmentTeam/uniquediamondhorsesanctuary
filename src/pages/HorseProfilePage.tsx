import { useState } from 'react'
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import DonateButton from '../components/DonateButton'
import PageMetadata from '../components/PageMetadata'
import PhotoLightbox from '../components/PhotoLightbox'
import ResponsiveImage from '../components/ResponsiveImage'
import Reveal from '../components/Reveal'
import {
  getHorseBySlug,
  getHorseDonationUrl,
  getHorseProfileUrl,
  getRelatedHorses,
  siteUrl,
} from '../data/site'

const formatSex = (sex: string) => sex.charAt(0).toUpperCase() + sex.slice(1)

const getSocialImageUrl = (src: string) => {
  const imagePath = src.split('/images/')[1]
  return imagePath ? new URL(`images/${imagePath}`, siteUrl).toString() : siteUrl
}

export default function HorseProfilePage() {
  const { horseSlug = '' } = useParams()
  const horse = getHorseBySlug(horseSlug)
  const [activePhoto, setActivePhoto] = useState<number | null>(null)

  if (!horse) {
    return (
      <section className="section profile-not-found">
        <div className="container">
          <span className="eyebrow">Resident profile</span>
          <h1>Horse profile not found</h1>
          <p>The requested profile may have moved, or the address may be incomplete.</p>
          <Link className="button button--dark" to="/horses">View all horses</Link>
        </div>
      </section>
    )
  }

  const relatedHorses = getRelatedHorses(horse)
  const hasAbout = horse.sex || horse.breed || horse.age || horse.birthDate || horse.coat || horse.careNeeds?.length || horse.companions?.length
  const donationLabel = horse.sponsorshipLabel || `Support ${horse.name}`
  const donationUrl = getHorseDonationUrl(horse)
  const profileUrl = getHorseProfileUrl(horse.slug)
  const title = `Meet ${horse.name} | Unique Diamond Horse Sanctuary`

  return (
    <>
      <PageMetadata
        title={title}
        description={`${horse.name} is a resident of Unique Diamond Horse Sanctuary. ${horse.summary}`}
        image={getSocialImageUrl(horse.photos[0].src)}
        url={profileUrl}
      />

      <section className="horse-profile-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/horses">Our Horses</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{horse.name}</span>
          </nav>

          <div className="horse-profile-hero__grid">
            <Reveal className="horse-profile-hero__copy">
              <span className="eyebrow">Sanctuary resident</span>
              <h1>{horse.profileName || horse.name}</h1>
              {horse.profileName && horse.profileName !== horse.name && (
                <p className="horse-profile-hero__known-as">Known as {horse.name}</p>
              )}
              <p className="horse-profile-hero__summary">{horse.summary}</p>
              <div className="horse-profile-hero__actions">
                <DonateButton href={donationUrl} label={donationLabel} className="button button--gold button--large" />
                <Link className="text-link" to="/horses">
                  <ArrowLeft /> Back to all horses
                </Link>
              </div>
            </Reveal>

            <Reveal className="horse-profile-hero__media" delay={100}>
              <button type="button" onClick={() => setActivePhoto(0)} aria-label={`Enlarge photo of ${horse.name}`}>
                <ResponsiveImage
                  photo={horse.photos[0]}
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 820px) 100vw, 52vw"
                />
                <span>View photo</span>
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container horse-profile-content">
          <Reveal className="horse-story">
            <span className="eyebrow">The story so far</span>
            <h2>Meet {horse.name}</h2>
            {horse.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {horse.needsReview && (
              <p className="profile-review-note">
                This profile will be expanded as the sanctuary team confirms more of {horse.name}’s history.
              </p>
            )}
          </Reveal>

          {hasAbout && (
            <Reveal className="horse-facts" delay={100}>
              <span className="eyebrow">Confirmed information</span>
              <h2>About {horse.name}</h2>
              <dl>
                {horse.sex && horse.sex !== 'unknown' && (
                  <div><dt>Sex</dt><dd>{formatSex(horse.sex)}</dd></div>
                )}
                {horse.breed && (
                  <div><dt>Breed</dt><dd>{horse.breed}</dd></div>
                )}
                {horse.age && (
                  <div><dt>Age</dt><dd>{horse.age}</dd></div>
                )}
                {horse.birthDate && (
                  <div><dt>Born</dt><dd>{horse.birthDate}</dd></div>
                )}
                {horse.coat && (
                  <div><dt>Coat</dt><dd>{horse.coat}</dd></div>
                )}
                {horse.careNeeds?.length && (
                  <div>
                    <dt>Care needs</dt>
                    <dd><ul>{horse.careNeeds.map((need) => <li key={need}>{need}</li>)}</ul></dd>
                  </div>
                )}
                {horse.companions?.length && (
                  <div>
                    <dt>Companions</dt>
                    <dd><ul>{horse.companions.map((companion) => <li key={companion}>{companion}</li>)}</ul></dd>
                  </div>
                )}
              </dl>
            </Reveal>
          )}
        </div>
      </section>

      {horse.photos.length > 1 && (
        <section className="section section--cream">
          <div className="container">
            <Reveal className="section-heading">
              <span className="eyebrow">Photo gallery</span>
              <h2>More of {horse.name}</h2>
            </Reveal>
            <div className="horse-photo-grid">
              {horse.photos.slice(1).map((photo, index) => (
                <Reveal key={photo.src} delay={(index % 3) * 80}>
                  <button type="button" onClick={() => setActivePhoto(index + 1)} aria-label={`Enlarge: ${photo.alt}`}>
                    <ResponsiveImage photo={photo} sizes="(max-width: 720px) 100vw, 33vw" />
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section horse-support">
        <div className="container horse-support__panel">
          <Reveal>
            <span className="eyebrow eyebrow--light">Symbolic sponsorship</span>
            <h2>Support {horse.name}’s care</h2>
            <p>
              Your gift helps support {horse.name} and the sanctuary’s broader work of providing feed,
              veterinary care, hoof care, shelter, and lifelong safety.
            </p>
            <p className="horse-support__disclaimer">
              Horse sponsorship is symbolic and supports the sanctuary’s ongoing mission to provide feed,
              veterinary care, hoof care, shelter, and lifelong safety. It does not confer ownership or adoption rights.
            </p>
          </Reveal>
          <DonateButton href={donationUrl} label={donationLabel} className="button button--gold button--large" />
          <Heart className="horse-support__heart" aria-hidden="true" />
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Continue meeting the herd</span>
            <h2>Related resident profiles</h2>
          </div>
          <div className="related-horses">
            {relatedHorses.map((related) => (
              <Link className="related-horse" key={related.slug} to={`/horses/${related.slug}`}>
                <ResponsiveImage photo={related.photos[0]} sizes="(max-width: 720px) 100vw, 33vw" />
                <span>
                  <strong>{related.name}</strong>
                  <small>{related.summary}</small>
                  <em>Read their story <ArrowRight /></em>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {activePhoto !== null && (
        <PhotoLightbox
          photos={horse.photos}
          active={activePhoto}
          onChange={setActivePhoto}
          onClose={() => setActivePhoto(null)}
          label={`${horse.name} photo viewer`}
        />
      )}
    </>
  )
}
