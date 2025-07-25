// src/app/page.tsx
import { getNewsList } from '@/lib/microcms';
import Link from 'next/link';

export default async function Home() {
  const news = await getNewsList();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            古窯グループ（プロトタイプ）
          </h1>
          <p className="text-gray-600 mt-2">
            山形の旅館・レストラン
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* ヒーローセクション */}
        <section className="bg-blue-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-4xl font-bold mb-4">
            泊まる、味わう、体験する
          </h2>
          <p className="text-xl">
            今日、この瞬間に、最高の山形を。
          </p>
        </section>

        {/* ニュース一覧 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            ニュース・お知らせ
          </h2>
          
          {news.length === 0 ? (
            <p className="text-gray-600">
              ニュースがありません。microCMSで記事を作成してください。
            </p>
          ) : (
            <div className="space-y-4">
              {news.map((article) => (
                <div 
                  key={article.id} 
                  className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      <Link 
                        href={`/news/${article.id}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <span className="text-sm text-gray-500">
                      {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                    </span>
                  </div>
                  <p className="text-gray-600 line-clamp-2">
                    {article.content.replace(/<[^>]*>/g, '').substring(0, 100)}...
                  </p>
                  <Link 
                    href={`/news/${article.id}`}
                    className="inline-block mt-3 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    続きを読む →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <p className="text-center">
            © 2025 古窯グループ. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}