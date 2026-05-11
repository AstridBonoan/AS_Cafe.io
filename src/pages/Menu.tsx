import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/SectionHeading'
import {
  menuCategories,
  menuItems,
  type MenuCategory,
} from '../data/menu'

export function Menu() {
  const [active, setActive] = useState<MenuCategory>('signature')

  const items = useMemo(() => menuItems[active], [active])

  return (
    <div className="pb-20 pt-10 sm:pb-28 sm:pt-14">
      <Container>
        <SectionHeading
          eyebrow="Menu"
          title="Made to linger over"
          description="Tap a category on your phone to browse — everything is prepared to order. Dietary notes are welcome at the register."
        />

        {/* Mobile-first category picker */}
        <div className="sticky top-[52px] z-30 -mx-4 mb-8 bg-cream-50/95 px-4 py-3 backdrop-blur-md sm:static sm:mx-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-0">
          <div
            className="flex gap-2 overflow-x-auto pb-1 scrollbar-none sm:flex-wrap"
            role="tablist"
            aria-label="Menu categories"
          >
            {menuCategories.map((cat) => {
              const selected = active === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(cat.id)}
                  className={[
                    'shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition',
                    selected
                      ? 'bg-brown-800 text-cream-50 shadow-soft'
                      : 'bg-cream-100 text-brown-800 ring-1 ring-brown-800/10 hover:bg-cream-200',
                  ].join(' ')}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mb-10 rounded-3xl bg-cream-100/80 p-5 ring-1 ring-brown-800/5 sm:p-6">
          <p className="text-sm font-medium text-brown-800">
            {menuCategories.find((c) => c.id === active)?.note}
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid gap-4 sm:gap-5"
          >
            {items.map((item) => (
              <Card key={item.id} className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl text-brown-900">{item.name}</h3>
                    {(item.tags ?? []).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-olive-500/15 px-2.5 py-0.5 text-xs font-semibold text-olive-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="max-w-2xl text-sm leading-relaxed text-brown-600">
                    {item.description}
                  </p>
                </div>
                <p className="shrink-0 font-display text-xl text-brown-900 sm:pt-1">
                  {item.price}
                </p>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </div>
  )
}
