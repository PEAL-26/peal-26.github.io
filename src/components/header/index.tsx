import Link from 'next/link'
import { BsArrowLeftShort } from 'react-icons/bs'

interface Props {
  title: string
  urlBtnBack?: string
}

export default function Header({ title, urlBtnBack }: Props) {
  return (
    <div className="flex w-full items-center gap-3 rounded-md bg-black p-4">
      {urlBtnBack && (
        <Link
          href={urlBtnBack}
          className="inline-flex items-center rounded-full border border-neutral-500 text-neutral-500 hover:border-neutral-400 hover:text-neutral-400 focus:outline-none "
        >
          <BsArrowLeftShort size={32} />
        </Link>
      )}
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  )
}
