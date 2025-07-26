// src/app/contact/page.tsx
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'お問い合わせ | 古窯グループ',
  description: '古窯グループへのお問い合わせはこちらから。採用情報、事業に関するご質問など、お気軽にご連絡ください。',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ページヘッダー */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h1>
            <p className="text-lg text-gray-600">
              古窯グループへのお問い合わせはこちらから
            </p>
          </div>
        </div>
      </section>

      {/* お知らせ */}
      <section className="py-8 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-blue-100 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">施設のご予約について</h3>
                <p className="text-blue-700 text-sm">
                  各施設のご予約についてのご質問は、各施設のお問合せフォームまたはお電話にてお問合せください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* お問い合わせフォーム */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせフォーム</h2>
            <ContactForm />
          </div>

          {/* 会社情報・各施設連絡先 */}
          <div className="space-y-8">
            {/* 本社情報 */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">会社情報</h2>
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
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">各施設のご予約・お問い合わせ</h2>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">日本の宿 古窯</h3>
                  <p className="text-gray-600 text-sm mb-2">〒999-3292 山形県上山市葉山5-20</p>
                  <p className="text-gray-600">予約専用ダイヤル: 0570-00-5454</p>
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
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">yamagata glam</h3>
                  <p className="text-gray-600 text-sm mb-2">〒995-0001 山形県村山市碁点999-19</p>
                  <p className="text-gray-600">各施設HPよりお問い合わせください</p>
                </div>
              </div>
            </div>

            {/* 採用情報 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">採用情報</h2>
              <p className="text-gray-700 mb-4">
                古窯グループでは一緒に働く仲間を募集しています。
              </p>
              <p className="text-sm text-gray-600">
                採用に関するお問い合わせは、フォームより「採用について」を選択してお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}