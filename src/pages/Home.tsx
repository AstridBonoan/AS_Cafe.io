import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/SectionHeading'
import { LinkButton } from '../components/ui/LinkButton'
import { featuredDrinks } from '../data/menu'
import { testimonials, galleryImages } from '../data/testimonials'
import { fadeUp } from '../lib/motion'

export function Home() {
  const drinks = featuredDrinks()

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-50 pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-olive-400/15 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-brown-800/5 blur-3xl"
          aria-hidden
        />
        <Container className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-olive-700 ring-1 ring-brown-800/10">
              <span className="h-1.5 w-1.5 rounded-full bg-olive-500" />
              Slow mornings welcome
            </p>
            <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-brown-900 sm:text-5xl lg:text-[3.25rem]">
              Coffee roasted gently.
              <span className="block text-brown-700">Corners made for lingering.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-brown-600">
              We brew like hosts, not hustlers — soft light, olive-green accents,
              and cups meant for both quick hello&apos;s and long conversations.
            </p>
            <div className="flex flex-wrap gap-3">
              <LinkButton to="/menu">Explore the menu</LinkButton>
              <LinkButton to="/locations" variant="secondary">
                Find a café
              </LinkButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-brown-800/10">
              <img
                src="https://images.unsplash.com/photo-1447930021408-2c98187b7a07?w=900&q=85"
                alt="Hands wrapping a warm mug on a wooden table"
                className="h-full w-full object-cover"
                width={720}
                height={900}
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-soft ring-1 ring-brown-800/10 backdrop-blur-md sm:left-auto sm:right-[-8%] sm:w-[min(100%,280px)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-olive-600">
                Today at Riverside
              </p>
              <p className="mt-1 font-display text-lg text-brown-900">
                Cardamom bun · fresh at 8am
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Featured drinks"
            title="Little rituals, layered flavors"
            description="Three cups our baristas reach for first — seasonal, balanced, and photographed most often by guests."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {drinks.map((item, i) => (
              <motion.div key={item.id} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }}>
                <Card className="flex h-full flex-col">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl text-brown-900">{item.name}</h3>
                    <span className="shrink-0 rounded-full bg-olive-500/15 px-3 py-1 text-sm font-semibold text-olive-700">
                      {item.price}
                    </span>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-brown-600">
                    {item.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {(item.tags ?? []).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-cream-200 px-2.5 py-0.5 text-xs font-medium text-brown-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-10 flex justify-center">
            <LinkButton to="/menu" variant="secondary">
              Full menu &amp; bakery
            </LinkButton>
          </motion.div>
        </Container>
      </section>

      <section className="border-y border-brown-800/5 bg-cream-100/80 py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div {...fadeUp}>
              <SectionHeading
                eyebrow="Loyalty"
                title="Gather rewards, sip by sip"
                description="Earn leaves with every visit — redeem for pastries, upgraded milk, or a quiet hour in our reading nook before open hours."
                align="left"
              />
              <ul className="mt-8 space-y-4 text-brown-700">
                {[
                  'Digital stamp card — tap your phone at the register',
                  'Birthday pastry on us',
                  'Quarterly “slow morning” tasting flights',
                ].map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-olive-500" />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <LinkButton to="/contact">Ask about rewards</LinkButton>
              </div>
            </motion.div>
            <motion.div {...fadeUp}>
              <Card className="relative overflow-hidden p-0">
                <div className="absolute inset-0 bg-gradient-to-br from-olive-600/90 to-brown-900/95" />
                <div className="relative space-y-4 p-8 text-cream-50 sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-200/90">
                    Members this month
                  </p>
                  <p className="font-display text-3xl text-white">Double leaves</p>
                  <p className="max-w-sm text-sm leading-relaxed text-cream-100/90">
                    Visit twice in one week and we&apos;ll double your stamps — a
                    thank-you for choosing calm over rush hour.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                      Ends May 31
                    </span>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                      All locations
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Gallery"
            title="Soft light, honest textures"
            description="A peek inside — warm wood, matte ceramics, and steam that catches the window."
            align="center"
          />
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.id}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 3) * 0.05 }}
                className="mb-4 break-inside-avoid"
              >
                <div className="overflow-hidden rounded-3xl ring-1 ring-brown-800/10">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full object-cover transition duration-700 hover:scale-[1.03]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 pt-4 sm:pb-28">
        <Container>
          <SectionHeading
            eyebrow="Kind words"
            title="Guests who stayed a while"
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div key={t.id} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.07 }}>
                <Card className="h-full">
                  <p className="font-display text-lg italic leading-snug text-brown-900">
                    “{t.quote}”
                  </p>
                  <div className="mt-6 border-t border-brown-800/10 pt-4">
                    <p className="text-sm font-semibold text-brown-900">{t.name}</p>
                    <p className="text-xs text-brown-600">{t.detail}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
