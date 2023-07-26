'use client'

import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type ChildrenProps = {
  tabActual: number
  // ({ tabActual }) => JSX.Element
}

interface Children {
  ({ tabActual }: ChildrenProps): JSX.Element
}

interface Props extends HTMLAttributes<HTMLElement> {
  tabs: string[]
  classContent?: string
  onChangeTab?(actual: number): void
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

export default function SectionTabBar(props: Props) {
  const { tabs, classContent, children, onChangeTab, ...rest } = props

  const [tabActual, setTabActual] = useState(0)
  const [tabIds, setTabIds] = useState<string[]>([])

  useEffect(() => {
    setTabIds(randomIds(tabs.length))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    onChangeTab && onChangeTab(tabActual)
  }, [onChangeTab, tabActual])

  return (
    <div
      {...rest}
      className={twMerge('section-tab-bar', rest.className)}
      data-tab-actual={tabActual}
    >
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
      {/* {children && children({ tabActual })} */}
      {Array.isArray(children)
        ? children?.map((child, index) => (
            <div
              key={index}
              id={`#tab-${tabIds[index]}`}
              className={`section-tab-bar-content ${index !== tabActual ? 'hidden ' : ''} ${twMerge(
                'flex h-full w-full flex-1',
                classContent,
              )}`}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
