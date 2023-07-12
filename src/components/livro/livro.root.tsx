import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export default function LivroRoot(props: Props) {
  const { children } = props

  return <div className='grid grid-cols-2 gap-4'>{children}</div>
}
