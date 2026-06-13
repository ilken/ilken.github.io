export interface EducationEntry {
  school: string
  degree: string
  field: string
  grade: string
  period: string
  note: string
}

export const EDUCATION: EducationEntry[] = [
  {
    school: 'The University of Manchester',
    degree: 'BSc (Hons)',
    field: 'Software Engineering with Industrial Experience',
    grade: 'First Class',
    period: '2009 – 2014',
    note: 'University of Manchester Chess Society',
  },
  {
    school: 'The University of Manchester',
    degree: 'Foundation Studies',
    field: 'Computer Software Engineering',
    grade: 'First Class',
    period: '2009 – 2010',
    note: 'Faculty of Engineering and Physical Sciences',
  },
]
