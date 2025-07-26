// src/app/contact/page.tsx - 元サイト準拠版
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';

export const metadata = {
  title: 'お問い合わせ | 古窯グループ',
  description: '古窯グループへのお問い合わせはこちらから。採用情報、事業に関するご質問など、お気軽にご連絡ください。',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー画像セクション */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/contact_main.jpg"
            alt="お問い合わせ"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            お問い合わせ
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            古窯グループに関するご質問、<br />
            採用情報、お食事に関するお問い合わせなど、<br />
            お気軽にご連絡ください。
          </p>
        </div>
      </section>

      {/* お知らせセクション */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-blue-100 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">各施設のご予約について</h3>
                <p className="text-blue-700 text-sm">
                  各施設のご予約についてのご質問は、各施設のお問合せフォームまたはお電話にてお問合せください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* お問い合わせフォーム */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">お問い合わせフォーム</h2>
                <p className="text-gray-600">下記フォームより、お気軽にお問い合わせください</p>
              </div>
              <ContactForm />
            </div>

            {/* 会社情報・各施設連絡先 */}
            <div className="space-y-8">
              {/* 本社情報 */}
              <div className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  会社情報
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">株式会社古窯ホールディングス</h3>
                    <address className="text-gray-600 not-italic">
                      <p>〒999-3292</p>
                      <p>山形県上山市葉山5-20</p>
                    </address>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">営業時間</h4>
                    <p className="text-gray-600">平日 9:00〜18:00</p>
                  </div>
                </div>
              </div>

              {/* 各施設連絡先 */}
              <div className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  各施設のご予約・お問い合わせ
                </h2>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">日本の宿 古窯</h3>
                    <p className="text-gray-600 text-sm mb-2">〒999-3292 山形県上山市葉山5-20</p>
                    <p className="text-gray-600 font-semibold">予約専用ダイヤル: 0570-00-5454</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">おやど 森の音</h3>
                    <p className="text-gray-600 text-sm mb-2">〒999-3242 山形県上山市葉山4-33</p>
                    <p className="text-gray-600">各施設HPよりお問い合わせください</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">あつみ温泉 萬国屋</h3>
                    <p className="text-gray-600 text-sm mb-2">山形県鶴岡市</p>
                    <p className="text-gray-600">各施設HPよりお問い合わせください</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">yamagata glam</h3>
                    <p className="text-gray-600 text-sm mb-2">〒995-0001 山形県村山市碁点999-19</p>
                    <p className="text-gray-600">各施設HPよりお問い合わせください</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">山形プリン</h3>
                    <p className="text-gray-600 text-sm mb-2">山形県内各店舗</p>
                    <p className="text-gray-600">各店舗HPよりお問い合わせください</p>
                  </div>
                </div>
              </div>

              {/* 採用情報 */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  採用情報
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  古窯グループでは一緒に働く仲間を募集しています。<br />
                  山形の魅力を一緒に伝えませんか？
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  採用に関するお問い合わせは、フォームより「採用について」を選択してお問い合わせください。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">旅館・ホテル</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">レストラン</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">企画・運営</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">管理・事務</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* アクセス情報 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">アクセス</h2>
            <p className="text-gray-600">本社へのアクセス方法</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">交通アクセス</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-700">電車でお越しの場合</h4>
                      <p className="text-gray-600 text-sm">JR奥羽本線「かみのやま温泉駅」より車で約10分</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-700">お車でお越しの場合</h4>
                      <p className="text-gray-600 text-sm">山形自動車道「山形蔵王IC」より約10分</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-700">住所</h4>
                      <p className="text-gray-600 text-sm">〒999-3292 山形県上山市葉山5-20</p>
                    </div>
                  </div>
                </div>
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