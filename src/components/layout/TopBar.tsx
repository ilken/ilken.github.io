import { useRouterState } from '@tanstack/react-router'
import { useCallback } from 'react'

import { GitHubIcon, LinkedInIcon } from '@/components/icons'
import { breadcrumbFor } from '@/components/layout/nav.constants'
import { PROFILE } from '@/data/profile.constants'
import { trackEvent } from '@/lib/analytics'

export function TopBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const crumb = breadcrumbFor(pathname)

  const handleGitHubClick = useCallback(() => {
    trackEvent('social_click', { platform: 'github' })
  }, [])

  const handleLinkedInClick = useCallback(() => {
    trackEvent('social_click', { platform: 'linkedin' })
  }, [])

  return (
    <header className="flex items-center justify-between gap-4 px-8 pt-7 pb-2">
      <p className="text-sm font-medium text-ink-muted">
        {crumb.group}
        <span className="mx-2 text-ink-muted/60">›</span>
        <span className="font-semibold text-ink">{crumb.label}</span>
      </p>

      <div className="flex items-center gap-3">
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          onClick={handleGitHubClick}
          className="text-ink-soft transition-colors duration-150 hover:text-ink"
        >
          <GitHubIcon className="size-5" />
        </a>
        <a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          onClick={handleLinkedInClick}
          className="text-ink-soft transition-colors duration-150 hover:text-ink"
        >
          <LinkedInIcon className="size-5" />
        </a>
        <img
          src={PROFILE.avatarUrl}
          alt={PROFILE.name}
          className="size-9 rounded-full object-cover ring-2 ring-cream-sunken"
        />
      </div>
    </header>
  )
}
