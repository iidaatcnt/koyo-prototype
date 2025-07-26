// src/app/concept/page.tsx - 元サイト準拠版（画像対応）
import Image from 'next/image';

export const metadata = {
  title: '私たちの想い | 古窯グループ',
  description: '古窯グループの理念、想い、山形への愛情をお伝えします。山形の文化に生まれた誇り、素朴で美しい暮らしを国内外へ発信していきます。',
};

export default function ConceptPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー画像セクション */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/contact_main.jpg"
            alt="私たちの想い"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            私たちは<br />
            山形の文化に生まれた誇り、<br />
            <span className="text-yellow-300">素朴で</span><br />
            <span className="text-yellow-300">美しい暮らしを</span><br />
            国内外へ発信していきます。
          </h1>
        </div>
      </section>

      {/* メインメッセージ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              私たち古窯グループは、山形が誇る農村文化の良さ、<br />
              素朴で美しい里山の暮らしを日本・世界中に広げるために、<br />
              個性ある目的地を創造いたします。
            </p>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              そして、私たちと想いを共有できる山形ファンが集まる世界を作ります。
            </p>
          </div>
        </div>
      </section>

      {/* 5つの価値観 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            {/* 01 Y-Proud */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <span className="text-6xl font-bold text-blue-600 mr-6">01</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      山形の地に誇りを持つ。
                    </h2>
                    <p className="text-xl text-blue-600 font-semibold">Y-Proud</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  私たちは山形という土地に深い誇りを持ち、この地域の素晴らしさを
                  心から信じています。四季折々の美しい自然、豊かな食文化、
                  温かい人々との出会いが、私たちの原動力となっています。
                </p>
              </div>
              <div className="lg:w-1/2 relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/img_conp01.jpg"
                  alt="山形の地に誇りを持つ"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 02 Y-Discover */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <span className="text-6xl font-bold text-green-600 mr-6">02</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      山形の魅力を日々探す。
                    </h2>
                    <p className="text-xl text-green-600 font-semibold">Y-Discover</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  山形には、まだ知られていない素晴らしい魅力がたくさん眠っています。
                  私たちは常にアンテナを張り、新しい発見を求めて地域を歩き回り、
                  隠れた宝物を見つけ出すことに情熱を注いでいます。
                </p>
              </div>
              <div className="lg:w-1/2 relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/img_conp02.jpg"
                  alt="山形の魅力を日々探す"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 03 Y-Learn */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <span className="text-6xl font-bold text-orange-600 mr-6">03</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      最高の山形を学び続ける。
                    </h2>
                    <p className="text-xl text-orange-600 font-semibold">Y-Learn</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  山形の歴史、文化、自然について、私たちは学び続けます。
                  地域の先人たちから受け継がれた知恵や技術を理解し、
                  それを現代に活かす方法を常に模索しています。
                </p>
              </div>
              <div className="lg:w-1/2 relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/img_conp03.jpg"
                  alt="最高の山形を学び続ける"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 04 Y-Create */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <span className="text-6xl font-bold text-purple-600 mr-6">04</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      農村文化を現代的に<br />デザインする。
                    </h2>
                    <p className="text-xl text-purple-600 font-semibold">Y-Create</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  伝統的な農村文化の価値を大切にしながらも、現代のライフスタイルに
                  マッチする形でアレンジし、新しい魅力を創造します。
                  古き良きものと新しい感性の融合を目指しています。
                </p>
              </div>
              <div className="lg:w-1/2 relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/img_conp04.jpg"
                  alt="農村文化を現代的にデザインする"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 05 Y-Experience */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <span className="text-6xl font-bold text-red-600 mr-6">05</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      山形の物語を演出し、<br />体験してもらう。
                    </h2>
                    <p className="text-xl text-red-600 font-semibold">Y-Experience</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  山形の魅力を単に伝えるだけでなく、お客様に実際に体験していただける
                  形で提供します。五感で感じ、心に残る物語を演出し、
                  山形の素晴らしさを全身で感じていただけるよう努めています。
                </p>
              </div>
              <div className="lg:w-1/2 relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/img_conp05.jpg"
                  alt="山形の物語を演出し、体験してもらう"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            一緒に山形の魅力を世界に届けませんか
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            私たちと同じ想いを共有し、山形の素晴らしさを伝える仲間を募集しています。<br />
            あなたも山形ファンの輪を広げる一員になりませんか。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              お問い合わせ
            </a>
            <a
              href="/company"
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              会社概要
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}