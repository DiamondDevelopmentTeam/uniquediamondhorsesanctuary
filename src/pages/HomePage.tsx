import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles, Wheat } from 'lucide-react'
import { Link } from 'react-router-dom'
import DonateButton from '../components/DonateButton'
import Reveal from '../components/Reveal'
import { horses } from '../data/site'

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__image" />
        <div className="home-hero__shade" />
        <div className="container home-hero__content">
          <Reveal>
            <span className="eyebrow eyebrow--light">Rescue. Recovery. Lifelong care.</span>
            <h1>A safe haven where second chances become forever.</h1>
            <p>
              Unique Diamond Horse Sanctuary gives vulnerable horses the nourishment, medical support, stability, and patient care they need to feel safe again.
            </p>
            <div className="hero-actions">
              <DonateButton className="button button--gold button--large" label="Help a horse today" />
              <Link className="button button--glass button--large" to="/horses">
                Meet the herd <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="home-hero__badge">
          <strong>Ocala, Florida</strong>
          <span>Compassion in the heart of horse country</span>
        </div>
      </section>

      <section className="notice-section">
        <div className="container notice-card">
          <div className="notice-card__icon"><ShieldCheck /></div>
          <div>
            <span className="eyebrow">Important sanctuary update</span>
            <h2>We are currently at full capacity.</h2>
            <p>
              The need continues to grow, but responsible rescue means protecting the horses already depending on us. Visits, groups, and outside interaction are limited to approved requests while the team focuses on herd health and daily care.
            </p>
          </div>
          <Link className="text-link" to="/faqs">Read current FAQs <ArrowRight /></Link>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container split split--image-left">
          <Reveal className="photo-stack">
            <img className="photo-stack__main" src="/images/horse-portrait-5.webp" alt="Two rescued horses standing together in a pasture" />
            <img className="photo-stack__accent" src="/images/horse-care.webp" alt="A rescued horse receiving gentle care" />
            <span className="photo-stack__note">Every horse has a story worth protecting.</span>
          </Reveal>
          <Reveal className="content-block" delay={120}>
            <span className="eyebrow">Where rescue becomes responsibility</span>
            <h2>Rescue is the first chapter, not the last.</h2>
            <p className="lead">
              True sanctuary means showing up every day with feed, clean water, safe fencing, veterinary support, hoof care, shelter maintenance, and patient human attention.
            </p>
            <p>
              Many horses arrive carrying the effects of neglect, injury, abandonment, or uncertainty. Here, care is steady and personal. The goal is not simply survival. It is comfort, dignity, trust, and a life that finally feels safe.
            </p>
            <Link className="button button--dark" to="/about">Our story <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">What your support provides</span>
            <h2>The everyday work behind every peaceful pasture.</h2>
            <p>Care is a thousand practical details woven together, day after day.</p>
          </Reveal>
          <div className="impact-grid">
            {[
              { icon: Wheat, title: 'Feed & Nutrition', text: 'Hay, grain, clean water, supplements, and specialized feeding plans.' },
              { icon: HeartHandshake, title: 'Medical Care', text: 'Veterinary exams, medications, dental care, emergency treatment, and rehabilitation.' },
              { icon: ShieldCheck, title: 'Safe Shelter', text: 'Secure fencing, clean stalls, bedding, maintenance, and weather-ready spaces.' },
              { icon: Sparkles, title: 'Patient Healing', text: 'Calm routines, compassionate handling, grooming, companionship, and time.' },
            ].map((item, index) => (
              <Reveal key={item.title} className="impact-card" delay={index * 80}>
                <item.icon />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--green">
        <div className="container">
          <Reveal className="section-heading section-heading--light">
            <span className="eyebrow eyebrow--light">Meet a few members of the herd</span>
            <h2>Sixteen stories. One promise of lifelong care.</h2>
            <Link className="text-link text-link--light" to="/horses">Meet every horse <ArrowRight /></Link>
          </Reveal>
          <div className="featured-horses">
            {horses.slice(0, 4).map((horse, index) => (
              <Reveal key={horse.name} className="featured-horse" delay={index * 90}>
                <img src={horse.image} alt={`${horse.name}, a rescued horse at the sanctuary`} loading="lazy" />
                <div>
                  <h3>{horse.name}</h3>
                  <p>{horse.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container donation-story">
          <Reveal className="donation-story__copy">
            <span className="eyebrow">Your generosity in motion</span>
            <h2>A donation becomes hay, medicine, hoof care, and another safe night.</h2>
            <p>
              The quiet moments visitors see are made possible by the work they do not see: emergency appointments, special feed, repairs, cleaning, monitoring, and the slow rebuilding of trust.
            </p>
            <DonateButton className="button button--gold button--large" label="Donate securely with Zeffy" />
          </Reveal>
          <Reveal className="donation-story__image" delay={100}>
            <img src="/images/horse-portrait-4.webp" alt="Rescued horses in a sunny paddock" loading="lazy" />
            <div className="donation-story__quote">“They deserve more than rescue. They deserve to feel safe again.”</div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
