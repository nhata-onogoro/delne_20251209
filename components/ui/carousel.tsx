'use client'

import * as React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'

type CarouselContextValue = {
  containerRef: React.RefObject<HTMLDivElement | null>
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null)

function Carousel({ className, children, ...props }: React.ComponentProps<'div'>) {
  const containerRef = React.useRef<HTMLDivElement>(null)

  return (
    <CarouselContext.Provider value={{ containerRef }}>
      <div
        data-slot="carousel"
        className={cn('relative', className)}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error('Carousel components must be used within <Carousel>.')
  }
  return context
}

function CarouselContent({ className, children, ...props }: React.ComponentProps<'div'>) {
  const { containerRef } = useCarousel()
  return (
    <div
      ref={containerRef}
      data-slot="carousel-content"
      className={cn('flex gap-4 overflow-x-auto scroll-smooth', className)}
      {...props}
    >
      {children}
    </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="carousel-item"
      className={cn('min-w-[80%] sm:min-w-[50%] md:min-w-[33%] shrink-0', className)}
      {...props}
    />
  )
}

function CarouselPrevious({ className, ...props }: React.ComponentProps<'button'>) {
  const { containerRef } = useCarousel()
  return (
    <button
      type="button"
      data-slot="carousel-previous"
      className={cn(
        'absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow border hover:bg-background',
        className,
      )}
      onClick={() => {
        const node = containerRef.current
        if (node) node.scrollBy({ left: -node.clientWidth, behavior: 'smooth' })
      }}
      {...props}
    >
      <ArrowLeft className="size-4" />
      <span className="sr-only">Previous slide</span>
    </button>
  )
}

function CarouselNext({ className, ...props }: React.ComponentProps<'button'>) {
  const { containerRef } = useCarousel()
  return (
    <button
      type="button"
      data-slot="carousel-next"
      className={cn(
        'absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow border hover:bg-background',
        className,
      )}
      onClick={() => {
        const node = containerRef.current
        if (node) node.scrollBy({ left: node.clientWidth, behavior: 'smooth' })
      }}
      {...props}
    >
      <ArrowRight className="size-4" />
      <span className="sr-only">Next slide</span>
    </button>
  )
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
}
