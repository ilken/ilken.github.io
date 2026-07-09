export interface NavItem {
  to: string
  label: string
}

export interface NavGroup {
  heading: string
  items: NavItem[]
}

export const NAV_GROUPS: NavGroup[] = [
  {
    heading: 'Library',
    items: [
      { to: '/', label: 'Home' },
      { to: '/albums', label: 'Albums' },
      { to: '/songs', label: 'Songs' },
    ],
  },
  {
    heading: 'About me',
    items: [
      { to: '/experience', label: 'Experience' },
      { to: '/education', label: 'Education' },
      { to: '/projects', label: 'Projects' },
      { to: '/games', label: 'Games' },
      { to: '/hobbies', label: 'Hobbies' },
      { to: '/books', label: 'Books' },
    ],
  },
]

export function breadcrumbFor(pathname: string): { group: string; label: string } {
  for (const group of NAV_GROUPS) {
    const item = group.items.find((i) => i.to === pathname)
    if (item) return { group: group.heading, label: item.label }
  }
  return { group: 'Library', label: 'Home' }
}
