// src/lib/seo.ts
import { Metadata } from 'next'

interface SEOConfig {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

export function generateSEOMetadata({
  title,
  description,
  path = '',
  image = '/images/og-default.jpg',
  type = 'website',
  publishedTime,
  modifiedTime
}: SEOConfig): Metadata {
  const baseUrl = 'https://koyo-prototype.vercel.app'
  const fullUrl = `${baseUrl}${path}`
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`

  return {
    title,
    description,
    keywords: [
      '古窯グループ',
      '山形',
      '旅館',
      'レストラン',
      '温泉',
      'かみのやま温泉',
      '日本の宿古窯',
      'おやど森の音',
      '採用',
      '求人'
    ],
    authors: [{ name: '古窯グループ' }],
    creator: '古窯グループ',
    publisher: '株式会社旅館古窯',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale: 'ja_JP',
      url: fullUrl,
      title,
      description,
      siteName: '古窯グループ',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
    },
    alternates: {
      canonical: fullUrl,
    },
    verification: {
      // Google Search Console verification (後で追加)
      // google: 'your-google-verification-code',
    },
  }
}

// サイト全体のデフォルトメタデータ
export const defaultSEOConfig = {
  title: {
    default: '古窯グループ | 山形の旅館・レストラン',
    template: '%s | 古窯グループ'
  },
  description: '山形県で旅館・レストラン事業を展開する古窯グループ。日本の宿古窯、おやど森の音など、山形の魅力を伝える宿泊施設とスイーツ専門店を運営しています。',
  keywords: [
    '古窯グループ',
    '山形',
    '旅館',
    'レストラン',
    '温泉',
    'かみのやま温泉',
    '日本の宿古窯',
    'おやど森の音'
  ],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://koyo-prototype.vercel.app',
    siteName: '古窯グループ',
    images: [
      {
        url: 'https://koyo-prototype.vercel.app/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: '古窯グループ - 山形の旅館・レストラン',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image' as const,
  },
  robots: {
    index: true,
    follow: true,
  },
}