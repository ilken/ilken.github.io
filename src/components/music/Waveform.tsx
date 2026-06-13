import { useMemo } from 'react'

const BAR_COUNT = 48

/** Deterministic pseudo-random bar heights so a track always shows the same waveform. */
function barHeights(seed: number): number[] {
  const heights: number[] = []
  let x = seed > 0 ? seed : 42
  for (let i = 0; i < BAR_COUNT; i++) {
    x = (x * 9301 + 49297) % 233280
    heights.push(0.25 + 0.75 * (x / 233280))
  }
  return heights
}

interface WaveformProps {
  seed: number
  progress: number
  onSeek?: (fraction: number) => void
}

export function Waveform({ seed, progress, onSeek }: WaveformProps) {
  const heights = useMemo(() => barHeights(seed), [seed])
  const playedBars = Math.floor(progress * BAR_COUNT)

  return (
    <button
      type="button"
      aria-label="Seek"
      disabled={!onSeek}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        onSeek?.((e.clientX - rect.left) / rect.width)
      }}
      className="flex h-9 w-full items-center gap-[3px]"
    >
      {heights.map((h, i) => (
        <span
          key={i}
          className={`w-[3px] flex-none rounded-full transition-colors duration-150 ${
            i < playedBars ? 'bg-lime' : 'bg-chrome-muted/40'
          }`}
          style={{ height: `${Math.round(h * 100)}%` }}
        />
      ))}
    </button>
  )
}
