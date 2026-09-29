import { createElement, type ReactNode } from 'react'
import { useReveal } from '../lib/useReveal'

/**
 * Reveal-on-scroll wrapper. Applies the .reveal class and toggles
 * .in-view when the element enters the viewport.
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
}) {
  const { ref, inView } = useReveal<HTMLDivElement>()
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined
  const classNameFinal = `reveal ${inView ? 'in-view' : ''} ${className}`.trim()

  return createElement(as, { ref, style, className: classNameFinal }, children)
}
