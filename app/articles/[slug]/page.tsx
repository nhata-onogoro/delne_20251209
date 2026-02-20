import Link from "next/link"
import { notFound } from "next/navigation"
import { ExternalLink } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { articles, getArticleBySlug, getArticleImageUrl } from "@/lib/articles"

export const dynamic = 'force-static'
export const dynamicParams = false

type ArticleDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

const renderTextWithLinks = (text: string) => {
  const urlPattern = /(https?:\/\/[^\s]+)/g
  const lines = text.split("\n")

  return lines.map((line, lineIndex) => {
    const segments = line.split(urlPattern)

    return (
      <span key={`line-${lineIndex}`}>
        {segments.map((segment, segmentIndex) => {
          if (/^https?:\/\/[^\s]+$/.test(segment)) {
            return (
              <a
                key={`segment-${lineIndex}-${segmentIndex}`}
                href={segment}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#002c5b] underline break-all"
              >
                {segment}
              </a>
            )
          }

          return <span key={`segment-${lineIndex}-${segmentIndex}`}>{segment}</span>
        })}
        {lineIndex < lines.length - 1 && <br />}
      </span>
    )
  })
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const articleImageUrl = getArticleImageUrl(article)

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="container mx-auto px-4 py-16">
        <Link href="/articles" className="text-sm font-bold text-[#002c5b] hover:underline">
          ← 記事一覧へ戻る
        </Link>

        <article className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 md:p-12 shadow-sm">
          <p className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-[#002c5b]">
            {article.category}
          </p>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">{article.title}</h1>
          <div className="mt-4 text-sm text-gray-500">
            {article.sourceName} ・ {article.publishedAt}
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
            {articleImageUrl ? (
              <img
                src={articleImageUrl}
                alt={`${article.title} のイメージ`}
                className="w-full max-h-[32rem] object-contain"
              />
            ) : (
              <div className="flex h-64 w-full items-center justify-center bg-gradient-to-r from-[#002c5b] to-[#014182] text-white md:h-80">
                <p className="text-xl font-bold">DELNE関連記事</p>
              </div>
            )}
          </div>

          <p className="mt-8 whitespace-pre-line text-lg leading-relaxed text-gray-700">{article.summary}</p>

          <div className="mt-10 space-y-8">
            {article.content.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-bold text-[#002c5b]">{section.heading}</h2>
                <p className="mt-3 leading-relaxed text-gray-700">{renderTextWithLinks(section.body)}</p>
              </section>
            ))}
          </div>

          {article.externalUrl && (
            <div className="mt-10">
              <a
                href={article.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#002c5b] px-5 py-2.5 font-bold text-white hover:bg-[#014182] transition-colors"
              >
                紹介元サイトを見る
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          )}
        </article>
      </section>
      <Footer />
    </main>
  )
}
