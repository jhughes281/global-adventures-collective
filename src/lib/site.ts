export const SITE = {
  name: 'Global Adventures Collective',
  email: 'info@globaladventurescollective.com',
  phone: '775-600-0045',
  phoneHref: 'tel:7756000045',
  address: ['732 S 6th St, Ste N', 'Las Vegas, NV 89101'],
  mapHref: 'https://www.google.com/maps/search/?api=1&query=732+S+6th+St+Ste+N+Las+Vegas+NV+89101',
  facebook: 'https://www.facebook.com/share/1CYqerXFBh/',
  instagram: 'https://www.instagram.com/global.adventures.collective?psln=ZThjZG5rNm43dHRp',
}

// `home` links are in-page anchors on the homepage and ./#anchor from the other pages.
export const NAV = [
  { label: 'Home', href: '#top', home: true },
  { label: 'Our Story', href: '#story', home: true },
  { label: 'Our Products', href: '#products', home: true },
  { label: 'FAQs', href: 'faq.html', home: false },
  { label: 'Contact', href: '#contact', home: true },
]

export const POLICIES = [
  { label: 'Privacy Policy', href: 'policies.html#privacy' },
  { label: 'Shipping Policy', href: 'policies.html#shipping' },
  { label: 'Returns & Refunds', href: 'policies.html#returns' },
]

export const INTERESTS = [
  'Children’s books',
  'Activity & coloring books',
  'Little Explorers Creative Collection',
  'Travel-inspired products',
]

export const INQUIRY_TYPES = [
  'General question',
  'Product inquiry',
  'Wholesale',
  'Partnership',
]

export function navHref(href: string, home: boolean, onHome: boolean) {
  return home && !onHome ? `./${href}` : href
}

export function openMail(subject: string, body: string) {
  const href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = href
}
