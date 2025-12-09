'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

export type ChartConfig = {
  [k in string]: { label?: React.ReactNode; icon?: React.ComponentType }
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />')
  }
  return context
}

function ChartContainer({
  className,
  children,
  config,
  ...props
}: React.ComponentProps<'div'> & { config: ChartConfig }) {
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        className={cn('flex flex-col gap-4', className)}
        {...props}
      >
        {children}
      </div>
    </ChartContext.Provider>
  )
}

const ChartTooltip = ({ children }: { children?: React.ReactNode }) => (
  <div data-slot="chart-tooltip" className="text-sm">
    {children}
  </div>
)

function ChartTooltipContent({ children }: { children?: React.ReactNode }) {
  return (
    <div
      data-slot="chart-tooltip-content"
      className="rounded-md border bg-background p-3 shadow"
    >
      {children}
    </div>
  )
}

function ChartLegend({ children, className }: React.ComponentProps<'div'>) {
  useChart()
  return (
    <div data-slot="chart-legend" className={cn('flex flex-wrap gap-2', className)}>
      {children}
    </div>
  )
}

function ChartLegendContent({ children }: { children?: React.ReactNode }) {
  return (
    <div
      data-slot="chart-legend-content"
      className="flex flex-wrap items-center gap-2 text-sm"
    >
      {children}
    </div>
  )
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
}
