export interface BookEntry {
  title: string
  author: string
  isbn?: string
  /** Manual override when Open Library has no or a bad cover. */
  coverUrl?: string
  year?: number
  status?: 'reading' | 'read'
  /** Spine gradient for the no-cover fallback card. */
  accentClass?: string
}

export function bookCoverUrl(book: BookEntry): string | undefined {
  if (book.coverUrl) return book.coverUrl
  // `default=false` makes missing covers 404 so onError can show the fallback
  if (book.isbn) return `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg?default=false`
  return undefined
}

export const BOOKS: BookEntry[] = [
  {
    title: 'My System',
    author: 'Aron Nimzowitsch',
    isbn: '9781880673850',
    year: 1925,
  },
  {
    title: 'Fundamentals of Software Architecture',
    author: 'Mark Richards & Neal Ford',
    isbn: '9781492043454',
    year: 2020,
  },
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    isbn: '9781455586691',
    year: 2016,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    isbn: '9780735211292',
    year: 2018,
  },
]
