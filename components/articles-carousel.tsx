"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { articles, getArticleImageUrl } from "@/lib/articles"

export function ArticlesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([])

  const sortedArticles = useMemo(
    () =>
      [...articles].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      ),
    [],
  )

  const articleCount = sortedArticles.length

  const getCenteredScrollLeft = (container: HTMLDivElement, card: HTMLAnchorElement) =>
    card.offsetLeft - (container.clientWidth - card.clientWidth) / 2

  const getScrollLeftForCard = (container: HTMLDivElement, card: HTMLAnchorElement) =>
    isDesktop ? card.offsetLeft : getCenteredScrollLeft(container, card)

  const scrollToIndex = (index: number) => {
    const container = containerRef.current

    if (articleCount === 0 || !container) {
      return
    }

    const safeIndex = Math.min(Math.max(index, 0), articleCount - 1)
    const targetCard = cardRefs.current[safeIndex]

    if (!targetCard) {
      return
    }

    container.scrollTo({
      left: getScrollLeftForCard(container, targetCard),
      behavior: "smooth",
    })

    setActiveIndex(safeIndex)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)")
    const updateDesktopState = (event?: MediaQueryListEvent) => {
      setIsDesktop(event ? event.matches : mediaQuery.matches)
    }

    updateDesktopState()
    mediaQuery.addEventListener("change", updateDesktopState)

    return () => {
      mediaQuery.removeEventListener("change", updateDesktopState)
    }
  }, [])

  useEffect(() => {
    const container = containerRef.current

    if (!container || sortedArticles.length === 0) {
      return
    }

    const frame = window.requestAnimationFrame(() => {
      const firstCard = cardRefs.current[0]
      if (!firstCard) {
        return
      }
      container.scrollLeft = getScrollLeftForCard(container, firstCard)
      setActiveIndex(0)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [sortedArticles.length, isDesktop])

  useEffect(() => {
    const container = containerRef.current

    if (!container || sortedArticles.length === 0) {
      return
    }

    const handleScroll = () => {
      const epsilon = 2
      const firstCard = cardRefs.current[0]
      const lastCard = cardRefs.current[sortedArticles.length - 1]

      if (firstCard && lastCard) {
        const firstCardScrollLeft = getScrollLeftForCard(container, firstCard)
        const lastCardScrollLeft = getScrollLeftForCard(container, lastCard)

        setCanScrollPrev(container.scrollLeft > firstCardScrollLeft + epsilon)
        setCanScrollNext(container.scrollLeft < lastCardScrollLeft - epsilon)
      }

      let nearestIndex = 0
      let nearestDistance = Number.POSITIVE_INFINITY

      const containerRect = container.getBoundingClientRect()
      const containerCenter = containerRect.left + containerRect.width / 2

      cardRefs.current.slice(0, sortedArticles.length).forEach((card, displayIndex) => {
        if (!card) {
          return
        }

        const distance = isDesktop
          ? Math.abs(card.offsetLeft - container.scrollLeft)
          : Math.abs(card.getBoundingClientRect().left + card.getBoundingClientRect().width / 2 - containerCenter)
        if (distance < nearestDistance) {
          nearestDistance = distance
          nearestIndex = displayIndex
        }
      })

      setActiveIndex((prev) => (prev === nearestIndex ? prev : nearestIndex))
    }

    container.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      container.removeEventListener("scroll", handleScroll)
    }
  }, [sortedArticles.length, isDesktop])

  return (
    <section id="articles" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002c5b]">関連記事</h2>
          <p className="mt-3 text-gray-600">
            外部掲載情報と、ランディングページ内で読める記事をまとめています。
          </p>
        </div>

        <div className="relative mt-10">
          {canScrollPrev && (
            <button
              type="button"
              aria-label="前の記事へ"
              onClick={() => scrollToIndex(activeIndex - 1)}
              className="absolute left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#002c5b] bg-[#002c5b] text-white shadow-md transition hover:bg-[#014182] md:left-3"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          <div
            ref={containerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-[max(1rem,calc((100vw-280px)/2))] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-0"
          >
            {sortedArticles.map((article, index) => {
              const imageUrl = getArticleImageUrl(article)
              const articleHref = article.externalUrl ?? `/articles/${article.slug}`

              return (
                <Link
                  key={`${article.slug}-${index}`}
                  href={articleHref}
                  ref={(el) => {
                    cardRefs.current[index] = el
                  }}
                  className="w-[280px] shrink-0 snap-center rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:w-[320px]"
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

          {canScrollNext && (
            <button
              type="button"
              aria-label="次の記事へ"
              onClick={() => scrollToIndex(activeIndex + 1)}
              className="absolute right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#002c5b] bg-[#002c5b] text-white shadow-md transition hover:bg-[#014182] md:right-3"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
