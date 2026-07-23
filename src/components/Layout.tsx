import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShoppingBag,
  Youtube,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { contact, navItems, socialLinks, zeffy } from '../data/site'
import Brand from './Brand'
import DonateButton from './DonateButton'

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="capacity-bar">
        <div className="container capacity-bar__inner">
          <strong>Sanctuary update:</strong>
          <span>Currently at full capacity. Visits and groups are limited to approved requests.</span>
        </div>
      </div>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container site-header__inner">
          <NavLink to="/" aria-label="Unique Diamond Horse Sanctuary home" className="site-header__brand">
            <Brand compact={scrolled} />
          </NavLink>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="site-header__actions">
            <a className="icon-button icon-button--shop" href={zeffy.shopUrl} target="_blank" rel="noreferrer" aria-label="Shop on Zeffy">
              <ShoppingBag size={19} />
            </a>
            <DonateButton className="button button--gold header-donate" label="Donate" />
            <button className="menu-button" type="button" onClick={() => setOpen(true)} aria-label="Open menu">
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <button className="mobile-drawer__backdrop" onClick={() => setOpen(false)} aria-label="Close menu" />
        <aside className="mobile-drawer__panel">
          <div className="mobile-drawer__top">
            <Brand />
            <button className="icon-button" type="button" onClick={() => setOpen(false)} aria-label="Close menu">
              <X />
            </button>
          </div>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/shop">Shop</NavLink>
          </nav>
          <DonateButton className="button button--gold button--wide" />
        </aside>
      </div>

      <main id="main-content">
        <Outlet />
      </main>

      <section className="footer-cta">
        <div className="container footer-cta__inner">
          <div>
            <span className="eyebrow eyebrow--light">Keep the promise going</span>
            <h2>Every horse here depends on daily care.</h2>
            <p>Your gift helps provide feed, medical attention, hoof care, safe shelter, and the patient work of healing.</p>
          </div>
          <DonateButton className="button button--cream button--large" label="Support the herd" />
        </div>
      </section>

      <footer className="site-footer">
        <div className="container site-footer__grid">
          <div className="site-footer__brand">
            <Brand />
            <div className="footer-donate">
              <span className="footer-donate__label">
                Help support their daily care
              </span>

              <DonateButton
                className="button button--gold footer-donate__button"
                label="Donate through Zeffy"
              />
            </div>
            <div className="social-row">
              <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
              <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok"><span className="social-letter">T</span></a>
              <a href={socialLinks.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube /></a>
              <a href={socialLinks.zeffy} target="_blank" rel="noreferrer" aria-label="Zeffy"><span className="social-letter">Z</span></a>
            </div>
          </div>

          <div>
            <h3>Explore</h3>
            <div className="footer-links">
              {navItems.slice(0, 6).map((item) => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}
              <NavLink to="/faqs">FAQs</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>

          <div>
            <h3>Contact</h3>
            <div className="footer-contact">
              <a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noreferrer"><MapPin />{contact.address}</a>
              <a href={`tel:${contact.phone.replace(/\D/g, '')}`}><Phone />{contact.phone}</a>
              <a href={`mailto:${contact.emails[0]}`}><Mail />{contact.emails[0]}</a>
              <a href={`mailto:${contact.emails[1]}`}><Mail />{contact.emails[1]}</a>
            </div>
          </div>
        </div>
        <div className="container site-footer__bottom">
          <span>Unique Diamond Horse Sanctuary is a qualified 501(c)(3) tax-exempt organization.</span>
          <span>© {new Date().getFullYear()} Unique Diamond Horse Sanctuary. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
