import { HTMLAttributes, ReactNode, useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
}

export default function SectionRoot({ children, ...rest }: Props) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // const sectionPadding = 48
    const sectionElement = sectionRef.current
    const sectionHeaderElement = sectionElement.querySelector<HTMLElement>('.section-header')
    const sectionTabBarElement = sectionElement.querySelector<HTMLElement>('.section-tab-bar')
    const contentElement = sectionElement.querySelector<HTMLElement>('.section-content')

    const sectionElementStyles = window.getComputedStyle(sectionElement)
    const sectionHeaderElementStyles =
      sectionHeaderElement && window.getComputedStyle(sectionHeaderElement)
    const sectionTabBarElementStyles =
      sectionTabBarElement && window.getComputedStyle(sectionTabBarElement)
    const contentElementStyles = contentElement && window.getComputedStyle(contentElement)

    const heightHeader = sectionHeaderElement?.scrollHeight || 0
    const heightTabBar = sectionTabBarElement?.scrollHeight || 0
    const heightContent = contentElement?.scrollHeight || 0

    const marginHeaderBottom = parseFloat(sectionHeaderElementStyles?.marginBottom || '0')
    const marginTabBarBottom = parseFloat(sectionTabBarElementStyles?.marginBottom || '0')
    const marginContentBottom = parseFloat(contentElementStyles?.marginBottom || '0')

    const marginHeaderTop = parseFloat(sectionHeaderElementStyles?.marginTop || '0')
    const marginTabBarTop = parseFloat(sectionTabBarElementStyles?.marginTop || '0')
    const marginContentTop = parseFloat(contentElementStyles?.marginTop || '0')

    const paddingSectionBottom = parseFloat(sectionElementStyles?.paddingBottom || '0')
    // const paddingHeaderBottom = parseFloat(sectionHeaderElementStyles?.paddingBottom || '0')
    // const paddingTabBarBottom = parseFloat(sectionTabBarElementStyles?.paddingBottom || '0')
    // const paddingContentBottom = parseFloat(contentElementStyles?.paddingBottom || '0')

    const paddingSectionTop = parseFloat(sectionElementStyles?.paddingTop || '0')
    // const paddingHeaderTop = parseFloat(sectionHeaderElementStyles?.paddingTop || '0')
    // const paddingTabBarTop = parseFloat(sectionTabBarElementStyles?.paddingTop || '0')
    // const paddingContentTop = parseFloat(contentElementStyles?.paddingTop || '0')

    const heightTotal = heightHeader + heightTabBar + heightContent

    const marginTotal =
      marginHeaderBottom +
      marginTabBarBottom +
      marginContentBottom +
      marginHeaderTop +
      marginTabBarTop +
      marginContentTop

    const paddingTotal = paddingSectionTop + paddingSectionBottom
    // paddingHeaderBottom +
    // paddingTabBarBottom +
    // paddingContentBottom +
    // paddingHeaderTop +
    // paddingTabBarTop +
    // paddingContentTop

    const total = heightTotal + marginTotal + paddingTotal

    sectionElement.style.height = `${total}px`
  }, [])

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
