export interface Chip {
  value: string
  label: string
}

interface FilterChipsProps {
  chips: Chip[]
  active: string
  onChange: (value: string) => void
}

export function FilterChips({ chips, active, onChange }: FilterChipsProps) {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {chips.map((chip) => (
        <button
          key={chip.value}
          type="button"
          onClick={() => onChange(chip.value)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150 ${
            active === chip.value
              ? 'bg-chrome text-lime'
              : 'bg-cream-raised text-ink-soft hover:text-ink'
          }`}
        >
          {chip.label}
        </button>
      ))}
    </div>
  )
}
