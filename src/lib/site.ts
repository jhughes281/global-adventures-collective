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

export const NAV = [
  { label: 'About', href: '#about' },
  { label: 'The Series', href: '#series' },
  { label: 'Story Scenes', href: '#scenes' },
  { label: 'Books & Products', href: '#books' },
  { label: 'Contact', href: '#contact' },
]

export const INTERESTS = [
  'Children’s books',
  'Activity & coloring books',
  'Bookmarks & keepsakes',
  'Schools, libraries & bookstores',
]

export function openMail(subject: string, body: string) {
  const href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = href
}
