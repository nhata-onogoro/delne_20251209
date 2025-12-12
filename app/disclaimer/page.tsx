import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const disclaimers = [
  "DELNEは、外部の生成AIサービスを利用して動作しています。",
  "DELNEの応答内容の正確性・完全性を保証するものではありません。（誤った内容を含む場合があります）",
  "DELNEは、認知症の方からのお電話に対して、落ち着きや安心につながる応対を行うことを目的に調整されています。",
  "ご本人の状態や状況により、すべての方・すべてのケースで同様の効果が得られるとは限りません。",
  "DELNEは、より多くの会話パターンに対応できるよう、継続的に改善・開発を行っていきます。",
]

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">免責事項</h1>
            <p className="text-gray-700 text-sm">DELNEサービスをご利用いただく際の免責事項を掲載しています。</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4 text-gray-800">
            <ul className="list-disc list-inside space-y-3">
              {disclaimers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 bg-transparent hover:bg-gray-50 transition-colors font-medium"
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
