import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { blogPosts } from '../data/site'

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="The sanctuary journal" title="Stories about trust, recovery, and responsible rescue." image="/images/horse-achiever.webp">
        <p>Reflections from the world of equine care, lifelong sanctuary, and the human lessons horses offer without saying a word.</p>
      </PageHero>
      <section className="section section--cream">
        <div className="container blog-grid">
          {blogPosts.map((post, index) => (
            <Reveal className={`blog-card ${index === 0 ? 'blog-card--featured' : ''}`} key={post.title} delay={(index % 3) * 80}>
              <span className="eyebrow">{post.date}</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span className="blog-card__coming">Full story coming soon <ArrowRight /></span>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
