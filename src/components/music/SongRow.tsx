import { PauseIcon, PlayIcon, PlusIcon } from '@/components/icons'
import { Equalizer } from '@/components/music/Equalizer'
import { formatTrackTime } from '@/lib/format'
import type { PlayerTrack } from '@/player/player.types'

interface SongRowProps {
  track: PlayerTrack
  isActive: boolean
  isPlaying: boolean
  onPlay: () => void
  onToggle: () => void
}

export function SongRow({ track, isActive, isPlaying, onPlay, onToggle }: SongRowProps) {
  const showPause = isActive && isPlaying

  return (
    <div
      className={`group flex items-center gap-4 rounded-xl px-3 py-2 transition-colors duration-150 hover:bg-cream-raised ${
        isActive ? 'bg-cream-raised' : ''
      }`}
    >
      <button
        type="button"
        onClick={isActive ? onToggle : onPlay}
        aria-label={showPause ? `Pause ${track.title}` : `Play ${track.title}`}
        className="relative size-12 shrink-0 overflow-hidden rounded-xl"
      >
        <img src={track.artworkUrl} alt="" className="size-full object-cover" loading="lazy" />
        <span
          className={`absolute inset-0 grid place-items-center bg-black/40 text-white transition-opacity duration-150 ${
            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          {showPause ? <PauseIcon className="size-5" /> : <PlayIcon className="size-5" />}
        </span>
      </button>

      <div className="min-w-0 flex-1">
        <p className={`truncate text-sm font-semibold ${isActive ? 'text-ink' : 'text-ink'}`}>
          {track.title}
        </p>
        <p className="truncate text-xs text-ink-muted">{track.artist}</p>
      </div>

      <p className="hidden min-w-0 flex-1 truncate text-sm text-ink-soft sm:block">{track.album}</p>

      <div className="flex w-12 justify-end">
        {isActive ? (
          <Equalizer paused={!isPlaying} />
        ) : (
          <span className="text-sm tabular-nums text-ink-soft">
            {formatTrackTime(track.durationMs)}
          </span>
        )}
      </div>

      <a
        href={track.appleUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${track.title} on Apple Music`}
        className="text-ink-muted opacity-0 transition-opacity duration-150 group-hover:opacity-100 hover:text-ink"
      >
        <PlusIcon className="size-4" />
      </a>
    </div>
  )
}
