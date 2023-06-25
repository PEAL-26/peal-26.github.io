import Link from 'next/link'
import { MouseEvent, RefObject, useEffect, useState } from 'react'

import useMediaQuery from '@/hooks/use-media-query'

type MenuProps = {
  id: string
  titulo: string
}

type ClassNameLinkProps = {
  active: string
  inactive: string
}

interface Props {
  menus: MenuProps[]
  current: number
  sectionRefs: RefObject<HTMLDivElement>[]
  isSticked?: boolean
}

export default function ScrollspyMenu({ menus, current, sectionRefs, isSticked }: Props) {
  const isMobile = useMediaQuery('(max-width: 767px)')

  const [classNameLink, setClassNameLink] = useState<ClassNameLinkProps>({} as ClassNameLinkProps)
  const [containerMenu, setContainerMenu] = useState('')
  const [visibleMenu, setVisibleMenu] = useState('')

  function handleAnchorClick(event: MouseEvent, elementIndex: number) {
    event.preventDefault()

    const targetElement = sectionRefs[elementIndex].current

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const classNameLinkObj = {
      mobile: {
        active: 'block text-white text-center text-base',
        inactive: 'hidden',
      },
      other: {
        active: 'text-primary underline underline-offset-4',
        inactive: 'hover:text-primary hover:underline hover:underline-offset-4',
      },
    }

    const classNameContainer = {
      mobile: 'fixed top-0 left-0 w-full transition-all',
      other: 'rounded-md min-h-screen sticky top-0 w-full self-start w-[30%] lg:w-[20%]',
    }

    const classNameHeaderTitle = {
      show: 'top-0 translate-y-0',
      hide: '-top-[290px] -translate-y-[290px]',
    }

    setClassNameLink(classNameLinkObj[isMobile ? 'mobile' : 'other'])
    setContainerMenu(classNameContainer[isMobile ? 'mobile' : 'other'])
    setVisibleMenu(isMobile ? classNameHeaderTitle[isSticked ? 'show' : 'hide'] : '')
  }, [isMobile, isSticked])

  return (
    <div className={`bg-black p-3 ${containerMenu} ${visibleMenu} `}>
      <ul className="flex flex-col gap-3 text-white">
        {menus.map(({ id, titulo }, index) => (
          <li
            key={index}
            className={`leading-0 text-sm transition-all ${
              current === index ? '' : 'max-sm:hidden'
            }`}
          >
            <Link
              href={`#capitulo-${id}`}
              className={`leading-0 text-sm transition-all ${
                classNameLink[current === index ? 'active' : 'inactive']
              }`}
              onClick={(e) => handleAnchorClick(e, index)}
            >
              {titulo}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
