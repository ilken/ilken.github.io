import { createFileRoute } from '@tanstack/react-router'

import { SectionHeader } from '@/components/ui/SectionHeader'
import { EXPERIENCE, type ExperienceEntry } from '@/data/experience.constants'

export const Route = createFileRoute('/experience')({ component: ExperiencePage })

function ExperiencePage() {
  return (
    <div className="stagger">
      <SectionHeader title="Experience" />
      <p className="mb-6 -mt-2 text-sm text-ink-muted">
        A discography of roles — durations where track times would be.
      </p>
      <div className="flex flex-col gap-1">
        {EXPERIENCE.map((entry, i) => (
          <ExperienceRow key={`${entry.company}-${entry.period}`} entry={entry} index={i} />
        ))}
      </div>
    </div>
  )
}

function ExperienceRow({ entry, index }: { entry: ExperienceEntry; index: number }) {
  return (
    <div className="group flex items-center gap-4 rounded-xl px-3 py-3 transition-colors duration-150 hover:bg-cream-raised">
      <span className="w-5 text-sm tabular-nums text-ink-muted">{index + 1}</span>
      <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-chrome text-sm font-bold text-chrome-text">
        {entry.company.slice(0, 2).toUpperCase()}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-ink">{entry.title}</p>
        <p className="truncate text-xs text-ink-muted">
          {entry.company} · {entry.location}
        </p>
      </div>
      <div className="text-right">
        <p className="text-sm tabular-nums text-ink-soft">{entry.period}</p>
        <p className="text-xs tabular-nums text-ink-muted">
          {entry.duration}
          {entry.current && <span className="ml-2 font-semibold text-ember">● now playing</span>}
        </p>
      </div>
    </div>
  )
}
