import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '../ui/Container'

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/locations', label: 'Locations' },
  { to: '/contact', label: 'Contact' },
]

function navLinkClass(isActive: boolean) {
  return [
    'rounded-full px-3 py-2 text-sm font-medium transition',
    isActive
      ? 'bg-cream-200 text-brown-900'
      : 'text-brown-700 hover:bg-cream-100 hover:text-brown-900',
  ].join(' ')
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brown-800/5 bg-cream-50/90 backdrop-blur-md">
      <Container as="div" className="flex items-center justify-between py-3">
        <NavLink
          to="/"
          className="font-display text-xl tracking-tight text-brown-900"
          end
        >
          AS Café
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={({ isActive }) => navLinkClass(isActive)} end={to === '/'}>
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream-100 text-brown-800 ring-1 ring-brown-800/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-brown-800/5 bg-cream-50 md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4 pb-6">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      'rounded-2xl px-4 py-3 text-base font-medium',
                      isActive
                        ? 'bg-olive-500/15 text-brown-900'
                        : 'text-brown-800 hover:bg-cream-100',
                    ].join(' ')
                  }
                >
                  {label}
                </NavLink>
              ))}
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
