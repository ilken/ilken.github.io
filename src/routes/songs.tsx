import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import { SongList } from '@/components/music/SongList'
import { ErrorNote } from '@/components/ui/ErrorNote'
import { FilterChips } from '@/components/ui/FilterChips'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SongRowSkeletons } from '@/components/ui/Skeleton'
import { ARTISTS } from '@/data/artists.constants'
import { songToTrack, useArtistSongs } from '@/hooks/use-music'

const ALL = 'all'

const CHIPS = [
  { value: ALL, label: 'All' },
  ...ARTISTS.map((a) => ({ value: String(a.id), label: a.name })),
]

export const Route = createFileRoute('/songs')({ component: SongsPage })

function SongsPage() {
  const [filter, setFilter] = useState(ALL)
  const { byArtist, isLoading, isError } = useArtistSongs()

  const tracks = byArtist
    .filter(({ artist }) => filter === ALL || String(artist.id) === filter)
    .flatMap(({ songs }) => songs)
    .map(songToTrack)

  return (
    <div className="stagger">
      <SectionHeader title="Songs" />
      <FilterChips chips={CHIPS} active={filter} onChange={setFilter} />

      {isError ? (
        <ErrorNote />
      ) : isLoading ? (
        <SongRowSkeletons count={10} />
      ) : (
        <SongList tracks={tracks} />
      )}
    </div>
  )
}
