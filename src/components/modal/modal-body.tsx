import { HTMLProps, ReactNode } from 'react'

interface ModalBodyProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode
}

export function ModalBody(props: ModalBodyProps) {
  const { children, ...rest } = props
  return <div {...rest}>{children}</div>
}
