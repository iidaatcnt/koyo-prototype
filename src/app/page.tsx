// src/app/page.tsx - HeroSlider使用版
import { getNewsList } from '@/lib/microcms';
import Link from 'next/link';
import Image from 'next/image';
import HeroSlider from '@/components/HeroSlider';

// 安全にカテゴリ名を取得
const safeGetCategoryName = (category: any): string => {
  if (!category) return '';
  if (typeof category === 'string') return category;
  if (typeof category === 'object' && category.name) return category.name;
  return '';
};

export default async function Home() {
  let latestNews: any[] = [];
  let hasNewsError = false;

  try {
    const news = await getNewsList();
    latestNews = news.slice(0, 3); // 最新3件のみ表示
  } catch (error) {
    console.error('Homeページニュース取得エラー:', error);
    hasNewsError = true;
  }

  return (
    <div className="min-h-screen">
      {/* ヒーロースライダー - 動的スライダー使用 */}
      <HeroSlider />

      {/* メッセージセクション */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            私達はこれまで"山形"という地域そのものを商品として、この地域の良さを発信し、 
            山形の価値を高めたいという強い想いで仕事をしています。
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mt-6">
            この土地ならではの人、風景、食べ物、この土地での様々な体験がお客様の感動につながるため、 
            私達は自信を持って山形の魅力を提供し、どうすれば上手に伝わるかを常々考え仕事をしています。
          </p>
        </div>
      </section>

      {/* 事業紹介セクション - 実画像使用 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            古窯グループの事業
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 泊まる */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/hero-2.png"
                  alt="古窯グループの旅館・温泉宿"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">泊まる</h3>
                <p className="text-gray-600 leading-relaxed">
                  山形の自然と温泉を活かした旅館・ホテルで、 
                  お客様に心からくつろいでいただける空間を提供します。
                </p>
              </div>
            </div>

            {/* 味わう */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/hero-3.png"
                  alt="古窯グループの料理・レストラン"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">味わう</h3>
                <p className="text-gray-600 leading-relaxed">
                  山形の豊かな食材を活かした料理で、 
                  地域の味覚と文化をお客様にお届けします。
                </p>
              </div>
            </div>

            {/* 体験する */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/hero-4.png"
                  alt="古窯グループの体験・アクティビティ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">体験する</h3>
                <p className="text-gray-600 leading-relaxed">
                  山形ならではの文化や自然を体験できる 
                  多彩なプログラムをご用意しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 最新ニュースセクション */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            最新ニュース
          </h2>
          
          {hasNewsError ? (
            <div className="text-center text-gray-500">
              <p>ニュースの読み込み中にエラーが発生しました。</p>
            </div>
          ) : latestNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestNews.map((news) => (
                <article key={news.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <Link href={`/news/${news.id}`}>
                    <div className="p-6">
                      <div className="text-sm text-blue-600 mb-2">
                        {safeGetCategoryName(news.category)}
                      </div>
                      <h3 className="font-bold text-lg mb-3 text-gray-800 line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {news.content?.replace(/<[^>]*>/g, '') || ''}
                      </p>
                      <div className="text-xs text-gray-500 mb-3">
                        {new Date(news.publishedAt || news.createdAt).toLocaleDateString('ja-JP')}
                      </div>
                      <div className="text-blue-600 text-sm font-medium">
                        続きを読む →
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <p>まだニュースがありません。</p>
            </div>
          )}
        </div>
      </section>

      {/* 採用情報セクション */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            一緒に働きませんか？
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            働くメンバー一人一人が山形の魅力を伝えるパフォーマーであり、 
            "山形で働くこと"そのものが自然と山形のファンを増やすことにつながっていく会社です。
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            "お客様の喜びを我が喜びとする"様々な職種が集まり協力して 
            一つのサービスを提供する古窯グループのメンバーを募集しております。
          </p>
          <Link 
            href="/recruit" 
            className="inline-block bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
          >
            採用情報を見る
          </Link>
        </div>
      </section>
    </div>
  );
}