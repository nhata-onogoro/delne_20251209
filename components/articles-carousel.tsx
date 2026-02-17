"use client"

import Link from "next/link"
import { useMemo } from "react"
import { ExternalLink } from "lucide-react"
import { articles, getArticleImageUrl } from "@/lib/articles"

export function ArticlesCarousel() {
  const sortedArticles = useMemo(
    () =>
      [...articles].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      ),
    [],
  )

  const slidingArticles = [...sortedArticles, ...sortedArticles]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#002c5b]">関連記事</h1>
          <p className="mt-3 text-gray-600">
            外部掲載情報と、ランディングページ内で読める記事をまとめています。
          </p>
        </div>

        <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max gap-4 article-card-slider">
            {slidingArticles.map((article, index) => {
              const imageUrl = getArticleImageUrl(article)

              return (
                <Link
                  key={`${article.slug}-${index}`}
                  href={`/articles/${article.slug}`}
                  className="w-[280px] shrink-0 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:w-[320px]"
                >
                  <div className="mb-4 overflow-hidden rounded-lg border border-gray-100 bg-gray-100">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={`${article.title} のサムネイル`}
                        className="h-40 w-full object-contain object-center"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-40 w-full items-center justify-center bg-gradient-to-r from-[#002c5b] to-[#014182] text-white">
                        <p className="font-bold">DELNE</p>
                      </div>
                    )}
                  </div>

                  <p className="text-sm font-semibold text-[#002c5b]">{article.category}</p>
                  <h3 className="mt-2 line-clamp-2 text-lg font-bold text-gray-900">{article.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600">{article.summary}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                    <span>{article.sourceName}</span>
                    <span>・</span>
                    <span>{article.publishedAt}</span>
                  </div>
                  {article.externalUrl && (
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#002c5b]">
                      外部記事あり
                      <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
