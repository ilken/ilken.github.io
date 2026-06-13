import { createFileRoute } from '@tanstack/react-router'

import { HomeHero } from '@/components/home/HomeHero'
import { ArtistCircle } from '@/components/music/ArtistCircle'
import { SongList } from '@/components/music/SongList'
import { ErrorNote } from '@/components/ui/ErrorNote'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SongRowSkeletons } from '@/components/ui/Skeleton'
import { interleaveSongs, songToTrack, useArtistAlbums, useArtistSongs } from '@/hooks/use-music'
import { upscaleArtwork } from '@/lib/itunes'

const TOP_SONGS_PER_ARTIST = 2

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  const albums = useArtistAlbums()
  const songs = useArtistSongs()
  const topTracks = interleaveSongs(songs.byArtist, TOP_SONGS_PER_ARTIST).map(songToTrack)

  return (
    <div className="stagger flex flex-col gap-10">
      <HomeHero tracks={topTracks} />

      <section>
        <SectionHeader title="Popular artists" seeAllTo="/albums" />
        {albums.isError ? (
          <ErrorNote />
        ) : (
          <div className="flex flex-wrap gap-6">
            {albums.byArtist.map(({ artist, albums: artistAlbums }) => (
              <ArtistCircle
                key={artist.id}
                name={artist.name}
                genre={artist.genre}
                imageUrl={
                  artistAlbums[0] ? upscaleArtwork(artistAlbums[0].artworkUrl100, 400) : undefined
                }
              />
            ))}
          </div>
        )}
      </section>

      <section>
        <SectionHeader title="Recently played" seeAllTo="/songs" />
        {songs.isError ? (
          <ErrorNote />
        ) : songs.isLoading ? (
          <SongRowSkeletons />
        ) : (
          <SongList tracks={topTracks} />
        )}
      </section>
    </div>
  )
}
