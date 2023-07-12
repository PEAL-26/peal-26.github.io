import Image from 'next/image'
import Tippy from '@tippyjs/react'
import { followCursor } from 'tippy.js'
import { useEffect, useState } from 'react'

import { CartazItemType } from './types'
import ImageLoadingSkeleton from '../image-loading-skeleton'

interface CartazItemProps {
  data: CartazItemType
}

export default function CartazItem(props: CartazItemProps) {
  const { data } = props
  const colorState = data.state === 'assistindo' ? 'text-orange-600' : 'text-primary'

  const [isLoadingImage, setIsLoadingImage] = useState(true)

  useEffect(() => {
    setIsLoadingImage(false)
  }, [])

  return (
    <Tippy
      content={
        <div className="flex flex-col gap-3 rounded-md bg-black px-4 py-3 shadow-xl shadow-gray">
          <span className="text-lg font-bold">{data.title}</span>
          <span className="text-sm font-bold">{data.description}</span>
        </div>
      }
      allowHTML
      duration={[100, null]}
      animation="fade"
      trigger="click"
      followCursor="initial"
      plugins={[followCursor]}
    >
      <div className="flex w-40 flex-col gap-3 ">
        <div className="relative h-56 w-full cursor-pointer rounded-md border border-white/20 lg:w-40">
          {isLoadingImage && !data.image && <ImageLoadingSkeleton />}
          {!isLoadingImage && data.image && (
            <Image
              src={data?.image ?? ''}
              alt={data.alt ?? data.title}
              fill
              className="h-full w-full rounded-md object-cover"
              loading="lazy"
            />
          )}
        </div>
        <div className="flex flex-col gap-1 text-center">
          <p className="line-clamp-2 text-lg font-bold">{data.title}</p>
          <span className={`text-[10px] font-normal uppercase ${colorState}`}>{data.state}</span>
        </div>
      </div>
    </Tippy>
  )
}
