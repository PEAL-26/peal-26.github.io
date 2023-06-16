import Link from 'next/link'
import { BsArrowRightShort } from 'react-icons/bs'

type Data = {
  id: string
  title: string
  resume: string
  date: Date
  file: string
}

interface Props {
  data?: Data[]
}

export default function Timeline({ data }: Props) {
  return (
    <ol className="relative border-l border-gray-200">
      <li className="mb-10 ml-4">
        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray"></div>
        <time className="mb-1  text-sm font-normal leading-none text-neutral-500">February 2022</time>
        <h3 className="text-lg font-bold text-white ">Application UI code in Tailwind CSS</h3>
        <p className="mb-4 text-base font-normal text-white/75">
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
          E-commerce & Marketing pages.
        </p>
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white focus:z-10  focus:outline-none "
        >
          Saber mais <BsArrowRightShort size={20} />
        </Link>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200"></div>
        <time className="mb-1  text-sm font-normal leading-none text-neutral-500">March 2022</time>
        <h3 className="text-lg font-bold text-white ">Marketing UI design in Figma</h3>
        <p className="mb-4 text-base  font-normal text-white/75">
          All of the pages and components are first designed in Figma and we keep a parity between the two versions even
          as we update the project.
        </p>
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white focus:z-10  focus:outline-none "
        >
          Saber mais <BsArrowRightShort size={20} />
        </Link>
      </li>
      <li className="ml-4">
        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200"></div>
        <time className="mb-1  text-sm font-normal leading-none text-neutral-500">April 2022</time>
        <h3 className="text-lg font-bold text-white ">E-Commerce UI code in Tailwind CSS</h3>
        <p className="mb-4 text-base  font-normal text-white/75">
          Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
        </p>
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white focus:z-10  focus:outline-none "
        >
          Saber mais <BsArrowRightShort size={20} />
        </Link>
      </li>
    </ol>
  )
}
