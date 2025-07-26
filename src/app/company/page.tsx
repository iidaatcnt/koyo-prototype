// src/app/company/page.tsx
export const metadata = {
  title: '会社概要 | 古窯グループ',
  description: '古窯グループの会社概要、沿革、企業情報をご紹介します。',
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ページヘッダー */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">会社概要</h1>
            <p className="text-lg text-gray-600">
              古窯グループの企業情報をご紹介します
            </p>
          </div>
        </div>
      </section>

      {/* 企業理念 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              働く上での価値観の多様化
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                働く上での価値観の多様化が進む一方で、企業側に求められる要素にも変化があります。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                山形や東京で旅館やレストラン展開を進めることで「場所」「仕事」「時間」「やりがい」など
                自身の適性をよりマッチさせることができるのが古窯グループの一つの魅力です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            会社情報
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">株式会社古窯ホールディングス</h3>
              <dl className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <dt className="font-semibold text-gray-700 mb-2">所在地</dt>
                  <dd className="text-gray-600">〒999-3292 山形県上山市葉山5-20</dd>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <dt className="font-semibold text-gray-700 mb-2">代表取締役社長</dt>
                  <dd className="text-gray-600">佐藤 太一</dd>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <dt className="font-semibold text-gray-700 mb-2">事業内容</dt>
                  <dd className="text-gray-600">
                    <ul className="space-y-1">
                      <li>旅館・ホテル事業</li>
                      <li>レストラン事業</li>
                      <li>体験・観光事業</li>
                      <li>グランピング事業</li>
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700 mb-2">設立</dt>
                  <dd className="text-gray-600">昭和28年（1953年）</dd>
                </div>
              </dl>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">グループ施設</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">旅館・ホテル</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>日本の宿 古窯（上山市）</li>
                    <li>おやど 森の音（上山市）</li>
                    <li>あつみ温泉 萬国屋（鶴岡市）</li>
                    <li>yamagata glam（村山市）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">その他事業</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>山形プリン（プリン専門店）</li>
                    <li>MOGY（フルーツアイス専門店）</li>
                    <li>おふろcafé yusa（日帰り温浴施設）</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 沿革 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            沿革
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 w-24">
                  <span className="text-lg font-bold text-blue-600">1953年</span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    300坪で客室数7部屋の自炊旅館から営業を開始
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24">
                  <span className="text-lg font-bold text-blue-600">2023年</span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    創業70周年を迎える
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24">
                  <span className="text-lg font-bold text-blue-600">2023年</span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    「日本ツーリズム・オブ・ザ・イヤー」2023年のグランプリ（最優秀賞）を受賞
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* アクセス */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            アクセス
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">本社所在地</h3>
                <address className="text-gray-600 not-italic">
                  <p className="mb-2">〒999-3292</p>
                  <p className="mb-4">山形県上山市葉山5-20</p>
                  <p className="mb-2">
                    <strong>電車でお越しの場合：</strong><br />
                    JR奥羽本線「かみのやま温泉駅」より車で約10分
                  </p>
                  <p>
                    <strong>お車でお越しの場合：</strong><br />
                    山形自動車道「山形蔵王IC」より約10分
                  </p>
                </address>
              </div>
              <div className="bg-gray-100 rounded-lg flex items-center justify-center h-64">
                <p className="text-gray-500">地図エリア</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}