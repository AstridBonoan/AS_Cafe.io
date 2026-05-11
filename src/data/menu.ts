export type MenuCategory = 'signature' | 'espresso' | 'tea' | 'bakery'

export type MenuItem = {
  id: string
  name: string
  description: string
  price: string
  tags?: string[]
  featured?: boolean
}

export const menuCategories: { id: MenuCategory; label: string; note: string }[] =
  [
    {
      id: 'signature',
      label: 'Featured & seasonal',
      note: 'Small batches from our baristas — rotate often.',
    },
    {
      id: 'espresso',
      label: 'Espresso bar',
      note: 'Classic pulls on a gentle roast.',
    },
    {
      id: 'tea',
      label: 'Tea & botanicals',
      note: 'Loose leaf, steamed milk optional.',
    },
    {
      id: 'bakery',
      label: 'Bakery',
      note: 'Baked before dawn, served warm.',
    },
  ]

export const menuItems: Record<MenuCategory, MenuItem[]> = {
  signature: [
    {
      id: 'honey-lavender',
      name: 'Honey lavender latte',
      description:
        'Espresso, oat milk, wildflower honey, and a whisper of culinary lavender.',
      price: '$6.25',
      tags: ['Seasonal'],
      featured: true,
    },
    {
      id: 'maple-cardamom',
      name: 'Maple cardamom cortado',
      description:
        'Two silky shots kissed with maple and crushed cardamom — meant for slow sipping.',
      price: '$5.75',
      featured: true,
    },
    {
      id: 'olive-oil-cream',
      name: 'Olive leaf steam',
      description:
        'Steamed oat milk with olive leaf syrup — herbal, cozy, caffeine-free.',
      price: '$5.25',
      tags: ['No caffeine'],
    },
  ],
  espresso: [
    {
      id: 'americano',
      name: 'Americano',
      description: 'Two shots pulled long with filtered hot water.',
      price: '$3.75',
    },
    {
      id: 'cappuccino',
      name: 'Cappuccino',
      description: 'Equal parts espresso, silk foam, and patience.',
      price: '$4.95',
    },
    {
      id: 'flat-white',
      name: 'Flat white',
      description: 'Microfoam-forward with a softer roast profile.',
      price: '$5.15',
    },
    {
      id: 'mocha',
      name: 'Country mocha',
      description: 'Dark chocolate ganache melted into the cup.',
      price: '$5.65',
    },
  ],
  tea: [
    {
      id: 'earl-grey',
      name: 'Velvet Earl Grey',
      description: 'Bergamot-forward blend with a creamy finish.',
      price: '$4.25',
    },
    {
      id: 'rooibos',
      name: 'Rooibos vanilla',
      description: 'Naturally sweet; lovely with oat foam.',
      price: '$4.50',
    },
    {
      id: 'matcha',
      name: 'Ceremonial matcha',
      description: 'Whisked to a soft froth — optional citrus zest.',
      price: '$5.95',
    },
  ],
  bakery: [
    {
      id: 'cardamom-bun',
      name: 'Brown butter cardamom bun',
      description: 'Pull-apart layers with pearl sugar crunch.',
      price: '$4.75',
    },
    {
      id: 'olive-scone',
      name: 'Olive oil rosemary scone',
      description: 'Tender crumb, flaky edges, flaky sea salt.',
      price: '$4.25',
    },
    {
      id: 'fruit-tart',
      name: 'Seasonal fruit tart',
      description: 'Vanilla bean custard and whatever is brightest at market.',
      price: '$6.50',
      tags: ['Seasonal'],
    },
  ],
}

export function featuredDrinks(): MenuItem[] {
  const items = Object.values(menuItems).flat()
  return items.filter((i) => i.featured)
}
