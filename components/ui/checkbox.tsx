'use client'

import * as React from 'react'
import { CheckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>

function Checkbox({ className, checked, ...props }: CheckboxProps) {
  return (
    <label className="inline-flex items-center gap-2">
      <span className="sr-only">checkbox input</span>
      <input
        type="checkbox"
        data-slot="checkbox"
        className={cn(
          'peer border-input dark:bg-input/30 checked:bg-primary checked:text-primary-foreground dark:checked:bg-primary checked:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 appearance-none',
          className,
        )}
        checked={checked}
        {...props}
      />
      <span className="pointer-events-none absolute flex size-4 items-center justify-center text-current opacity-0 transition peer-checked:opacity-100">
        <CheckIcon className="size-3.5" />
      </span>
    </label>
  )
}

export { Checkbox }
