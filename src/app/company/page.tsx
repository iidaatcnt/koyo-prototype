// src/app/company/page.tsx - 元サイト準拠版
import Image from 'next/image';

export const metadata = {
  title: '会社概要 | 古窯グループ',
  description: '古窯グループの会社概要、沿革、企業情報をご紹介します。1951年創業から70年以上の歴史を持つ山形の老舗企業です。',
};

export default function CompanyPage() {
  const historyData = [
    { year: '1951', event: '300坪で客室数7部屋の自炊旅館から営業を開始', category: '旅館事業' },
    { year: '1958', event: '館内の敷地から1,300年前の須恵器の窯跡が発見', category: '旅館事業' },
    { year: '1960', event: '古い窯跡に因み『古窯』に社名を変更', category: '旅館事業' },
    { year: '1964', event: '(株)旅館古窯創立', category: '旅館事業' },
    { year: '1976', event: '第1期大型設備投資『雪の館』完成', category: '旅館事業' },
    { year: '1982', event: '第2期大型設備投資『月の館』完成\n東京銀座に『日本料理古窯』オープン', category: 'レストラン事業' },
    { year: '1988', event: '第3期大型設備投資『花の館』完成', category: '旅館事業' },
    { year: '1993', event: '初代佐藤信二社長が会長へ\n2代目 佐藤信幸専務が社長に就任', category: '旅館事業' },
    { year: '1994', event: '山形産業賞受賞', category: '旅館事業' },
    { year: '1997', event: '第4期大型設備投資『緑の館』完成', category: '旅館事業' },
    { year: '1999', event: 'ISO9001取得', category: '旅館事業' },
    { year: '2001', event: 'プロが選ぶ日本のホテル・旅館100選で全国総合第2位', category: '旅館事業' },
    { year: '2008', event: 'ウェルハートピア黒沢取得\n黒沢温泉『悠湯の郷ゆさ』オープン', category: '体験事業' },
    { year: '2016', event: 'かみのやま温泉「おやど森の音」をオープン', category: '旅館事業' },
    { year: '2017', event: '代表取締役社長に佐藤洋詩恵、代表取締役専務に佐藤太一が就任', category: '旅館事業' },
    { year: '2018', event: '山形プリン 県内初のプリン専門店オープン', category: 'レストラン事業' },
    { year: '2019', event: 'あつみ温泉 萬国屋 経営継承', category: '旅館事業' },
    { year: '2023', event: '創業70周年を迎える\n日本ツーリズム・オブ・ザ・イヤー2023 グランプリ受賞', category: '体験事業' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー画像セクション */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/company_main.jpg"
            alt="会社概要"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            会社概要
          </h1>
          <p className="text-xl md:text-2xl font-light">
            1951年創業から70年以上の歴史
          </p>
        </div>
      </section>

      {/* 経営理念セクション */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-lg text-blue-600 font-semibold mb-4 tracking-wider">
              経営理念 Our philosophy
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              今日、この瞬間に、<br />
              最高の山形を。
            </h3>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              働く上での価値観の多様化が進む一方で、企業側に求められる要素にも変化があります。
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              山形や東京で旅館やレストラン展開を進めることで「場所」「仕事」「時間」「やりがい」など
              自身の適性をよりマッチさせることができるのが古窯グループの一つの魅力です。
            </p>
          </div>
        </div>
      </section>

      {/* 会社沿革セクション */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg text-blue-600 font-semibold mb-4 tracking-wider">
              会社沿革 History
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              70年以上の歩み
            </h3>
          </div>

          {/* 沿革タイムライン */}
          <div className="relative">
            {/* 縦線 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {historyData.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* 左側（または右側）のコンテンツ */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl font-bold text-blue-600 mr-4">{item.year}</span>
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                          item.category === '旅館事業' ? 'bg-blue-100 text-blue-600' :
                          item.category === 'レストラン事業' ? 'bg-green-100 text-green-600' :
                          'bg-orange-100 text-orange-600'
                        }`}>
                          {item.category}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {item.event}
                      </p>
                    </div>
                  </div>

                  {/* 中央の円（デスクトップのみ） */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  {/* 右側（または左側）の空白 */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要テーブル */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg text-blue-600 font-semibold mb-4 tracking-wider">
              会社概要 Company
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              企業情報
            </h3>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700 w-1/4">会社名</th>
                  <td className="px-6 py-4 text-gray-600">株式会社古窯ホールディングス</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700">所在地</th>
                  <td className="px-6 py-4 text-gray-600">〒999-3292 山形県上山市葉山5-20</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700">設立</th>
                  <td className="px-6 py-4 text-gray-600">1964年5月（創業/1951年10月）</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700">資本金</th>
                  <td className="px-6 py-4 text-gray-600">3,300万円</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700">代表者</th>
                  <td className="px-6 py-4 text-gray-600">
                    代表取締役社長 佐藤 洋詩恵（女将）<br />
                    代表取締役専務 佐藤 太一<br />
                    常務取締役 佐藤 奈美（若女将）<br />
                    会長 佐藤 信幸
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700">事業内容</th>
                  <td className="px-6 py-4 text-gray-600">
                    宿泊サービスを始め、ブライダル事業、飲食・レストランなど<br />
                    山形を主としてサービス業を展開しております。
                  </td>
                </tr>
                <tr>
                  <th className="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700">運営施設</th>
                  <td className="px-6 py-4 text-gray-600">
                    日本の宿 古窯、悠湯の郷 ゆさ、おやど 森の音、<br />
                    山形県あつみ温泉 萬国屋、山形プリン、KOYO Wedding
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            古窯グループで働きませんか
          </h2>
          <p className="text-xl mb-8 opacity-90">
            70年以上の歴史と伝統を持つ私たちと一緒に、<br />
            山形の魅力を世界に発信する仲間を募集しています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              採用に関するお問い合わせ
            </a>
            <a
              href="/concept"
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              私たちの想い
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}