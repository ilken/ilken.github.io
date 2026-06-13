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
  links: ProjectLink[]
}

export const PROJECTS: ProjectEntry[] = [
  {
    name: 'Songlio',
    tagline: 'A daily music guessing game — name the song from a short clip.',
    role: 'Co-creator',
    monogram: '♪',
    accentClass: 'from-ember to-ember-deep',
    links: [{ label: 'Product Hunt', url: 'https://www.producthunt.com/products/songlio' }],
  },
  {
    name: 'WC26 Sweepstake',
    tagline: 'World Cup 2026 sweepstake draw — plain HTML/CSS/JS.',
    role: 'Creator',
    monogram: '⚽',
    accentClass: 'from-[#1f6f50] to-[#123f2e]',
    links: [{ label: 'GitHub', url: 'https://github.com/ilken/wc26-sweepstake' }],
  },
  {
    name: 'PLAI',
    tagline: 'Premier League AI score predictor with a live dashboard.',
    role: 'Creator',
    monogram: '⚡',
    accentClass: 'from-[#3d2e6b] to-[#241a44]',
    links: [
      { label: 'GitHub', url: 'https://github.com/ilken/plai' },
      { label: 'Live', url: 'https://www.plaifootball.com/' },
    ],
  },
  {
    name: 'F1 Calendar',
    tagline: 'Formula 1 race calendar with timezone support.',
    role: 'Creator',
    monogram: '🏁',
    accentClass: 'from-[#8a1f1f] to-[#4d0f0f]',
    links: [{ label: 'GitHub', url: 'https://github.com/ilken/f1-calendar' }],
  },
]
