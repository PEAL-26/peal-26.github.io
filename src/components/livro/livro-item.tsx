import { useEffect, useState } from 'react'

import ImageLoadingSkeleton from '../image-loading-skeleton'
import Image from 'next/image'
import { TippyCustom } from '@/libs/tippy-custom'

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
    <div className="flex w-full items-center gap-3 transition-all max-md:flex-col">
      <TippyCustom title={data.title} description={data.resume}>
        <div className="relative h-64 w-40 cursor-pointer rounded-md border border-white/20 max-md:h-80 max-md:w-56">
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
      </TippyCustom>
      <div className="flex w-full flex-1 flex-col justify-between max-md:text-center">
        <div className="flex flex-col ">
          <span className="text-xl font-bold leading-normal">{data.title}</span>
          <span className="mt-1 text-sm font-normal leading-normal">{data.author}</span>
          {/* <span className="mt-6 line-clamp-3 w-full text-base font-light leading-normal">
            {data.resume}
          </span> */}
        </div>
        <span
          className={`mt-8 text-sm font-normal uppercase leading-normal max-md:mt-0 ${colorState}`}
        >
          {data.state}
        </span>
      </div>
    </div>
  )
}
