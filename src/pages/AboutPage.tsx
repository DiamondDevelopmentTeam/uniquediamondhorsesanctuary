import { ArrowRight, Heart, Home, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About the sanctuary" title="A mission shaped by resilience, compassion, and horses.">
        <p>Unique Diamond Horse Sanctuary grew from a deeply personal understanding of the safety and healing that animals can offer.</p>
      </PageHero>

      <section className="section section--cream">
        <div className="container split">
          <Reveal className="content-block">
            <span className="eyebrow">Meet founder Veronica Lake</span>
            <h2>Healing horses. Protecting hope.</h2>
            <p className="lead">
              Veronica Lake founded the sanctuary from a belief that compassion can interrupt hardship and create a different future.
            </p>
            <p>
              Raised within the foster care system, Veronica experienced instability early in life. Horses became a refuge during difficult years, offering a calm, nonjudgmental presence when words could not. That bond stayed with her and eventually shaped a sanctuary rooted in safety, dignity, and second chances.
            </p>
            <p>
              Today, the sanctuary centers its attention on rescued horses and ponies who need daily nourishment, veterinary support, rehabilitation, secure shelter, and a peaceful forever home.
            </p>
          </Reveal>
          <Reveal className="founder-card" delay={100}>
            <img
              src="/images/founder-veronica-original.jpg"
              alt="Veronica Lake standing beside a black-and-white sanctuary horse"
              loading="lazy"
              decoding="async"
            />
            <div className="founder-card__caption">
              <strong>Veronica Lake</strong>
              <span>Founder, Unique Diamond Horse Sanctuary</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">Our guiding commitments</span>
            <h2>Care that is practical, personal, and built to last.</h2>
          </Reveal>
          <div className="value-grid">
            {[
              { icon: Home, title: 'A Forever Home', text: 'The sanctuary provides stable, long-term care rather than a temporary stop between uncertain places.' },
              { icon: ShieldCheck, title: 'Responsible Capacity', text: 'Knowing when to pause intake protects the health, space, and attention owed to every current resident.' },
              { icon: Heart, title: 'Dignity in Every Detail', text: 'From medication schedules to clean bedding, respectful care lives in consistent daily actions.' },
            ].map((value, index) => (
              <Reveal className="value-card" key={value.title} delay={index * 100}>
                <value.icon />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--forest-photo">
        <div className="container forest-photo__content">
          <Reveal>
            <span className="eyebrow eyebrow--light">The work today</span>
            <h2>The sanctuary is growing in responsibility, not just in numbers.</h2>
            <p>
              With the herd at capacity and equine health concerns requiring careful protocols, visits are limited by request. The priority is clear: protect the animals already here and give them the best life possible.
            </p>
            <Link className="button button--cream" to="/contact">Request information <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
