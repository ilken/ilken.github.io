import { Link } from '@tanstack/react-router'
import { useCallback } from 'react'

import { NAV_GROUPS, type NavItem } from '@/components/layout/nav.constants'
import { trackEvent } from '@/lib/analytics'

export function Sidebar() {
  const handleLogoClick = useCallback(() => {
    trackEvent('nav_click', { nav_label: 'Logo', nav_path: '/' })
  }, [])

  const handleNavClick = useCallback(
    (item: NavItem) => () => {
      trackEvent('nav_click', { nav_label: item.label, nav_path: item.to })
    },
    [],
  )

  return (
    <aside className="hidden w-56 shrink-0 flex-col gap-8 px-6 py-8 md:flex">
      <Link to="/" className="flex items-center gap-2 px-3" onClick={handleLogoClick}>
        <span className="size-2.5 rounded-full bg-lime" aria-hidden />
        <span className="text-lg font-bold tracking-tight text-chrome-text">ilken</span>
        <span className="text-lg font-light text-chrome-muted">.fm</span>
      </Link>

      <nav className="flex flex-col gap-8">
        {NAV_GROUPS.map((group) => (
          <div key={group.heading}>
            <p className="mb-3 px-3 text-xl font-bold text-chrome-text">{group.heading}</p>
            <ul className="flex flex-col gap-1">
              {group.items.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={handleNavClick(item)}
                    className="block rounded-full px-4 py-2 text-sm font-medium text-chrome-muted transition-colors duration-150 hover:text-chrome-text"
                    activeProps={{ className: 'nav-pill-active !text-lime' }}
                    activeOptions={{ exact: item.to === '/' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
