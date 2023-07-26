import { ReactNode } from 'react'
import Tippy from '@tippyjs/react'
import { followCursor } from 'tippy.js'

interface Props {
  title: string
  description?: string
  children: ReactNode
}

export function TippyCustom(props: Props) {
  const { title, description, children } = props

  return (
    <Tippy
      content={
        <div className="flex flex-col gap-3 rounded-md bg-black px-4 py-3 shadow-xl shadow-gray">
          <span className="text-lg font-bold">{title}</span>
          <span className="text-sm font-bold">{description}</span>
        </div>
      }
      allowHTML
      duration={[100, null]}
      animation="fade"
      trigger="click"
      followCursor="initial"
      plugins={[followCursor]}
    >
      <div>{children}</div>
    </Tippy>
  )
}
