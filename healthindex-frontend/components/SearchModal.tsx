'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Fuse, { IFuseOptions } from 'fuse.js'
import Link from 'next/link'
import { Search, X, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { blogPosts, BlogPost } from '@/lib/blog-posts'

// Fuse.js search configuration
const fuseOptions: IFuseOptions<BlogPost> = {
  keys: [
    { name: 'title', weight: 0.7 },
    { name: 'excerpt', weight: 0.2 },
    { name: 'category', weight: 0.1 },
  ],
  threshold: 0.4,
  includeScore: true,
  minMatchCharLength: 2,
}

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

function SearchResultItem({ post, onClick }: { post: BlogPost; onClick: () => void }) {
  return (
    <Link
      href={`/blog/${post.id}`}
      onClick={onClick}
      className="block group"
    >
      <div className="p-4 rounded-xl hover:bg-gw-card-hover transition-all duration-200 cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-gw-accent/10 flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-5 h-5 text-gw-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 bg-gw-gold/20 text-gw-gold text-xs rounded-full">
                {post.category}
              </span>
              <span className="text-gw-text-tertiary text-xs flex items-center gap-1">
                <Clock className="w-3 h-3" /> {post.readTime}
              </span>
            </div>
            <h3 className="font-semibold text-white group-hover:text-gw-accent transition-colors truncate">
              {post.title}
            </h3>
            <p className="text-gw-text-secondary text-sm mt-1 line-clamp-1">
              {post.excerpt}
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-gw-text-tertiary group-hover:text-gw-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
        </div>
      </div>
    </Link>
  )
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)

  // Initialize Fuse instance
  const fuse = useMemo(() => new Fuse(blogPosts, fuseOptions), [])

  // Search results
  const results = useMemo(() => {
    if (!query.trim() || query.length < 2) return []
    return fuse.search(query).slice(0, 8)
  }, [query, fuse])

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setActiveIndex(0)
    }
  }, [isOpen])

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setActiveIndex(prev => Math.min(prev + 1, results.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setActiveIndex(prev => Math.max(prev - 1, 0))
        break
      case 'Enter':
        e.preventDefault()
        if (results[activeIndex]) {
          window.location.href = `/blog/${results[activeIndex].item.id}`
          onClose()
        }
        break
      case 'Escape':
        e.preventDefault()
        onClose()
        break
    }
  }, [isOpen, results, activeIndex, onClose])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl glass-card overflow-hidden shadow-2xl animate-slide-up">
        {/* Search Input */}
        <div className="flex items-center gap-3 p-4 border-b border-gw-border">
          <Search className="w-5 h-5 text-gw-text-tertiary flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setActiveIndex(0)
            }}
            placeholder="Search guides, articles..."
            autoFocus
            className="flex-1 bg-transparent text-white placeholder-gw-text-tertiary focus:outline-none text-lg"
          />
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 text-xs bg-gw-bg-secondary text-gw-text-tertiary rounded border border-gw-border">
              ESC
            </kbd>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gw-card-hover rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gw-text-tertiary" />
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.length > 0 && query.length < 2 && (
            <div className="p-8 text-center text-gw-text-tertiary">
              Type at least 2 characters to search
            </div>
          )}

          {query.length >= 2 && results.length === 0 && (
            <div className="p-8 text-center">
              <div className="text-4xl mb-3">🔍</div>
              <p className="text-gw-text-secondary">No results found for &quot;{query}&quot;</p>
              <p className="text-gw-text-tertiary text-sm mt-1">Try different keywords</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="p-2">
              <div className="px-3 py-2 text-xs text-gw-text-tertiary uppercase tracking-wider">
                {results.length} result{results.length !== 1 ? 's' : ''}
              </div>
              <div className="space-y-1">
                {results.map((result, index) => (
                  <SearchResultItem
                    key={result.item.id}
                    post={result.item}
                    onClick={onClose}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Empty state - show recent when no query */}
          {query.length === 0 && (
            <div className="p-2">
              <div className="px-3 py-2 text-xs text-gw-text-tertiary uppercase tracking-wider">
                Recent Guides
              </div>
              <div className="space-y-1">
                {blogPosts.slice(0, 5).map((post) => (
                  <SearchResultItem
                    key={post.id}
                    post={post}
                    onClick={onClose}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gw-border bg-gw-bg-secondary/50 text-xs text-gw-text-tertiary">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gw-card rounded border border-gw-border">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-gw-card rounded border border-gw-border">↓</kbd>
              <span className="ml-1">Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gw-card rounded border border-gw-border">↵</kbd>
              <span className="ml-1">Open</span>
            </span>
          </div>
          <span>Powered by Fuse.js</span>
        </div>
      </div>
    </div>
  )
}

// Hook to manage search modal state
export function useSearchModal() {
  const [isOpen, setIsOpen] = useState(false)

  // Global keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen(prev => !prev), [])

  return { isOpen, open, close, toggle }
}
