import { createFileRoute } from '@tanstack/react-router'

import { BookCard } from '@/components/books/BookCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { BOOKS } from '@/data/books.constants'

export const Route = createFileRoute('/books')({ component: BooksPage })

function BooksPage() {
  return (
    <div className="stagger">
      <SectionHeader title="Books" />
      <p className="mb-6 -mt-2 text-sm text-ink-muted">The reading shelf — albums for the mind.</p>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {BOOKS.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  )
}
