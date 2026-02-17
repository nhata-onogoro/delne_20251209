"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { articles, getArticleImageUrl } from "@/lib/articles"

const AUTO_SCROLL_SPEED = 45

export function ArticlesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([])
  const isPausedRef = useRef(false)

  const sortedArticles = useMemo(
    () =>
      [...articles].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      ),
    [],
  )

  const displayArticles = useMemo(() => {
    if (sortedArticles.length <= 1) {
      return sortedArticles
    }

    return [...sortedArticles, ...sortedArticles]
  }, [sortedArticles])

  const scrollToIndex = (index: number) => {
    const safeIndex = (index + sortedArticles.length) % sortedArticles.length
    const container = containerRef.current
    const firstHalfTarget = cardRefs.current[safeIndex]
    const secondHalfTarget = cardRefs.current[safeIndex + sortedArticles.length]

    const targetCard =
      !firstHalfTarget || !secondHalfTarget
        ? firstHalfTarget ?? secondHalfTarget
        : Math.abs(container?.scrollLeft ?? 0 - firstHalfTarget.offsetLeft) <=
            Math.abs(container?.scrollLeft ?? 0 - secondHalfTarget.offsetLeft)
          ? firstHalfTarget
          : secondHalfTarget

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
    const container = containerRef.current

    if (!container) {
      return
    }

    const handlePointerEnter = () => {
      isPausedRef.current = true
    }

    const handlePointerLeave = () => {
      isPausedRef.current = false
    }

    container.addEventListener("mouseenter", handlePointerEnter)
    container.addEventListener("mouseleave", handlePointerLeave)
    container.addEventListener("focusin", handlePointerEnter)
    container.addEventListener("focusout", handlePointerLeave)

    return () => {
      container.removeEventListener("mouseenter", handlePointerEnter)
      container.removeEventListener("mouseleave", handlePointerLeave)
      container.removeEventListener("focusin", handlePointerEnter)
      container.removeEventListener("focusout", handlePointerLeave)
    }
  }, [])

  useEffect(() => {
    if (sortedArticles.length <= 1) {
      return
    }

    const container = containerRef.current

    if (!container) {
      return
    }

    let animationFrame = 0
    let previousTime = performance.now()

    const updateActiveIndex = () => {
      const loopWidth = container.scrollWidth / 2
      const normalizedLeft = container.scrollLeft % loopWidth
      const itemWidth = loopWidth / sortedArticles.length
      const nextActiveIndex = Math.round(normalizedLeft / itemWidth) % sortedArticles.length

      setActiveIndex((prev) => (prev === nextActiveIndex ? prev : nextActiveIndex))
    }

    const animate = (currentTime: number) => {
      const deltaSeconds = (currentTime - previousTime) / 1000
      previousTime = currentTime

      if (!isPausedRef.current) {
        container.scrollLeft += AUTO_SCROLL_SPEED * deltaSeconds

        const loopWidth = container.scrollWidth / 2
        if (container.scrollLeft >= loopWidth) {
          container.scrollLeft -= loopWidth
        }

        updateActiveIndex()
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
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
            {displayArticles.map((article, index) => {
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
