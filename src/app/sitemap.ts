// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { getNewsList } from '@/lib/microcms'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 基本ページのサイトマップエントリ
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: 'https://koyo-prototype.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://koyo-prototype.vercel.app/company',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://koyo-prototype.vercel.app/recruit',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://koyo-prototype.vercel.app/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://koyo-prototype.vercel.app/news',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://koyo-prototype.vercel.app/concept',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // 動的ニュースページのサイトマップエントリ
  let newsPages: MetadataRoute.Sitemap = []
  
  try {
    const news = await getNewsList()
    newsPages = news.map((article: any) => ({
      url: `https://koyo-prototype.vercel.app/news/${article.id}`,
      lastModified: new Date(article.updatedAt || article.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch (error) {
    console.error('Sitemap generation error:', error)
    // エラーが発生してもサイトマップ生成は継続
  }

  return [...staticPages, ...newsPages]
}