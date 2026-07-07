export interface HobbyLink {
  label: string
  url: string
}

export interface HobbyEntry {
  name: string
  playlistLabel: string
  description: string
  stats: string[]
  monogram: string
  accentClass: string
  links: HobbyLink[]
}

export const HOBBIES: HobbyEntry[] = [
  {
    name: 'Guitar',
    playlistLabel: 'Live sessions',
    description:
      'Gigging across London for 8+ years — composition, arrangement and production, with a 300+ song repertoire.',
    stats: ['8+ years', '300+ songs', '5.0 ★ on Encore'],
    monogram: '🎸',
    accentClass: 'from-ember to-ember-deep',
    links: [{ label: 'Encore Musicians', url: 'https://encoremusicians.com/Ilken-Bahcecioglu' }],
  },
  {
    name: 'Football',
    playlistLabel: 'Terrace anthems',
    description:
      'Premier League devotee — enough of one to build PLAI, an AI score predictor with a live dashboard.',
    stats: ['Premier League', 'Built PLAI'],
    monogram: '⚽',
    accentClass: 'from-[#1f6f50] to-[#123f2e]',
    links: [{ label: 'PLAI', url: 'https://www.plaifootball.com/' }],
  },
  {
    name: 'Formula 1',
    playlistLabel: 'High octane',
    description:
      'Race-weekend regular — built an F1 calendar with timezone support so lights out is never missed.',
    stats: ['Every race weekend', 'Built f1-calendar'],
    monogram: '🏁',
    accentClass: 'from-[#8a1f1f] to-[#4d0f0f]',
    links: [{ label: 'F1 Calendar', url: 'https://github.com/ilken/f1-calendar' }],
  },
]
