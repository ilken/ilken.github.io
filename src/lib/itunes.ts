// &v=1 busts Apple CDN's per-URL ACAO cache that can get poisoned by non-production origins.
const LOOKUP_URL = 'https://itunes.apple.com/lookup?v=1'

export interface ItunesAlbum {
  wrapperType: 'collection'
  collectionId: number
  collectionName: string
  collectionType: string
  artistName: string
  artworkUrl100: string
  releaseDate: string
  trackCount: number
  collectionViewUrl: string
  primaryGenreName: string
}

export interface ItunesSong {
  wrapperType: 'track'
  trackId: number
  trackName: string
  artistName: string
  collectionName: string
  artworkUrl100: string
  previewUrl?: string
  trackTimeMillis: number
  trackViewUrl: string
  releaseDate: string
}

interface LookupResponse<T> {
  resultCount: number
  results: T[]
}

async function lookup<T>(artistId: number, entity: 'album' | 'song', limit: number): Promise<T[]> {
  const res = await fetch(`${LOOKUP_URL}&id=${artistId}&entity=${entity}&limit=${limit}`)
  if (!res.ok) {
    throw new Error(`iTunes lookup failed for artist ${artistId}: ${res.status}`)
  }
  const data: LookupResponse<T> = await res.json()
  // The first result is the artist record itself.
  return data.results.slice(1)
}

export async function lookupAlbums(artistId: number, limit = 20): Promise<ItunesAlbum[]> {
  const results = await lookup<ItunesAlbum>(artistId, 'album', limit)
  return results.filter((r) => r.wrapperType === 'collection' && r.collectionType === 'Album')
}

export async function lookupSongs(artistId: number, limit = 20): Promise<ItunesSong[]> {
  const results = await lookup<ItunesSong>(artistId, 'song', limit)
  return results.filter((r) => r.wrapperType === 'track' && Boolean(r.previewUrl))
}

export function upscaleArtwork(url: string, size = 600): string {
  return url.replace('100x100', `${size}x${size}`)
}
