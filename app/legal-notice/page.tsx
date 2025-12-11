import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* ページヘッダー */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">特定商取引法に基づく表記</h1>
            <div className="text-right text-sm text-gray-600">制定日：2025年3月31日</div>
          </div>

          {/* 表記内容 */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">販売業者</th>
                  <td className="py-4 px-4 text-gray-700">株式会社オノゴロ</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">代表責任者</th>
                  <td className="py-4 px-4 text-gray-700">三島義明</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">所在地</th>
                  <td className="py-4 px-4 text-gray-700">
                    <div className="mb-4">
                      <p className="font-bold mb-2">【本社】</p>
                      <p>〒730-0051</p>
                      <p>
                        広島市中区大手町2-8-2
                        <br />
                        フージャース広島大手町ビル11F
                      </p>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">電話番号</th>
                  <td className="py-4 px-4 text-gray-700">082-258-1607</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">電話受付時間</th>
                  <td className="py-4 px-4 text-gray-700">10:00～17:00（土日祝日を除く）</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">メールアドレス</th>
                  <td className="py-4 px-4 text-gray-700">
                    <a href="mailto:ai.support@onogoro.co.jp" className="text-orange-600 hover:underline">
                      ai.support@onogoro.co.jp
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">ホームページURL</th>
                  <td className="py-4 px-4 text-gray-700">
                    <a
                      href="https://onogoro.co.jp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      https://onogoro.co.jp
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">販売価格</th>
                  <td className="py-4 px-4 text-gray-700">
                    <p className="mb-2">初期費用：無料</p>
                    <p className="mb-1">月額費用（すべて税込）：</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>ライトプラン：月額 7,700円（通話可能時間 120分/月）</li>
                      <li>スタンダードプラン：月額 11,000円（通話可能時間 285分/月）</li>
                      <li>プレミアムプラン：月額 16,500円（通話可能時間 560分/月）</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-600">
                      ※プランによって料金および通話可能時間が異なります。
                    </p>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">
                    商品代金以外の必要料金
                  </th>
                  <td className="py-4 px-4 text-gray-700">
                    <p>消費税</p>
                    <p>電話会社の通話転送サービス料</p>
                    <p>※ご利用の電話会社により料金が異なります。</p>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">
                    サービス提供開始時期
                  </th>
                  <td className="py-4 px-4 text-gray-700">
                    <p>ご契約および決済完了後、即時にサービスをご利用いただけます。</p>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">料金のご請求</th>
                  <td className="py-4 px-4 text-gray-700">
                    <p>プランのお申し込み完了時に初回請求が発生し、以降毎月同日に請求いたします。</p>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">お支払方法</th>
                  <td className="py-4 px-4 text-gray-700">
                    <p className="mb-2">クレジットカード決済・Link（Stripe）</p>
                    <p className="text-sm text-gray-600">
                      お支払いは、クレジットカードおよびLink（Stripe）のみ対応しています。
                    </p>
                    <p className="text-sm text-gray-600">
                      銀行振込・口座振替・請求書払い等、その他の方法は現在ご利用いただけません。
                    </p>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">支払時期</th>
                  <td className="py-4 px-4 text-gray-700">
                    <p className="font-bold mb-2">【クレジットカード決済・Link（Stripe）の場合】</p>
                    <p>各クレジットカード会社会員規約およびStripeの利用規約に基づくお支払いとなります。</p>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">解約・更新について</th>
                  <td className="py-4 px-4 text-gray-700">
                    <p className="mb-2">
                      本サービスは月額課金型のサブスクリプションサービスであり、契約期間は1か月単位で自動更新されます。
                    </p>
                    <p className="mb-2">
                      解約された場合でも、日割りでの返金は行っておらず、契約期間の終了日まではサービスをご利用いただけます。
                    </p>
                    <p>
                      解約は、DELNE管理者ページ内の「料金情報」&gt;「料金プラン」画面からお手続きいただけます。
                    </p>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">キャンセル条件</th>
                  <td className="py-4 px-4 text-gray-700">
                    <p>お申し込み後のキャンセルは、基本的に受け付けておりません。</p>
                  </td>
                </tr>
                <tr>
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">返品条件</th>
                  <td className="py-4 px-4 text-gray-700">
                    <p>本サービスはデジタルコンテンツ／役務提供の性質上、返品はお受けしておりません。</p>
                    <p>あらかじめご了承のうえ、お申し込みください。</p>
                  </td>
                </tr>
                <tr className="border-t">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">動作環境</th>
                  <td className="py-4 px-4 text-gray-700">
                    <div className="mb-4">
                      <p className="mb-1">
                        管理画面のご利用には、インターネット接続環境および以下のブラウザが必要です。
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>PC：Google Chrome / Microsoft Edge の各最新版</li>
                        <li>スマートフォン：iOS / Android の各最新版に標準搭載のブラウザ</li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-1">本サービスの利用に対応する電話端末：</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>固定電話</li>
                        <li>フィーチャーフォン（ガラケー）</li>
                        <li>スマートフォン</li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 戻るボタン */}
          <div className="text-center">
            <Link
              href="/"
              className="
                inline-flex items-center gap-2 
                px-4 py-2 rounded-md
                border border-gray-300 bg-transparent
                hover:bg-gray-50 transition-colors
                font-medium
              "
            >
              <ArrowLeft className="w-4 h-4" />
              トップページに戻る
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
