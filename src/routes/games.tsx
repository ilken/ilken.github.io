import { createFileRoute } from '@tanstack/react-router'

import { ProjectCard } from '@/components/projects/ProjectCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GAMES } from '@/data/projects.constants'

export const Route = createFileRoute('/games')({ component: GamesPage })

function GamesPage() {
  return (
    <div className="stagger">
      <SectionHeader title="Games" />
      <p className="mb-6 -mt-2 text-sm text-ink-muted">
        Interactive releases — tracks you play, not just press play on.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        {GAMES.map((game) => (
          <ProjectCard key={game.name} project={game} />
        ))}
      </div>
    </div>
  )
}
