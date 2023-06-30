import { ReactNode } from 'react'

import NavigationBack from '../navigation-back'
import ButtonFeedback from '../button-feedback'

interface Props {
  title: string | ReactNode
  backButton?: boolean
  children?: ReactNode
  className?: string
}

export default function Header({
  title,
  backButton,
  className = 'justify-between',
  children,
}: Props) {
  return (
    <div className={`flex w-full items-center rounded-md bg-black p-4 ${className}`}>
      <div className="flex items-center gap-3">
        <NavigationBack backButton={backButton} />
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="flex gap-2">
        {children}
        <ButtonFeedback />
      </div>
    </div>
  )
}
