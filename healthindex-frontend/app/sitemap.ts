import { PRODUCTS, CATEGORIES } from '@/lib/wellness-data'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://healthindex.io'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/products`, changeFrequency: 'daily', priority: 0.9 },
  ]
  
  // Category pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map(cat => ({
    url: `${baseUrl}/products?category=${cat.id}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))
  
  // Product pages
  const productPages: MetadataRoute.Sitemap = PRODUCTS.map(product => ({
    url: `${baseUrl}/products/${product.id}`,
    changeFrequency: 'weekly',
    priority: product.isFeatured ? 0.8 : 0.7,
    lastModified: new Date(),
  }))
  
  return [...staticPages, ...categoryPages, ...productPages]
}