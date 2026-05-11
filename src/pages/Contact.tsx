import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Button } from '../components/ui/Button'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="pb-20 pt-10 sm:pb-28 sm:pt-14">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="Contact"
              title="Say hello — we actually read these"
              description="Questions about catering, loyalty, or renting the nook for a tiny gathering? Send a note and we’ll reply within two business days."
            />
            <div className="mt-8 space-y-4 rounded-3xl bg-cream-100 p-6 ring-1 ring-brown-800/10">
              <p className="text-sm font-semibold text-brown-900">Visit</p>
              <p className="text-sm leading-relaxed text-brown-700">
                hello@ascafe.example
                <br />
                <a className="font-medium underline decoration-brown-800/25 underline-offset-4" href="tel:+15035550142">
                  (503) 555-0142
                </a>
              </p>
              <p className="text-xs text-brown-600">
                This demo form doesn’t send email — it&apos;s a front-end showcase only.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-brown-800/10 sm:p-8"
          >
            {sent ? (
              <div className="py-12 text-center">
                <p className="font-display text-2xl text-brown-900">Thank you!</p>
                <p className="mt-3 text-sm text-brown-600">
                  Your message would be on its way — in production we&apos;d route this to our inbox.
                </p>
                <Button type="button" variant="secondary" className="mt-8" onClick={() => setSent(false)}>
                  Send another
                </Button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brown-800">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-2xl border border-brown-800/15 bg-cream-50 px-4 py-3 text-brown-900 outline-none ring-brown-800/0 transition focus:border-olive-500 focus:ring-2 focus:ring-olive-500/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brown-800">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-2xl border border-brown-800/15 bg-cream-50 px-4 py-3 text-brown-900 outline-none transition focus:border-olive-500 focus:ring-2 focus:ring-olive-500/30"
                  />
                </div>
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-brown-800">
                    Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="mt-2 w-full rounded-2xl border border-brown-800/15 bg-cream-50 px-4 py-3 text-brown-900 outline-none transition focus:border-olive-500 focus:ring-2 focus:ring-olive-500/30"
                    defaultValue="general"
                  >
                    <option value="general">General question</option>
                    <option value="loyalty">Loyalty program</option>
                    <option value="events">Private nook / small events</option>
                    <option value="wholesale">Wholesale partnerships</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brown-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-y rounded-2xl border border-brown-800/15 bg-cream-50 px-4 py-3 text-brown-900 outline-none transition focus:border-olive-500 focus:ring-2 focus:ring-olive-500/30"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Send message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
