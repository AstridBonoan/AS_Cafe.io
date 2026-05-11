import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: Props) {
  return (
    <div
      className={`rounded-3xl bg-white/80 p-6 shadow-soft ring-1 ring-brown-800/5 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  )
}
