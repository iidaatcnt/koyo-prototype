// src/app/company/page.tsx
export const metadata = {
  title: '会社概要 | 古窯グループ',
  description: '株式会社旅館古窯の会社概要。山形県で旅館・レストラン事業を展開する古窯グループの企業情報、沿革、アクセス情報をご紹介します。',
  openGraph: {
    title: '会社概要 | 古窯グループ',
    description: '株式会社旅館古窯の会社概要。山形県で旅館・レストラン事業を展開する古窯グループの企業情報、沿革、アクセス情報をご紹介します。',
  },
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
              山形の魅力を伝える古窯グループの企業情報
            </p>
          </div>
        </div>
      </section>

      {/* 企業理念 */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">企業理念</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                今日、この瞬間に、最高の山形を。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                私達はこれまで"山形"という地域そのものを商品として、この地域の良さを発信し、
                山形の価値を高めたいという強い想いで仕事をしています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 会社情報 */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">会社情報</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">会社名</h3>
                  <p className="text-gray-600">株式会社旅館古窯</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">代表者</h3>
                  <p className="text-gray-600">代表取締役専務 佐藤 太一</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">設立</h3>
                  <p className="text-gray-600">創業から300坪7部屋の自炊旅館として開始</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">資本金</h3>
                  <p className="text-gray-600">3,300万円</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">所在地</h3>
                  <p className="text-gray-600">
                    〒999-3145<br />
                    山形県上山市葉山5-20
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">電話番号</h3>
                  <p className="text-gray-600">0570-00-5454</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">従業員数</h3>
                  <p className="text-gray-600">103名（男性49名 女性54名）</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">売上高</h3>
                  <p className="text-gray-600">42億円（グループ合計）</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 事業内容 */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">事業内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">泊まる</h3>
              <p className="text-gray-600">
                日本の宿古窯、おやど森の音、悠湯の郷ゆさ、あつみ温泉萬国屋など、
                山形県内で複数の宿泊施設を運営
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">味わう</h3>
              <p className="text-gray-600">
                山形県初のプリン専門店をはじめ、
                地域の食材を活かしたスイーツ・飲食事業を展開
              </p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">体験する</h3>
              <p className="text-gray-600">
                古窯ウエディングなど、
                山形の文化と伝統を活かした体験サービスを提供
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 沿革 */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">沿革</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-semibold text-gray-900">創業期</h3>
                <p className="text-gray-600">300坪で客室数7部屋の自炊旅館から営業を開始</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="font-semibold text-gray-900">発展期</h3>
                <p className="text-gray-600">
                  プロが選ぶ日本のホテル旅館100選にて、40年連続トップ10を受賞する
                  おもてなしの温泉宿へと発展
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-semibold text-gray-900">現在</h3>
                <p className="text-gray-600">
                  山形や東京で旅館やレストラン展開を進め、
                  グループ全体で42億円の売上を達成
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* アクセス */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">アクセス</h2>
          <div className="bg-gray-100 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">所在地</h3>
                <p className="text-gray-600 mb-4">
                  〒999-3145<br />
                  山形県上山市葉山5-20<br />
                  株式会社旅館古窯
                </p>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <strong>電車：</strong>JRかみのやま温泉駅より車で6分（送迎有）
                  </p>
                  <p className="text-gray-600">
                    <strong>車：</strong>山形自動車道山形蔵王ICより国道13号線経由約20分
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">お問い合わせ</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <strong>電話：</strong>0570-00-5454
                  </p>
                  <p className="text-gray-600">
                    <strong>受付時間：</strong>9:00〜18:00
                  </p>
                  <p className="text-gray-600">
                    <strong>メール：</strong>info@koyo-gr.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}