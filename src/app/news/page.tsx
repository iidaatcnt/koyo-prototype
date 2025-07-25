// src/app/news/page.tsx (安全なmicroCMS連携版)
import { getNewsList } from '@/lib/microcms';
import Link from 'next/link';

export const metadata = {
  title: '新着情報 | 古窯グループ',
  description: '古窯グループの最新情報をお届けします。',
};

// 安全にデータを表示するヘルパー関数
const safeGetCategoryName = (category: any): string => {
  if (!category) return '';
  if (typeof category === 'string') return category;
  if (typeof category === 'object' && category.name) return category.name;
  return '';
};

const safeStripHtml = (html: string): string => {
  if (typeof html !== 'string') return '';
  return html.replace(/<[^>]*>/g, '');
};

export default async function NewsPage() {
  let news: any[] = [];
  let hasError = false;

  try {
    news = await getNewsList();
  } catch (error) {
    console.error('ニュース取得エラー:', error);
    hasError = true;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ページヘッダー */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">新着情報</h1>
            <p className="text-lg text-gray-600">
              古窯グループの最新情報をお届けします
            </p>
          </div>
        </div>
      </section>

      {/* ニュース一覧 */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          {hasError ? (
            <div className="text-center py-16">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <svg className="mx-auto h-12 w-12 text-red-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <h3 className="text-lg font-medium text-red-800 mb-2">データ取得エラー</h3>
                <p className="text-red-600 text-sm">microCMSからデータを取得できませんでした。</p>
              </div>
            </div>
          ) : news.length === 0 ? (
            <div className="text-center py-16">
              <div className="mb-4">
                <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">新着情報はありません</h3>
              <p className="text-gray-600">新しい情報が投稿されるまでお待ちください。</p>
            </div>
          ) : (
            <div className="space-y-8">
              {news.map((article: any, index: number) => (
                <article 
                  key={article?.id || index} 
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="md:flex">
                    {article?.eyecatch?.url && (
                      <div className="md:w-1/3">
                        <img 
                          src={article.eyecatch.url} 
                          alt={article?.title || 'ニュース画像'}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                    )}
                    <div className={`p-6 ${article?.eyecatch?.url ? 'md:w-2/3' : 'w-full'}`}>
                      <div className="flex items-center mb-3">
                        <time className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {article?.publishedAt ? 
                            new Date(article.publishedAt).toLocaleDateString('ja-JP', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            }) : 
                            '日付不明'
                          }
                        </time>
                        {safeGetCategoryName(article?.category) && (
                          <span className="ml-3 text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                            {safeGetCategoryName(article.category)}
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                        <Link 
                          href={`/news/${article?.id || '#'}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {article?.title || 'タイトル不明'}
                        </Link>
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {article?.content ? 
                          safeStripHtml(article.content).substring(0, 200) + 
                          (safeStripHtml(article.content).length > 200 ? '...' : '') :
                          '内容がありません'
                        }
                      </p>
                      <Link 
                        href={`/news/${article?.id || '#'}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        詳細を見る
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* 記事数表示 */}
          {news.length > 0 && (
            <div className="mt-12 text-center">
              <p className="text-gray-600">
                全 {news.length} 件の記事を表示中
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}