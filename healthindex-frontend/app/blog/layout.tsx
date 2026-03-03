import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog & Guides | GrailWatch',
  description: 'Expert guides on comic book grading, investing, and market analysis.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
