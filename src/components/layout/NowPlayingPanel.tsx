import { NowPlayingIcon } from '@/components/icons'
import { upscaleArtwork } from '@/lib/itunes'
import { usePlayer } from '@/player/use-player'

export function NowPlayingPanel() {
  const { current, queue, index, playQueue } = usePlayer()
  const upNext = queue.slice(index + 1, index + 4)

  return (
    <aside className="hidden w-72 shrink-0 flex-col gap-5 overflow-y-auto rounded-2xl bg-cream-raised p-5 xl:flex">
      <div className="flex items-center gap-2">
        <NowPlayingIcon className="size-5 text-ink" />
        <h2 className="text-base font-bold text-ink">Now Playing</h2>
      </div>

      {current ? (
        <>
          <img
            src={upscaleArtwork(current.artworkUrl, 400)}
            alt={current.album}
            className="aspect-square w-full rounded-2xl object-cover shadow-card"
          />
          <div>
            <p className="text-lg font-bold leading-tight text-ink">{current.title}</p>
            <p className="mt-1 text-sm text-ink-soft">{current.artist}</p>
          </div>
        </>
      ) : (
        <div className="grid aspect-square w-full place-items-center rounded-2xl bg-cream-sunken">
          <div className="px-6 text-center">
            <NowPlayingIcon className="mx-auto size-8 text-ink-muted" />
            <p className="mt-3 text-sm text-ink-muted">
              Nothing playing yet — hit play on any song.
            </p>
          </div>
        </div>
      )}

      {upNext.length > 0 && (
        <div className="border-t border-cream-sunken pt-4">
          <p className="mb-3 text-xs font-semibold tracking-wide text-ink-muted uppercase">
            Up next
          </p>
          <div className="flex flex-col gap-2">
            {upNext.map((track, i) => (
              <button
                key={track.id}
                type="button"
                onClick={() => playQueue(queue, index + 1 + i)}
                className="flex items-center gap-3 rounded-xl p-1.5 text-left transition-colors duration-150 hover:bg-cream"
              >
                <img src={track.artworkUrl} alt="" className="size-10 rounded-lg object-cover" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">{track.title}</p>
                  <p className="truncate text-xs text-ink-muted">{track.artist}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </aside>
  )
}
