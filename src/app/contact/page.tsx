// src/app/contact/page.tsx
export const metadata = {
  title: 'お問い合わせ | 古窯グループ',
  description: '古窯グループへのお問い合わせ。宿泊、レストラン、採用に関するご質問やご相談をお気軽にお寄せください。',
  openGraph: {
    title: 'お問い合わせ | 古窯グループ',
    description: '古窯グループへのお問い合わせ。宿泊、レストラン、採用に関するご質問やご相談をお気軽にお寄せください。',
  },
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
              ご質問やご相談がございましたら、お気軽にお問い合わせください
            </p>
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">お問い合わせフォーム</h2>
            <form action="https://formspree.io/f/xnnzdrbn" method="POST" className="space-y-6">
              {/* お問い合わせ種別 */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">選択してください</option>
                  <option value="宿泊について">宿泊について</option>
                  <option value="レストランについて">レストランについて</option>
                  <option value="採用について">採用について</option>
                  <option value="その他">その他</option>
                </select>
              </div>

              {/* お名前 */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* フリガナ */}
              <div>
                <label htmlFor="furigana" className="block text-sm font-medium text-gray-700 mb-2">
                  フリガナ
                </label>
                <input
                  type="text"
                  id="furigana"
                  name="furigana"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 電話番号 */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* お問い合わせ内容 */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="お問い合わせ内容をご記入ください"
                ></textarea>
              </div>

              {/* プライバシーポリシー同意 */}
              <div>
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="privacy_agreement"
                    required
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    <span className="text-red-500">*</span>
                    個人情報の取り扱いについて同意します
                  </span>
                </label>
              </div>

              {/* 送信ボタン */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>

          {/* 連絡先情報 */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">その他のお問い合わせ方法</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">お電話でのお問い合わせ</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">0570-00-5454</p>
                <p className="text-gray-600">受付時間：9:00〜18:00</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">メールでのお問い合わせ</h3>
                <p className="text-xl font-bold text-green-600 mb-2">info@koyo-gr.com</p>
                <p className="text-gray-600">24時間受付</p>
              </div>
            </div>
          </div>

          {/* 施設別お問い合わせ */}
          <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">施設別お問い合わせ</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">日本の宿 古窯</h3>
                <p className="text-gray-600">TEL: 0570-00-5454 / URL: https://www.koyoga.com/</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold">おやど 森の音</h3>
                <p className="text-gray-600">TEL: 0570-03-0810 / URL: https://mori-ne.com/</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold">採用に関するお問い合わせ</h3>
                <p className="text-gray-600">TEL: 0570-00-5454（人事担当者まで）</p>
              </div>
            </div>
          </div>

          {/* 会社情報 */}
          <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">会社情報</h2>
            <div className="space-y-2 text-gray-600">
              <p><strong>会社名：</strong>株式会社旅館古窯</p>
              <p><strong>所在地：</strong>〒999-3145 山形県上山市葉山5-20</p>
              <p><strong>代表電話：</strong>0570-00-5454</p>
              <p><strong>受付時間：</strong>9:00〜18:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}