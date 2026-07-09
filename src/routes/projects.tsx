import { createFileRoute } from '@tanstack/react-router'

import { ProjectCard } from '@/components/projects/ProjectCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PROJECTS } from '@/data/projects.constants'

export const Route = createFileRoute('/projects')({ component: ProjectsPage })

function ProjectsPage() {
  return (
    <div className="stagger">
      <SectionHeader title="Projects" />
      <p className="mb-6 -mt-2 text-sm text-ink-muted">Side releases — singles and EPs.</p>
      <div className="grid gap-5 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}
