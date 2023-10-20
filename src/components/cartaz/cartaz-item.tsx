import Image from 'next/image'
import { useEffect, useState } from 'react'

import { CartazItemType } from './types'
import ImageLoadingSkeleton from '../image-loading-skeleton'
import { TippyCustom } from '@/libs/tippy-custom'

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
    <div className="flex w-40 flex-col gap-3">
      <TippyCustom title={data.title} description={data.description}>
        <div className="relative h-56 w-full cursor-pointer rounded-md border border-white/20 lg:w-40">
          {isLoadingImage && !data.image && <ImageLoadingSkeleton />}
          {!isLoadingImage && data.image && (
            <Image
              src={data?.image || ''}
              alt={data.alt || data.title}
              fill
              className="h-full w-full rounded-md object-cover"
              loading="lazy"
            />
          )}
        </div>
      </TippyCustom>
      <div className="flex flex-col gap-1 text-center">
        <p className="line-clamp-2 text-lg font-bold">{data.title}</p>
        <span className={`text-[10px] font-normal uppercase ${colorState}`}>{data.state}</span>
      </div>
    </div>
  )
}
