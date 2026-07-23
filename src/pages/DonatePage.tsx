import { ArrowUpRight, Heart, Home, Stethoscope, Wheat } from 'lucide-react'
import DonateButton from '../components/DonateButton'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { zeffy } from '../data/site'

const tiers = [
  { amount: '$25', title: 'Feed Support', text: 'Helps provide hay, grain, or nutritional support.' },
  { amount: '$50', title: 'Care Essentials', text: 'Supports routine medical needs, supplies, and medications.' },
  { amount: '$100', title: 'A Month of Support', text: 'Contributes to food, shelter, hoof care, and daily upkeep.' },
  { amount: '$350', title: 'A Larger Care Need', text: 'Helps with a farrier visit, repair, treatment, or special care.' },
  { amount: '$500', title: 'Healing in Action', text: 'Makes a meaningful contribution toward rehabilitation and long-term care.' },
  { amount: 'Any', title: 'Custom Gift', text: 'Every amount helps the sanctuary keep showing up for the herd.' },
]

export default function DonatePage() {
  return (
    <>
      <PageHero eyebrow="Give through Zeffy" title="Every gift becomes practical care for a rescued horse." image="/images/horse-portrait-1.webp">
        <p>Your support helps turn uncertainty into steady meals, clean shelter, medical attention, and a future protected by compassion.</p>
      </PageHero>

      <section className="section section--cream">
        <div className="container donation-intro">
          <Reveal className="content-block">
            <span className="eyebrow">Why your support matters</span>
            <h2>The peaceful field is only possible because someone paid for the work behind it.</h2>
            <p className="lead">
              A sanctuary runs on real resources: hay deliveries, veterinary appointments, medication, farrier care, bedding, repairs, equipment, and the people who show up every day.
            </p>
            <DonateButton className="button button--gold button--large" label="Open the Zeffy donation form" />
            <p className="microcopy">The donation form opens securely in a new tab.</p>
          </Reveal>
          <Reveal className="care-wheel" delay={100}>
            {[
              { icon: Wheat, label: 'Feed' },
              { icon: Stethoscope, label: 'Medical' },
              { icon: Home, label: 'Shelter' },
              { icon: Heart, label: 'Healing' },
            ].map((item) => (
              <div key={item.label}><item.icon /><span>{item.label}</span></div>
            ))}
            <strong>Daily<br />Care</strong>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">Suggested giving levels</span>
            <h2>Choose the level that fits your heart and budget.</h2>
          </Reveal>
          <div className="tier-grid">
            {tiers.map((tier, index) => (
              <Reveal className="tier-card" key={`${tier.amount}-${tier.title}`} delay={(index % 3) * 80}>
                <span className="tier-card__amount">{tier.amount}</span>
                <h3>{tier.title}</h3>
                <p>{tier.text}</p>
                <a href={zeffy.donationUrl} target="_blank" rel="noreferrer">Give this amount <ArrowUpRight /></a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {zeffy.embedUrl && (
        <section className="section section--cream">
          <div className="container">
            <Reveal className="section-heading section-heading--center">
              <span className="eyebrow">Donate without leaving the site</span>
              <h2>Secure Zeffy donation form</h2>
            </Reveal>
            <div className="zeffy-embed">
              <iframe src={zeffy.embedUrl} title="Zeffy donation form" loading="lazy" />
            </div>
          </div>
        </section>
      )}

      <section className="section section--green">
        <div className="container quote-panel">
          <Reveal>
            <span className="eyebrow eyebrow--light">Every contribution counts</span>
            <blockquote>“Your gift does not simply fund a place. It protects a life, preserves a promise, and makes another day of comfort possible.”</blockquote>
          </Reveal>
          <DonateButton className="button button--cream button--large" label="Donate with Zeffy" />
        </div>
      </section>
    </>
  )
}
