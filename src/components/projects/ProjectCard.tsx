import { useCallback } from 'react'

import { ExternalLinkIcon } from '@/components/icons'
import type { ProjectEntry, ProjectLink } from '@/data/projects.constants'
import { trackEvent } from '@/lib/analytics'

export function ProjectCard({ project }: { project: ProjectEntry }) {
  const handleLinkClick = useCallback(
    (link: ProjectLink) => () => {
      trackEvent('project_link_click', {
        project_name: project.name,
        link_label: link.label,
        link_url: link.url,
      })
    },
    [project.name],
  )

  return (
    <article className="group overflow-hidden rounded-2xl bg-cream-raised shadow-card transition-transform duration-250 hover:-translate-y-0.5">
      {project.imageUrl ? (
        <div className="h-36 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-250 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div
          className={`grid h-36 place-items-center bg-gradient-to-br text-5xl ${project.accentClass}`}
        >
          <span aria-hidden>{project.monogram}</span>
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-ink">{project.name}</h3>
          <span className="rounded-full bg-chrome px-3 py-1 text-xs font-semibold text-lime">
            {project.role}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              onClick={handleLinkClick(link)}
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
