import { HTMLProps, ReactNode } from 'react'

interface ModalHeaderProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode
}

export function ModalHeader(props: ModalHeaderProps) {
  const { children, ...rest } = props
  return <div {...rest}>{children}</div>
}
