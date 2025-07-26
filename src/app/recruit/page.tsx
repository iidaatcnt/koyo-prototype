// src/app/recruit/page.tsx - 元サイト完全準拠版
import Image from 'next/image';

export const metadata = {
  title: '採用情報 | 古窯グループ',
  description: '古窯グループの採用情報。笑顔で話ができる、誠実な人柄を感じさせる人が自然と集まる企業を目指しています。',
};

export default function RecruitPage() {
  const seniorStaff = [
    {
      name: '吉田 大輝',
      position: '支配人',
      year: '2017年入社',
      facility: '悠湯の郷ゆさ＆おふろcaféyusa',
      currentWork: '現在は「悠湯の郷ゆさ＆おふろcaféyusa」の支配人として、現場の仕事や管理の仕事などをしています。',
      motivation: 'やりがいは現場でのお客様の嬉しいお声を直接もらえるのはもちろん、１つの施設を任させているので、どのように売上を上げて利益を残すのかを考えながら仕事ができることです。',
      schedule: [
        { time: '9:00', task: '出社' },
        { time: '9:30', task: 'お見送り・チェックアウト' },
        { time: '12:00', task: '現場の仕事や管理' },
        { time: '15:00', task: 'チェックイン' },
        { time: '18:00', task: '退社' }
      ]
    },
    {
      name: '佐藤 江里子',
      position: '山形プリン店長',
      year: '2013年入社',
      facility: '山形プリン',
      currentWork: '山形プリンでは、コンセプトに沿った新しい味のプリンを期間で次々と開発し売り出しているのですが、その時期に合った新商品を会議で話し合い・考えること、開発をして試食会を開き意見をもらって新商品を作り上げることが楽しいです。',
      motivation: '接客をしていてお客さんが「ここがおいしいと聞いてきたんです」と来店していただけるのがうれしいです。',
      schedule: [
        { time: '7:00', task: '出社' },
        { time: '7:30', task: '接客・プリン作り・らくやき仕込み等' },
        { time: '11:00', task: '2時間の中抜け 一度帰宅' },
        { time: '13:00', task: '工場でお菓子・プリン作り・面接等' },
        { time: '19:00', task: '退社' }
      ]
    },
    {
      name: '丹 和利',
      position: '調理場',
      year: '2016年入社',
      facility: 'おやど森の音',
      currentWork: '現在は、日々の料理の仕込みのほかに新プランのコース考案などをしています。森の音の調理場は2人で回している為、すべての工程を自分たちで行います。',
      motivation: '調理にかかわるすべてのことを自分で考えて行動しなきゃいけないため、考える力を身に着けることができます。',
      schedule: [
        { time: '7:00', task: '出社' },
        { time: '7:30', task: '料理の仕込み・午後の盛り付け' },
        { time: '12:00', task: '休憩４時間 実家に帰宅' },
        { time: '16:00', task: '午後の料理出し 朝の準備' },
        { time: '21:00', task: '退社' }
      ]
    },
    {
      name: '中條 茜',
      position: 'カスタマー戦略部',
      year: '2014年入社',
      facility: '経営本部',
      currentWork: 'カスタマー戦略部でマーケティングの仕事をしています。各施設の企画を考えたり、ネット売上の管理をしたり、WEB広告の運用を行ったりと、一番インパクトがある施策は何かを考え、テストを行いながら最適解を探っていきます。',
      motivation: '幅広い仕事の内容があり、新しいこと・やったことのないことに挑戦できることが私の仕事のやりがいとなっています。',
      schedule: [
        { time: '9:00', task: '出社' },
        { time: '9:30', task: '売り上げ管理の手伝い・依頼があった掲示物の作成等' },
        { time: '12:00', task: '社員食堂にて食事・休憩' },
        { time: '13:00', task: '資料作り・会議等' },
        { time: '18:00', task: '退社' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー画像セクション */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/recruite_main.jpg"
            alt="採用情報"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-5xl px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            笑顔で話ができる、<br />
            誠実な人柄を感じさせる人が<br />
            <span className="text-yellow-300">自然と集まる企業にしたい。</span>
          </h1>
          <div className="text-right mt-8">
            <p className="text-lg md:text-xl">株式会社旅館古窯 専務取締役</p>
            <p className="text-2xl md:text-3xl font-bold mt-2">佐藤 太一</p>
          </div>
        </div>
      </section>

      {/* 採用メッセージ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              求める人材は「素直な気持ちで取り組める人」、これに尽きます。
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                面接では笑顔で話ができるか、誠実さが感じられるかという人柄を重視しています。
                素直であるということは物事への吸収力があり、順応性もあるということにつながるからです。
              </p>
              <p>
                当グループではセクション間を定期的に異動する「マルチ業務システム」を人材育成プログラムの一環として取り組んでおり、
                これしかできないというより、どんなこともやってみようと思える人、環境に馴染む人がいいです。
              </p>
              <p>
                社員の希望を聞いて配置することもありますが、部門の上司からの報告だけでなく、私自身も現場に出て社員を見ていますので、
                その人の能力や適性を見て、より適した職場を考えることもあります。
              </p>
              <p>
                現場のお客様の声を聞きながら変えられるところは変えて、良い部分はそのまま続けるスタンスで仕事をしていますが、
                昔からのサービスを求めるお客様と新しいものを求めているお客様、その見極めを的確に行っていくことが「おもてなし」にもつながると考えています。
              </p>
              <p>
                アンケートを大事にして、お客様の声を経営や運営にフィードバックして実践に活かすようにしています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 募集要項 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg text-blue-600 font-semibold mb-4 tracking-wider">
              募集要項 Application Requirements
            </h2>
          </div>

          {/* 採用フロー */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">採用フロー</h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {[
                'マイナビよりエントリー',
                'ES提出',
                '一次面接',
                '二次面接',
                '最終面接',
                '内定'
              ].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center text-sm min-w-[100px]">
                    {step}
                  </div>
                  {index < 5 && (
                    <svg className="w-6 h-6 text-blue-600 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 職種別募集 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 接客職 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">接客職</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">仕事内容</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    1つの旅館の中に数多くの職種が共存し成り立つのも旅館業の特徴です。
                    一人ひとりの適正やキャリアビジョン・仕事のやりがいに柔軟に対応出来るのも旅館業ならでは！
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>【予約課】</strong>主に電話での予約受付や提供部屋のコントロール、宿泊部屋の割付業務など。</p>
                    <p><strong>【接客部】</strong>玄関でのお出迎えお見送りから始まり、客室の案内や料理の提供などを着物を着て接客していただきます。</p>
                    <p><strong>【フロント】</strong>チェックイン・アウトの受付、お客様の車を移動するカーサービスなどお客様への接客対応し、ご要望に応えるお仕事です。</p>
                    <p><strong>【売店】</strong>売店での接客、商品販売（レジ打ち）、仕入在庫管理、売上管理を主に行っています。</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <table className="w-full text-sm space-y-2">
                    <tbody className="space-y-2">
                      <tr className="border-b">
                        <td className="font-semibold text-gray-700 py-2">勤務地</td>
                        <td className="text-gray-600 py-2">〒999-3292 山形県上山市葉山5-20 日本の宿古窯</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold text-gray-700 py-2">勤務時間</td>
                        <td className="text-gray-600 py-2">週40時間（実働8時間/日）の交代制勤務シフト<br />例）6:30～15:30または13:00～22:00（実働8時間）</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold text-gray-700 py-2">初任給</td>
                        <td className="text-gray-600 py-2">【大学卒】月給200,000円 【短大／専門】月給190,000円 【高卒】月給180,000円</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold text-gray-700 py-2">諸手当</td>
                        <td className="text-gray-600 py-2">通勤手当（月額10,000円）、職能手当、時間外勤務手当</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold text-gray-700 py-2">昇給</td>
                        <td className="text-gray-600 py-2">年1回（5月）</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold text-gray-700 py-2">賞与</td>
                        <td className="text-gray-600 py-2">年2回（7月、12月）</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold text-gray-700 py-2">休日休暇</td>
                        <td className="text-gray-600 py-2">【休日】週休2日制（月９日、２月のみ８日間）※年間休日112日（有休休暇５日間含む）※シフト制<br />【休暇】有給休暇、慶弔休暇、育児休業</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold text-gray-700 py-2">社会保険</td>
                        <td className="text-gray-600 py-2">雇用、労災、健康、厚生年金</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold text-gray-700 py-2">教育制度</td>
                        <td className="text-gray-600 py-2">入社後に約２週間で実施 会社の仕組みとは？、キャリアプランの共有、一般教養講座、着物の着付け・接客講習講座、かみのやま魅力発掘ツアー旅研修、宿泊体験研修</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-gray-700 py-2">試用期間</td>
                        <td className="text-gray-600 py-2">あり 入社後３ヶ月間 試用期間中の労働条件は本採用時と変更なし</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 調理職 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">調理職</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">仕事内容</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    夕朝食の仕込み、調理、盛付けが主なお仕事です。
                    夜は会席料理、朝はブュッフェで和・洋・中様々な料理がお客様にご提供します。
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <table className="w-full text-sm space-y-2">
                    <tbody className="space-y-2">
                      <tr className="border-b">
                        <td className="font-semibold text-gray-700 py-2">勤務地</td>
                        <td className="text-gray-600 py-2">〒999-3292 山形県上山市葉山5-20 日本の宿古窯</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold text-gray-700 py-2">勤務時間</td>
                        <td className="text-gray-600 py-2">週40時間（実働8時間/日）の交代制勤務シフト<br />例）6:00～15:00または11:00～20:00（実働8時間）</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold text-gray-700 py-2">初任給</td>
                        <td className="text-gray-600 py-2">【大学卒】月給200,000円 【短大／専門卒】月給190,000円【高卒】月給180,000円</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold text-gray-700 py-2">諸手当</td>
                        <td className="text-gray-600 py-2">通勤手当（月額10,000円）、職能手当、時間外勤務手当</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold text-gray-700 py-2">昇給</td>
                        <td className="text-gray-600 py-2">年1回（5月）</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold text-gray-700 py-2">賞与</td>
                        <td className="text-gray-600 py-2">年2回（7月、12月）</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold text-gray-700 py-2">休日休暇</td>
                        <td className="text-gray-600 py-2">【休日】週休2日制（月９日、２月のみ８日間）※年間休日112日（有休休暇５日間含む）※シフト制<br />【休暇】有給休暇、慶弔休暇、育児休業</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold text-gray-700 py-2">社会保険</td>
                        <td className="text-gray-600 py-2">雇用、労災、健康、厚生年金</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold text-gray-700 py-2">教育制度</td>
                        <td className="text-gray-600 py-2">入社後に約2週間で実施 会社の仕組みとは？、キャリアプランの共有、一般教養講座、着物の着付け・接客講習講座、かみのやま魅力発掘ツアー旅研修、宿泊体験研修</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-gray-700 py-2">試用期間</td>
                        <td className="text-gray-600 py-2">あり 入社後３ヶ月間 試用期間中の労働条件は本採用時と変更なし</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-red-600 font-semibold">現在、募集は行っておりません。</p>
          </div>
        </div>
      </section>

      {/* 先輩社員紹介 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg text-blue-600 font-semibold mb-4 tracking-wider">
              先輩社員紹介 Senior Helpers Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {seniorStaff.map((staff, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{staff.name}</h3>
                  <p className="text-blue-600 font-semibold text-lg">{staff.position}</p>
                  <p className="text-gray-600">{staff.year} • {staff.facility}</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Q. 現在担当している仕事について教えてください。</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">A. {staff.currentWork}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Q. 仕事のやりがいについて教えてください。</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">A. {staff.motivation}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">1日の流れ</h4>
                    <div className="space-y-2">
                      {staff.schedule.map((item, idx) => (
                        <div key={idx} className="flex items-center">
                          <span className="w-12 text-blue-600 font-semibold text-sm">{item.time}</span>
                          <span className="text-gray-600 text-sm ml-4">{item.task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            古窯グループで一緒に働きませんか？
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            素直な気持ちで取り組み、お客様の笑顔のために<br />
            一緒に成長していける仲間をお待ちしています。
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
              私たちの想いを見る
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}