import { SongRow } from '@/components/music/SongRow'
import type { PlayerTrack } from '@/player/player.types'
import { usePlayer } from '@/player/use-player'

export function SongList({ tracks }: { tracks: PlayerTrack[] }) {
  const { current, isPlaying, playQueue, toggle } = usePlayer()

  return (
    <div className="flex flex-col gap-1">
      {tracks.map((track, i) => (
        <SongRow
          key={track.id}
          track={track}
          isActive={current?.id === track.id}
          isPlaying={isPlaying}
          onPlay={() => playQueue(tracks, i)}
          onToggle={toggle}
        />
      ))}
    </div>
  )
}
