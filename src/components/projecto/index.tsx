import Link from 'next/link'
import Image from 'next/image'
import { BsArrowRightShort } from 'react-icons/bs'

import { ProjectoProps } from '@/@types/projecto-type'

interface Props {
  data: ProjectoProps
}

export default function Projecto({ data }: Props) {
  return (
    <div className="group flex h-[400px] w-full cursor-pointer flex-col justify-between rounded-md bg-black p-8 transition-all hover:scale-105">
      <div>
        <Image
          src={data.imagem ?? ''}
          alt="user"
          width={100}
          height={100}
          className="mb-4 rounded-full border-4 border-gray object-cover"
        />

        <h3 className="mb-1 text-lg font-bold text-white">{data.name}</h3>
        <p className="mb-4 line-clamp-6 font-normal text-white/75">{data.description}</p>
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
