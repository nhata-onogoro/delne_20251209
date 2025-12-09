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
                  <td className="py-4 px-4 text-gray-700">03-0000-0000</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">電話受付時間</th>
                  <td className="py-4 px-4 text-gray-700">9:00～17:00（土日祝日く）</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">メールアドレス</th>
                  <td className="py-4 px-4 text-gray-700">
                    <a href="mailto:info@onogoro.co.jp" className="text-orange-600 hover:underline">
                      info@onogoro.co.jp
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">ホームページURL</th>
                  <td className="py-4 px-4 text-gray-700">
                    <a
                      href="https://onogoro.co.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      https://onogoro.co.jp/
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">販売価格</th>
                  <td className="py-4 px-4 text-gray-700">
                    <p>初期費用：〇,〇〇〇円(税込)、月額費用：〇,〇〇〇円(税込)</p>
                    <p>※上記、ライトプランの場合</p>
                    <p>※月額費用はプランによって異なります。</p>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">
                    商品代金以外の必要料金
                  </th>
                  <td className="py-4 px-4 text-gray-700">
                    <p>消費税、</p>
                    <p>電話会社の通話転送サービス料</p>
                    <p>※ご利用の電話会社により料金が異なります。</p>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">料金のご請求</th>
                  <td className="py-4 px-4 text-gray-700">
                    <p>ご注文から15日後に初回請求し、以降毎月同日に請求いたします。</p>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">お支払方法</th>
                  <td className="py-4 px-4 text-gray-700">
                    <div className="mb-4">
                      <p className="mb-2">クレジットカード決済</p>
                      <p className="text-sm text-gray-600">(VISA、Master、American Express、JCB)</p>
                    </div>
                    <div>
                      <p className="mb-2">コンビニ振込</p>
                      <p className="text-sm text-gray-600">(セブンイレブン、ローソン、ファミリーマート)</p>
                      <p className="text-sm text-gray-600">※振込手数料が別途かかります。</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">支払時期</th>
                  <td className="py-4 px-4 text-gray-700">
                    <div className="mb-4">
                      <p className="font-bold mb-2">【クレジット決済の場合】</p>
                      <p>各クレジットカード会社会員規約に基づく支払い</p>
                    </div>
                    <div>
                      <p className="font-bold mb-2">【コンビニ振込の場合】</p>
                      <p>各コンビニ会社の規約に基づく支払い</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">キャンセル条件</th>
                  <td className="py-4 px-4 text-gray-700">
                    <p className="mb-2">※保留※</p>
                    <p>テキストテキストテキストテキストテキストテキストテキストテキスト。</p>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">返品条件</th>
                  <td className="py-4 px-4 text-gray-700">
                    <div className="mb-4">
                      <p>※保留※</p>
                      <p>テキストテキストテキストテキストテキストテキストテキストテキスト。</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">推奨環境</th>
                  <td className="py-4 px-4 text-gray-700">
                    <div className="mb-4">
                      <p>転送サービスをご利用いただく際は、以下の通信事業者でのご利用を推奨しております。</p>
                      <p className="font-bold mb-2">【通信事業者】</p>
                      <p>・Docomo</p>
                      <p>・au</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="py-4 px-4 text-left w-1/4 align-top font-semibold text-gray-900">その他</th>
                  <td className="py-4 px-4 text-gray-700">
                    <p>弊社が領収書を発行することができません。</p>
                    <p>
                      クレジットカード会社から発行される「ご利用明細書」が、正式な領収書としての扱いを兼ねています。
                    </p>
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
