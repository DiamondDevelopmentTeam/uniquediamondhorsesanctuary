import { CalendarDays, Cat, Gift } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow="Sanctuary news" title="Updates from the herd and the community around it." image="/images/horse-portrait-3.webp">
        <p>Stories of care, community support, and the small acts of kindness that ripple beyond the pasture.</p>
      </PageHero>
      <section className="section section--cream">
        <div className="container news-stack">
          <Reveal className="news-feature">
            <div className="news-feature__image">
              <img src="/images/horse-colt-dutchess.webp" alt="Mini horses at Unique Diamond Horse Sanctuary" />
              <span><CalendarDays /> 2026 Community Project</span>
            </div>
            <article>
              <Gift />
              <span className="eyebrow">Community care</span>
              <h2>Easter basket gifts for foster children</h2>
              <p>
                Each year, Unique Diamond Horse Sanctuary continues a tradition close to its heart: preparing Easter baskets for foster children in the community. The baskets carry candy, small gifts, and a larger message that every child deserves to feel remembered and valued.
              </p>
              <p>
                Supporters, donors, and volunteers make the project possible. It is a small act with a bright echo: one child, one horse, one moment of kindness at a time.
              </p>
            </article>
          </Reveal>

          <Reveal className="news-feature news-feature--reverse">
            <div className="news-feature__image">
              <img src="/images/horse-care.webp" alt="A sanctuary horse in the paddock" />
              <span><CalendarDays /> Sanctuary Life</span>
            </div>
            <article>
              <Cat />
              <span className="eyebrow">New sanctuary residents</span>
              <h2>Feline friends join the farm team</h2>
              <p>
                Sydney, a gray tabby, and Ranga, a ginger tabby, joined the sanctuary through Marion County Animal Services' Working Whiskers program. The program places less-social cats in environments where they can thrive as natural rodent deterrents.
              </p>
              <p>
                Their sunny naps and curious patrols have added another layer of personality to sanctuary life, proving that a safe home can take many forms.
              </p>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  )
}
