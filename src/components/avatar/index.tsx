'use client'

import Image from 'next/image'
import Tippy from '@tippyjs/react'

import Logout from '../admin/logout'

interface Props {
  name: string
  src: string
}

export default function Avatar({ name, src }: Props) {
  return (
    <Tippy
      content={
        <div className="flex flex-col items-center justify-center rounded-md border border-white/20 bg-black px-2 py-4 shadow">
          <Image
            height={56}
            width={56}
            className="mb-1 h-14 w-14 rounded-full"
            src={src}
            alt={name}
          />

          <div className="flex flex-col text-center font-medium">
            <span className="mb-2 font-bold">{name}</span>
            <Logout />
          </div>
        </div>
      }
      allowHTML
      interactive
      duration={0}
      animation="perspective-subtle"
      trigger="click"
      placement="bottom-end"
    >
      <Image
        height={40}
        width={40}
        className="h-10 w-10 cursor-pointer rounded-full"
        src={src}
        alt={name}
      />
    </Tippy>
  )
}
