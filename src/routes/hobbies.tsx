import { createFileRoute } from '@tanstack/react-router'

import { ExternalLinkIcon } from '@/components/icons'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { HOBBIES, type HobbyEntry } from '@/data/hobbies.constants'

export const Route = createFileRoute('/hobbies')({ component: HobbiesPage })

function HobbiesPage() {
  return (
    <div className="stagger">
      <SectionHeader title="Hobbies" />
      <p className="mb-6 -mt-2 text-sm text-ink-muted">
        Playlists off the clock — what plays on repeat outside work.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {HOBBIES.map((hobby) => (
          <HobbyCard key={hobby.name} hobby={hobby} />
        ))}
      </div>
    </div>
  )
}

function HobbyCard({ hobby }: { hobby: HobbyEntry }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-cream-raised shadow-card transition-transform duration-250 hover:-translate-y-0.5">
      <div
        className={`grid h-28 place-items-center bg-gradient-to-br text-5xl ${hobby.accentClass}`}
      >
        {/* emoji ignore text color; plain glyphs like ♞ need it on the dark gradients */}
        <span aria-hidden className="text-cream/90">
          {hobby.monogram}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold tracking-[0.15em] text-ink-muted uppercase">
          {hobby.playlistLabel}
        </p>
        <h3 className="mt-1 text-lg font-bold text-ink">{hobby.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{hobby.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {hobby.stats.map((stat) => (
            <span
              key={stat}
              className="rounded-full bg-cream-sunken px-3 py-1 text-xs font-semibold text-ink-soft"
            >
              {stat}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {hobby.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline-offset-4 transition-colors duration-150 hover:text-ember hover:underline"
            >
              {link.label}
              <ExternalLinkIcon className="size-3.5" />
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
