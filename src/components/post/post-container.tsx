'use client'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

interface PostContainerProps {
  children: ReactNode
  url: string
}

export function PostContainer(props: PostContainerProps) {
  const { children, url } = props
  const route = useRouter()

  const handleGoTo = () => {
    route.push(url)
  }

  return (
    <div
      onClick={handleGoTo}
      className="group flex w-full cursor-pointer flex-col justify-between gap-4 rounded-md bg-black p-8 transition-all hover:scale-105"
    >
      {children}
    </div>
  )
}
