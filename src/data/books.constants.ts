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

// TODO: replace with Ilken's list
export const BOOKS: BookEntry[] = [
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    isbn: '9781449373320',
    year: 2017,
    status: 'reading',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    isbn: '9780135957059',
    year: 2019,
    status: 'read',
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    isbn: '9780132350884',
    year: 2008,
    status: 'read',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    isbn: '9780735211292',
    year: 2018,
    status: 'read',
  },
  {
    title: 'The Phoenix Project',
    author: 'Gene Kim, Kevin Behr & George Spafford',
    isbn: '9780988262592',
    year: 2013,
    status: 'read',
  },
]
