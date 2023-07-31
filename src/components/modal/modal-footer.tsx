import { HTMLProps, ReactNode } from 'react'

interface ModalFooterProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode
}

export function ModalFooter(props: ModalFooterProps) {
  const { children, ...rest } = props
  return <div {...rest}>{children}</div>
}
