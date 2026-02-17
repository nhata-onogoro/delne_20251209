"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { ExternalLink } from "lucide-react"
import { articles, getArticleImageUrl } from "@/lib/articles"
import { cn } from "@/lib/utils"

const AUTO_SLIDE_MS = 4000

export function ArticlesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const sortedArticles = useMemo(
    () =>
      [...articles].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      ),
    [],
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sortedArticles.length)
    }, AUTO_SLIDE_MS)

    return () => clearInterval(timer)
  }, [sortedArticles.length])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#002c5b]">関連記事</h1>
          <p className="mt-3 text-gray-600">
            外部掲載情報と、ランディングページ内で読める記事をまとめています。
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-200">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {sortedArticles.map((article) => {
              const imageUrl = getArticleImageUrl(article)

              return (
                <article key={article.slug} className="min-w-full p-8 md:p-12">
                  <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={`${article.title} のイメージ`}
                        className="h-56 w-full object-cover md:h-72"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-56 w-full items-center justify-center bg-gradient-to-r from-[#002c5b] to-[#014182] text-white md:h-72">
                        <p className="text-lg font-bold">DELNE関連記事</p>
                      </div>
                    )}
                  </div>

                  <p className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-[#002c5b]">
                    {article.category}
                  </p>
                  <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">{article.title}</h2>
                  <p className="mt-4 text-gray-700 leading-relaxed">{article.summary}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <span>{article.sourceName}</span>
                    <span>・</span>
                    <span>{article.publishedAt}</span>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center rounded-md bg-[#F39C12] px-5 py-2.5 text-white font-bold hover:bg-[#D35400] transition-colors"
                    >
                      詳細を見る
                    </Link>
                    {article.externalUrl && (
                      <a
                        href={article.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-[#002c5b] px-5 py-2.5 font-bold text-[#002c5b] hover:bg-[#002c5b] hover:text-white transition-colors"
                      >
                        外部記事へ
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {sortedArticles.map((article, index) => (
            <button
              key={article.slug}
              type="button"
              aria-label={`${article.title} を表示`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2.5 rounded-full transition-all",
                activeIndex === index ? "w-8 bg-[#002c5b]" : "w-2.5 bg-gray-300",
              )}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {sortedArticles.map((article) => {
            const imageUrl = getArticleImageUrl(article)

            return (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-4 overflow-hidden rounded-lg border border-gray-100 bg-gray-100">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={`${article.title} のサムネイル`}
                      className="h-40 w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-40 w-full items-center justify-center bg-gradient-to-r from-[#002c5b] to-[#014182] text-white">
                      <p className="font-bold">DELNE</p>
                    </div>
                  )}
                </div>

                <p className="text-sm font-semibold text-[#002c5b]">{article.category}</p>
                <h3 className="mt-2 text-lg font-bold text-gray-900">{article.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600">{article.summary}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
