export type Location = {
  id: string
  name: string
  address: string
  city: string
  hours: string[]
  phone: string
  mapUrl: string
  highlights: string[]
}

export const locations: Location[] = [
  {
    id: 'riverside',
    name: 'Riverside Atrium',
    address: '218 Willow Lane',
    city: 'Portland, OR',
    hours: ['Mon–Fri 7am–7pm', 'Sat–Sun 8am–8pm'],
    phone: '(503) 555-0142',
    mapUrl: 'https://maps.google.com/?q=218+Willow+Lane+Portland+OR',
    highlights: ['Quiet reading alcoves', 'Dog-friendly patio'],
  },
  {
    id: 'market',
    name: 'Market Row',
    address: '44 Olive Street',
    city: 'Portland, OR',
    hours: ['Daily 6:30am–6pm'],
    phone: '(503) 555-0198',
    mapUrl: 'https://maps.google.com/?q=44+Olive+Street+Portland+OR',
    highlights: ['Grab-and-go pastry case', 'Bike racks'],
  },
  {
    id: 'cedar',
    name: 'Cedar Commons',
    address: '901 Cedar Ave',
    city: 'Vancouver, WA',
    hours: ['Mon–Thu 7am–5pm', 'Fri–Sun 8am–7pm'],
    phone: '(360) 555-0231',
    mapUrl: 'https://maps.google.com/?q=901+Cedar+Ave+Vancouver+WA',
    highlights: ['Community workshops', 'Kids’ cocoa flights'],
  },
]
