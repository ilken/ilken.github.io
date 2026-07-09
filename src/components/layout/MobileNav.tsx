import { Link } from '@tanstack/react-router'
import { useCallback, useEffect, useState } from 'react'

import { CloseIcon, MenuIcon } from '@/components/icons'
import { NAV_GROUPS, type NavItem } from '@/components/layout/nav.constants'
import { trackEvent } from '@/lib/analytics'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleNavClick = useCallback(
    (item: NavItem) => () => {
      trackEvent('nav_click', { nav_label: item.label, nav_path: item.to })
      setIsOpen(false)
    },
    [],
  )

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={handleOpen}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        className="grid size-9 place-items-center rounded-full text-ink-soft transition-colors duration-150 hover:text-ink"
      >
        <MenuIcon className="size-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-chrome px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={handleClose} className="flex items-center gap-2 px-3">
              <span className="size-2.5 rounded-full bg-lime" aria-hidden />
              <span className="text-lg font-bold tracking-tight text-chrome-text">ilken</span>
              <span className="text-lg font-light text-chrome-muted">.fm</span>
            </Link>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close navigation menu"
              className="grid size-10 place-items-center rounded-full text-chrome-muted transition-colors duration-150 hover:text-chrome-text"
            >
              <CloseIcon className="size-6" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-8">
            {NAV_GROUPS.map((group) => (
              <div key={group.heading}>
                <p className="mb-3 px-3 text-xl font-bold text-chrome-text">{group.heading}</p>
                <ul className="flex flex-col gap-1">
                  {group.items.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={handleNavClick(item)}
                        className="block rounded-full px-4 py-3 text-base font-medium text-chrome-muted transition-colors duration-150 hover:text-chrome-text"
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
        </div>
      )}
    </div>
  )
}
