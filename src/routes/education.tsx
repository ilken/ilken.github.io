import { createFileRoute } from '@tanstack/react-router'

import { ExternalLinkIcon, TrophyIcon } from '@/components/icons'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { EDUCATION } from '@/data/education.constants'

export const Route = createFileRoute('/education')({ component: EducationPage })

function EducationPage() {
  return (
    <div className="stagger">
      <SectionHeader title="Education" />
      <div className="grid gap-5">
        {EDUCATION.map((entry) => (
          <article
            key={`${entry.degree}-${entry.period}`}
            className="rounded-2xl bg-cream-raised p-6 shadow-card"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-ink-muted uppercase">
              {entry.period}
            </p>
            <h3 className="mt-3 text-lg font-bold leading-snug text-ink">{entry.school}</h3>
            <p className="mt-2 text-sm font-medium text-ink-soft">
              {entry.degree} · {entry.field}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="rounded-full bg-lime px-3 py-1 text-xs font-bold text-lime-ink">
                {entry.grade}
              </span>
              <span className="text-xs text-ink-muted">{entry.note}</span>
            </div>
            {entry.achievement && (
              <div className="mt-5 flex flex-col items-start gap-5 border-t border-cream-sunken pt-5 sm:flex-row sm:items-center">
                <a
                  href={entry.achievement.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline-offset-4 transition-colors duration-150 hover:text-ember hover:underline"
                >
                  <TrophyIcon className="size-5 shrink-0 text-ember" />
                  {entry.achievement.label}
                  <ExternalLinkIcon className="size-3.5" />
                </a>
                {entry.achievement.imageUrl && (
                  <img
                    src={entry.achievement.imageUrl}
                    alt={entry.achievement.imageAlt ?? entry.achievement.label}
                    loading="lazy"
                    className="w-56 -rotate-1 rounded-lg border-8 border-white object-cover shadow-card sm:ml-auto"
                  />
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
