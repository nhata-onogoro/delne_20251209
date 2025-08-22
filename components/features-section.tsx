import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mic, Brain, Bell, Globe, Shield, Clock, Heart, Users, Building2 } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Mic className="w-8 h-8 text-primary" />,
      title: "家族の声色を学習してAIが合成音声で再現",
      description:
        "同意の上で採取した家族の肉声データからAIが学習を行い、親しみ慣れた声で応答することで認知症患者に安心感を与えます。",
      badge: "音声再現",
      example: "息子の声を学習したAIが、母親からの電話に息子の声で「大丈夫だよ」と応答",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "AIによる24時間365日の自動電話応答",
      description:
        "深夜や早朝を問わず、認知症患者からの電話に即座に応答。介護家族の睡眠時間を確保し、生活の質を向上させます。",
      badge: "自動応答",
      example: "深夜2時、認知症の父親から娘に数十回にわたる連続の電話。娘が睡眠中、AIが自動応答",
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "家族に固有の知識や会話内容の学習",
      description:
        "専用ページからの個別登録、また日々の会話の内容からAIが家族固有の知識を記録し、内容を反映した会話を自動生成します。",
      badge: "個別学習",
      example: "「孫＝タツヤ、毎週火曜リハビリ」等を登録。AIが「タツヤだよ。今日はリハビリの日だね」と祖母に声掛け",
    },
    {
      icon: <Bell className="w-8 h-8 text-primary" />,
      title: "会話内容の要約と通知",
      description:
        "AIと認知症患者が会話した内容を要約してメール通知。緊急性が高い会話が発生した場合は、AIが緊急度を判定してSMSで即時通知します。",
      badge: "要約通知",
      example: "通話終了後、毎日20時に要約メール、緊急ワード出現時はSMS速報",
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "方言への対応",
      description:
        "広島弁など、特徴的な会話についてはAIが広島弁コーパス等から事前学習し、より現実的で自然な会話を生成します。",
      badge: "方言対応",
      example: "「ほいじゃがのう」「わやじゃ」など広島弁をAIが正確に認識・応答し、認知症患者と違和感なく対話",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "プライバシーやガイドラインの遵守",
      description:
        "録音音声は一定期間で自動削除・情報は他目的に利用しない等、プライバシー保護を遵守。AI事業者ガイドラインにも準拠して運用します。",
      badge: "規約遵守",
      example: "AI事業者ガイドラインのリスクベースアプローチに沿って説明責任を明示し、データを正しく管理",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">6つの革新的機能</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            認知症患者と介護家族の両方に寄り添う、きめ細やかな機能を提供します
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="w-fit">
                      {feature.badge}
                    </Badge>
                    <h3 className="text-xl font-semibold text-card-foreground leading-tight">{feature.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>

                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                  <div className="text-xs text-primary font-medium mb-1">利用シーン例</div>
                  <div className="text-sm text-card-foreground italic">{feature.example}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-card-foreground text-center mb-8">もたらされるインパクト</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">介護家族</h4>
              <p className="text-sm text-muted-foreground">睡眠時間確保・勤務継続率向上・心理的負担軽減</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">認知症患者</h4>
              <p className="text-sm text-muted-foreground">待ち時間ゼロでストレス軽減・家族との絆維持</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">地域社会</h4>
              <p className="text-sm text-muted-foreground">介護離職リスク低減・労働損失緩和・地域活力向上</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
