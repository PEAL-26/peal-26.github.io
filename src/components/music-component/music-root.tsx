import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  visible?: boolean
}

export default function MusicRoot(props: Props) {
  const { children, visible } = props

  return <div className="w-full flex-1 max-md:grid">{children}</div>
}
