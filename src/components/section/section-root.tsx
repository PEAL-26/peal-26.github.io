import { Children, HTMLAttributes, ReactNode, useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
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

// Função auxiliar para comparar os arrays de filhos
const areChildrenEqual = (children: ReactNode[], childrenCompare: ReactNode[]) => {
  if (children.length !== childrenCompare.length) {
    return false
  }

  for (let i = 0; i < children.length; i++) {
    if (children[i] !== childrenCompare[i]) {
      return false
    }
  }

  return true
}

export default function SectionRoot({ children, ...rest }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const previousChildrenRef = useRef<ReactNode[] | null>(null)

  useEffect(() => {
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
  }, [])

  useEffect(() => {
    const currentChildren = Children.toArray(children)
    const previousChildren = previousChildrenRef.current

    // Verifique se o conteúdo dos filhos mudou
    if (previousChildren && !areChildrenEqual(currentChildren, previousChildren)) {
      // O conteúdo dos filhos foi alterado!
      console.log('O conteúdo dos filhos foi alterado:', currentChildren)
      // Faça o que for necessário com o conteúdo modificado dos filhos
    }

    // Atualize a referência para o conteúdo dos filhos atual
    previousChildrenRef.current = currentChildren
  }, [children])

  return (
    <section
      ref={sectionRef}
      {...rest}
      className={twMerge('rounded-md bg-black p-6 ', rest.className)}
    >
      {children}
    </section>
  )
}
