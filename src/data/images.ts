/**
 * Remote image URLs — each ID was verified with an HTTP HEAD request.
 * Unsplash occasionally removes assets; if photos break again, replace IDs here only.
 */
export const heroImage = {
  src: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=85',
  alt: 'Hands holding warm ceramic mugs of coffee',
} as const

export const aboutImage = {
  src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85',
  alt: 'Cozy café interior with wooden tables and pendant lights',
} as const
