'use client'

import Image from 'next/image'

import Logout from '../logout'

interface Props {
  name: string
  src: string
}

export default function Avatar({ name, src }: Props) {
  return (
    <div className="flex items-center space-x-4">
      <Image height={40} width={40} className="h-10 w-10 rounded-full" src={src} alt="" />
      <div className="font-medium hidden sm:block">
        <div>{name}</div>
        <Logout />
      </div>
    </div>
  )
}
