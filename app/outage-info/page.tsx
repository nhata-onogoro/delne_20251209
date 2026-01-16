import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const incidents = [
  // 現在、報告中の障害はありません。
]

export default function OutageInfoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">障害情報</h1>
            <p className="text-gray-700 text-sm">障害の発生状況と復旧状況をお知らせします。</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">現在の障害</h2>
            {incidents.length === 0 ? (
              <p className="text-gray-700 text-sm md:text-base">現在、障害は発生していません。</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="py-3 px-4 font-semibold text-gray-900">発生日</th>
                      <th className="py-3 px-4 font-semibold text-gray-900">発生日時</th>
                      <th className="py-3 px-4 font-semibold text-gray-900">障害内容</th>
                      <th className="py-3 px-4 font-semibold text-gray-900">復旧状況</th>
                    </tr>
                  </thead>
                  <tbody>
                    {incidents.map((incident) => (
                      <tr key={`${incident.date}-${incident.occurredAt}`} className="border-t">
                        <td className="py-3 px-4 align-top text-gray-800">{incident.date}</td>
                        <td className="py-3 px-4 align-top text-gray-800">{incident.occurredAt}</td>
                        <td className="py-3 px-4 align-top text-gray-800">{incident.detail}</td>
                        <td className="py-3 px-4 align-top text-gray-800 font-semibold">{incident.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4 text-gray-800">
            <h2 className="text-xl font-semibold text-gray-900">現在の状況</h2>
            <p>現在、障害は発生していません。サービスは通常どおりご利用いただけます。</p>
            <p className="text-sm text-gray-600">
              ※ 障害が発生するたびに本ページへ最新の情報を追加いたします。
            </p>
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
