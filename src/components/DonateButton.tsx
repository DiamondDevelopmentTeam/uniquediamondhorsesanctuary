import { Heart } from 'lucide-react'
import { zeffy } from '../data/site'

type DonateButtonProps = {
  className?: string
  label?: string
  icon?: boolean
  href?: string
}

export default function DonateButton({
  className = 'button button--gold',
  label = 'Donate with Zeffy',
  icon = true,
  href = zeffy.donationUrl,
}: DonateButtonProps) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {icon && <Heart size={17} aria-hidden="true" />}
      {label}
    </a>
  )
}
