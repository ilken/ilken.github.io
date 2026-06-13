export interface PlayerTrack {
  id: number
  title: string
  artist: string
  album: string
  artworkUrl: string
  previewUrl: string
  durationMs: number
  appleUrl: string
}

export interface PlayerContextValue {
  current: PlayerTrack | null
  queue: PlayerTrack[]
  index: number
  isPlaying: boolean
  currentTime: number
  duration: number
  playQueue: (tracks: PlayerTrack[], startIndex: number) => void
  toggle: () => void
  next: () => void
  prev: () => void
  seek: (seconds: number) => void
}
