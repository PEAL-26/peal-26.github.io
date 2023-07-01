import Link from 'next/link'
import { BsArrowRightShort } from 'react-icons/bs'

import { PostProps } from '@/@types/post-type'

interface Props {
  data: PostProps
}

export default function Post({ data }: Props) {
  const link = `/posts/artigo?s=${data.slug}`

  return (
    <Link
      href={link}
      className="group flex w-full cursor-pointer flex-col justify-between gap-4 rounded-md bg-black p-8 transition-all hover:scale-105"
    >
      <div>
        <time className="mb-1 text-xs font-normal leading-none text-neutral-500">
          {data.date?.toDateString() ?? ''}
        </time>
        <h3 className="mb-2 text-lg font-bold text-white">{data.title}</h3>
        <p className="mb-4 line-clamp-6 font-normal text-white/75">{data.resume}</p>
      </div>
      <Link
        href={link}
        className="inline-flex items-center gap-2 text-sm font-medium text-white transition-all focus:z-10  focus:outline-none group-hover:text-primary "
      >
        Ler artigo
        <BsArrowRightShort size={20} />
      </Link>
    </Link>
  )
}
