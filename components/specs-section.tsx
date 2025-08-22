import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SpecsSection() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">サービス仕様</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-primary">基本プラン</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">月額料金</span>
                <span className="font-bold text-primary">7,500円</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">無料通話時間</span>
                <span>月600分まで</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">超過料金</span>
                <span>1分20円</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">対応時間</span>
                <span>24時間365日</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">要約メール</span>
                <span>✓ 含む</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">緊急通知</span>
                <span>✓ 含む</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-primary">プレミアムオプション</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">方言対応</span>
                <span className="font-bold">月額500円</span>
              </div>
              <div className="text-sm text-muted-foreground mb-2">初回設定費用: 1,000円</div>
              <div className="flex justify-between">
                <span className="font-medium">家族の肉声再現</span>
                <span className="font-bold">月額1,000円</span>
              </div>
              <div className="text-sm text-muted-foreground mb-2">初回設定費用: 2,000円</div>
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  ※上記料金は現時点の想定値です。サービス開発中のため、今後変更される場合があります。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
