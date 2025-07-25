// src/app/contact/page.tsx
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'お問い合わせ | 古窯グループ',
  description: '古窯グループへのお問い合わせはこちらから。採用情報、宿泊予約、その他ご質問など承ります。',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ページヘッダー */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              古窯グループに関するご質問、採用情報、宿泊・お食事に関するお問い合わせなど、
              お気軽にご連絡ください。
            </p>
          </div>
        </div>
      </section>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* お問い合わせフォーム */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせフォーム</h2>
              <ContactForm />
            </div>

            {/* お問い合わせ先情報 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせ先</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">採用に関するお問い合わせ</h3>
                  <p className="text-gray-600 mb-4">
                    古窯グループでは、山形の魅力を一緒に伝えていただける仲間を募集しております。
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-medium">受付時間:</span> 平日 9:00-18:00</p>
                    <p><span className="font-medium">担当:</span> 人事部</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">宿泊・お食事に関するお問い合わせ</h3>
                  <p className="text-gray-600 mb-4">
                    各施設への宿泊予約やお食事に関するお問い合わせは、
                    直接各施設までご連絡ください。
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-medium">受付時間:</span> 9:00-21:00</p>
                    <p><span className="font-medium">定休日:</span> 不定休（施設により異なります）</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">その他のお問い合わせ</h3>
                  <p className="text-gray-600 mb-4">
                    古窯グループに関するご質問、ご意見、ご要望などございましたら、
                    左記のフォームまたはお電話にてお気軽にお問い合わせください。
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-medium">受付時間:</span> 平日 9:00-18:00</p>
                    <p><span className="font-medium">担当:</span> 総務部</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">お問い合わせ前にご確認ください</h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>• お返事までに数日お時間をいただく場合があります</li>
                    <li>• 土日祝日にいただいたお問い合わせは、翌営業日以降の対応となります</li>
                    <li>• 緊急のご連絡は、直接各施設までお電話ください</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}