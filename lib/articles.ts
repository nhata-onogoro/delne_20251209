export type Article = {
  slug: string
  title: string
  summary: string
  category: string
  publishedAt: string
  sourceName: string
  externalUrl?: string
  imageUrl?: string
  content: {
    heading: string
    body: string
  }[]
}

export const articles: Article[] = [
  {
    slug: "family-care-dx-case-study",
    title: "家族介護のDX事例：電話見守りで実現した安心運用",
    summary:
      "DELNEの音声対話を活用し、離れて暮らす家族の安心確認を効率化した事例を紹介します。",
    category: "導入事例",
    publishedAt: "2026-01-08",
    sourceName: "DELNE編集部",
    externalUrl: "https://onogoro.co.jp/",
    content: [
      {
        heading: "導入前の課題",
        body:
          "毎日の安否確認が家族の負担になっており、電話がつながらない時間帯には不安が高まるという課題がありました。",
      },
      {
        heading: "DELNE導入後の変化",
        body:
          "定時の自動発信と会話ログの共有により、家族は必要なタイミングで状況を把握できるようになりました。",
      },
      {
        heading: "今後の展望",
        body:
          "自治体や介護事業者との連携を進め、見守り体制の標準化に向けた実証を継続していく予定です。",
      },
    ],
  },
  {
    slug: "hiroshima-ai-sandbox-report",
    title: "ひろしまAIサンドボックス採択プロジェクト紹介",
    summary:
      "DELNEが採択された背景と、社会実装に向けた取り組みのポイントをまとめました。",
    category: "プロジェクト",
    publishedAt: "2025-12-20",
    sourceName: "ひろしまAIサンドボックス",
    externalUrl: "https://hiroshima-ai-sandbox.jp/",
    content: [
      {
        heading: "採択テーマ",
        body:
          "高齢者コミュニケーション支援の社会課題を対象に、音声AIを活用した現場実装をテーマとして採択されました。",
      },
      {
        heading: "実証内容",
        body:
          "利用者・家族・支援者の三者が必要情報を共有できる体制づくりを目指し、通話UXの検証を進めています。",
      },
    ],
  },
  {
    slug: "onogoro-note-n36f283c357e7",
    title: "オノゴロ公式note記事",
    summary:
      "株式会社オノゴロが公開したnote記事を、ランディングページ内で読めるように再構成した記事です。",
    category: "オノゴロ記事",
    publishedAt: "2026-02-17",
    sourceName: "オノゴロ",
    content: [
      {
        heading: "本文",
        body:
          "指定いただいたnote記事（https://note.com/onogoro_5656/n/n36f283c357e7?from=notice）をランディングページ内記事として掲載予定です。現環境から外部URLへ接続できず本文を取得できなかったため、本文は取得後に差し替えてください。",
      },
    ],
  },
  {
    slug: "voice-ai-trend-2026",
    title: "2026年版：音声AI見守りサービスの最新トレンド",
    summary:
      "見守り領域における音声AI活用の潮流を、実務目線で分かりやすく解説します。",
    category: "コラム",
    publishedAt: "2026-02-01",
    sourceName: "DELNE編集部",
    content: [
      {
        heading: "トレンド1：会話の自然さ",
        body:
          "利用者の心理的負担を減らすため、応答の間や言い回しを含めた対話設計が重要視されています。",
      },
      {
        heading: "トレンド2：運用ダッシュボード",
        body:
          "異常検知だけでなく、日々の会話傾向を可視化することで家族・事業者の意思決定を支援する機能が増えています。",
      },
      {
        heading: "トレンド3：地域連携",
        body:
          "自治体や地域包括支援センターとの連携を前提にしたデータ設計が、今後の普及の鍵になると考えられています。",
      },
    ],
  },
]

export const getArticleBySlug = (slug: string) =>
  articles.find((article) => article.slug === slug)


export const getExternalPreviewImageUrl = (url: string) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`

export const getArticleImageUrl = (article: Article) => {
  if (article.imageUrl) {
    return article.imageUrl
  }

  if (article.externalUrl) {
    return getExternalPreviewImageUrl(article.externalUrl)
  }

  return null
}
