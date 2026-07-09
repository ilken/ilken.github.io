import { PauseIcon, PlayIcon, SkipNextIcon, SkipPrevIcon } from '@/components/icons'
import { Waveform } from '@/components/music/Waveform'
import { MarqueeText } from '@/components/ui/MarqueeText'
import { formatSeconds } from '@/lib/format'
import { usePlayer } from '@/player/use-player'

export function PlayerBar() {
  const { current, isPlaying, currentTime, duration, toggle, next, prev, seek } = usePlayer()
  const hasTrack = current !== null
  const progress = hasTrack && duration > 0 ? currentTime / duration : 0

  return (
    <footer className="mx-3 mb-3 grid grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-2xl bg-chrome px-4 py-3 shadow-bar sm:gap-6 sm:px-6">
      <div className="flex w-44 min-w-0 items-center gap-3 sm:w-56">
        {hasTrack ? (
          <>
            <img
              src={current.artworkUrl}
              alt=""
              className="size-11 shrink-0 rounded-lg object-cover"
            />
            <div className="min-w-0">
              <MarqueeText
                text={current.title}
                className="text-sm font-semibold text-chrome-text"
              />
              <p className="truncate text-xs text-chrome-muted">{current.artist}</p>
            </div>
          </>
        ) : (
          <p className="text-xs text-chrome-muted">Pick a song to start the preview player</p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={prev}
          disabled={!hasTrack}
          aria-label="Previous track"
          className="text-chrome-muted transition-colors duration-150 hover:text-chrome-text disabled:opacity-40"
        >
          <SkipPrevIcon className="size-5" />
        </button>
        <button
          type="button"
          onClick={toggle}
          disabled={!hasTrack}
          aria-label={isPlaying ? 'Pause' : 'Play'}
          className="grid size-10 place-items-center rounded-full bg-lime text-lime-ink transition-transform duration-150 hover:scale-105 active:scale-95 disabled:opacity-40"
        >
          <span className="relative grid size-5 place-items-center">
            <PlayIcon
              className={`col-start-1 row-start-1 size-5 pl-0.5 transition-all duration-150 ${
                isPlaying ? 'scale-50 opacity-0' : 'scale-100 opacity-100'
              }`}
            />
            <PauseIcon
              className={`col-start-1 row-start-1 size-5 transition-all duration-150 ${
                isPlaying ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
              }`}
            />
          </span>
        </button>
        <button
          type="button"
          onClick={next}
          disabled={!hasTrack}
          aria-label="Next track"
          className="text-chrome-muted transition-colors duration-150 hover:text-chrome-text disabled:opacity-40"
        >
          <SkipNextIcon className="size-5" />
        </button>
      </div>

      <div className="hidden min-w-0 items-center justify-end gap-4 md:flex">
        <Waveform
          seed={current?.id ?? 0}
          progress={progress}
          onSeek={hasTrack ? (fraction) => seek(fraction * duration) : undefined}
        />
        <p className="w-20 text-right text-xs tabular-nums text-chrome-muted">
          {formatSeconds(currentTime)} / {formatSeconds(hasTrack ? duration : 0)}
        </p>
      </div>
    </footer>
  )
}
