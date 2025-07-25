// src/app/news/[id]/page.tsx
import { getNewsDetail, getNewsList } from '@/lib/microcms';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NewsDetail({ params }: Props) {
  const { id } = await params;
  const article = await getNewsDetail(id);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-700 font-medium mb-2 inline-block"
          >
            ← トップページに戻る
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            ニュース詳細
          </h1>
        </div>
      </header>

      {/* 記事コンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow p-8">
          {/* アイキャッチ画像 */}
          {article.eyecatch && (
            <img 
              src={article.eyecatch.url} 
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}
          
          <div className="mb-6">
            <span className="text-sm text-gray-500 mb-2 block">
              {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
          </div>
          
          <div className="prose max-w-none">
            <div 
              className="text-gray-700 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>
      </main>
    </div>
  );
}

// 静的生成のためのパスを生成
export async function generateStaticParams() {
  const news = await getNewsList();
  return news.map((article) => ({
    id: article.id,
  }));
}