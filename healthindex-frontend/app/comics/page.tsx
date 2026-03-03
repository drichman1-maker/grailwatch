import { getComics, searchComics, Comic } from '@/lib/data'
import { ComicCard } from '@/components/ComicCard'
import { Search } from 'lucide-react'

interface PageProps {
  searchParams: Promise<{ q?: string }>
}

// ═══════════════════════════════════════════════════════════════
// Comics List / Search Page
// ═══════════════════════════════════════════════════════════════

export default async function ComicsPage({ searchParams }: PageProps) {
  const { q } = await searchParams
  const query = q || ''
  
  const comics: Comic[] = query ? searchComics(query) : getComics()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">Browse Comics</h1>
          <p className="text-gw-text-secondary mt-1">
            {comics.length} graded comics in database
          </p>
        </div>

        {/* Search */}
        <form className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gw-text-tertiary" />
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="Search comics..."
            className="w-full bg-gw-card border border-gw-border rounded-xl py-3 pl-10 pr-4 text-white placeholder-gw-text-tertiary focus:outline-none focus:border-gw-accent transition-colors"
          />
        </form>
      </div>

      {/* Filters (placeholder) */}
      <div className="flex flex-wrap gap-3">
        <FilterChip active>All</FilterChip>
        <FilterChip>Marvel</FilterChip>
        <FilterChip>DC</FilterChip>
        <FilterChip>Image</FilterChip>
        <FilterChip>Key Issues</FilterChip>
        <FilterChip>CGC 9.8</FilterChip>
      </div>

      {/* Comics Grid */}
      {comics.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {comics.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-gw-card rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gw-text-tertiary" />
          </div>
          <p className="text-gw-text-secondary">No comics found for "{query}"</p>
        </div>
      )}
    </div>
  )
}

function FilterChip({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        active
          ? 'bg-gw-accent text-black'
          : 'bg-gw-card border border-gw-border text-gw-text-secondary hover:text-white hover:border-gw-accent'
      }`}
    >
      {children}
    </button>
  )
}
