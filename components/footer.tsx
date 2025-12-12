import { Mail, Building } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Image
              src="/hiroshima-ai-sandbox-logo-updated.png"
              alt="ひろしまAIサンドボックス"
              width={60}
              height={60}
              className="object-contain"
            />
            <p className="text-lg font-bold">
              DELNEは、広島県主催のAI事業「ひろしまAIサンドボックス」に採択されています。
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* 会社情報 */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-lg">会社情報</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-300 font-bold">
                <Building className="w-4 h-4" />
                <span>株式会社オノゴロ</span>
              </div>
              <div className="text-sm text-gray-300 font-bold">
                <a
                  href="https://onogoro.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F39C12] transition-colors cursor-pointer"
                >
                  https://onogoro.co.jp/
                </a>
              </div>
            </div>
          </div>

          {/* リンク */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">リンク</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/terms" className="hover:text-[#F39C12] transition-colors font-bold cursor-pointer">
                  利用規約
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-[#F39C12] transition-colors font-bold cursor-pointer">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="/legal-notice" className="hover:text-[#F39C12] transition-colors font-bold cursor-pointer">
                  特定商取引法に基づく表記
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="hover:text-[#F39C12] transition-colors font-bold cursor-pointer">
                  免責事項
                </a>
              </li>
              <li>
                <a href="/outage-info" className="hover:text-[#F39C12] transition-colors font-bold cursor-pointer">
                  障害情報
                </a>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div className="space-y-4">
            <h4 className="text-white font-bold">お問い合わせ</h4>
            <div className="space-y-3">
              <a
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  w-full bg-[#F39C12] hover:bg-[#D35400] 
                  text-white cursor-pointer transition-colors
                  px-4 py-2 rounded-md font-medium
                "
              >
                <Mail className="w-4 h-4 mr-2" />
                メールで相談
              </a>
            </div>
          </div>
        </div>

        {/* フッター下部 */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-sm text-gray-400">© 2025 株式会社オノゴロ. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
