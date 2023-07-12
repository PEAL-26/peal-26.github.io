import { useEffect, useState } from 'react'

import ImageLoadingSkeleton from '../image-loading-skeleton'
import Image from 'next/image'

export type LivroItemType = {
  title: string
  author: string
  resume?: string
  image?: string
  alt?: string
  state: 'lido' | 'lendo' | 'interesse'
}

interface Props {
  data: LivroItemType
}

export default function LivroItem(props: Props) {
  const { data } = props

  const colorState = {
    lendo: 'text-orange-600',
    lido: 'text-primary',
    interesse: 'text-red-500',
  }[data.state]

  const [isLoadingImage, setIsLoadingImage] = useState(true)

  useEffect(() => {
    setIsLoadingImage(false)
  }, [])

  return (
    <div className="flex gap-3 w-full ">
      <div className="relative w-40 h-full cursor-pointer rounded-md border border-white/20 lg:w-40">
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
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col ">
          <span className="text-xl font-bold leading-normal">{data.title}</span>
          <span className="mt-1 text-sm font-normal leading-normal">{data.author}</span>
          <span className="line-clamp-3 mt-6 w-full text-base font-light leading-normal">{data.resume}</span>
        </div>
        <span className={`mt-8 text-sm font-normal uppercase leading-normal ${colorState}`}>
          {data.state}
        </span>
      </div>
    </div>
  )
}
