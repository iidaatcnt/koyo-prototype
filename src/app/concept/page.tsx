// src/app/concept/page.tsx
export const metadata = {
  title: '私たちの想い | 古窯グループ',
  description: '古窯グループの理念、想い、山形への愛情をお伝えします。',
};

export default function ConceptPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヒーローセクション */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1545239351-1141bd82e8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            私たちの想い
          </h1>
          <p className="text-xl md:text-2xl font-light">
            山形の美しい農村文化を世界に届ける
          </p>
        </div>
      </section>

      {/* メインコンセプト */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              私たちの使命
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                私たち古窯グループは、山形が誇る農村文化の良さ、
                素朴で美しい里山の暮らしを日本・世界中に広げるために、
                個性ある目的地を創造いたします。
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                そして、私たちと想いを共有できる山形ファンが集まる世界を作ります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3つの価値観 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            私たちが大切にする3つの価値観
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                お客様の喜びを我が喜びとする
              </h3>
              <p className="text-gray-600 leading-relaxed">
                お客様一人ひとりの感動と喜びが、私たちの最大の誇りです。
                心からのおもてなしで、特別な時間を提供します。
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                山形の魅力を伝えるパフォーマー
              </h3>
              <p className="text-gray-600 leading-relaxed">
                働くメンバー一人一人が山形の魅力を伝える役割を担い、
                山形で働くこと自体が山形のファンを増やすことにつながります。
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                持続可能な地域づくり
              </h3>
              <p className="text-gray-600 leading-relaxed">
                地域の文化と自然を大切にしながら、
                次世代に美しい山形を残すための取り組みを続けます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 山形への想い */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                山形という地域への深い愛情
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  この土地ならではの人、風景、食べ物、この土地での様々な体験が
                  お客様の感動につながるため、私達は自信を持って山形の魅力を提供し、
                  どうすれば上手に伝わるかを常々考え仕事をしています。
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  山形の地で楽しく働くことそのものが、
                  自然とお客様の感動や喜びに変わっていく。
                  これが私たちの目指す理想の姿です。
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  様々な職種が集まり協力して一つのサービスを提供する
                  古窯グループの取り組みを通じて、山形の価値を高め続けます。
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">山形の風景写真エリア</p>
            </div>
          </div>
        </div>
      </section>

      {/* 受賞歴 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            受賞歴・評価
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                日本ツーリズム・オブ・ザ・イヤー 2023
              </h3>
              <p className="text-xl text-yellow-600 font-semibold mb-4">
                グランプリ（最優秀賞）受賞
              </p>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                山形のファンを作るための魅力作りや発信を積極的に行う
                多角的な取り組みが認められ、最高位の賞をいただきました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            一緒に山形の魅力を伝えませんか
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            私たちと想いを共有し、山形の素晴らしさを世界に届ける仲間を募集しています。
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            お問い合わせ・採用情報
          </a>
        </div>
      </section>
    </div>
  );
}