'use client'
import Loading from '@/components/loading'
import { ReactNode, useEffect, useState } from 'react'

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) return <Loading />

  return <>{children}</>
}
