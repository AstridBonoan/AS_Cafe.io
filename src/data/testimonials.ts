export type Testimonial = {
  id: string
  quote: string
  name: string
  detail: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'It feels like someone wrapped the room in a blanket. The cortado is balanced like a hug.',
    name: 'Maya Chen',
    detail: 'Regular · Riverside',
  },
  {
    id: '2',
    quote:
      'I bring every out-of-town guest here. The olive scones ruin all other scones for me.',
    name: 'Jordan Ellis',
    detail: 'First visit · Market Row',
  },
  {
    id: '3',
    quote:
      'Finally a café where I can actually hear my friends. Soft music, soft light.',
    name: 'Sam Rivera',
    detail: 'Remote worker · Cedar Commons',
  },
]

export const galleryImages: { id: string; src: string; alt: string }[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80',
    alt: 'Warm café interior with soft lighting',
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    alt: 'Espresso being poured into a ceramic cup',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&q=80',
    alt: 'Fresh pastries on a wooden board',
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80',
    alt: 'Coffee beans and brewing equipment',
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
    alt: 'Latte art in a cozy mug',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1521017433821-dfb942ddf222?w=800&q=80',
    alt: 'Outdoor seating with plants',
  },
]
