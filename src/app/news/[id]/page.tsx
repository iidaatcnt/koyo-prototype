// src/app/news/[id]/page.tsx (安全なmicroCMS連携版)
import { getNewsDetail, getNewsList } from '@/lib/microcms';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

// 安全にカテゴリ名を取得
const safeGetCategoryName = (category: any): string => {
  if (!category) return '';
  if (typeof category === 'string') return category;
  if (typeof category === 'object' && category.name) return category.name;
  return '';
};

// 安全にHTMLコンテンツを表示
const safeRenderContent = (content: any): string => {
  if (typeof content !== 'string') return '内容がありません';
  return content;
};

export default async function NewsDetail({ params }: Props) {
  const { id } = await params;
  
  let article: any = null;
  let hasError = false;

  try {
    article = await getNewsDetail(id);
  } catch (error) {
    console.error('記事取得エラー:', error);
    hasError = true;
  }

  // 記事が見つからない場合は404ページを表示
  if (!hasError && !article) {
    notFound();
  }

  // エラーが発生した場合のエラーページ
  if (hasError) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <Link 
              href="/news"
              className="text-blue-600 hover:text-blue-700 font-medium mb-2 inline-block"
            >
              ← 新着情報一覧に戻る
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">エラー</h1>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <svg className="mx-auto h-12 w-12 text-red-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <h2 className="text-lg font-medium text-red-800 mb-2">記事の読み込みに失敗しました</h2>
            <p className="text-red-600 text-sm mb-4">申し訳ございません。記事を読み込むことができませんでした。</p>
            <Link 
              href="/news"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              新着情報一覧に戻る
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            href="/news"
            className="text-blue-600 hover:text-blue-700 font-medium mb-2 inline-block transition-colors"
          >
            ← 新着情報一覧に戻る
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">ニュース詳細</h1>
        </div>
      </header>

      {/* 記事コンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow p-8">
          {/* アイキャッチ画像 */}
          {article?.eyecatch?.url && (
            <img 
              src={article.eyecatch.url} 
              alt={article?.title || 'ニュース画像'}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}
          
          {/* 記事メタ情報 */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {article?.title || 'タイトル不明'}
            </h1>
          </div>
          
          {/* 記事本文 */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: safeRenderContent(article?.content) 
              }}
            />
          </div>

          {/* 記事フッター */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                <p>
                  投稿日: {article?.publishedAt ? 
                    new Date(article.publishedAt).toLocaleDateString('ja-JP') : 
                    '不明'
                  }
                </p>
                {article?.updatedAt && article.updatedAt !== article.publishedAt && (
                  <p className="mt-1">
                    更新日: {new Date(article.updatedAt).toLocaleDateString('ja-JP')}
                  </p>
                )}
              </div>
              <Link 
                href="/news"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                新着情報一覧に戻る
              </Link>
            </div>
          </div>
        </article>

        {/* 関連記事セクション（将来的に実装） */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">その他の新着情報</h2>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <p className="text-gray-600 mb-4">他の記事も合わせてご覧ください</p>
            <Link 
              href="/news"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              新着情報一覧を見る
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

// 静的生成のためのパスを生成
export async function generateStaticParams() {
  try {
    const news = await getNewsList();
    return news.map((article: any) => ({
      id: article.id,
    }));
  } catch (error) {
    console.error('静的パス生成エラー:', error);
    return [];
  }
}