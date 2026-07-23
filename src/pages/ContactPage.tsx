import { FormEvent, useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { contact } from '../data/site'

export default function ContactPage() {
  const [status, setStatus] = useState('')
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim() || ''

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (endpoint) {
      setStatus('Sending…')
      try {
        const response = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        if (!response.ok) throw new Error('Form request failed')
        form.reset()
        setStatus('Thank you. Your request has been sent.')
      } catch {
        setStatus('The form could not be sent. Please email or call the sanctuary directly.')
      }
      return
    }

    const subject = encodeURIComponent(`Sanctuary request from ${String(data.get('name') || '')}`)
    const body = encodeURIComponent([
      `Name: ${String(data.get('name') || '')}`,
      `Email: ${String(data.get('email') || '')}`,
      `Phone: ${String(data.get('phone') || '')}`,
      `Reason: ${String(data.get('reason') || '')}`,
      '',
      String(data.get('message') || ''),
    ].join('\n'))
    window.location.href = `mailto:${contact.emails[0]}?subject=${subject}&body=${body}`
    setStatus('An email draft has been opened for you.')
  }

  return (
    <>
      <PageHero eyebrow="Contact the sanctuary" title="Reach out with a question, support offer, or visit request." image="/images/horse-leonardo.webp">
        <p>Please remember that the sanctuary is at full capacity and visits are limited to requests reviewed in advance.</p>
      </PageHero>
      <section className="section section--cream">
        <div className="container contact-layout">
          <Reveal className="contact-details">
            <span className="eyebrow">Direct contact</span>
            <h2>We would be glad to hear from you.</h2>
            <p>For the fastest response, include the reason for your message and any relevant dates or details.</p>
            <a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noreferrer"><MapPin /><span><strong>Mailing address</strong>{contact.address}</span></a>
            <a href={`tel:${contact.phone.replace(/\D/g, '')}`}><Phone /><span><strong>Phone</strong>{contact.phone}</span></a>
            {contact.emails.map((email) => <a key={email} href={`mailto:${email}`}><Mail /><span><strong>Email</strong>{email}</span></a>)}
            <div className="contact-details__note">
              <strong>Visits are by approved request only.</strong>
              <span>Please do not arrive at the sanctuary without confirmation.</span>
            </div>
          </Reveal>

          <Reveal className="contact-form-card" delay={100}>
            <span className="eyebrow">Send a request</span>
            <h2>How can we help?</h2>
            <form onSubmit={handleSubmit}>
              <label>Full name<input name="name" autoComplete="name" required /></label>
              <div className="form-row">
                <label>Email<input name="email" type="email" autoComplete="email" required /></label>
                <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
              </div>
              <label>Reason for contacting us
                <select name="reason" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Donation or sponsorship</option>
                  <option>Volunteer availability</option>
                  <option>Visit request</option>
                  <option>Media or community partnership</option>
                  <option>General question</option>
                </select>
              </label>
              <label>Message<textarea name="message" rows={6} required /></label>
              <button className="button button--gold button--wide" type="submit"><Send size={17} /> Send request</button>
              {status && <p className="form-status" role="status">{status}</p>}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
