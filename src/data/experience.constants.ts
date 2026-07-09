export interface ExperienceEntry {
  company: string
  title: string
  period: string
  duration: string
  location: string
  current?: boolean
  /** Company logo in public/logos; rows fall back to the office icon when absent. */
  logoUrl?: string
  /** Company site; the whole row links out when present. */
  websiteUrl?: string
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'EQUALS',
    title: 'Senior Full Stack Engineer',
    period: 'Oct 2023 – Present',
    duration: '2 yr 9 mo',
    location: 'London, UK',
    current: true,
    logoUrl: '/logos/equals.png',
    websiteUrl: 'https://equa.ls',
  },
  {
    company: 'Fair.xyz',
    title: 'Senior Full Stack Engineer',
    period: 'Sep 2022 – Mar 2026',
    duration: '3 yr 7 mo',
    location: 'London, UK',
    logoUrl: '/logos/fair.png',
    websiteUrl: 'https://fair.xyz',
  },
  {
    company: 'Encore Musicians',
    title: 'Lead Developer',
    period: 'Dec 2018 – Aug 2022',
    duration: '3 yr 9 mo',
    location: 'London, UK',
    logoUrl: '/logos/encore.png',
    websiteUrl: 'https://encoremusicians.com',
  },
  {
    company: 'Encore Musicians',
    title: 'Full Stack Developer',
    period: 'Feb 2017 – Nov 2018',
    duration: '1 yr 10 mo',
    location: 'London, UK',
    logoUrl: '/logos/encore.png',
    websiteUrl: 'https://encoremusicians.com',
  },
  {
    company: 'Playtech',
    title: 'Front End Developer',
    period: 'Nov 2015 – Feb 2017',
    duration: '1 yr 4 mo',
    location: 'London, UK',
    logoUrl: '/logos/playtech.png',
  },
  {
    company: 'Firmstep',
    title: 'Software Engineer',
    period: 'Aug 2014 – Nov 2015',
    duration: '1 yr 4 mo',
    location: 'London, UK',
    logoUrl: '/logos/firmstep.svg',
  },
  {
    company: 'Web Applications UK',
    title: 'Software Engineer Intern',
    period: 'Jul 2012 – Jun 2013',
    duration: '1 yr',
    location: 'Oldham, UK',
    logoUrl: '/logos/webapps.png',
  },
]
