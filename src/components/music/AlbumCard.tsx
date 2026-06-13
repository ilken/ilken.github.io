import { releaseYear } from '@/lib/format'
import type { ItunesAlbum } from '@/lib/itunes'
import { upscaleArtwork } from '@/lib/itunes'

export function AlbumCard({ album }: { album: ItunesAlbum }) {
  return (
    <a
      href={album.collectionViewUrl}
      target="_blank"
      rel="noreferrer"
      className="group block transition-transform duration-250 hover:-translate-y-0.5"
    >
      <div className="overflow-hidden rounded-2xl shadow-card">
        <img
          src={upscaleArtwork(album.artworkUrl100, 400)}
          alt={album.collectionName}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-250 group-hover:scale-[1.03]"
        />
      </div>
      <p className="mt-3 truncate text-sm font-semibold text-ink">{album.collectionName}</p>
      <p className="text-xs text-ink-muted">
        {album.artistName} · {releaseYear(album.releaseDate)}
      </p>
    </a>
  )
}
