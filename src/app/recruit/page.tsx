// src/app/recruit/page.tsx (元サイト忠実版)
import Link from 'next/link';

export const metadata = {
  title: '採用情報 | 古窯グループ',
  description: '古窯グループの採用情報。専務取締役からのメッセージ、募集要項、先輩社員インタビューをご紹介。素直な気持ちで取り組める人材を募集しています。',
  openGraph: {
    title: '採用情報 | 古窯グループ',
    description: '古窯グループの採用情報。専務取締役からのメッセージ、募集要項、先輩社員インタビューをご紹介。素直な気持ちで取り組める人材を募集しています。',
  },
};

export default function RecruitPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* パンくずナビ */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">-</span>
            <span>採用情報</span>
          </nav>
        </div>
      </div>

      {/* ヘッダー画像 */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/images/recruit_main.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">採用情報</h1>
        </div>
      </section>

      {/* 専務取締役メッセージ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/recruit_ceo.jpg" 
                alt="株式会社旅館古窯 専務取締役 佐藤太一" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-relaxed">
                笑顔で話ができる、<br />
                誠実な人柄を感じさせる人が<br />
                自然と集まる企業にしたい。
              </h2>
              <p className="text-gray-600 mb-4 font-medium">
                株式会社旅館古窯 専務取締役 佐藤 太一
              </p>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  求める人材は「素直な気持ちで取り組める人」、これに尽きます。
                  面接では笑顔で話ができるか、誠実さが感じられるかという人柄を重視しています。
                  素直であるということは物事への吸収力があり、順応性もあるということにつながるからです。
                </p>
                <p>
                  当グループではセクション間を定期的に異動する「マルチ業務システム」を人材育成プログラムの一環として取り組んでおり、これしかできないというより、どんなこともやってみようと思える人、環境に馴染む人がいいです。
                </p>
                <p>
                  現場のお客様の声を聞きながら変えられるところは変えて、良い部分はそのまま続けるスタンスで仕事をしていますが、昔からのサービスを求めるお客様と新しいものを求めているお客様、その見極めを的確に行っていくことが「おもてなし」にもつながると考えています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 募集要項 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            募集要項 <span className="text-lg font-normal text-gray-600">Application Requirements</span>
          </h2>

          {/* 選考フロー */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">選考フロー</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 text-center">
              <div className="bg-blue-100 px-4 py-2 rounded-lg">マイナビよりエントリー</div>
              <div className="text-gray-400">→</div>
              <div className="bg-blue-100 px-4 py-2 rounded-lg">ES提出</div>
              <div className="text-gray-400">→</div>
              <div className="bg-blue-100 px-4 py-2 rounded-lg">一次面接</div>
              <div className="text-gray-400">→</div>
              <div className="bg-blue-100 px-4 py-2 rounded-lg">二次面接</div>
              <div className="text-gray-400">→</div>
              <div className="bg-blue-100 px-4 py-2 rounded-lg">最終面接</div>
              <div className="text-gray-400">→</div>
              <div className="bg-green-100 px-4 py-2 rounded-lg">内定</div>
            </div>
          </div>

          {/* 正社員募集 */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              正社員 <span className="text-lg font-normal text-gray-600">Full-time employee</span>
            </h3>

            {/* 接客職 */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">接客職</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold w-32">仕事内容</td>
                      <td className="py-4 px-4">
                        1つの旅館の中に数多くの職種が共存し成り立つのも旅館業の特徴です。一人ひとりの適正やキャリアビジョン・仕事のやりがいに柔軟に対応出来るのも旅館業ならでは！<br />
                        <strong>【予約課】</strong>主に電話での予約受付や提供部屋のコントロール、宿泊部屋の割付業務など。<br />
                        <strong>【接客部】</strong>玄関でのお出迎えお見送りから始まり、客室の案内や料理の提供などを着物を着て接客していただきます。<br />
                        <strong>【フロント】</strong>チェックイン・アウトの受付、お客様の車を移動するカーサービスなどお客様への接客対応し、ご要望に応えるお仕事です。<br />
                        <strong>【売店】</strong>売店での接客、商品販売（レジ打ち）、仕入在庫管理、売上管理を主に行っています。<br />
                        <strong>【総務・経理課／用度部】</strong>総務・経理のお仕事は、会社の入金・出金管理やチェックアウト時応対などを行います。
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold">勤務地</td>
                      <td className="py-4 px-4">〒999-3292 山形県上山市葉山5-20 日本の宿古窯</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold">勤務時間</td>
                      <td className="py-4 px-4">週40時間（実働8時間/日）の交代制勤務シフト<br />例）6:30～15:30または13:00～22:00（実働8時間）</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold">初任給</td>
                      <td className="py-4 px-4">
                        <strong>【大学卒】</strong>月給200,000円<br />
                        <strong>【短大／専門】</strong>月給190,000円<br />
                        <strong>【高卒】</strong>月給180,000円
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold">諸手当</td>
                      <td className="py-4 px-4">通勤手当（月額10,000円）、職能手当、時間外勤務手当</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold">昇給</td>
                      <td className="py-4 px-4">年1回（5月）</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold">賞与</td>
                      <td className="py-4 px-4">年2回（7月、12月）</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold">休日休暇</td>
                      <td className="py-4 px-4">
                        <strong>【休日】</strong>週休2日制（月９日、２月のみ８日間）※年間休日112日（有休休暇５日間含む）※シフト制<br />
                        <strong>【休暇】</strong>有給休暇、慶弔休暇、育児休業
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold">社会保険</td>
                      <td className="py-4 px-4">雇用、労災、健康、厚生年金</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold">教育制度</td>
                      <td className="py-4 px-4">
                        入社後に約２週間で実施<br />
                        会社の仕組みとは？、キャリアプランの共有、一般教養講座、着物の着付け・接客講習講座、かみのやま魅力発掘ツアー旅研修、宿泊体験研修
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 bg-gray-50 font-semibold">試用期間</td>
                      <td className="py-4 px-4">あり 入社後３ヶ月間 試用期間中の労働条件は本採用時と変更なし</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 調理職 */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6 border-l-4 border-green-500 pl-4">調理職</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold w-32">仕事内容</td>
                      <td className="py-4 px-4">
                        夕朝食の仕込み、調理、盛付けが主なお仕事です。<br />
                        夜は会席料理、朝はブュッフェで和・洋・中様々な料理がお客様にご提供します。
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold">勤務地</td>
                      <td className="py-4 px-4">〒999-3292 山形県上山市葉山5-20 日本の宿古窯</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold">勤務時間</td>
                      <td className="py-4 px-4">週40時間（実働8時間/日）の交代制勤務シフト<br />例）6:00～15:00または11:00～20:00（実働8時間）</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold">初任給</td>
                      <td className="py-4 px-4">
                        <strong>【大学卒】</strong>月給200,000円<br />
                        <strong>【短大／専門卒】</strong>月給190,000円<br />
                        <strong>【高卒】</strong>月給180,000円
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold">諸手当</td>
                      <td className="py-4 px-4">通勤手当（月額10,000円）、職能手当、時間外勤務手当</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold">昇給</td>
                      <td className="py-4 px-4">年1回（5月）</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold">賞与</td>
                      <td className="py-4 px-4">年2回（7月、12月）</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold">休日休暇</td>
                      <td className="py-4 px-4">
                        <strong>【休日】</strong>週休2日制（月９日、２月のみ８日間）※年間休日112日（有休休暇５日間含む）※シフト制<br />
                        <strong>【休暇】</strong>有給休暇、慶弔休暇、育児休業
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold">社会保険</td>
                      <td className="py-4 px-4">雇用、労災、健康、厚生年金</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 bg-gray-50 font-semibold">教育制度</td>
                      <td className="py-4 px-4">
                        入社後に約2週間で実施<br />
                        会社の仕組みとは？、キャリアプランの共有、一般教養講座、着物の着付け・接客講習講座、かみのやま魅力発掘ツアー旅研修、宿泊体験研修
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 bg-gray-50 font-semibold">試用期間</td>
                      <td className="py-4 px-4">あり 入社後３ヶ月間 試用期間中の労働条件は本採用時と変更なし</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium text-center">現在、募集は行っておりません。</p>
            </div>
          </div>

          {/* パート・アルバイト */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              パート・アルバイト <span className="text-lg font-normal text-gray-600">Part-time job</span>
            </h3>
            <p className="text-gray-600 text-center py-8">詳細については直接お問い合わせください。</p>
          </div>
        </div>
      </section>

      {/* 先輩社員紹介 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            先輩社員紹介 <span className="text-lg font-normal text-gray-600">Senior Helpers Reviews</span>
          </h2>

          <div className="space-y-16">
            {/* 吉田大輝 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <img 
                  src="/images/recruit_yosida.jpg" 
                  alt="支配人 吉田大輝" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold text-gray-900">支配人</h3>
                  <p className="text-gray-600 font-medium">吉田 大輝</p>
                  <p className="text-sm text-gray-500">2017年入社</p>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Q.現在担当している仕事について教えてください。</h4>
                  <p className="text-gray-700">現在は「悠湯の郷ゆさ＆おふろcaféyusa」の支配人として、現場の仕事や管理の仕事などをしています。現場の仕事はチェックインやチェックアウトはもちろん、館内巡回や夕食のお席のご案内など多岐にわたります。また支配人として、毎月の営業利益、経常利益の確認やその利益を達成するための企画の立案などをやっています。</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Q.仕事のやりがいについて教えてください。</h4>
                  <p className="text-gray-700">やりがいは現場でのお客様の嬉しいお声を直接もらえるのはもちろん、１つの施設を任されているので、どのように売上を上げて利益を残すのかを考えながら仕事ができることです。多くの人たちの協力を得ながら、目標利益になるように考えながら仕事を進めることができます。</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Q.入社する方へメッセージ</h4>
                  <p className="text-gray-700">不安もあると思いますが、先輩がしっかりサポートをしてくれる環境だと思います。嫌なこともあると思いますが、接客業が好きならば、古窯グループで働くことは大きな財産になると思います。</p>
                </div>
                {/* 1日の流れ */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-3">1日の流れ</h5>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center"><span className="font-semibold mr-2">9:00</span>出社</div>
                    <div className="flex items-center"><span className="font-semibold mr-2">9:30</span>お見送り・チェックアウト</div>
                    <div className="flex items-center"><span className="font-semibold mr-2">12:00</span>現場の仕事や管理</div>
                    <div className="flex items-center"><span className="font-semibold mr-2">15:00</span>チェックイン</div>
                    <div className="flex items-center"><span className="font-semibold mr-2">18:00</span>退社</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 佐藤江里子 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <img 
                  src="/images/recruit_sato.jpg" 
                  alt="山形プリン店長 佐藤江里子" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold text-gray-900">山形プリン店長</h3>
                  <p className="text-gray-600 font-medium">佐藤 江里子</p>
                  <p className="text-sm text-gray-500">2013年入社</p>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Q.仕事のやりがいについて教えてください。</h4>
                  <p className="text-gray-700">接客をしていてお客さんが「ここがおいしいと聞いてきたんです」と来店していただけるのがうれしいです。山形プリンでは、コンセプトに沿った新しい味のプリンを期間で次々と開発し売り出しているのですが、その時期に合った新商品を会議で話し合い・考えること、開発をして試食会を開き意見をもらって新商品を作り上げることが楽しいです。</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Q.学生にメッセージ</h4>
                  <p className="text-gray-700">私は学業をまじめに取り組んだことが、今に繋がっていると思います。ある程度基本がしっかりしていると、安心して任せてもらえるものも増えてきます。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-3">1日の流れ</h5>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center"><span className="font-semibold mr-2">7:00</span>出社</div>
                    <div className="flex items-center"><span className="font-semibold mr-2">7:30</span>接客・プリン作り</div>
                    <div className="flex items-center"><span className="font-semibold mr-2">11:00</span>2時間の中抜け</div>
                    <div className="flex items-center"><span className="font-semibold mr-2">13:00</span>工場でお菓子作り</div>
                    <div className="flex items-center"><span className="font-semibold mr-2">19:00</span>退社</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 丹和利 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <img 
                  src="/images/recruit_tan.jpg" 
                  alt="調理場 丹和利" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold text-gray-900">調理場</h3>
                  <p className="text-gray-600 font-medium">丹 和利</p>
                  <p className="text-sm text-gray-500">2016年入社</p>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Q.現在担当している仕事について教えてください。</h4>
                  <p className="text-gray-700">現在は、日々の料理の仕込みのほかに新プランのコース考案などをしています。森の音の調理場は2人で回している為、すべての工程を自分たちで行います。新プランを考える際には、先輩と仕込み中に会話をしながら意見を出し合ったり、空いた時間にPCで調べたりして考案しています。</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Q.学生にメッセージ</h4>
                  <p className="text-gray-700">私は今、自分の時間をしっかりとれるし、仕事の方では自分のやりたいことをやらせてもらえる、とても充実した時間を過ごせていると思います。学生のうちに基礎はしっかり身に着けたほうがいいです。</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-3">1日の流れ</h5>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center"><span className="font-semibold mr-2">7:00</span>出社</div>
                    <div className="flex items-center"><span className="font-semibold mr-2">7:30</span>料理の仕込み</div>
                    <div className="flex items-center"><span className="font-semibold mr-2">12:00</span>休憩４時間</div>
                    <div className="flex items-center"><span className="font-semibold mr-2">16:00</span>料理出し・朝の準備</div>
                    <div className="flex items-center"><span className="font-semibold mr-2">21:00</span>退社</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 中條茜 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <img 
                  src="/images/recruit_nakajo.jpg" 
                  alt="カスタマー戦略部 中條茜" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold text-gray-900">カスタマー戦略部</h3>
                  <p className="text-gray-600 font-medium">中條 茜</p>
                  <p className="text-sm text-gray-500">2014年入社</p>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Q.現在担当している仕事について教えてください。</h4>
                  <p className="text-gray-700">カスタマー戦略部でマーケティングの仕事をしています。グループ施設全体の売上サポートをすることが主な業務であり、仕事の内容は多岐に渡ります。各施設の企画を考えたり、ネット売上の管理をしたり、WEB広告の運用を行ったりと、一番インパクトがある施策は何かを考え、テストを行いながら最適解を探っていきます。</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Q.学生にメッセージ</h4>
                  <p className="text-gray-700">老舗旅館というと私に務まるかな、と思う方もいるかもしれません。ですが、先輩社員がしっかり仕事を教えてくれる環境なので心配はありません。人と関わることが好き、様々な仕事を通して成長していきたいという思いがあれば大丈夫です！</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-3">1日の流れ</h5>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center"><span className="font-semibold mr-2">9:00</span>出社</div>
                    <div className="flex items-center"><span className="font-semibold mr-2">9:30</span>売り上げ管理</div>
                    <div className="flex items-center"><span className="font-semibold mr-2">12:00</span>食事・休憩</div>
                    <div className="flex items-center"><span className="font-semibold mr-2">13:00</span>資料作り・会議</div>
                    <div className="flex items-center"><span className="font-semibold mr-2">18:00</span>退社</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">採用に関するお問い合わせ</h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">お電話でのお問い合わせ</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">0570-00-5454</p>
                <p className="text-gray-600">受付時間：9:00〜18:00</p>
              </div>
              <div className="flex items-center justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  お問い合わせフォーム
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}