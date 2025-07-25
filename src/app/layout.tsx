// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '古窯グループ | 山形の旅館・レストラン',
  description: '山形で泊まる、味わう、体験する。古窯グループは山形の魅力をお客様にお届けします。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <footer className="bg-gray-800 text-white">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">古窯グループ</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  山形という地域そのものを商品として、この地域の良さを発信し、
                  山形の価値を高めたいという強い想いで仕事をしています。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">事業内容</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>泊まる - 旅館・ホテル事業</li>
                  <li>味わう - レストラン事業</li>
                  <li>体験する - 体験・観光事業</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">お問い合わせ</h3>
                <p className="text-gray-300 text-sm">
                  山形県内各施設へのお問い合わせは<br />
                  各施設ページをご確認ください。
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2025 古窯グループ. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}