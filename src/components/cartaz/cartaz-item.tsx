import Image from 'next/image'
import { followCursor } from 'tippy.js'
import Tippy from '@tippyjs/react'

import { CartazItemType } from './types'

interface CartazItemProps {
  data: CartazItemType
}

export default function CartazItem(props: CartazItemProps) {
  const { data } = props
  const colorState = data.state === 'assistindo' ? 'text-orange-600' : 'text-primary'

  return (
    <Tippy
      content={
        <div className="flex flex-col gap-3 rounded-md bg-black px-4 py-3 shadow-xl shadow-gray">
          <span className="text-lg font-bold">{data.title}</span>
          <span className="text-sm font-bold">{data.description}</span>
        </div>
      }
      allowHTML
      interactive
      duration={[100, null]}
      animation="fade"
      trigger="click"
      followCursor="initial"
      plugins={[followCursor]}
    >
      <div className="flex w-40 flex-col gap-3 ">
        <div className="relative h-56 w-full cursor-pointer rounded-md border border-white/20 lg:w-40">
          <Image
            src={data?.image ?? ''}
            alt={data.alt ?? data.title}
            fill
            className="h-full w-full rounded-md object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-1 text-center">
          <p className="line-clamp-2 text-lg font-bold">{data.title}</p>
          <span className={`text-[10px] font-normal uppercase ${colorState}`}>{data.state}</span>
        </div>
      </div>
    </Tippy>
  )
}
