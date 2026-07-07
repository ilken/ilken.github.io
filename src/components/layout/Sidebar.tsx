import { Link } from '@tanstack/react-router'

import { NAV_GROUPS } from '@/components/layout/nav.constants'

export function Sidebar() {
  return (
    <aside className="hidden w-56 shrink-0 flex-col gap-8 px-6 py-8 md:flex">
      <Link to="/" className="flex items-center gap-2 px-3">
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
