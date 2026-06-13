import { Link } from '@tanstack/react-router'

interface SectionHeaderProps {
  title: string
  seeAllTo?: string
}

export function SectionHeader({ title, seeAllTo }: SectionHeaderProps) {
  return (
    <div className="mb-4 flex items-baseline justify-between">
      <h2 className="text-[22px] font-bold tracking-tight text-ink">{title}</h2>
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
