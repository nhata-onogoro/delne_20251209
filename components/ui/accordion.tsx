'use client'

import * as React from 'react'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

type AccordionValue = string | string[]

type AccordionContextValue = {
  type: 'single' | 'multiple'
  openItems: string[]
  toggleItem: (value: string) => void
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null)

type AccordionProps = {
  type?: 'single' | 'multiple'
  defaultValue?: AccordionValue
  value?: AccordionValue
  onValueChange?: (value: AccordionValue) => void
  collapsible?: boolean
} & React.ComponentProps<'div'>

function Accordion({
  children,
  type = 'single',
  defaultValue,
  value,
  onValueChange,
  collapsible = true,
  className,
  ...props
}: AccordionProps) {
  const [internal, setInternal] = React.useState<string[]>(() => {
    if (Array.isArray(defaultValue)) return defaultValue
    if (typeof defaultValue === 'string') return [defaultValue]
    return []
  })

  const isControlled = value !== undefined
  const openItems = React.useMemo(() => {
    if (!isControlled) return internal
    if (Array.isArray(value)) return value
    if (typeof value === 'string') return [value]
    return []
  }, [internal, isControlled, value])

  const setOpenItems = React.useCallback(
    (next: string[]) => {
      if (!isControlled) setInternal(next)
      if (type === 'single') {
        onValueChange?.(next[0] ?? (collapsible ? '' : undefined))
      } else {
        onValueChange?.(next)
      }
    },
    [collapsible, isControlled, onValueChange, type],
  )

  const toggleItem = React.useCallback(
    (item: string) => {
      if (type === 'single') {
        const isOpen = openItems.includes(item)
        if (isOpen && !collapsible) return
        setOpenItems(isOpen ? [] : [item])
        return
      }

      const next = openItems.includes(item)
        ? openItems.filter((entry) => entry !== item)
        : [...openItems, item]
      setOpenItems(next)
    },
    [collapsible, openItems, setOpenItems, type],
  )

  return (
    <AccordionContext.Provider value={{ type, openItems, toggleItem }}>
      <div
        data-slot="accordion"
        className={cn('divide-y', className)}
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

function useAccordionContext() {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion components must be used within <Accordion>.')
  }
  return context
}

type AccordionItemProps = React.ComponentProps<'div'> & { value: string }

function AccordionItem({ className, value, ...props }: AccordionItemProps) {
  return (
    <div
      data-slot="accordion-item"
      data-value={value}
      className={cn('border-b last:border-b-0', className)}
      {...props}
    />
  )
}

type AccordionTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string
}

function AccordionTrigger({ className, children, value, ...props }: AccordionTriggerProps) {
  const { openItems, toggleItem } = useAccordionContext()
  const open = openItems.includes(value)

  return (
    <div className="flex">
      <button
        type="button"
        data-slot="accordion-trigger"
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50',
          open && ' [&_svg]:rotate-180',
          className,
        )}
        onClick={() => toggleItem(value)}
        aria-expanded={open}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </button>
    </div>
  )
}

type AccordionContentProps = React.ComponentProps<'div'> & { value: string }

function AccordionContent({ className, children, value, ...props }: AccordionContentProps) {
  const { openItems } = useAccordionContext()
  const open = openItems.includes(value)

  if (!open) return null

  return (
    <div
      data-slot="accordion-content"
      className={cn('overflow-hidden text-sm', className)}
      {...props}
    >
      <div className="pt-0 pb-4">{children}</div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
