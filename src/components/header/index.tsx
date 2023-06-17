import Link from 'next/link'
import { ReactNode } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'

interface Props {
  title: string | ReactNode
  urlBtnBack?: string
  children?: ReactNode
  className?: string
}

export default function Header({ title, urlBtnBack, className, children }: Props) {
  return (
    <div className={`flex w-full items-center rounded-md bg-black p-4 ${className}`}>
      <div className="flex items-center gap-3">
        {urlBtnBack && (
          <Link
            href={urlBtnBack}
            className="inline-flex items-center rounded-full border border-neutral-500 text-neutral-500 hover:border-neutral-400 hover:text-neutral-400 focus:outline-none "
          >
            <BsArrowLeftShort size={32} />
          </Link>
        )}
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      {children}
    </div>
  )
}
