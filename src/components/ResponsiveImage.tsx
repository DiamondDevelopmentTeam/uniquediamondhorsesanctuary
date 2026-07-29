import type { CSSProperties, ImgHTMLAttributes } from 'react'
import type { HorsePhoto } from '../data/site'

type ResponsiveImageProps = {
  photo: HorsePhoto
  className?: string
  loading?: ImgHTMLAttributes<HTMLImageElement>['loading']
  fetchPriority?: 'high' | 'low' | 'auto'
  sizes?: string
  objectFit?: CSSProperties['objectFit']
  objectPosition?: CSSProperties['objectPosition']
}

export default function ResponsiveImage({
  photo,
  className,
  loading = 'lazy',
  fetchPriority = 'auto',
  sizes,
  objectFit,
  objectPosition,
}: ResponsiveImageProps) {
  return (
    <picture className={className}>
      {photo.sources?.avif && (
        <source type="image/avif" srcSet={photo.sources.avif} sizes={sizes || photo.sizes} />
      )}
      {photo.sources?.webp && (
        <source type="image/webp" srcSet={photo.sources.webp} sizes={sizes || photo.sizes} />
      )}
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        style={{ objectFit, objectPosition }}
      />
    </picture>
  )
}
