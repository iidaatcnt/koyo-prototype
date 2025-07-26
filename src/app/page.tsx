// src/app/page.tsx (グループ施設セクション追加版)
import { getNewsList } from '@/lib/microcms';
import Link from 'next/link';

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
      {/* ヒーローセクション */}
      <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1545239351-1141bd82e8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center max-w-4xl px-4">
          <div className="mb-8">
            <span className="text-lg md:text-xl font-light tracking-wider">泊まる</span>
            <span className="mx-4 text-lg md:text-xl">•</span>
            <span className="text-lg md:text-xl font-light tracking-wider">味わう</span>
            <span className="mx-4 text-lg md:text-xl">•</span>
            <span className="text-lg md:text-xl font-light tracking-wider">体験する</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            今日、<br />
            この瞬間に、<br />
            <span className="text-yellow-400">最高の山形を。</span>
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            山形の地で楽しく働くことそのものが、<br />
            自然とお客様の感動や喜びに変わっていく。
          </p>
        </div>
      </section>

      {/* 企業理念セクション */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              山形という地域そのものを商品として
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                私達はこれまで"山形"という地域そのものを商品として、この地域の良さを発信し、
                山形の価値を高めたいという強い想いで仕事をしています。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                この土地ならではの人、風景、食べ物、この土地での様々な体験がお客様の感動につながるため、
                私達は自信を持って山形の魅力を提供し、どうすれば上手に伝わるかを常々考え仕事をしています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 事業内容セクション */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            私たちの事業
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-6 flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-4xl font-bold text-white">泊まる</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">宿泊事業</h3>
              <p className="text-gray-600 leading-relaxed">
                山形の自然と温泉を活かした旅館・ホテルで、
                お客様に心からくつろいでいただける空間を提供します。
              </p>
            </div>
            <div className="text-center group">
              <div className="h-64 bg-gradient-to-br from-green-500 to-green-600 rounded-lg mb-6 flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-4xl font-bold text-white">味わう</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">レストラン事業</h3>
              <p className="text-gray-600 leading-relaxed">
                山形の豊かな食材を活かした料理で、
                地域の味覚と文化をお客様にお届けします。
              </p>
            </div>
            <div className="text-center group">
              <div className="h-64 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg mb-6 flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-4xl font-bold text-white">体験する</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">体験事業</h3>
              <p className="text-gray-600 leading-relaxed">
                山形ならではの文化や自然を体験できる
                多彩なプログラムをご用意しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* グループ施設セクション */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            グループ施設
          </h2>
          <p className="text-center text-gray-600 mb-16">Group Facility</p>

          {/* 泊まる施設 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg">泊まる</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="日本の宿 古窯" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">日本の宿 古窯</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    40年連続トップ10受賞の老舗旅館。蔵王連峰を望む展望露天風呂と
                    山形の食材を活かした会席料理が自慢です。
                  </p>
                  <div className="text-xs text-gray-500">
                    山形県上山市 | かみのやま温泉
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="おやど 森の音" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">おやど 森の音</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    森に囲まれた静寂な宿。自然の音色に包まれながら、
                    心身ともにリフレッシュできる空間をご提供します。
                  </p>
                  <div className="text-xs text-gray-500">
                    山形県上山市 | かみのやま温泉
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="古窯別館" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">古窯別館</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    モダンと伝統が融合した新しいスタイルの宿。
                    若い世代にも愛される上質な和のおもてなし。
                  </p>
                  <div className="text-xs text-gray-500">
                    山形県上山市 | かみのやま温泉
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="山形グランドホテル" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">山形グランドホテル</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    山形市内中心部に位置するシティホテル。
                    ビジネスにも観光にも便利な立地です。
                  </p>
                  <div className="text-xs text-gray-500">
                    山形県山形市 | 市内中心部
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 味わう施設 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg">味わう</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="レストラン古窯" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">レストラン古窯</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    山形の季節の食材を活かした創作料理を、洗練された空間で。
                    特別な日のお食事にもおすすめです。
                  </p>
                  <div className="text-xs text-gray-500">
                    山形県上山市 | 創作和食・会席料理
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 体験する施設 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              <span className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg">体験する</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="楽焼き体験工房" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">楽焼き体験工房</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    1300年前の須恵器の窯跡がある古窯で、伝統の楽焼き体験。
                    世界に一つだけの作品を作りませんか。
                  </p>
                  <div className="text-xs text-gray-500">
                    山形県上山市 | 伝統工芸体験
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 新着情報セクション */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              新着情報
            </h2>
            <Link
              href="/news"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              すべて見る
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {hasNewsError ? (
            <div className="text-center py-8">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md mx-auto">
                <svg className="mx-auto h-8 w-8 text-yellow-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <p className="text-yellow-800 text-sm">ニュースの読み込みに失敗しました</p>
              </div>
            </div>
          ) : latestNews.length === 0 ? (
            <p className="text-gray-600 text-center py-8">
              新着情報はありません。
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestNews.map((article: any) => (
                <article 
                  key={article?.id || Math.random()} 
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  {article?.eyecatch?.url && (
                    <img 
                      src={article.eyecatch.url} 
                      alt={article?.title || 'ニュース画像'}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <time className="text-sm text-gray-500 mb-2 block">
                      {article?.publishedAt ? 
                        new Date(article.publishedAt).toLocaleDateString('ja-JP') : 
                        '日付不明'
                      }
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      <Link 
                        href={`/news/${article?.id || '#'}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {article?.title || 'タイトル不明'}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {article?.content ? 
                        article.content.replace(/<[^>]*>/g, '').substring(0, 100) + 
                        (article.content.replace(/<[^>]*>/g, '').length > 100 ? '...' : '') :
                        '内容がありません'
                      }
                    </p>
                    <Link 
                      href={`/news/${article?.id || '#'}`}
                      className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      続きを読む →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 採用情報セクション */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            共に働く仲間を募集しています
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            働くメンバー一人一人が山形の魅力を伝えるパフォーマーであり、
            "山形で働くこと"そのものが自然と山形のファンを増やすことにつながっていく会社です。
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            「お客様の喜びを我が喜びとする」様々な職種が集まり協力して
            一つのサービスを提供する古窯グループのメンバーを募集しております。
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            採用に関するお問い合わせ
          </Link>
        </div>
      </section>
    </div>
  );
}