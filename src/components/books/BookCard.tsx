import { useState } from 'react'

import { Equalizer } from '@/components/music/Equalizer'
import { bookCoverUrl, type BookEntry } from '@/data/books.constants'

export function BookCard({ book }: { book: BookEntry }) {
  const [failed, setFailed] = useState(false)
  const src = bookCoverUrl(book)

  return (
    <div className="group transition-transform duration-250 hover:-translate-y-0.5">
      {src && !failed ? (
        <div className="overflow-hidden rounded-2xl shadow-card">
          <img
            src={src}
            alt={`${book.title} cover`}
            loading="lazy"
            onError={() => setFailed(true)}
            className="aspect-[2/3] w-full object-cover transition-transform duration-250 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <SpineFallback book={book} />
      )}
      <p className="mt-3 truncate text-sm font-semibold text-ink">{book.title}</p>
      <p className="truncate text-xs text-ink-muted">
        {book.author}
        {book.year ? ` · ${book.year}` : ''}
      </p>
      {book.status === 'reading' && (
        <span className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-ember">
          <Equalizer />
          now reading
        </span>
      )}
    </div>
  )
}

function SpineFallback({ book }: { book: BookEntry }) {
  return (
    <div
      className={`grid aspect-[2/3] w-full place-items-center rounded-2xl border-l-4 border-lime/60 bg-gradient-to-br shadow-card ${
        book.accentClass ?? 'from-chrome to-chrome-deep'
      }`}
    >
      <div className="px-4 text-center">
        <p className="line-clamp-3 text-sm font-bold text-chrome-text">{book.title}</p>
        <p className="mt-2 text-xs text-chrome-muted">{book.author}</p>
      </div>
    </div>
  )
}
