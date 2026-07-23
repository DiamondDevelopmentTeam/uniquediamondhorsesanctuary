import { ChevronDown } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { faqs } from '../data/site'

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="Frequently asked questions" title="Clear answers about capacity, visits, donations, and care." image="/images/horse-misty.webp">
        <p>The sanctuary's current priority is protecting the health, safety, and daily needs of the horses already in its care.</p>
      </PageHero>
      <section className="section section--cream">
        <div className="container faq-layout">
          <Reveal className="faq-layout__intro">
            <span className="eyebrow">Before you reach out</span>
            <h2>Responsible rescue includes honest limits.</h2>
            <p>
              The sanctuary is currently at full capacity, and visits are restricted. These boundaries help preserve the calm, health, space, and attention every resident deserves.
            </p>
            <img src="/images/horse-portrait-6.webp" alt="A rescued horse resting in a pasture" />
          </Reveal>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={(index % 3) * 50}>
                <details className="faq-item" open={index === 0}>
                  <summary>{faq.question}<ChevronDown /></summary>
                  <p>{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
