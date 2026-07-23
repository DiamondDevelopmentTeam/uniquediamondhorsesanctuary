import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="container not-found__content">
        <span className="eyebrow eyebrow--light">404</span>
        <h1>This trail does not lead anywhere.</h1>
        <p>The page may have moved, but the sanctuary is still right where the horses need it.</p>
        <Link className="button button--cream" to="/"><ArrowLeft /> Return home</Link>
      </div>
    </section>
  )
}
