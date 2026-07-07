import { Link } from '@tanstack/react-router'

interface SectionHeaderProps {
  title: string
  seeAllTo?: string
}

export function SectionHeader({ title, seeAllTo }: SectionHeaderProps) {
  return (
    <div className="mb-4 flex items-baseline justify-between">
      <h2 className="text-[22px] font-bold tracking-tight text-ink">
        {title}
        <span
          key={title}
          className="animate-grow-x mt-1 block h-0.5 w-8 origin-left rounded-full bg-lime"
          aria-hidden
        />
      </h2>
      {seeAllTo && (
        <Link
          to={seeAllTo}
          className="text-sm font-medium text-ink-muted transition-colors duration-150 hover:text-ink"
        >
          See all
        </Link>
      )}
    </div>
  )
}
