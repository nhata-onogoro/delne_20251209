import { Button } from "@/components/ui/button"
import { Mail, Building } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg mb-4">
            ヘルパーフォンは、広島県主催のAI事業「ひろしまAIサンドボックス」に採択されています。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* 会社情報 */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-lg">会社情報</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Building className="w-4 h-4" />
                <span>株式会社オノゴロ</span>
              </div>
              <div className="text-sm text-gray-300">
                <a
                  href="https://onogoro.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
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
                <a href="/terms" className="hover:text-primary transition-colors">
                  利用規約
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-primary transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="/legal-notice" className="hover:text-primary transition-colors">
                  特定商取引法に基づく表記
                </a>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">お問い合わせ</h4>
            <div className="space-y-3">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <a href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  メールで相談
                </a>
              </Button>
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
