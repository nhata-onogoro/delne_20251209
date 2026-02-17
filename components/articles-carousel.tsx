"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { articles, getArticleImageUrl } from "@/lib/articles"

const AUTO_SLIDE_MS = 4000

export function ArticlesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([])

  const sortedArticles = useMemo(
    () =>
      [...articles].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      ),
    [],
  )

  const scrollToIndex = (index: number) => {
    const safeIndex = (index + sortedArticles.length) % sortedArticles.length
    const container = containerRef.current
    const targetCard = cardRefs.current[safeIndex]

    if (!container || !targetCard) {
      return
    }

    container.scrollTo({
      left: targetCard.offsetLeft,
      behavior: "smooth",
    })

    setActiveIndex(safeIndex)
  }

  useEffect(() => {
    if (!sortedArticles.length) {
      return
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % sortedArticles.length
        const container = containerRef.current
        const targetCard = cardRefs.current[nextIndex]

        if (container && targetCard) {
          container.scrollTo({ left: targetCard.offsetLeft, behavior: "smooth" })
        }

        return nextIndex
      })
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

        <div className="relative mt-10">
          <button
            type="button"
            aria-label="前の記事へ"
            onClick={() => scrollToIndex(activeIndex - 1)}
            className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#002c5b] shadow-md transition hover:bg-gray-100 md:-left-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={containerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {sortedArticles.map((article, index) => {
              const imageUrl = getArticleImageUrl(article)
              const articleHref = article.externalUrl ?? `/articles/${article.slug}`

              return (
                <Link
                  key={article.slug}
                  href={articleHref}
                  ref={(el) => {
                    cardRefs.current[index] = el
                  }}
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

          <button
            type="button"
            aria-label="次の記事へ"
            onClick={() => scrollToIndex(activeIndex + 1)}
            className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#002c5b] shadow-md transition hover:bg-gray-100 md:-right-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
