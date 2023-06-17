import Link from 'next/link'
import { BsArrowRightShort } from 'react-icons/bs'

import { PostsProps } from '@/@types/posts-type'

interface Props {
  data: PostsProps
  primeiro?: boolean
  ultimo?: boolean
}

export default function Timeline({ data, primeiro, ultimo }: Props) {
  return (
    <li className={`ml-4 ${primeiro ? '' : 'mb-10'}`}>
      <div
        className={`${
          ultimo ? 'bg-gray' : 'bg-gray-200'
        } absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white`}
      ></div>
      {/* February 2022 */}
      <time className="mb-1  text-sm font-normal leading-none text-neutral-500">
        {data.date?.toDateString() ?? ''}
      </time>
      <h3 className="text-lg font-bold text-white ">{data.title}</h3>
      <p className="mb-4 text-base font-normal text-white/75">{data.resume}</p>
      <Link
        href={`/posts/${data.slug}`}
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white focus:z-10  focus:outline-none "
      >
        Saber mais <BsArrowRightShort size={20} />
      </Link>
    </li>
  )
}
