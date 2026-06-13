import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import { AlbumCard } from '@/components/music/AlbumCard'
import { ErrorNote } from '@/components/ui/ErrorNote'
import { FilterChips } from '@/components/ui/FilterChips'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Skeleton } from '@/components/ui/Skeleton'
import { ARTISTS } from '@/data/artists.constants'
import { useArtistAlbums } from '@/hooks/use-music'

const ALL = 'all'

const CHIPS = [
  { value: ALL, label: 'All' },
  ...ARTISTS.map((a) => ({ value: String(a.id), label: a.name })),
]

export const Route = createFileRoute('/albums')({ component: AlbumsPage })

function AlbumsPage() {
  const [filter, setFilter] = useState(ALL)
  const { byArtist, isLoading, isError } = useArtistAlbums()

  const visible = byArtist
    .filter(({ artist }) => filter === ALL || String(artist.id) === filter)
    .flatMap(({ albums }) => albums)

  return (
    <div className="stagger">
      <SectionHeader title="Albums" />
      <FilterChips chips={CHIPS} active={filter} onChange={setFilter} />

      {isError ? (
        <ErrorNote />
      ) : (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 8 }, (_, i) => (
                <Skeleton key={i} className="aspect-square w-full rounded-2xl" />
              ))
            : visible.map((album) => <AlbumCard key={album.collectionId} album={album} />)}
        </div>
      )}
    </div>
  )
}
