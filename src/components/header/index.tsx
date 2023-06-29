import { ReactNode } from 'react'
import NavigationBack from '../navigation-back'

interface Props {
  title: string | ReactNode
  backButton?: boolean
  children?: ReactNode
  className?: string
}

export default function Header({ title, backButton, className, children }: Props) {
  return (
    <div className={`flex w-full items-center rounded-md bg-black p-4 ${className}`}>
      <div className="flex items-center gap-3">
        <NavigationBack backButton={backButton} />
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      {children}
    </div>
  )
}
