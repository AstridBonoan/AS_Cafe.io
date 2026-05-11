import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/SectionHeading'
import { fadeUpAbout as fadeUp } from '../lib/motion'

export function About() {
  return (
    <div className="pb-20 pt-10 sm:pb-28 sm:pt-14">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="We built a room for soft voices"
          description="AS Café began as a Sunday ritual — friends grinding beans on a borrowed burr grinder, baking cardamom buns until the windows fogged. Today we keep that spirit: gentle roast curves, olive branches on the bar, and chairs wide enough for poetry notebooks."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <motion.div {...fadeUp} className="overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-brown-800/10">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=85"
              alt="Cozy café interior with wooden tables and pendant lights"
              width={1000}
              height={750}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <div className="space-y-8">
            <motion.div {...fadeUp}>
              <h3 className="font-display text-2xl text-brown-900">Our roast philosophy</h3>
              <p className="mt-3 text-base leading-relaxed text-brown-600">
                We favor slower development times — enough caramel sweetness to pair with milk,
                never sharp enough to rush you out the door. Espresso pulls are dialed daily on
                burrs we align by ear as much as by scale.
              </p>
            </motion.div>
            <motion.div {...fadeUp}>
              <h3 className="font-display text-2xl text-brown-900">Ingredients we fuss over</h3>
              <p className="mt-3 text-base leading-relaxed text-brown-600">
                Oat milk steamed velvet, local honey traced to single orchards, and pastries made
                from butter that tastes like grass and patience.
              </p>
            </motion.div>
            <motion.div {...fadeUp}>
              <div className="rounded-3xl bg-cream-100 p-6 ring-1 ring-brown-800/10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-600">
                  Values
                </p>
                <ul className="mt-4 space-y-3 text-sm text-brown-700">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-olive-500" />
                    Fair partnerships with growers we can name
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-olive-500" />
                    Compostable to-go wear and china for anyone who can stay
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-olive-500" />
                    Quiet hours honored — no loudspeaker announcements
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  )
}
