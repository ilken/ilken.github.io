import { useQueries } from '@tanstack/react-query'

import { ARTISTS, type PortfolioArtist } from '@/data/artists.constants'
import { type ItunesAlbum, type ItunesSong, lookupAlbums, lookupSongs } from '@/lib/itunes'
import type { PlayerTrack } from '@/player/player.types'

const QUERY_OPTIONS = {
  staleTime: Infinity,
  gcTime: Infinity,
  retry: 2,
} as const

export function songToTrack(song: ItunesSong): PlayerTrack {
  return {
    id: song.trackId,
    title: song.trackName,
    artist: song.artistName,
    album: song.collectionName,
    artworkUrl: song.artworkUrl100,
    previewUrl: song.previewUrl ?? '',
    durationMs: song.trackTimeMillis,
    appleUrl: song.trackViewUrl,
  }
}

function dedupeSongs(songs: ItunesSong[]): ItunesSong[] {
  const seen = new Set<string>()
  return songs.filter((song) => {
    const key = song.trackName.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export interface ArtistAlbums {
  artist: PortfolioArtist
  albums: ItunesAlbum[]
}

export interface ArtistSongs {
  artist: PortfolioArtist
  songs: ItunesSong[]
}

export function useArtistAlbums() {
  return useQueries({
    queries: ARTISTS.map((artist) => ({
      queryKey: ['albums', artist.id],
      queryFn: () => lookupAlbums(artist.id),
      ...QUERY_OPTIONS,
    })),
    combine: (results) => ({
      byArtist: ARTISTS.map((artist, i) => ({
        artist,
        albums: results[i].data ?? [],
      })) as ArtistAlbums[],
      isLoading: results.some((r) => r.isLoading),
      isError: results.every((r) => r.isError),
    }),
  })
}

export function useArtistSongs() {
  return useQueries({
    queries: ARTISTS.map((artist) => ({
      queryKey: ['songs', artist.id],
      queryFn: () => lookupSongs(artist.id),
      ...QUERY_OPTIONS,
    })),
    combine: (results) => ({
      byArtist: ARTISTS.map((artist, i) => ({
        artist,
        songs: dedupeSongs(results[i].data ?? []),
      })) as ArtistSongs[],
      isLoading: results.some((r) => r.isLoading),
      isError: results.every((r) => r.isError),
    }),
  })
}

/** Interleaves the artists' top songs: LP #1, maNga #1, Duman #1, LP #2, ... */
export function interleaveSongs(byArtist: ArtistSongs[], perArtist: number): ItunesSong[] {
  const interleaved: ItunesSong[] = []
  for (let rank = 0; rank < perArtist; rank++) {
    for (const { songs } of byArtist) {
      const song = songs[rank]
      if (song) interleaved.push(song)
    }
  }
  return interleaved
}
