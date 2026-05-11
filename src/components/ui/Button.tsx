import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: Variant
  className?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-brown-800 text-cream-50 shadow-soft hover:bg-brown-700 focus-visible:ring-olive-500',
  secondary:
    'bg-cream-100 text-brown-800 ring-1 ring-brown-800/10 hover:bg-cream-200 focus-visible:ring-olive-500',
  ghost:
    'bg-transparent text-brown-800 hover:bg-cream-100 focus-visible:ring-olive-500',
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
