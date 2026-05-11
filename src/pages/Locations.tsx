import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/SectionHeading'
import { locations } from '../data/locations'
import { fadeUpTight as fadeUp } from '../lib/motion'

export function Locations() {
  return (
    <div className="pb-20 pt-10 sm:pb-28 sm:pt-14">
      <Container>
        <SectionHeading
          eyebrow="Locations"
          title="Three doors, same calm"
          description="Each café borrows light differently — choose the neighbourhood that fits your day."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {locations.map((loc, i) => (
            <motion.div key={loc.id} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }}>
              <Card className="flex h-full flex-col">
                <div className="mb-5 aspect-[16/10] overflow-hidden rounded-2xl bg-cream-200 ring-1 ring-brown-800/10">
                  <img
                    src={loc.imageSrc}
                    alt={loc.imageAlt}
                    className="h-full w-full object-cover"
                    width={800}
                    height={500}
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-2xl text-brown-900">{loc.name}</h3>
                <p className="mt-2 text-sm text-brown-600">
                  {loc.address}
                  <br />
                  {loc.city}
                </p>
                <div className="mt-4 space-y-1 text-sm text-brown-700">
                  {loc.hours.map((h) => (
                    <p key={h}>{h}</p>
                  ))}
                </div>
                <p className="mt-4">
                  <a
                    href={`tel:${loc.phone.replace(/\D/g, '')}`}
                    className="font-medium text-brown-900 underline decoration-brown-800/20 underline-offset-4 hover:decoration-brown-800"
                  >
                    {loc.phone}
                  </a>
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {loc.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full bg-cream-100 px-3 py-1 text-xs font-medium text-brown-700 ring-1 ring-brown-800/10"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-brown-800 px-4 py-2.5 text-center text-sm font-semibold text-cream-50 shadow-soft transition hover:bg-brown-700"
                  >
                    Open in Maps
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  )
}
