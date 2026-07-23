import { ArrowUpRight, ShoppingBag } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { zeffy } from '../data/site'

const products = [
  { title: 'Signature Snapback Hats', image: '/images/horse-portrait-6.webp', text: 'A durable everyday hat featuring sanctuary-inspired embroidery and the rescued-horse mission.' },
  { title: 'Drinkware', image: '/images/horse-field.webp', text: 'Practical tumblers and drinkware that carry the sanctuary story wherever the day goes.' },
  { title: 'T-Shirt Collection', image: '/images/sanctuary-life.webp', text: 'Comfortable designs inspired by the beauty, resilience, and personality of the rescue herd.' },
]

export default function ShopPage() {
  return (
    <>
      <PageHero eyebrow="Shop to support rescue" title="Wear the mission. Carry the story. Help fund the care." image="/images/horse-portrait-4.webp">
        <p>Purchases through the sanctuary collection help support feed, veterinary care, shelter, and everyday upkeep.</p>
      </PageHero>
      <section className="section section--cream">
        <div className="container">
          <Reveal className="shop-intro">
            <ShoppingBag />
            <div>
              <span className="eyebrow">Shop securely through Zeffy</span>
              <h2>Every purchase has a purpose.</h2>
              <p>Browse the current collection on the sanctuary's Zeffy shop. Inventory, sizes, pricing, and fulfillment are managed on the Zeffy campaign page.</p>
            </div>
            <a className="button button--gold button--large" href={zeffy.shopUrl} target="_blank" rel="noreferrer">Open the Zeffy shop <ArrowUpRight /></a>
          </Reveal>
          <div className="product-grid">
            {products.map((product, index) => (
              <Reveal className="product-card" key={product.title} delay={index * 100}>
                <img src={product.image} alt="Sanctuary horse featured with merchandise collection" />
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.text}</p>
                  <a href={zeffy.shopUrl} target="_blank" rel="noreferrer">Shop now <ArrowUpRight /></a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
