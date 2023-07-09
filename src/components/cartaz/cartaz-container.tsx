import { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export default function CartazContainer({ children, ...rest }: Props) {
  return (
    <div {...rest} className="flex gap-3 w-full ">
      {children}
    </div>
  )
}
