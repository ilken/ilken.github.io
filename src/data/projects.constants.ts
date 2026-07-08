export interface ProjectLink {
  label: string
  url: string
}

export interface ProjectEntry {
  name: string
  tagline: string
  role: string
  monogram: string
  accentClass: string
  /** Screenshot of the live app; falls back to the monogram header when absent. */
  imageUrl?: string
  links: ProjectLink[]
}

export const PROJECTS: ProjectEntry[] = [
  {
    name: 'Songlio',
    tagline: 'A daily music guessing game — name the song from a short clip.',
    role: 'Co-creator',
    monogram: '♪',
    accentClass: 'from-ember to-ember-deep',
    imageUrl: '/projects/songlio.jpg',
    links: [
      { label: 'Live', url: 'https://songl.io' },
      { label: 'Product Hunt', url: 'https://www.producthunt.com/products/songlio' },
    ],
  },
  {
    name: 'WC26 Sweepstake',
    tagline: 'World Cup 2026 sweepstake draw — plain HTML/CSS/JS.',
    role: 'Creator',
    monogram: '⚽',
    accentClass: 'from-[#1f6f50] to-[#123f2e]',
    imageUrl: '/projects/wc26-sweepstake.jpg',
    links: [
      { label: 'Live', url: 'https://ilken.github.io/wc26-sweepstake/' },
      { label: 'GitHub', url: 'https://github.com/ilken/wc26-sweepstake' },
    ],
  },
  {
    name: 'PLAI',
    tagline: 'Premier League AI score predictor with a live dashboard.',
    role: 'Creator',
    monogram: '⚡',
    accentClass: 'from-[#3d2e6b] to-[#241a44]',
    imageUrl: '/projects/plai.jpg',
    links: [
      { label: 'Live', url: 'https://www.plaifootball.com/' },
      { label: 'GitHub', url: 'https://github.com/ilken/plai' },
    ],
  },
  {
    name: 'F1 Calendar',
    tagline: 'Formula 1 race calendar with timezone support.',
    role: 'Creator',
    monogram: '🏁',
    accentClass: 'from-[#8a1f1f] to-[#4d0f0f]',
    imageUrl: '/projects/f1-calendar.jpg',
    links: [
      { label: 'Live', url: 'https://f1-calendar-one.vercel.app' },
      { label: 'GitHub', url: 'https://github.com/ilken/f1-calendar' },
    ],
  },
]
