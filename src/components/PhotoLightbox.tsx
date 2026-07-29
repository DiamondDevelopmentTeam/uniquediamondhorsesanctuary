import { useEffect, useRef, type KeyboardEvent } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { HorsePhoto } from '../data/site'
import ResponsiveImage from './ResponsiveImage'

type PhotoLightboxProps = {
  photos: HorsePhoto[]
  active: number
  onChange: (index: number) => void
  onClose: () => void
  label: string
}

export default function PhotoLightbox({
  photos,
  active,
  onChange,
  onClose,
  label,
}: PhotoLightboxProps) {
  const closeButton = useRef<HTMLButtonElement>(null)
  const returnFocus = useRef<HTMLElement | null>(null)
  const activeRef = useRef(active)
  activeRef.current = active
  const previous = () => onChange((activeRef.current - 1 + photos.length) % photos.length)
  const next = () => onChange((activeRef.current + 1) % photos.length)

  useEffect(() => {
    returnFocus.current = document.activeElement as HTMLElement | null
    closeButton.current?.focus()

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft' && photos.length > 1) previous()
      if (event.key === 'ArrowRight' && photos.length > 1) next()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      returnFocus.current?.focus()
    }
  }, [])

  const trapFocus = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab') return
    const controls = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]):not([tabindex="-1"])'),
    )
    if (!controls.length) return

    const first = controls[0]
    const last = controls[controls.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  const photo = photos[active]

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={label} onKeyDown={trapFocus}>
      <button className="lightbox__backdrop" type="button" tabIndex={-1} onClick={onClose} aria-label="Close photo viewer" />
      <button ref={closeButton} className="lightbox__close" type="button" onClick={onClose} aria-label="Close photo viewer">
        <X />
      </button>
      {photos.length > 1 && (
        <button className="lightbox__nav lightbox__nav--prev" type="button" onClick={previous} aria-label="Previous photo">
          <ChevronLeft />
        </button>
      )}
      <figure className="lightbox__figure">
        <ResponsiveImage photo={photo} loading="eager" fetchPriority="high" sizes="90vw" />
        {photo.caption && <figcaption>{photo.caption}</figcaption>}
      </figure>
      {photos.length > 1 && (
        <button className="lightbox__nav lightbox__nav--next" type="button" onClick={next} aria-label="Next photo">
          <ChevronRight />
        </button>
      )}
      <span className="lightbox__count">{active + 1} / {photos.length}</span>
    </div>
  )
}
