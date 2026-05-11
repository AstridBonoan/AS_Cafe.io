import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-brown-800/10 bg-brown-900 text-cream-100">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <p className="font-display text-xl text-cream-50">AS Café</p>
          <p className="text-sm leading-relaxed text-cream-200/90">
            Small-batch coffee, soft corners, and room to breathe. Made with care
            in the Pacific Northwest.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-olive-400">
            Visit
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-white" to="/menu">
                Menu
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/locations">
                Locations
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-olive-400">
            Story
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-white" to="/about">
                About us
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-olive-400">
            Hours (Riverside)
          </p>
          <p className="text-sm text-cream-200/90">Mon–Fri 7–7 · Sat–Sun 8–8</p>
          <p className="text-sm">
            <a className="underline decoration-cream-400/40 underline-offset-4 hover:text-white" href="tel:+15035550142">
              (503) 555-0142
            </a>
          </p>
        </div>
      </Container>
      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-cream-300 sm:flex-row">
          <span>© {new Date().getFullYear()} AS Café. All rights reserved.</span>
          <span className="text-cream-400">Crafted for calm mornings.</span>
        </Container>
      </div>
    </footer>
  )
}
