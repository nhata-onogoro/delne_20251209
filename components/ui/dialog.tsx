'use client'

import * as React from 'react'
import { createPortal } from 'react-dom'
import { XIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

type DialogContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
}

const DialogContext = React.createContext<DialogContextValue | null>(null)

type DialogRootProps = React.PropsWithChildren<{
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}>

function Dialog({ open, defaultOpen, onOpenChange, children }: DialogRootProps) {
  const isControlled = open !== undefined
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(
    defaultOpen ?? false,
  )
  const currentOpen = isControlled ? open : uncontrolledOpen

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledOpen(next)
      onOpenChange?.(next)
    },
    [isControlled, onOpenChange],
  )

  return (
    <DialogContext.Provider value={{ open: !!currentOpen, setOpen }}>
      {children}
    </DialogContext.Provider>
  )
}

function useDialogContext(component: string) {
  const context = React.useContext(DialogContext)
  if (!context) {
    throw new Error(`${component} must be used within a <Dialog> component.`)
  }
  return context
}

type ButtonishProps<T extends HTMLElement> = React.ButtonHTMLAttributes<T> & {
  asChild?: boolean
}

const DialogTrigger = React.forwardRef<HTMLButtonElement, ButtonishProps<HTMLButtonElement>>(
  function DialogTrigger({ onClick, ...props }, ref) {
    const { setOpen } = useDialogContext('DialogTrigger')
    return (
      <button
        type="button"
        data-slot="dialog-trigger"
        ref={ref}
        onClick={(event) => {
          onClick?.(event)
          setOpen(true)
        }}
        {...props}
      />
    )
  },
)

function DialogPortal({ children }: React.PropsWithChildren) {
  const { open } = useDialogContext('DialogPortal')
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted || !open) return null
  return createPortal(
    <div data-slot="dialog-portal" className="dialog-portal">
      {children}
    </div>,
    document.body,
  )
}

const DialogClose = React.forwardRef<HTMLButtonElement, ButtonishProps<HTMLButtonElement>>(
  function DialogClose({ onClick, ...props }, ref) {
    const { setOpen } = useDialogContext('DialogClose')
    return (
      <button
        type="button"
        data-slot="dialog-close"
        ref={ref}
        onClick={(event) => {
          onClick?.(event)
          setOpen(false)
        }}
        {...props}
      />
    )
  },
)

function DialogOverlay({ className, ...props }: React.ComponentProps<'div'>) {
  const { open } = useDialogContext('DialogOverlay')
  if (!open) return null

  return (
    <div
      data-slot="dialog-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...props}
    />
  )
}

type DialogContentProps = React.ComponentProps<'div'> & {
  showCloseButton?: boolean
}

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  function DialogContent(
    { className, children, showCloseButton = true, ...props },
    ref,
  ) {
    const { open } = useDialogContext('DialogContent')
    if (!open) return null

    return (
      <DialogPortal>
        <DialogOverlay />
        <div
          ref={ref}
          data-slot="dialog-content"
          className={cn(
            'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
            className,
          )}
          {...props}
        >
          {children}
          {showCloseButton && (
            <DialogClose
              data-slot="dialog-close"
              className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            >
              <XIcon />
              <span className="sr-only">Close</span>
            </DialogClose>
          )}
        </div>
      </DialogPortal>
    )
  },
)

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    />
  )
}

function DialogTitle({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2
      data-slot="dialog-title"
      className={cn('text-lg leading-none font-semibold', className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

const DialogPrimitive = {
  Root: Dialog,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Close: DialogClose,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DialogPrimitive,
}
