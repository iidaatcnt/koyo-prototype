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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左側：画像コラージュ */}
            <div className="relative">
              <img 
                src="/images/img_intr.jpg" 
                alt="山形の地で働く私たちの想い" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* 右側：テキストコンテンツ */}
            <div className="space-y-8">
              {/* キャッチコピー */}
              <div className="border-2 border-gray-300 p-6 text-center bg-gray-50">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed">
                  山形の地で楽しく働くことそのものが、<br />
                  自然とお客様の感動や喜びに変わっていく。
                </h2>
              </div>

              {/* メインテキスト */}
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  私達はこれまで"山形"という地域そのものを商品として、この地域の良さを発信し、
                  山形の価値を高めたいという強い想いで仕事をしています。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  この土地ならではの人、風景、食べ物、この土地での様々な体験がお客様の感動につながるため、
                  私達は自信を持って山形の魅力を提供し、どうすれば上手に伝わるかを常々考え仕事をしています。
                </p>
              </div>

              {/* ボタン */}
              <div className="pt-4">
                <Link
                  href="/concept"
                  className="inline-block bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
                >
                  私たちの想い
                </Link>
              </div>
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
          <p className="text-center text-gray-600 mb-16 italic">Group facility</p>

          {/* 泊まる施設 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg">🔸泊まる</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 日本の宿 古窯 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="/images/img_koyo.jpg" 
                  alt="日本の宿 古窯" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-1">🔹日本の宿 古窯（こよう）</h4>
                  <h5 className="text-xl font-bold text-gray-900 mb-2">伝統が薫るおもてなしの宿</h5>
                  <p className="text-gray-600 text-sm mb-4">
                    プロが選ぶ旅館百選TOP10に選ばれ続けるおもてなしの温泉宿。
                    温泉の泉質は「三大美人泉質」として知られています。
                  </p>
                  <div className="flex gap-2 mt-4">
                    <a 
                      href="https://www.koyoga.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors"
                    >
                      施設サイト
                    </a>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                      MAP
                    </button>
                  </div>
                </div>
              </div>

              {/* 悠湯の郷 ゆさ */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="/images/img_yusa.jpg" 
                  alt="悠湯の郷 ゆさ" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-1">🔹悠湯の郷 ゆさ＆おふろcafé yusa</h4>
                  <h5 className="text-xl font-bold text-gray-900 mb-2">蔵王連峰の雄大な姿を臨む絶景</h5>
                  <p className="text-gray-600 text-sm mb-4">
                    蔵王連峰の雄大な姿を臨む絶景大浴場が自慢の宿。
                    旅館の温かさとホテルの快適さをテーマに安らぎのひとときを提供致します。
                  </p>
                  <div className="flex gap-2 mt-4">
                    <a 
                      href="https://www.dosayusa.jp/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors"
                    >
                      施設サイト
                    </a>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                      MAP
                    </button>
                  </div>
                </div>
              </div>

              {/* おやど 森の音 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="/images/img_mori.jpg" 
                  alt="おやど 森の音" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-1">🔹山形県 おやど 森の音</h4>
                  <h5 className="text-xl font-bold text-gray-900 mb-2">今日はここで、深呼吸</h5>
                  <p className="text-gray-600 text-sm mb-4">
                    緩やかな坂の上、木製の重い扉を開くと、目に飛び込む中庭の光。
                    豊かな自然、いのちを癒す宿をどうぞ思いのまま、お愉しみください。
                  </p>
                  <div className="flex gap-2 mt-4">
                    <a 
                      href="https://mori-ne.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors"
                    >
                      施設サイト
                    </a>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                      MAP
                    </button>
                  </div>
                </div>
              </div>

              {/* あつみ温泉 萬国屋 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="/images/img_ban.jpg" 
                  alt="あつみ温泉 萬国屋" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-1">🔹山形県 あつみ温泉 萬国屋</h4>
                  <h5 className="text-xl font-bold text-gray-900 mb-2">創業三百余年の歴史を持つ老舗旅館</h5>
                  <p className="text-gray-600 text-sm mb-4">
                    温海岳や温海川など、あつみの自然に囲まれた萬国屋。
                    松尾芭蕉、与謝野晶子など文人墨客が数多く訪れ、詩歌や小説にうたわれました。
                  </p>
                  <div className="flex gap-2 mt-4">
                    <a 
                      href="https://www.bankokuya.jp/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors"
                    >
                      施設サイト
                    </a>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                      MAP
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 味わう施設 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg">🔸味わう</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="/images/img_prin.jpg" 
                  alt="山形県初のプリン専門店" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-1">🔹山形県初のプリン専門店</h4>
                  <h5 className="text-xl font-bold text-gray-900 mb-2">新鮮素材を使用したプリン専門店</h5>
                  <p className="text-gray-600 text-sm mb-4">
                    地元かみのやまで、山形県産の素材を活かした「美味しいスイーツをつくりたい」
                    という想いから菓子づくりが始まりました。
                  </p>
                  <div className="flex gap-2 mt-4">
                    <a 
                      href="https://yamagata-purin.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors"
                    >
                      施設サイト
                    </a>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                      MAP
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 体験する施設 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              <span className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg">🔸体験する</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="/images/img_wedd.jpg" 
                  alt="古窯ウエディング" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-1">🔹古窯ウエディング</h4>
                  <h5 className="text-xl font-bold text-gray-900 mb-2">雅楽の音色が鳴り響く、神前式場</h5>
                  <p className="text-gray-600 text-sm mb-4">
                    日本の伝統美を体感する雰囲気たっぷりの和風ウェディング。
                    和風旅館ならではの落ち着いた結婚式は、ゲストにも大好評です。
                  </p>
                  <div className="flex gap-2 mt-4">
                    <a 
                      href="https://www.koyoga.com/wedding/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors"
                    >
                      施設サイト
                    </a>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                      MAP
                    </button>
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