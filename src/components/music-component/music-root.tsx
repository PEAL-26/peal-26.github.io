import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}
export default function MusicRoot(props: Props) {
  const { children } = props

  return <div className="grid grid-cols-5 gap-5">{children}</div>
}
