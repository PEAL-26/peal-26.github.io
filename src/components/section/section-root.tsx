import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
}

export default function SectionRoot({ children, ...rest }: Props) {
  return (
    <section {...rest} className={twMerge('p-6 bg-black rounded-md ', rest.className)}>
      {children}
    </section>
  )
}
