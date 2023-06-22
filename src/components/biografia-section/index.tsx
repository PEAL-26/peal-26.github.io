import { HTMLProps, ReactNode, ReactPropTypes } from 'react'

interface Props extends HTMLProps<HTMLElement> {
  children: ReactNode
}

export default function BiografiaSection({ children, ...rest }: Props) {
  return <section {...rest}>{children}</section>
}
