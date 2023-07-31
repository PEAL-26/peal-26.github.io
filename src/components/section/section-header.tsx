import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends HTMLAttributes<HTMLElement> {
  title: string
  description?: string
}

export default function SectionHeader({ title, description, ...rest }: Props) {
  return (
    <h2
      {...rest}
      className={twMerge(
        'section-header mb-6 flex flex-col text-xl font-bold leading-normal',
        rest.className,
      )}
    >
      {title}
      {description && <span className="-mt-1 max-w-md text-[12px] font-light">{description}</span>}
    </h2>
  )
}
