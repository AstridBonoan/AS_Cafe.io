import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: Props) {
  const alignCls = align === 'center' ? 'text-center mx-auto max-w-2xl' : ''

  return (
    <div className={`mb-10 space-y-3 ${alignCls}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl tracking-tight text-brown-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-prose text-base leading-relaxed text-brown-600">
          {description}
        </p>
      ) : null}
    </div>
  )
}
