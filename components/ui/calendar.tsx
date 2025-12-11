'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

type CalendarProps = React.InputHTMLAttributes<HTMLInputElement>

function Calendar({ className, ...props }: CalendarProps) {
  return (
    <input
      type="date"
      data-slot="calendar"
      className={cn(
        'bg-background border border-input rounded-md px-3 py-2 text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
        className,
      )}
      {...props}
    />
  )
}

export { Calendar }
