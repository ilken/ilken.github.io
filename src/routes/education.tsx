import { createFileRoute } from '@tanstack/react-router'

import { SectionHeader } from '@/components/ui/SectionHeader'
import { EDUCATION } from '@/data/education.constants'

export const Route = createFileRoute('/education')({ component: EducationPage })

function EducationPage() {
  return (
    <div className="stagger">
      <SectionHeader title="Education" />
      <div className="grid gap-5 sm:grid-cols-2">
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
          </article>
        ))}
      </div>
    </div>
  )
}
