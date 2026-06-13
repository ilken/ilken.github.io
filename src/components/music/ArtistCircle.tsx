interface ArtistCircleProps {
  name: string
  genre: string
  imageUrl?: string
}

export function ArtistCircle({ name, genre, imageUrl }: ArtistCircleProps) {
  return (
    <div className="flex w-32 flex-col items-center gap-3 sm:w-36">
      <div className="size-28 overflow-hidden rounded-full shadow-card sm:size-32">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="size-full object-cover" loading="lazy" />
        ) : (
          <div className="size-full animate-pulse bg-cream-sunken" />
        )}
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-ink">{name}</p>
        <p className="text-xs text-ink-muted">{genre}</p>
      </div>
    </div>
  )
}
