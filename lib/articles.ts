export type Article = {
  slug: string
  title: string
  summary: string
  category: string
  publishedAt: string
  sourceName: string
  externalUrl?: string
  alternateUrl?: string
  imageUrl?: string
  content: {
    heading: string
    body: string
  }[]
}

export const articles: Article[] = [
  {
    slug: "note-hiroshima-sb-nee74e17b7079",
    title: "ひろしまAIサンドボックス note 記事",
    summary:
      "ひろしまAIサンドボックス公式noteで公開された記事です。詳細は外部記事をご覧ください。",
    category: "メディア掲載",
    publishedAt: "2026-02-17",
    sourceName: "ひろしまAIサンドボックス",
    externalUrl: "https://note.com/hiroshima_sb/n/nee74e17b7079",
    content: [
      {
        heading: "外部記事について",
        body:
          "本記事は指定いただいた外部note記事へのリンクです。ランディングページではタイトル・概要を掲載し、詳細は外部ページでご確認いただけます。",
      },
    ],
  },
  {
    slug: "independents-article-2771",
    title: "INDEPENDENTS 掲載記事（No.2771）",
    summary:
      "INDEPENDENTSで公開された記事です。詳細は外部記事をご覧ください。",
    category: "メディア掲載",
    publishedAt: "2026-02-17",
    sourceName: "INDEPENDENTS",
    externalUrl: "https://www.independents.jp/article/2771",
    content: [
      {
        heading: "外部記事について",
        body:
          "本記事は指定いただいたINDEPENDENTS掲載記事へのリンクです。詳細は外部ページをご参照ください。",
      },
    ],
  },
  {
    slug: "note-seodoa-academy-n548b3a509561",
    title: "SEODOA ACADEMY note 記事",
    summary:
      "SEODOA ACADEMYのnoteで公開された記事です。詳細は外部記事をご覧ください。",
    category: "メディア掲載",
    publishedAt: "2026-02-17",
    sourceName: "SEODOA ACADEMY",
    externalUrl: "https://note.com/seodoa_academy/n/n548b3a509561",
    content: [
      {
        heading: "外部記事について",
        body:
          "本記事は指定いただいた外部note記事へのリンクです。本文は外部ページにてご確認ください。",
      },
    ],
  },
  {
    slug: "yahoo-news-db82eaf97fb2a9ada326097beabbc4a56606b5c2",
    title: "中国新聞デジタル掲載記事",
    summary:
      "中国新聞デジタルで公開された記事です。詳細は外部記事をご覧ください。\n\nYahoo!ニュース・2026-02-17 にも掲載\n※掲載期間終了",
    category: "メディア掲載",
    publishedAt: "2026-01-09",
    sourceName: "中国新聞デジタル",
    externalUrl:
      "https://www.chugoku-np.co.jp/articles/-/769779?fbclid=IwY2xjawRo2KtleHRuA2FlbQIxMABicmlkETFENDY0SmIyWmFuNXZqV0Ezc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHjg4qoUjxrzcWNbJRfyttJv-x2XQ_h0OPXP7WWwjECYQG2z3xW_GExt7Ceyy_aem_gD3T_nlTFoP1pMzAvJ4ZwA",
    alternateUrl:
      "https://www.chugoku-np.co.jp/articles/-/769779?fbclid=IwY2xjawRo2KtleHRuA2FlbQIxMABicmlkETFENDY0SmIyWmFuNXZqV0Ezc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHjg4qoUjxrzcWNbJRfyttJv-x2XQ_h0OPXP7WWwjECYQG2z3xW_GExt7Ceyy_aem_gD3T_nlTFoP1pMzAvJ4ZwA",
    content: [
      {
        heading: "外部記事について",
        body:
          "本記事は中国新聞デジタル掲載記事へのリンクです。本文は外部ページでご確認ください。",
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
  }
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
