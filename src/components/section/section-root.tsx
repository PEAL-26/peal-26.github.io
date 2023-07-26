import { Children, HTMLAttributes, ReactNode, useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends HTMLAttributes<HTMLElement> {
  autoSize?: boolean
  children?: ReactNode
  tab?: number
}

const getHeight = (element: HTMLElement | null): number => {
  return element ? element.scrollHeight : 0
}

type orientationSpacing = 'top' | 'right' | 'bottom' | 'left' | 'horizontal' | 'vertical' | 'all'
type typeSpacing = 'padding' | 'margin'

const getSpacing = (
  styles: CSSStyleDeclaration | null,
  orientation: orientationSpacing,
  type: typeSpacing,
): number => {
  if (!styles) return 0

  const top = type === 'margin' ? parseFloat(styles.marginTop) : parseFloat(styles.paddingTop)
  const right = type === 'margin' ? parseFloat(styles.marginRight) : parseFloat(styles.paddingRight)
  const bottom =
    type === 'margin' ? parseFloat(styles.marginBottom) : parseFloat(styles.paddingBottom)
  const left = type === 'margin' ? parseFloat(styles.marginLeft) : parseFloat(styles.paddingLeft)

  const horizontal = left + right
  const vertical = top + bottom
  const all = horizontal + vertical

  const margin = {
    top,
    right,
    bottom,
    left,
    horizontal,
    vertical,
    all,
  }[orientation]

  return margin
}

const getTotal = (...numbers: number[]) => {
  let total = 0
  if (numbers.length === 1 && Array.isArray(numbers[0])) {
    numbers = numbers[0]
  }
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
  }
  return total
}

export default function SectionRoot(props: Props) {
  const { children, autoSize = false, tab = 0, ...rest } = props
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!autoSize) return
    if (!sectionRef.current) return

    const sectionElement = sectionRef.current
    const sectionHeaderElement = sectionElement.querySelector<HTMLElement>('.section-header')
    const contentElement = sectionElement.querySelector<HTMLElement>('.section-content')

    const sectionElementStyles = window.getComputedStyle(sectionElement)
    const sectionHeaderElementStyles =
      sectionHeaderElement && window.getComputedStyle(sectionHeaderElement)
    const contentElementStyles = contentElement && window.getComputedStyle(contentElement)

    const heightHeader = sectionHeaderElement?.scrollHeight || 0
    const heightContent = contentElement?.scrollHeight || 0

    const sectionPaddingSpacing = getSpacing(sectionElementStyles, 'vertical', 'padding')
    const headerMarginSpacing = getSpacing(sectionHeaderElementStyles, 'vertical', 'margin')
    const contentMarginSpacing = getSpacing(contentElementStyles, 'vertical', 'margin')

    const total = getTotal(
      heightHeader,
      heightContent,
      sectionPaddingSpacing,
      headerMarginSpacing,
      contentMarginSpacing,
    )

    sectionElement.style.height = `${total}px`

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section
      ref={sectionRef}
      className={twMerge('rounded-md bg-black p-6 ', rest.className)}
      {...rest}
    >
      {children}
    </section>
  )
}
