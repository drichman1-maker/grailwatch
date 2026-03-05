import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts } from '../page'

export function generateStaticParams() {
  return posts.map(post => ({ id: post.id }))
}

export const dynamic = 'force-static'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const post = posts.find(p => p.id === id)
  if (!post) return { title: 'Article Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params
  const post = posts.find(p => p.id === id)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="border-b border-[#2a2a2a] bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#00ff88] to-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">GPUDrip</span>
            </Link>
            <nav className="flex items-center gap-4">
              <Link href="/" className="text-sm text-[#888] hover:text-white transition-colors">GPUs</Link>
              <Link href="/blog" className="text-sm text-[#00ff88]">Blog</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="text-[#888] hover:text-white text-sm mb-8 inline-block">
          ← Back to blog
        </Link>
        
        <article>
          <div className="flex items-center gap-3 text-sm text-[#888] mb-4">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{post.title}</h1>
          <p className="text-[#888] text-lg mb-8">{post.excerpt}</p>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-[#aaa] leading-relaxed">
              [Article content coming soon...]
            </p>
            <p className="text-[#aaa] leading-relaxed mt-4">
              This is a template for the article &quot;{post.title}&quot;. 
              You can add the full content here in the page component or 
              import it from a separate file.
            </p>
          </div>
        </article>
      </main>

      <footer className="border-t border-[#2a2a2a] mt-16 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#888] text-sm">
            <Link href="/privacy" className="hover:text-[#00ff88] mx-2">Privacy</Link>
            <span className="text-[#333]">|</span>
            <Link href="/blog" className="hover:text-[#00ff88] mx-2">Blog</Link>
          </p>
          <p className="text-[#888] text-sm mt-2">© 2026 GPUDrip</p>
        </div>
      </footer>
    </div>
  )
}