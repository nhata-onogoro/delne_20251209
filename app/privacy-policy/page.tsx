import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <header className="mb-12 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">プライバシーポリシー</h1>
              <div className="text-sm text-gray-600 space-y-1 text-right">
                <p>制定日：2025年12月15日</p>
                <p>最終改定日：2025年12月15日</p>
              </div>
            </header>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 個人情報の取り扱いについて</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                株式会社オノゴロ（以下「当社」）は、以下のプライバシーポリシーに従って個人情報を取り扱います。
                当社は個人情報の重要性を認識し、その保護の徹底をはかることをお約束いたします。
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 個人情報の定義</h3>
              <p className="text-gray-700 leading-relaxed">
                本プライバシーポリシーにおいて「個人情報」とは、生存する個人に関する情報であって、
                当該情報に含まれる氏名、電話番号、メールアドレス、住所、生年月日その他の記述等により
                特定の個人を識別することができるもの（他の情報と容易に照合することができ、
                それにより特定の個人を識別することができることとなるものを含む）を指します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 個人情報の収集・利用目的</h2>
              <p className="text-gray-700 leading-relaxed mb-4">当社は、以下の目的で個人情報を収集・利用いたします：</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>弊社サービスのアカウント作成、本人確認及びサービス提供のため</li>
                <li>弊社サービスの維持、保護及び改善のため</li>
                <li>お客様からのお問い合わせへの対応のため</li>
                <li>弊社サービスに関する重要なお知らせ、アップデート情報等の通知のため</li>
                <li>弊社の新商品、新サービス、キャンペーン等のご案内のため（お客様の同意がある場合）</li>
                <li>契約の履行、料金請求等の手続きのため</li>
                <li>利用規約違反等の不正利用の調査・対応のため</li>
                <li>その他、上記利用目的に付随する目的のため</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                なお、当社は氏名及び電話番号を必須情報として取得させていただきます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookie及び類似技術について</h2>
              <p className="text-gray-700 leading-relaxed">
                当社のウェブサービスでは、サービスの利便性向上のため、Cookie及び類似の技術を使用しています。
                これらの技術により収集される情報には、IPアドレス、ブラウザ情報、アクセス日時、参照URL等が含まれます。
                お客様はブラウザの設定によりCookieの使用を拒否することができますが、
                その場合、サービスの一部機能が利用できなくなる可能性があります。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 個人情報の安全管理</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、個人情報の漏洩、滅失又は毀損の防止その他の個人情報の安全管理のために、以下の措置を講じます：
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">4.1 組織的安全管理措置</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>個人情報保護管理者の設置</li>
                    <li>従業者に対する定期的な教育・研修の実施</li>
                    <li>個人情報取扱規程の策定と運用</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">4.2 技術的安全管理措置</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>個人情報データベースへのアクセス制御</li>
                    <li>通信の暗号化（SSL/TLS）</li>
                    <li>不正アクセス防止システムの導入</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">4.3 物理的安全管理措置</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>個人情報を取り扱う区域の入退室管理</li>
                    <li>機器及び電子媒体等の盗難防止措置</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. 個人情報の第三者提供</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、以下の場合を除き、個人情報を事前に本人の同意を得ることなく第三者に提供しません：
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>法令に基づく場合</li>
                <li>
                  人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
                </li>
                <li>
                  公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
                </li>
                <li>
                  国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
                </li>
              </ul>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">5.1 業務委託について</h3>
                  <p className="text-gray-700 leading-relaxed">
                    当社は、利用目的の達成に必要な範囲内において、個人情報の取扱いの全部又は一部を委託する場合があります。
                    この場合、当社は委託先に対して必要かつ適切な監督を行います。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">5.2 海外への移転について</h3>
                  <p className="text-gray-700 leading-relaxed">
                    当社は、お客様の個人情報を日本国外に移転することはありません。
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. 個人情報の保存期間</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、個人情報を利用目的の達成に必要な期間保存するものとします。
                ただし、法令により保存が義務付けられている場合は、当該法令の定める期間保存します。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. 個人情報の開示・訂正・利用停止等</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">7.1 請求の手続き</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    お客様は、当社に対して、個人情報保護法に基づき以下の請求を行うことができます：
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>個人情報の利用目的の通知</li>
                    <li>個人情報の開示</li>
                    <li>個人情報の訂正、追加又は削除</li>
                    <li>個人情報の利用停止又は消去</li>
                    <li>個人情報の第三者提供の停止</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">7.2 請求方法</h3>
                  <p className="text-gray-700 leading-relaxed">
                    上記請求を行う場合は、本プライバシーポリシー末尾記載のお問い合わせ窓口まで、書面又は電子メールにてご連絡ください。
                    その際、本人確認のため、登録電話番号及びご本人確認書類の提示をお願いする場合があります。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">7.3 手数料</h3>
                  <p className="text-gray-700 leading-relaxed">
                    個人情報の開示請求については、1回の請求につき1,000円の手数料をいただきます。
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. プライバシーポリシーの変更</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、法令の変更、サービス内容の変更、その他必要に応じて本プライバシーポリシーを変更することがあります。
                重要な変更がある場合は、当ウェブサイト上での告知、又は登録メールアドレスへの通知により、変更内容をお知らせいたします。
                変更後のプライバシーポリシーは、当ウェブサイトに掲載した時点から効力を生じるものとします。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. お問い合わせ窓口</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                個人情報の取扱いに関するお問い合わせは、下記までご連絡ください：
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">株式会社オノゴロ 個人情報相談窓口</h3>
                <div className="space-y-2 text-gray-700">
                  <p>〒730-0051 広島市中区大手町2-8-2 フージャース広島大手町ビル11F</p>
                  <p>メール：ai.support@onogoro.co.jp</p>
                  <p>営業時間：平日9:00-18:00（土日祝日及び年末年始を除く）</p>
                </div>
              </div>
            </section>

            <div className="text-center">
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                トップページに戻る
              </a>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
