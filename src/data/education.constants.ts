export interface EducationAchievement {
  /** Heading shown above the achievement, e.g. the society it was won with. */
  title?: string
  label: string
  url: string
  /** Photo in public/education shown framed next to the achievement. */
  imageUrl?: string
  imageAlt?: string
}

export interface EducationEntry {
  school: string
  degree: string
  field: string
  grade: string
  period: string
  note?: string
  achievement?: EducationAchievement
}

export const EDUCATION: EducationEntry[] = [
  {
    school: 'The University of Manchester',
    degree: 'BSc (Hons)',
    field: 'Software Engineering with Industrial Experience',
    grade: 'First Class',
    period: '2009 – 2014',
    achievement: {
      title: 'University of Manchester Chess Society',
      label: 'Wahltuch Trophy winner — 2011 & 2012',
      url: 'https://www.manchesterchess.co.uk/competitions/previous-trophy-winners/',
      imageUrl: '/education/wahltuch-trophy.jpg',
      imageAlt: 'Ilken holding the Wahltuch Trophy',
    },
  },
]
