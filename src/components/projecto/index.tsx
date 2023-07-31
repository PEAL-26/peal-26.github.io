import Link from 'next/link'
import Image from 'next/image'
import { BsArrowRightShort } from 'react-icons/bs'

import { ProjectProps } from '@/@types/project-type'

interface Props {
  data: ProjectProps
}

export default function Projecto({ data }: Props) {
  return (
    <div className="group flex h-[400px] w-full cursor-pointer flex-col justify-between rounded-md bg-black p-8 transition-all hover:scale-105">
      <div className="flex flex-col justify-start gap-2">
        <div className="relative h-28 w-28 rounded-full border-4 border-gray ">
          {data.image && (
            <Image src={data.image} alt={data.name} fill className="rounded-full object-cover" />
          )}
        </div>

        <div>
          <h3 className="mb-1 text-lg font-bold text-white">{data.name}</h3>
          <p className="mb-4 line-clamp-6 font-normal text-white/75">{data.description}</p>
        </div>
      </div>

      <Link
        href="#"
        className="inline-flex items-center gap-2 text-sm font-medium text-white transition-all focus:z-10  focus:outline-none group-hover:text-primary "
      >
        Saber mais <BsArrowRightShort size={20} />
      </Link>
    </div>
  )
}
