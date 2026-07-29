import { useEffect } from 'react'

type PageMetadataProps = {
  title: string
  description: string
  image?: string
  url?: string
}

const setMeta = (property: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.appendChild(element)
  }
  element.content = content
}

export default function PageMetadata({ title, description, image, url }: PageMetadataProps) {
  useEffect(() => {
    const previousTitle = document.title
    const descriptionMeta = document.head.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = descriptionMeta?.content

    document.title = title
    if (descriptionMeta) descriptionMeta.content = description
    setMeta('og:title', title)
    setMeta('og:description', description)
    setMeta('og:type', 'website')
    if (image) setMeta('og:image', image)
    if (url) setMeta('og:url', url)

    return () => {
      document.title = previousTitle
      if (descriptionMeta && previousDescription) descriptionMeta.content = previousDescription
    }
  }, [description, image, title, url])

  return null
}
