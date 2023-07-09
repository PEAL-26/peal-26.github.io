'use client'

import { HTMLAttributes, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends HTMLAttributes<HTMLElement> {
  // children?: Element
  tabs: string[]
}

const randomIds = (length: number) => {
  let ids: string[] = []

  for (let index = 1; index <= length; index++) {
    ids.push(self.crypto.randomUUID())
  }

  return ids
}

const TAB_BAR_STATE = {
  active: {
    bar: 'border-b-[1px] border-primary cursor-pointer transition-all ',
    tab: 'font-bold text-primary px-1 transition-all cursor-pointer',
  },
  inactive: {
    bar: 'group cursor-pointer  border-b-none hover:border-b-[1px] hover:border-primary',
    tab: 'text-md font-bold px-1 transition-all group-hover:text-primary ',
  },
}

export default function SectionTabBar({ tabs, children, ...rest }: Props) {
  const [tabActual, setTabActual] = useState(0)
  const [tabIds, setTabIds] = useState<string[]>([])

  useEffect(() => {
    setTabIds(randomIds(tabs.length))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div {...rest} className={twMerge('section-tab-bar', rest.className)}>
      <ul className="mb-4 flex gap-3">
        {tabs.map((tab, i) => (
          <li
            key={i}
            onClick={() => setTabActual(i)}
            className={`${TAB_BAR_STATE[i === tabActual ? 'active' : 'inactive'].bar}`}
          >
            <a
              href={`#tab-${tabIds[i]}`}
              onClick={(e) => e.preventDefault()}
              className={`${TAB_BAR_STATE[i === tabActual ? 'active' : 'inactive'].tab}`}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>

      {Array.isArray(children)
        ? children?.map((child, index) => (
            <div
              key={index}
              id={`#tab-${tabIds[index]}`}
              className={`${
                index !== tabActual ? 'hidden ' : ''
              }w-full section-tab-bar-content relative flex h-full flex-1`}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
